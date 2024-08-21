const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-GXNVfUqw.js","assets/AboutView-CXlnaxoo.css","assets/EditSp-Bvd0XiJv.js","assets/EditSp-BTTFCQCu.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xr(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const ce={},En=[],Ve=()=>{},jh=()=>!1,Ii=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,eo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gh=Object.prototype.hasOwnProperty,K=(t,e)=>Gh.call(t,e),U=Array.isArray,Cn=t=>Is(t)==="[object Map]",Ti=t=>Is(t)==="[object Set]",tl=t=>Is(t)==="[object Date]",W=t=>typeof t=="function",ge=t=>typeof t=="string",at=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",ja=t=>(oe(t)||W(t))&&W(t.then)&&W(t.catch),Ga=Object.prototype.toString,Is=t=>Ga.call(t),qh=t=>Is(t).slice(8,-1),qa=t=>Is(t)==="[object Object]",to=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ri=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zh=/-(\w)/g,sn=Ri(t=>t.replace(zh,(e,n)=>n?n.toUpperCase():"")),Kh=/\B([A-Z])/g,un=Ri(t=>t.replace(Kh,"-$1").toLowerCase()),za=Ri(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qi=Ri(t=>t?`on${za(t)}`:""),Ht=(t,e)=>!Object.is(t,e),qs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ka=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},si=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nl;const Ya=()=>nl||(nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function no(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?Xh(s):no(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||oe(t))return t}const Yh=/;(?![^(]*\))/g,Qh=/:([^]+)/,Jh=/\/\*[^]*?\*\//g;function Xh(t){const e={};return t.replace(Jh,"").split(Yh).forEach(n=>{if(n){const s=n.split(Qh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function so(t){let e="";if(ge(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=so(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ef=Xr(Zh);function Qa(t){return!!t||t===""}function tf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ni(t[s],e[s]);return n}function Ni(t,e){if(t===e)return!0;let n=tl(t),s=tl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=at(t),s=at(e),n||s)return t===e;if(n=U(t),s=U(e),n||s)return n&&s?tf(t,e):!1;if(n=oe(t),s=oe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Ni(t[o],e[o]))return!1}}return String(t)===String(e)}function nf(t,e){return t.findIndex(n=>Ni(n,e))}const Ja=t=>!!(t&&t.__v_isRef===!0),mn=t=>ge(t)?t:t==null?"":U(t)||oe(t)&&(t.toString===Ga||!W(t.toString))?Ja(t)?mn(t.value):JSON.stringify(t,Xa,2):String(t),Xa=(t,e)=>Ja(e)?Xa(t,e.value):Cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ji(s,r)+" =>"]=i,n),{})}:Ti(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ji(n))}:at(e)?Ji(e):oe(e)&&!U(e)&&!qa(e)?String(e):e,Ji=(t,e="")=>{var n;return at(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class sf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function rf(t,e=je){e&&e.active&&e.effects.push(t)}function of(){return je}let tn;class io{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,rf(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Wt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(lf(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),$t()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ot,n=tn;try{return Ot=!0,tn=this,this._runnings++,sl(this),this.fn()}finally{il(this),this._runnings--,tn=n,Ot=e}}stop(){this.active&&(sl(this),il(this),this.onStop&&this.onStop(),this.active=!1)}}function lf(t){return t.value}function sl(t){t._trackId++,t._depsLength=0}function il(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Za(t.deps[e],t);t.deps.length=t._depsLength}}function Za(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ot=!0,yr=0;const ec=[];function Wt(){ec.push(Ot),Ot=!1}function $t(){const t=ec.pop();Ot=t===void 0?!0:t}function ro(){yr++}function oo(){for(yr--;!yr&&vr.length;)vr.shift()()}function tc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Za(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const vr=[];function nc(t,e,n){ro();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&vr.push(s.scheduler)))}oo()}const sc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Er=new WeakMap,nn=Symbol(""),Cr=Symbol("");function De(t,e,n){if(Ot&&tn){let s=Er.get(t);s||Er.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=sc(()=>s.delete(n))),tc(tn,i)}}function _t(t,e,n,s,i,r){const o=Er.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&U(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!at(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":U(t)?to(n)&&l.push(o.get("length")):(l.push(o.get(nn)),Cn(t)&&l.push(o.get(Cr)));break;case"delete":U(t)||(l.push(o.get(nn)),Cn(t)&&l.push(o.get(Cr)));break;case"set":Cn(t)&&l.push(o.get(nn));break}ro();for(const a of l)a&&nc(a,4);oo()}const af=Xr("__proto__,__v_isRef,__isVue"),ic=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(at)),rl=cf();function cf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)De(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wt(),ro();const s=Z(this)[e].apply(this,n);return oo(),$t(),s}}),t}function uf(t){at(t)||(t=String(t));const e=Z(this);return De(e,"has",t),e.hasOwnProperty(t)}class rc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?wf:cc:r?ac:lc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){if(o&&K(rl,n))return Reflect.get(rl,n,s);if(n==="hasOwnProperty")return uf}const l=Reflect.get(e,n,s);return(at(n)?ic.has(n):af(n))||(i||De(e,"get",n),r)?l:ke(l)?o&&to(n)?l:l.value:oe(l)?i?hc(l):Ai(l):l}}class oc extends rc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=rn(r);if(!Nn(s)&&!rn(s)&&(r=Z(r),s=Z(s)),!U(e)&&ke(r)&&!ke(s))return a?!1:(r.value=s,!0)}const o=U(e)&&to(n)?Number(n)<e.length:K(e,n),l=Reflect.set(e,n,s,i);return e===Z(i)&&(o?Ht(s,r)&&_t(e,"set",n,s):_t(e,"add",n,s)),l}deleteProperty(e,n){const s=K(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&_t(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!at(n)||!ic.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",U(e)?"length":nn),Reflect.ownKeys(e)}}class hf extends rc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ff=new oc,df=new hf,pf=new oc(!0);const lo=t=>t,xi=t=>Reflect.getPrototypeOf(t);function Ms(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(Ht(e,r)&&De(i,"get",e),De(i,"get",r));const{has:o}=xi(i),l=s?lo:n?uo:as;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ls(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(Ht(t,i)&&De(s,"has",t),De(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Fs(t,e=!1){return t=t.__v_raw,!e&&De(Z(t),"iterate",nn),Reflect.get(t,"size",t)}function ol(t,e=!1){!e&&!Nn(t)&&!rn(t)&&(t=Z(t));const n=Z(this);return xi(n).has.call(n,t)||(n.add(t),_t(n,"add",t,t)),this}function ll(t,e,n=!1){!n&&!Nn(e)&&!rn(e)&&(e=Z(e));const s=Z(this),{has:i,get:r}=xi(s);let o=i.call(s,t);o||(t=Z(t),o=i.call(s,t));const l=r.call(s,t);return s.set(t,e),o?Ht(e,l)&&_t(s,"set",t,e):_t(s,"add",t,e),this}function al(t){const e=Z(this),{has:n,get:s}=xi(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&_t(e,"delete",t,void 0),r}function cl(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&_t(t,"clear",void 0,void 0),n}function Hs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Z(o),a=e?lo:t?uo:as;return!t&&De(l,"iterate",nn),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Bs(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=Cn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?lo:e?uo:as;return!e&&De(r,"iterate",a?Cr:nn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Tt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _f(){const t={get(r){return Ms(this,r)},get size(){return Fs(this)},has:Ls,add:ol,set:ll,delete:al,clear:cl,forEach:Hs(!1,!1)},e={get(r){return Ms(this,r,!1,!0)},get size(){return Fs(this)},has:Ls,add(r){return ol.call(this,r,!0)},set(r,o){return ll.call(this,r,o,!0)},delete:al,clear:cl,forEach:Hs(!1,!0)},n={get(r){return Ms(this,r,!0)},get size(){return Fs(this,!0)},has(r){return Ls.call(this,r,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Hs(!0,!1)},s={get(r){return Ms(this,r,!0,!0)},get size(){return Fs(this,!0)},has(r){return Ls.call(this,r,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Bs(r,!1,!1),n[r]=Bs(r,!0,!1),e[r]=Bs(r,!1,!0),s[r]=Bs(r,!0,!0)}),[t,n,e,s]}const[gf,mf,yf,vf]=_f();function ao(t,e){const n=e?t?vf:yf:t?mf:gf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(K(n,i)&&i in s?n:s,i,r)}const Ef={get:ao(!1,!1)},Cf={get:ao(!1,!0)},bf={get:ao(!0,!1)};const lc=new WeakMap,ac=new WeakMap,cc=new WeakMap,wf=new WeakMap;function Sf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function If(t){return t.__v_skip||!Object.isExtensible(t)?0:Sf(qh(t))}function Ai(t){return rn(t)?t:co(t,!1,ff,Ef,lc)}function uc(t){return co(t,!1,pf,Cf,ac)}function hc(t){return co(t,!0,df,bf,cc)}function co(t,e,n,s,i){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=If(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Jn(t){return rn(t)?Jn(t.__v_raw):!!(t&&t.__v_isReactive)}function rn(t){return!!(t&&t.__v_isReadonly)}function Nn(t){return!!(t&&t.__v_isShallow)}function fc(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Tf(t){return Object.isExtensible(t)&&Ka(t,"__v_skip",!0),t}const as=t=>oe(t)?Ai(t):t,uo=t=>oe(t)?hc(t):t;class dc{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new io(()=>e(this._value),()=>zs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return(!e._cacheable||e.effect.dirty)&&Ht(e._value,e._value=e.effect.run())&&zs(e,4),pc(e),e.effect._dirtyLevel>=2&&zs(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rf(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=Ve):(s=t.get,i=t.set),new dc(s,i,r||!i,n)}function pc(t){var e;Ot&&tn&&(t=Z(t),tc(tn,(e=t.dep)!=null?e:t.dep=sc(()=>t.dep=void 0,t instanceof dc?t:void 0)))}function zs(t,e=4,n,s){t=Z(t);const i=t.dep;i&&nc(i,e)}function ke(t){return!!(t&&t.__v_isRef===!0)}function Nf(t){return _c(t,!1)}function xf(t){return _c(t,!0)}function _c(t,e){return ke(t)?t:new Af(t,e)}class Af{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:as(e)}get value(){return pc(this),this._value}set value(e){const n=this.__v_isShallow||Nn(e)||rn(e);e=n?e:Z(e),Ht(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:as(e),zs(this,4))}}function lt(t){return ke(t)?t.value:t}const Pf={get:(t,e,n)=>lt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function gc(t){return Jn(t)?t:new Proxy(t,Pf)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dt(t,e,n,s){try{return s?t(...s):t()}catch(i){Pi(i,e,n)}}function Qe(t,e,n,s){if(W(t)){const i=Dt(t,e,n,s);return i&&ja(i)&&i.catch(r=>{Pi(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Qe(t[r],e,n,s));return i}}function Pi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Wt(),Dt(a,null,10,[t,o,l]),$t();return}}Of(t,n,i,s)}function Of(t,e,n,s=!0){console.error(t)}let cs=!1,br=!1;const Se=[];let ot=0;const bn=[];let Nt=null,Jt=0;const mc=Promise.resolve();let ho=null;function fo(t){const e=ho||mc;return t?e.then(this?t.bind(this):t):e}function Df(t){let e=ot+1,n=Se.length;for(;e<n;){const s=e+n>>>1,i=Se[s],r=us(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function po(t){(!Se.length||!Se.includes(t,cs&&t.allowRecurse?ot+1:ot))&&(t.id==null?Se.push(t):Se.splice(Df(t.id),0,t),yc())}function yc(){!cs&&!br&&(br=!0,ho=mc.then(Ec))}function kf(t){const e=Se.indexOf(t);e>ot&&Se.splice(e,1)}function Mf(t){U(t)?bn.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?Jt+1:Jt))&&bn.push(t),yc()}function ul(t,e,n=cs?ot+1:0){for(;n<Se.length;n++){const s=Se[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Se.splice(n,1),n--,s()}}}function vc(t){if(bn.length){const e=[...new Set(bn)].sort((n,s)=>us(n)-us(s));if(bn.length=0,Nt){Nt.push(...e);return}for(Nt=e,Jt=0;Jt<Nt.length;Jt++){const n=Nt[Jt];n.active!==!1&&n()}Nt=null,Jt=0}}const us=t=>t.id==null?1/0:t.id,Lf=(t,e)=>{const n=us(t)-us(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ec(t){br=!1,cs=!0,Se.sort(Lf);try{for(ot=0;ot<Se.length;ot++){const e=Se[ot];e&&e.active!==!1&&Dt(e,e.i,e.i?15:14)}}finally{ot=0,Se.length=0,vc(),cs=!1,ho=null,(Se.length||bn.length)&&Ec()}}let We=null,Oi=null;function ii(t){const e=We;return We=t,Oi=t&&t.type.__scopeId||null,e}function Cc(t){Oi=t}function bc(){Oi=null}function Ks(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yl(-1);const r=ii(e);let o;try{o=t(...i)}finally{ii(r),s._d&&yl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ht(t,e){if(We===null)return t;const n=Fi(We),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=ce]=e[i];r&&(W(r)&&(r={mounted:r,updated:r}),r.deep&&Pt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function qt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Wt(),Qe(a,n,8,[t.el,l,t,e]),$t())}}function wc(t,e){t.shapeFlag&6&&t.component?wc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Sc(t,e){return W(t)?Ie({name:t.name},e,{setup:t}):t}const Ys=t=>!!t.type.__asyncLoader,Ic=t=>t.type.__isKeepAlive;function Ff(t,e){Tc(t,"a",e)}function Hf(t,e){Tc(t,"da",e)}function Tc(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Di(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ic(i.parent.vnode)&&Bf(s,e,n,i),i=i.parent}}function Bf(t,e,n,s){const i=Di(e,t,s,!0);Rc(()=>{eo(s[e],i)},n)}function Di(t,e,n=Re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Wt();const l=Ts(n),a=Qe(e,n,t,o);return l(),$t(),a});return s?i.unshift(r):i.push(r),r}}const Et=t=>(e,n=Re)=>{(!Li||t==="sp")&&Di(t,(...s)=>e(...s),n)},Uf=Et("bm"),Vf=Et("m"),Wf=Et("bu"),$f=Et("u"),jf=Et("bum"),Rc=Et("um"),Gf=Et("sp"),qf=Et("rtg"),zf=Et("rtc");function Kf(t,e=Re){Di("ec",t,e)}const Yf=Symbol.for("v-ndc");function Us(t,e,n,s){let i;const r=n;if(U(t)||ge(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(oe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r)}}else i=[];return i}const wr=t=>t?qc(t)?Fi(t):wr(t.parent):null,Xn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wr(t.parent),$root:t=>wr(t.root),$emit:t=>t.emit,$options:t=>_o(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,po(t.update)}),$nextTick:t=>t.n||(t.n=fo.bind(t.proxy)),$watch:t=>yd.bind(t)}),Xi=(t,e)=>t!==ce&&!t.__isScriptSetup&&K(t,e),Qf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xi(s,e))return o[e]=1,s[e];if(i!==ce&&K(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,r[e];if(n!==ce&&K(n,e))return o[e]=4,n[e];Sr&&(o[e]=0)}}const u=Xn[e];let h,f;if(u)return e==="$attrs"&&De(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ce&&K(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,K(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xi(i,e)?(i[e]=n,!0):s!==ce&&K(s,e)?(s[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&K(t,o)||Xi(e,o)||(l=r[0])&&K(l,o)||K(s,o)||K(Xn,o)||K(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hl(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sr=!0;function Jf(t){const e=_o(t),n=t.proxy,s=t.ctx;Sr=!1,e.beforeCreate&&fl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:v,activated:w,deactivated:D,beforeDestroy:H,beforeUnmount:M,destroyed:O,unmounted:Y,render:de,renderTracked:$,renderTriggered:he,errorCaptured:Be,serverPrefetch:jt,expose:Ze,inheritAttrs:St,components:Gt,directives:et,filters:Vn}=e;if(c&&Xf(c,s,null),o)for(const ne in o){const J=o[ne];W(J)&&(s[ne]=J.bind(n))}if(i){const ne=i.call(n,n);oe(ne)&&(t.data=Ai(ne))}if(Sr=!0,r)for(const ne in r){const J=r[ne],ut=W(J)?J.bind(n,n):W(J.get)?J.get.bind(n,n):Ve,It=!W(J)&&W(J.set)?J.set.bind(n):Ve,tt=qe({get:ut,set:It});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>tt.value,set:xe=>tt.value=xe})}if(l)for(const ne in l)Nc(l[ne],s,n,ne);if(a){const ne=W(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(J=>{Qs(J,ne[J])})}u&&fl(u,t,"c");function me(ne,J){U(J)?J.forEach(ut=>ne(ut.bind(n))):J&&ne(J.bind(n))}if(me(Uf,h),me(Vf,f),me(Wf,_),me($f,v),me(Ff,w),me(Hf,D),me(Kf,Be),me(zf,$),me(qf,he),me(jf,M),me(Rc,Y),me(Gf,jt),U(Ze))if(Ze.length){const ne=t.exposed||(t.exposed={});Ze.forEach(J=>{Object.defineProperty(ne,J,{get:()=>n[J],set:ut=>n[J]=ut})})}else t.exposed||(t.exposed={});de&&t.render===Ve&&(t.render=de),St!=null&&(t.inheritAttrs=St),Gt&&(t.components=Gt),et&&(t.directives=et)}function Xf(t,e,n=Ve){U(t)&&(t=Ir(t));for(const s in t){const i=t[s];let r;oe(i)?"default"in i?r=gt(i.from||s,i.default,!0):r=gt(i.from||s):r=gt(i),ke(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function fl(t,e,n){Qe(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nc(t,e,n,s){const i=s.includes(".")?Wc(n,s):()=>n[s];if(ge(t)){const r=e[t];W(r)&&Js(i,r)}else if(W(t))Js(i,t.bind(n));else if(oe(t))if(U(t))t.forEach(r=>Nc(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&Js(i,r,t)}}function _o(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ri(a,c,o,!0)),ri(a,e,o)),oe(e)&&r.set(e,a),a}function ri(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ri(t,r,n,!0),i&&i.forEach(o=>ri(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Zf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Zf={data:dl,props:pl,emits:pl,methods:Yn,computed:Yn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Yn,directives:Yn,watch:td,provide:dl,inject:ed};function dl(t,e){return e?t?function(){return Ie(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function ed(t,e){return Yn(Ir(t),Ir(e))}function Ir(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Yn(t,e){return t?Ie(Object.create(null),t,e):e}function pl(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Ie(Object.create(null),hl(t),hl(e??{})):e}function td(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=Te(t[s],e[s]);return n}function xc(){return{app:null,config:{isNativeTag:jh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nd=0;function sd(t,e){return function(s,i=null){W(s)||(s=Ie({},s)),i!=null&&!oe(i)&&(i=null);const r=xc(),o=new WeakSet;let l=!1;const a=r.app={_uid:nd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ud,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(a,...u)):W(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=be(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Fi(f.component)}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){const u=wn;wn=a;try{return c()}finally{wn=u}}};return a}}let wn=null;function Qs(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function gt(t,e,n=!1){const s=Re||We;if(s||wn){const i=wn?wn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}const Ac={},Pc=()=>Object.create(Ac),Oc=t=>Object.getPrototypeOf(t)===Ac;function id(t,e,n,s=!1){const i={},r=Pc();t.propsDefaults=Object.create(null),Dc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:uc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function rd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Z(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ki(t.emitsOptions,f))continue;const _=e[f];if(a)if(K(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const v=sn(f);i[v]=Tr(a,l,v,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Dc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!K(e,h)&&((u=un(h))===h||!K(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Tr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!K(e,h))&&(delete r[h],c=!0)}c&&_t(t.attrs,"set","")}function Dc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Qn(a))continue;const c=e[a];let u;i&&K(i,u=sn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:ki(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=Z(n),c=l||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Tr(i,a,h,c[h],t,!K(c,h))}}return o}function Tr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=K(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&W(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ts(i);s=c[n]=a.call(null,e),u()}}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===un(n))&&(s=!0))}return s}const od=new WeakMap;function kc(t,e,n=!1){const s=n?od:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!W(t)){const u=h=>{a=!0;const[f,_]=kc(h,e,!0);Ie(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return oe(t)&&s.set(t,En),En;if(U(r))for(let u=0;u<r.length;u++){const h=sn(r[u]);_l(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=sn(u);if(_l(h)){const f=r[u],_=o[h]=U(f)||W(f)?{type:f}:Ie({},f),v=_.type;let w=!1,D=!0;if(U(v))for(let H=0;H<v.length;++H){const M=v[H],O=W(M)&&M.name;if(O==="Boolean"){w=!0;break}else O==="String"&&(D=!1)}else w=W(v)&&v.name==="Boolean";_[0]=w,_[1]=D,(w||K(_,"default"))&&l.push(h)}}const c=[o,l];return oe(t)&&s.set(t,c),c}function _l(t){return t[0]!=="$"&&!Qn(t)}const Mc=t=>t[0]==="_"||t==="$stable",go=t=>U(t)?t.map(rt):[rt(t)],ld=(t,e,n)=>{if(e._n)return e;const s=Ks((...i)=>go(e(...i)),n);return s._c=!1,s},Lc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Mc(i))continue;const r=t[i];if(W(r))e[i]=ld(i,r,s);else if(r!=null){const o=go(r);e[i]=()=>o}}},Fc=(t,e)=>{const n=go(e);t.slots.default=()=>n},Hc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},ad=(t,e,n)=>{const s=t.slots=Pc();if(t.vnode.shapeFlag&32){const i=e._;i?(Hc(s,e,n),n&&Ka(s,"_",i,!0)):Lc(e,s)}else e&&Fc(t,e)},cd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Hc(i,e,n):(r=!e.$stable,Lc(e,i)),o=e}else e&&(Fc(t,e),o={default:1});if(r)for(const l in i)!Mc(l)&&o[l]==null&&delete i[l]};function Rr(t,e,n,s,i=!1){if(U(t)){t.forEach((f,_)=>Rr(f,e&&(U(e)?e[_]:e),n,s,i));return}if(Ys(s)&&!i)return;const r=s.shapeFlag&4?Fi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ge(c)?(u[c]=null,K(h,c)&&(h[c]=null)):ke(c)&&(c.value=null)),W(a))Dt(a,l,12,[o,u]);else{const f=ge(a),_=ke(a);if(f||_){const v=()=>{if(t.f){const w=f?K(h,a)?h[a]:u[a]:a.value;i?U(w)&&eo(w,r):U(w)?w.includes(r)||w.push(r):f?(u[a]=[r],K(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,K(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Ae(v,n)):v()}}}const ud=Symbol("_vte"),hd=t=>t.__isTeleport,Ae=Td;function fd(t){return dd(t)}function dd(t,e){const n=Ya();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Ve,insertStaticContent:v}=t,w=(d,p,g,E=null,m=null,b=null,R=void 0,I=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!$n(d,p)&&(E=y(d),xe(d,m,b,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:A,shapeFlag:F}=p;switch(C){case Mi:D(d,p,g,E);break;case on:H(d,p,g,E);break;case Xs:d==null&&M(p,g,E,R);break;case Fe:Gt(d,p,g,E,m,b,R,I,T);break;default:F&1?de(d,p,g,E,m,b,R,I,T):F&6?et(d,p,g,E,m,b,R,I,T):(F&64||F&128)&&C.process(d,p,g,E,m,b,R,I,T,k)}A!=null&&m&&Rr(A,d&&d.ref,b,p||d,!p)},D=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},H=(d,p,g,E)=>{d==null?s(p.el=a(p.children||""),g,E):p.el=d.el},M=(d,p,g,E)=>{[d.el,d.anchor]=v(d.children,p,g,E,d.el,d.anchor)},O=({el:d,anchor:p},g,E)=>{let m;for(;d&&d!==p;)m=f(d),s(d,g,E),d=m;s(p,g,E)},Y=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},de=(d,p,g,E,m,b,R,I,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null?$(p,g,E,m,b,R,I,T):jt(d,p,m,b,R,I,T)},$=(d,p,g,E,m,b,R,I)=>{let T,C;const{props:A,shapeFlag:F,transition:L,dirs:V}=d;if(T=d.el=o(d.type,b,A&&A.is,A),F&8?u(T,d.children):F&16&&Be(d.children,T,null,E,m,Zi(d,b),R,I),V&&qt(d,null,E,"created"),he(T,d,d.scopeId,R,E),A){for(const le in A)le!=="value"&&!Qn(le)&&r(T,le,null,A[le],b,E);"value"in A&&r(T,"value",null,A.value,b),(C=A.onVnodeBeforeMount)&&st(C,E,d)}V&&qt(d,null,E,"beforeMount");const G=pd(m,L);G&&L.beforeEnter(T),s(T,p,g),((C=A&&A.onVnodeMounted)||G||V)&&Ae(()=>{C&&st(C,E,d),G&&L.enter(T),V&&qt(d,null,E,"mounted")},m)},he=(d,p,g,E,m)=>{if(g&&_(d,g),E)for(let b=0;b<E.length;b++)_(d,E[b]);if(m){let b=m.subTree;if(p===b){const R=m.vnode;he(d,R,R.scopeId,R.slotScopeIds,m.parent)}}},Be=(d,p,g,E,m,b,R,I,T=0)=>{for(let C=T;C<d.length;C++){const A=d[C]=I?xt(d[C]):rt(d[C]);w(null,A,p,g,E,m,b,R,I)}},jt=(d,p,g,E,m,b,R)=>{const I=p.el=d.el;let{patchFlag:T,dynamicChildren:C,dirs:A}=p;T|=d.patchFlag&16;const F=d.props||ce,L=p.props||ce;let V;if(g&&zt(g,!1),(V=L.onVnodeBeforeUpdate)&&st(V,g,p,d),A&&qt(p,d,g,"beforeUpdate"),g&&zt(g,!0),(F.innerHTML&&L.innerHTML==null||F.textContent&&L.textContent==null)&&u(I,""),C?Ze(d.dynamicChildren,C,I,g,E,Zi(p,m),b):R||J(d,p,I,null,g,E,Zi(p,m),b,!1),T>0){if(T&16)St(I,F,L,g,m);else if(T&2&&F.class!==L.class&&r(I,"class",null,L.class,m),T&4&&r(I,"style",F.style,L.style,m),T&8){const G=p.dynamicProps;for(let le=0;le<G.length;le++){const X=G[le],ye=F[X],$e=L[X];($e!==ye||X==="value")&&r(I,X,ye,$e,m,g)}}T&1&&d.children!==p.children&&u(I,p.children)}else!R&&C==null&&St(I,F,L,g,m);((V=L.onVnodeUpdated)||A)&&Ae(()=>{V&&st(V,g,p,d),A&&qt(p,d,g,"updated")},E)},Ze=(d,p,g,E,m,b,R)=>{for(let I=0;I<p.length;I++){const T=d[I],C=p[I],A=T.el&&(T.type===Fe||!$n(T,C)||T.shapeFlag&70)?h(T.el):g;w(T,C,A,null,E,m,b,R,!0)}},St=(d,p,g,E,m)=>{if(p!==g){if(p!==ce)for(const b in p)!Qn(b)&&!(b in g)&&r(d,b,p[b],null,m,E);for(const b in g){if(Qn(b))continue;const R=g[b],I=p[b];R!==I&&b!=="value"&&r(d,b,I,R,m,E)}"value"in g&&r(d,"value",p.value,g.value,m)}},Gt=(d,p,g,E,m,b,R,I,T)=>{const C=p.el=d?d.el:l(""),A=p.anchor=d?d.anchor:l("");let{patchFlag:F,dynamicChildren:L,slotScopeIds:V}=p;V&&(I=I?I.concat(V):V),d==null?(s(C,g,E),s(A,g,E),Be(p.children||[],g,A,m,b,R,I,T)):F>0&&F&64&&L&&d.dynamicChildren?(Ze(d.dynamicChildren,L,g,m,b,R,I),(p.key!=null||m&&p===m.subTree)&&Bc(d,p,!0)):J(d,p,g,A,m,b,R,I,T)},et=(d,p,g,E,m,b,R,I,T)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?m.ctx.activate(p,g,E,R,T):Vn(p,g,E,m,b,R,T):fn(d,p,T)},Vn=(d,p,g,E,m,b,R)=>{const I=d.component=kd(d,E,m);if(Ic(d)&&(I.ctx.renderer=k),Md(I,!1,R),I.asyncDep){if(m&&m.registerDep(I,me,R),!d.el){const T=I.subTree=be(on);H(null,T,p,g)}}else me(I,d,p,g,m,b,R)},fn=(d,p,g)=>{const E=p.component=d.component;if(wd(d,p,g))if(E.asyncDep&&!E.asyncResolved){ne(E,p,g);return}else E.next=p,kf(E.update),E.effect.dirty=!0,E.update();else p.el=d.el,E.vnode=p},me=(d,p,g,E,m,b,R)=>{const I=()=>{if(d.isMounted){let{next:A,bu:F,u:L,parent:V,vnode:G}=d;{const _n=Uc(d);if(_n){A&&(A.el=G.el,ne(d,A,R)),_n.asyncDep.then(()=>{d.isUnmounted||I()});return}}let le=A,X;zt(d,!1),A?(A.el=G.el,ne(d,A,R)):A=G,F&&qs(F),(X=A.props&&A.props.onVnodeBeforeUpdate)&&st(X,V,A,G),zt(d,!0);const ye=er(d),$e=d.subTree;d.subTree=ye,w($e,ye,h($e.el),y($e),d,m,b),A.el=ye.el,le===null&&Sd(d,ye.el),L&&Ae(L,m),(X=A.props&&A.props.onVnodeUpdated)&&Ae(()=>st(X,V,A,G),m)}else{let A;const{el:F,props:L}=p,{bm:V,m:G,parent:le}=d,X=Ys(p);if(zt(d,!1),V&&qs(V),!X&&(A=L&&L.onVnodeBeforeMount)&&st(A,le,p),zt(d,!0),F&&ue){const ye=()=>{d.subTree=er(d),ue(F,d.subTree,d,m,null)};X?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=er(d);w(null,ye,g,E,d,m,b),p.el=ye.el}if(G&&Ae(G,m),!X&&(A=L&&L.onVnodeMounted)){const ye=p;Ae(()=>st(A,le,ye),m)}(p.shapeFlag&256||le&&Ys(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Ae(d.a,m),d.isMounted=!0,p=g=E=null}},T=d.effect=new io(I,Ve,()=>po(C),d.scope),C=d.update=()=>{T.dirty&&T.run()};C.i=d,C.id=d.uid,zt(d,!0),C()},ne=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,rd(d,p.props,E,g),cd(d,p.children,g),Wt(),ul(d),$t()},J=(d,p,g,E,m,b,R,I,T=!1)=>{const C=d&&d.children,A=d?d.shapeFlag:0,F=p.children,{patchFlag:L,shapeFlag:V}=p;if(L>0){if(L&128){It(C,F,g,E,m,b,R,I,T);return}else if(L&256){ut(C,F,g,E,m,b,R,I,T);return}}V&8?(A&16&&Ue(C,m,b),F!==C&&u(g,F)):A&16?V&16?It(C,F,g,E,m,b,R,I,T):Ue(C,m,b,!0):(A&8&&u(g,""),V&16&&Be(F,g,E,m,b,R,I,T))},ut=(d,p,g,E,m,b,R,I,T)=>{d=d||En,p=p||En;const C=d.length,A=p.length,F=Math.min(C,A);let L;for(L=0;L<F;L++){const V=p[L]=T?xt(p[L]):rt(p[L]);w(d[L],V,g,null,m,b,R,I,T)}C>A?Ue(d,m,b,!0,!1,F):Be(p,g,E,m,b,R,I,T,F)},It=(d,p,g,E,m,b,R,I,T)=>{let C=0;const A=p.length;let F=d.length-1,L=A-1;for(;C<=F&&C<=L;){const V=d[C],G=p[C]=T?xt(p[C]):rt(p[C]);if($n(V,G))w(V,G,g,null,m,b,R,I,T);else break;C++}for(;C<=F&&C<=L;){const V=d[F],G=p[L]=T?xt(p[L]):rt(p[L]);if($n(V,G))w(V,G,g,null,m,b,R,I,T);else break;F--,L--}if(C>F){if(C<=L){const V=L+1,G=V<A?p[V].el:E;for(;C<=L;)w(null,p[C]=T?xt(p[C]):rt(p[C]),g,G,m,b,R,I,T),C++}}else if(C>L)for(;C<=F;)xe(d[C],m,b,!0),C++;else{const V=C,G=C,le=new Map;for(C=G;C<=L;C++){const Le=p[C]=T?xt(p[C]):rt(p[C]);Le.key!=null&&le.set(Le.key,C)}let X,ye=0;const $e=L-G+1;let _n=!1,Xo=0;const Wn=new Array($e);for(C=0;C<$e;C++)Wn[C]=0;for(C=V;C<=F;C++){const Le=d[C];if(ye>=$e){xe(Le,m,b,!0);continue}let nt;if(Le.key!=null)nt=le.get(Le.key);else for(X=G;X<=L;X++)if(Wn[X-G]===0&&$n(Le,p[X])){nt=X;break}nt===void 0?xe(Le,m,b,!0):(Wn[nt-G]=C+1,nt>=Xo?Xo=nt:_n=!0,w(Le,p[nt],g,null,m,b,R,I,T),ye++)}const Zo=_n?_d(Wn):En;for(X=Zo.length-1,C=$e-1;C>=0;C--){const Le=G+C,nt=p[Le],el=Le+1<A?p[Le+1].el:E;Wn[C]===0?w(null,nt,g,el,m,b,R,I,T):_n&&(X<0||C!==Zo[X]?tt(nt,g,el,2):X--)}}},tt=(d,p,g,E,m=null)=>{const{el:b,type:R,transition:I,children:T,shapeFlag:C}=d;if(C&6){tt(d.component.subTree,p,g,E);return}if(C&128){d.suspense.move(p,g,E);return}if(C&64){R.move(d,p,g,k);return}if(R===Fe){s(b,p,g);for(let F=0;F<T.length;F++)tt(T[F],p,g,E);s(d.anchor,p,g);return}if(R===Xs){O(d,p,g);return}if(E!==2&&C&1&&I)if(E===0)I.beforeEnter(b),s(b,p,g),Ae(()=>I.enter(b),m);else{const{leave:F,delayLeave:L,afterLeave:V}=I,G=()=>s(b,p,g),le=()=>{F(b,()=>{G(),V&&V()})};L?L(b,G,le):le()}else s(b,p,g)},xe=(d,p,g,E=!1,m=!1)=>{const{type:b,props:R,ref:I,children:T,dynamicChildren:C,shapeFlag:A,patchFlag:F,dirs:L,cacheIndex:V}=d;if(F===-2&&(m=!1),I!=null&&Rr(I,null,g,d,!0),V!=null&&(p.renderCache[V]=void 0),A&256){p.ctx.deactivate(d);return}const G=A&1&&L,le=!Ys(d);let X;if(le&&(X=R&&R.onVnodeBeforeUnmount)&&st(X,p,d),A&6)ks(d.component,g,E);else{if(A&128){d.suspense.unmount(g,E);return}G&&qt(d,null,p,"beforeUnmount"),A&64?d.type.remove(d,p,g,k,E):C&&!C.hasOnce&&(b!==Fe||F>0&&F&64)?Ue(C,p,g,!1,!0):(b===Fe&&F&384||!m&&A&16)&&Ue(T,p,g),E&&dn(d)}(le&&(X=R&&R.onVnodeUnmounted)||G)&&Ae(()=>{X&&st(X,p,d),G&&qt(d,null,p,"unmounted")},g)},dn=d=>{const{type:p,el:g,anchor:E,transition:m}=d;if(p===Fe){pn(g,E);return}if(p===Xs){Y(d);return}const b=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:R,delayLeave:I}=m,T=()=>R(g,b);I?I(d.el,b,T):T()}else b()},pn=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},ks=(d,p,g)=>{const{bum:E,scope:m,update:b,subTree:R,um:I,m:T,a:C}=d;gl(T),gl(C),E&&qs(E),m.stop(),b&&(b.active=!1,xe(R,d,p,g)),I&&Ae(I,p),Ae(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ue=(d,p,g,E=!1,m=!1,b=0)=>{for(let R=b;R<d.length;R++)xe(d[R],p,g,E,m)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=f(d.anchor||d.el),g=p&&p[ud];return g?f(g):p};let x=!1;const N=(d,p,g)=>{d==null?p._vnode&&xe(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,g),p._vnode=d,x||(x=!0,ul(),vc(),x=!1)},k={p:w,um:xe,m:tt,r:dn,mt:Vn,mc:Be,pc:J,pbc:Ze,n:y,o:t};let ee,ue;return{render:N,hydrate:ee,createApp:sd(N,ee)}}function Zi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bc(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=xt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Bc(o,l)),l.type===Mi&&(l.el=o.el)}}function _d(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Uc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Uc(e)}function gl(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const gd=Symbol.for("v-scx"),md=()=>gt(gd),Vs={};function Js(t,e,n){return Vc(t,e,n)}function Vc(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=ce){if(e&&r){const $=e;e=(...he)=>{$(...he),de()}}const a=Re,c=$=>s===!0?$:Pt($,s===!1?1:void 0);let u,h=!1,f=!1;if(ke(t)?(u=()=>t.value,h=Nn(t)):Jn(t)?(u=()=>c(t),h=!0):U(t)?(f=!0,h=t.some($=>Jn($)||Nn($)),u=()=>t.map($=>{if(ke($))return $.value;if(Jn($))return c($);if(W($))return Dt($,a,2)})):W(t)?e?u=()=>Dt(t,a,2):u=()=>(_&&_(),Qe(t,a,3,[v])):u=Ve,e&&s){const $=u;u=()=>Pt($())}let _,v=$=>{_=O.onStop=()=>{Dt($,a,4),_=O.onStop=void 0}},w;if(Li)if(v=Ve,e?n&&Qe(e,a,3,[u(),f?[]:void 0,v]):u(),i==="sync"){const $=md();w=$.__watcherHandles||($.__watcherHandles=[])}else return Ve;let D=f?new Array(t.length).fill(Vs):Vs;const H=()=>{if(!(!O.active||!O.dirty))if(e){const $=O.run();(s||h||(f?$.some((he,Be)=>Ht(he,D[Be])):Ht($,D)))&&(_&&_(),Qe(e,a,3,[$,D===Vs?void 0:f&&D[0]===Vs?[]:D,v]),D=$)}else O.run()};H.allowRecurse=!!e;let M;i==="sync"?M=H:i==="post"?M=()=>Ae(H,a&&a.suspense):(H.pre=!0,a&&(H.id=a.uid),M=()=>po(H));const O=new io(u,Ve,M),Y=of(),de=()=>{O.stop(),Y&&eo(Y.effects,O)};return e?n?H():D=O.run():i==="post"?Ae(O.run.bind(O),a&&a.suspense):O.run(),w&&w.push(de),de}function yd(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?Wc(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Ts(this),l=Vc(i,r.bind(s),n);return o(),l}function Wc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Pt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ke(t))Pt(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)Pt(t[s],e,n);else if(Ti(t)||Cn(t))t.forEach(s=>{Pt(s,e,n)});else if(qa(t)){for(const s in t)Pt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Pt(t[s],e,n)}return t}const vd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${sn(e)}Modifiers`]||t[`${un(e)}Modifiers`];function Ed(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&vd(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ge(u)?u.trim():u)),o.number&&(i=n.map(si)));let l,a=s[l=Qi(e)]||s[l=Qi(sn(e))];!a&&r&&(a=s[l=Qi(un(e))]),a&&Qe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Qe(c,t,6,i)}}function $c(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const a=c=>{const u=$c(c,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(oe(t)&&s.set(t,null),null):(U(r)?r.forEach(a=>o[a]=null):Ie(o,r),oe(t)&&s.set(t,o),o)}function ki(t,e){return!t||!Ii(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,un(e))||K(t,e))}function er(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:f,setupState:_,ctx:v,inheritAttrs:w}=t,D=ii(t);let H,M;try{if(n.shapeFlag&4){const Y=i||s,de=Y;H=rt(c.call(de,Y,u,h,_,f,v)),M=l}else{const Y=e;H=rt(Y.length>1?Y(h,{attrs:l,slots:o,emit:a}):Y(h,null)),M=e.props?l:Cd(l)}}catch(Y){Zn.length=0,Pi(Y,t,1),H=be(on)}let O=H;if(M&&w!==!1){const Y=Object.keys(M),{shapeFlag:de}=O;Y.length&&de&7&&(r&&Y.some(Zr)&&(M=bd(M,r)),O=xn(O,M,!1,!0))}return n.dirs&&(O=xn(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),H=O,ii(D),H}const Cd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ii(n))&&((e||(e={}))[n]=t[n]);return e},bd=(t,e)=>{const n={};for(const s in t)(!Zr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function wd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ml(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ki(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ml(s,o,c):!0:!!o;return!1}function ml(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ki(n,r))return!0}return!1}function Sd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Id=t=>t.__isSuspense;function Td(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Mf(t)}const Fe=Symbol.for("v-fgt"),Mi=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),Xs=Symbol.for("v-stc"),Zn=[];let He=null;function Ge(t=!1){Zn.push(He=t?null:[])}function Rd(){Zn.pop(),He=Zn[Zn.length-1]||null}let hs=1;function yl(t){hs+=t,t<0&&He&&(He.hasOnce=!0)}function jc(t){return t.dynamicChildren=hs>0?He||En:null,Rd(),hs>0&&He&&He.push(t),t}function it(t,e,n,s,i,r){return jc(P(t,e,n,s,i,r,!0))}function Nd(t,e,n,s,i){return jc(be(t,e,n,s,i,!0))}function Nr(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const Gc=({key:t})=>t??null,Zs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||ke(t)||W(t)?{i:We,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,s=0,i=null,r=t===Fe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gc(e),ref:e&&Zs(e),scopeId:Oi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return l?(mo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ge(n)?8:16),hs>0&&!o&&He&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&He.push(a),a}const be=xd;function xd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Yf)&&(t=on),Nr(t)){const l=xn(t,e,!0);return n&&mo(l,n),hs>0&&!r&&He&&(l.shapeFlag&6?He[He.indexOf(t)]=l:He.push(l)),l.patchFlag=-2,l}if(Bd(t)&&(t=t.__vccOpts),e){e=Ad(e);let{class:l,style:a}=e;l&&!ge(l)&&(e.class=so(l)),oe(a)&&(fc(a)&&!U(a)&&(a=Ie({},a)),e.style=no(a))}const o=ge(t)?1:Id(t)?128:hd(t)?64:oe(t)?4:W(t)?2:0;return P(t,e,n,s,i,o,r,!0)}function Ad(t){return t?fc(t)||Oc(t)?Ie({},t):t:null}function xn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Pd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Gc(c),ref:e&&e.ref?n&&r?U(r)?r.concat(Zs(e)):[r,Zs(e)]:Zs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&wc(u,a.clone(u)),u}function es(t=" ",e=0){return be(Mi,null,t,e)}function aC(t,e){const n=be(Xs,null,t);return n.staticCount=e,n}function cC(t="",e=!1){return e?(Ge(),Nd(on,null,t)):be(on,null,t)}function rt(t){return t==null||typeof t=="boolean"?be(on):U(t)?be(Fe,null,t.slice()):typeof t=="object"?xt(t):be(Mi,null,String(t))}function xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xn(t)}function mo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),mo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Oc(e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[es(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=so([e.class,s.class]));else if(i==="style")e.style=no([e.style,s.style]);else if(Ii(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function st(t,e,n,s=null){Qe(t,e,7,[n,s])}const Od=xc();let Dd=0;function kd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Od,r={uid:Dd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new sf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kc(s,i),emitsOptions:$c(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ed.bind(null,r),t.ce&&t.ce(r),r}let Re=null,oi,xr;{const t=Ya(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};oi=e("__VUE_INSTANCE_SETTERS__",n=>Re=n),xr=e("__VUE_SSR_SETTERS__",n=>Li=n)}const Ts=t=>{const e=Re;return oi(t),t.scope.on(),()=>{t.scope.off(),oi(e)}},vl=()=>{Re&&Re.scope.off(),oi(null)};function qc(t){return t.vnode.shapeFlag&4}let Li=!1;function Md(t,e=!1,n=!1){e&&xr(e);const{props:s,children:i}=t.vnode,r=qc(t);id(t,s,r,e),ad(t,i,n);const o=r?Ld(t,e):void 0;return e&&xr(!1),o}function Ld(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qf);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Hd(t):null,r=Ts(t);Wt();const o=Dt(s,t,0,[t.props,i]);if($t(),r(),ja(o)){if(o.then(vl,vl),e)return o.then(l=>{El(t,l,e)}).catch(l=>{Pi(l,t,0)});t.asyncDep=o}else El(t,o,e)}else zc(t,e)}function El(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=gc(e)),zc(t,n)}let Cl;function zc(t,e,n){const s=t.type;if(!t.render){if(!e&&Cl&&!s.render){const i=s.template||_o(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ie(Ie({isCustomElement:r,delimiters:l},o),a);s.render=Cl(i,c)}}t.render=s.render||Ve}{const i=Ts(t);Wt();try{Jf(t)}finally{$t(),i()}}}const Fd={get(t,e){return De(t,"get",""),t[e]}};function Hd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Fd),slots:t.slots,emit:t.emit,expose:e}}function Fi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gc(Tf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xn)return Xn[n](t)},has(e,n){return n in e||n in Xn}})):t.proxy}function Bd(t){return W(t)&&"__vccOpts"in t}const qe=(t,e)=>Rf(t,e,Li);function Kc(t,e,n){const s=arguments.length;return s===2?oe(e)&&!U(e)?Nr(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Nr(n)&&(n=[n]),be(t,e,n))}const Ud="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Vd="http://www.w3.org/2000/svg",Wd="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,bl=dt&&dt.createElement("template"),$d={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?dt.createElementNS(Vd,t):e==="mathml"?dt.createElementNS(Wd,t):n?dt.createElement(t,{is:n}):dt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>dt.createTextNode(t),createComment:t=>dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{bl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=bl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},jd=Symbol("_vtc");function Gd(t,e,n){const s=t[jd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wl=Symbol("_vod"),qd=Symbol("_vsh"),zd=Symbol(""),Kd=/(^|;)\s*display\s*:/;function Yd(t,e,n){const s=t.style,i=ge(n);let r=!1;if(n&&!i){if(e)if(ge(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ei(s,l,"")}else for(const o in e)n[o]==null&&ei(s,o,"");for(const o in n)o==="display"&&(r=!0),ei(s,o,n[o])}else if(i){if(e!==n){const o=s[zd];o&&(n+=";"+o),s.cssText=n,r=Kd.test(n)}}else e&&t.removeAttribute("style");wl in t&&(t[wl]=r?s.display:"",t[qd]&&(s.display="none"))}const Sl=/\s*!important$/;function ei(t,e,n){if(U(n))n.forEach(s=>ei(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Qd(t,e);Sl.test(n)?t.setProperty(un(s),n.replace(Sl,""),"important"):t[s]=n}}const Il=["Webkit","Moz","ms"],tr={};function Qd(t,e){const n=tr[e];if(n)return n;let s=sn(e);if(s!=="filter"&&s in t)return tr[e]=s;s=za(s);for(let i=0;i<Il.length;i++){const r=Il[i]+s;if(r in t)return tr[e]=r}return e}const Tl="http://www.w3.org/1999/xlink";function Rl(t,e,n,s,i,r=ef(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tl,e.slice(6,e.length)):t.setAttributeNS(Tl,e,n):n==null||r&&!Qa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":at(n)?String(n):n)}function Jd(t,e,n,s){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Qa(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(e)}function Xt(t,e,n,s){t.addEventListener(e,n,s)}function Xd(t,e,n,s){t.removeEventListener(e,n,s)}const Nl=Symbol("_vei");function Zd(t,e,n,s,i=null){const r=t[Nl]||(t[Nl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=ep(e);if(s){const c=r[e]=sp(s,i);Xt(t,l,c,a)}else o&&(Xd(t,l,o,a),r[e]=void 0)}}const xl=/(?:Once|Passive|Capture)$/;function ep(t){let e;if(xl.test(t)){e={};let s;for(;s=t.match(xl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):un(t.slice(2)),e]}let nr=0;const tp=Promise.resolve(),np=()=>nr||(tp.then(()=>nr=0),nr=Date.now());function sp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(ip(s,n.value),e,5,[s])};return n.value=t,n.attached=np(),n}function ip(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rp=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Gd(t,s,o):e==="style"?Yd(t,n,s):Ii(e)?Zr(e)||Zd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):op(t,e,s,o))?(Jd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rl(t,e,s,o,r,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rl(t,e,s,o))};function op(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Al(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Al(e)&&ge(n)?!1:e in t}const li=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>qs(e,n):e};function lp(t){t.target.composing=!0}function Pl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Sn=Symbol("_assign"),Kt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Sn]=li(i);const r=s||i.props&&i.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=si(l)),t[Sn](l)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",lp),Xt(t,"compositionend",Pl),Xt(t,"change",Pl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Sn]=li(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?si(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Ol={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Ti(e);Xt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?si(ai(o)):ai(o));t[Sn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,fo(()=>{t._assigning=!1})}),t[Sn]=li(s)},mounted(t,{value:e,modifiers:{number:n}}){Dl(t,e)},beforeUpdate(t,e,n){t[Sn]=li(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Dl(t,e)}};function Dl(t,e,n){const s=t.multiple,i=U(e);if(!(s&&!i&&!Ti(e))){for(let r=0,o=t.options.length;r<o;r++){const l=t.options[r],a=ai(l);if(s)if(i){const c=typeof a;c==="string"||c==="number"?l.selected=e.some(u=>String(u)===String(a)):l.selected=nf(e,a)>-1}else l.selected=e.has(a);else if(Ni(ai(l),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ai(t){return"_value"in t?t._value:t.value}const ap=Ie({patchProp:rp},$d);let kl;function cp(){return kl||(kl=fd(ap))}const up=(...t)=>{const e=cp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=fp(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,hp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function hp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fp(t){return ge(t)?document.querySelector(t):t}const dp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const yn=typeof document<"u";function pp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function sr(t,e){const n={};for(const s in e){const i=e[s];n[s]=Xe(i)?i.map(t):t(i)}return n}const ts=()=>{},Xe=Array.isArray,Yc=/#/g,_p=/&/g,gp=/\//g,mp=/=/g,yp=/\?/g,Qc=/\+/g,vp=/%5B/g,Ep=/%5D/g,Jc=/%5E/g,Cp=/%60/g,Xc=/%7B/g,bp=/%7C/g,Zc=/%7D/g,wp=/%20/g;function yo(t){return encodeURI(""+t).replace(bp,"|").replace(vp,"[").replace(Ep,"]")}function Sp(t){return yo(t).replace(Xc,"{").replace(Zc,"}").replace(Jc,"^")}function Ar(t){return yo(t).replace(Qc,"%2B").replace(wp,"+").replace(Yc,"%23").replace(_p,"%26").replace(Cp,"`").replace(Xc,"{").replace(Zc,"}").replace(Jc,"^")}function Ip(t){return Ar(t).replace(mp,"%3D")}function Tp(t){return yo(t).replace(Yc,"%23").replace(yp,"%3F")}function Rp(t){return t==null?"":Tp(t).replace(gp,"%2F")}function fs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Np=/\/$/,xp=t=>t.replace(Np,"");function ir(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Dp(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:fs(o)}}function Ap(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ml(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Pp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&An(e.matched[s],n.matched[i])&&eu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function An(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Op(t[n],e[n]))return!1;return!0}function Op(t,e){return Xe(t)?Ll(t,e):Xe(e)?Ll(e,t):t===e}function Ll(t,e){return Xe(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Dp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ds;(function(t){t.pop="pop",t.push="push"})(ds||(ds={}));var ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ns||(ns={}));function kp(t){if(!t)if(yn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xp(t)}const Mp=/^[^#]+#/;function Lp(t,e){return t.replace(Mp,"#")+e}function Fp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Hi=()=>({left:window.scrollX,top:window.scrollY});function Hp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Fp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Fl(t,e){return(history.state?history.state.position-e:-1)+t}const Pr=new Map;function Bp(t,e){Pr.set(t,e)}function Up(t){const e=Pr.get(t);return Pr.delete(t),e}let Vp=()=>location.protocol+"//"+location.host;function tu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),Ml(a,"")}return Ml(n,t)+s+i}function Wp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=tu(t,location),v=n.value,w=e.value;let D=0;if(f){if(n.value=_,e.value=f,o&&o===v){o=null;return}D=w?f.position-w.position:0}else s(_);i.forEach(H=>{H(n.value,v,{delta:D,type:ds.pop,direction:D?D>0?ns.forward:ns.back:ns.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const v=i.indexOf(f);v>-1&&i.splice(v,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(te({},f.state,{scroll:Hi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function Hl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Hi():null}}function $p(t){const{history:e,location:n}=window,s={value:tu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Vp()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=te({},e.state,Hl(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=te({},i.value,e.state,{forward:a,scroll:Hi()});r(u.current,u,!0);const h=te({},Hl(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function jp(t){t=kp(t);const e=$p(t),n=Wp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:Lp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Gp(t){return typeof t=="string"||t&&typeof t=="object"}function nu(t){return typeof t=="string"||typeof t=="symbol"}const su=Symbol("");var Bl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bl||(Bl={}));function Pn(t,e){return te(new Error,{type:t,[su]:!0},e)}function ft(t,e){return t instanceof Error&&su in t&&(e==null||!!(t.type&e))}const Ul="[^/]+?",qp={sensitive:!1,strict:!1,start:!0,end:!0},zp=/[.+*?^${}()[\]/\\]/g;function Kp(t,e){const n=te({},qp,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(zp,"\\$&"),_+=40;else if(f.type===1){const{value:v,repeatable:w,optional:D,regexp:H}=f;r.push({name:v,repeatable:w,optional:D});const M=H||Ul;if(M!==Ul){_+=10;try{new RegExp(`(${M})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+Y.message)}}let O=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(O=D&&c.length<2?`(?:/${O})`:"/"+O),D&&(O+="?"),i+=O,_+=20,D&&(_+=-8),w&&(_+=-20),M===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",v=r[f-1];h[v.name]=_&&v.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:v,repeatable:w,optional:D}=_,H=v in c?c[v]:"";if(Xe(H)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Xe(H)?H.join("/"):H;if(!M)if(D)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function Yp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function iu(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Yp(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Vl(s))return 1;if(Vl(i))return-1}return i.length-s.length}function Vl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Qp={type:0,value:""},Jp=/[a-zA-Z0-9_]/;function Xp(t){if(!t)return[[]];if(t==="/")return[[Qp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:Jp.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Zp(t,e,n){const s=Kp(Xp(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function e_(t,e){const n=[],s=new Map;e=jl({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,f,_){const v=!_,w=t_(h);w.aliasOf=_&&_.record;const D=jl(e,h),H=[w];if("alias"in h){const Y=typeof h.alias=="string"?[h.alias]:h.alias;for(const de of Y)H.push(te({},w,{components:_?_.record.components:w.components,path:de,aliasOf:_?_.record:w}))}let M,O;for(const Y of H){const{path:de}=Y;if(f&&de[0]!=="/"){const $=f.record.path,he=$[$.length-1]==="/"?"":"/";Y.path=f.record.path+(de&&he+de)}if(M=Zp(Y,f,D),_?_.alias.push(M):(O=O||M,O!==M&&O.alias.push(M),v&&h.name&&!$l(M)&&o(h.name)),ru(M)&&a(M),w.children){const $=w.children;for(let he=0;he<$.length;he++)r($[he],M,_&&_.children[he])}_=_||M}return O?()=>{o(O)}:ts}function o(h){if(nu(h)){const f=s.get(h);f&&(s.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function l(){return n}function a(h){const f=i_(h,n);n.splice(f,0,h),h.record.name&&!$l(h)&&s.set(h.record.name,h)}function c(h,f){let _,v={},w,D;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw Pn(1,{location:h});D=_.record.name,v=te(Wl(f.params,_.keys.filter(O=>!O.optional).concat(_.parent?_.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&Wl(h.params,_.keys.map(O=>O.name))),w=_.stringify(v)}else if(h.path!=null)w=h.path,_=n.find(O=>O.re.test(w)),_&&(v=_.parse(w),D=_.record.name);else{if(_=f.name?s.get(f.name):n.find(O=>O.re.test(f.path)),!_)throw Pn(1,{location:h,currentLocation:f});D=_.record.name,v=te({},f.params,h.params),w=_.stringify(v)}const H=[];let M=_;for(;M;)H.unshift(M.record),M=M.parent;return{name:D,path:w,params:v,matched:H,meta:s_(H)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:i}}function Wl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function t_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:n_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function n_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function $l(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function s_(t){return t.reduce((e,n)=>te(e,n.meta),{})}function jl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function i_(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;iu(t,e[r])<0?s=r:n=r+1}const i=r_(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function r_(t){let e=t;for(;e=e.parent;)if(ru(e)&&iu(t,e)===0)return e}function ru({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function o_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Qc," "),o=r.indexOf("="),l=fs(o<0?r:r.slice(0,o)),a=o<0?null:fs(r.slice(o+1));if(l in e){let c=e[l];Xe(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Gl(t){let e="";for(let n in t){const s=t[n];if(n=Ip(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(s)?s.map(r=>r&&Ar(r)):[s&&Ar(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function l_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Xe(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const a_=Symbol(""),ql=Symbol(""),vo=Symbol(""),ou=Symbol(""),Or=Symbol("");function jn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function At(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const c=f=>{f===!1?a(Pn(4,{from:n,to:e})):f instanceof Error?a(f):Gp(f)?a(Pn(2,{from:e,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),l())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function rr(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let a=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(c_(a)){const u=(a.__vccOpts||a)[e];u&&r.push(At(u,n,s,o,l,i))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const h=pp(u)?u.default:u;o.components[l]=h;const _=(h.__vccOpts||h)[e];return _&&At(_,n,s,o,l,i)()}))}}return r}function c_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zl(t){const e=gt(vo),n=gt(ou),s=qe(()=>{const a=lt(t.to);return e.resolve(a)}),i=qe(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(An.bind(null,u));if(f>-1)return f;const _=Kl(a[c-2]);return c>1&&Kl(u)===_&&h[h.length-1].path!==_?h.findIndex(An.bind(null,a[c-2])):f}),r=qe(()=>i.value>-1&&f_(n.params,s.value.params)),o=qe(()=>i.value>-1&&i.value===n.matched.length-1&&eu(n.params,s.value.params));function l(a={}){return h_(a)?e[lt(t.replace)?"replace":"push"](lt(t.to)).catch(ts):Promise.resolve()}return{route:s,href:qe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const u_=Sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zl,setup(t,{slots:e}){const n=Ai(zl(t)),{options:s}=gt(vo),i=qe(()=>({[Yl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Kc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ti=u_;function h_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function f_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Xe(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Kl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yl=(t,e,n)=>t??e??n,d_=Sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=gt(Or),i=qe(()=>t.route||s.value),r=gt(ql,0),o=qe(()=>{let c=lt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=qe(()=>i.value.matched[o.value]);Qs(ql,qe(()=>o.value+1)),Qs(a_,l),Qs(Or,i);const a=Nf();return Js(()=>[a.value,l.value,t.name],([c,u,h],[f,_,v])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!An(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Ql(n.default,{Component:f,route:c});const _=h.props[u],v=_?_===!0?c.params:typeof _=="function"?_(c):_:null,D=Kc(f,te({},v,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Ql(n.default,{Component:D,route:c})||D}}});function Ql(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lu=d_;function p_(t){const e=e_(t.routes,t),n=t.parseQuery||o_,s=t.stringifyQuery||Gl,i=t.history,r=jn(),o=jn(),l=jn(),a=xf(Rt);let c=Rt;yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sr.bind(null,y=>""+y),h=sr.bind(null,Rp),f=sr.bind(null,fs);function _(y,x){let N,k;return nu(y)?(N=e.getRecordMatcher(y),k=x):k=y,e.addRoute(k,N)}function v(y){const x=e.getRecordMatcher(y);x&&e.removeRoute(x)}function w(){return e.getRoutes().map(y=>y.record)}function D(y){return!!e.getRecordMatcher(y)}function H(y,x){if(x=te({},x||a.value),typeof y=="string"){const p=ir(n,y,x.path),g=e.resolve({path:p.path},x),E=i.createHref(p.fullPath);return te(p,g,{params:f(g.params),hash:fs(p.hash),redirectedFrom:void 0,href:E})}let N;if(y.path!=null)N=te({},y,{path:ir(n,y.path,x.path).path});else{const p=te({},y.params);for(const g in p)p[g]==null&&delete p[g];N=te({},y,{params:h(p)}),x.params=h(x.params)}const k=e.resolve(N,x),ee=y.hash||"";k.params=u(f(k.params));const ue=Ap(s,te({},y,{hash:Sp(ee),path:k.path})),d=i.createHref(ue);return te({fullPath:ue,hash:ee,query:s===Gl?l_(y.query):y.query||{}},k,{redirectedFrom:void 0,href:d})}function M(y){return typeof y=="string"?ir(n,y,a.value.path):te({},y)}function O(y,x){if(c!==y)return Pn(8,{from:x,to:y})}function Y(y){return he(y)}function de(y){return Y(te(M(y),{replace:!0}))}function $(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:N}=x;let k=typeof N=="function"?N(y):N;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=M(k):{path:k},k.params={}),te({query:y.query,hash:y.hash,params:k.path!=null?{}:y.params},k)}}function he(y,x){const N=c=H(y),k=a.value,ee=y.state,ue=y.force,d=y.replace===!0,p=$(N);if(p)return he(te(M(p),{state:typeof p=="object"?te({},ee,p.state):ee,force:ue,replace:d}),x||N);const g=N;g.redirectedFrom=x;let E;return!ue&&Pp(s,k,N)&&(E=Pn(16,{to:g,from:k}),tt(k,k,!0,!1)),(E?Promise.resolve(E):Ze(g,k)).catch(m=>ft(m)?ft(m,2)?m:It(m):J(m,g,k)).then(m=>{if(m){if(ft(m,2))return he(te({replace:d},M(m.to),{state:typeof m.to=="object"?te({},ee,m.to.state):ee,force:ue}),x||g)}else m=Gt(g,k,!0,d,ee);return St(g,k,m),m})}function Be(y,x){const N=O(y,x);return N?Promise.reject(N):Promise.resolve()}function jt(y){const x=pn.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(y):y()}function Ze(y,x){let N;const[k,ee,ue]=__(y,x);N=rr(k.reverse(),"beforeRouteLeave",y,x);for(const p of k)p.leaveGuards.forEach(g=>{N.push(At(g,y,x))});const d=Be.bind(null,y,x);return N.push(d),Ue(N).then(()=>{N=[];for(const p of r.list())N.push(At(p,y,x));return N.push(d),Ue(N)}).then(()=>{N=rr(ee,"beforeRouteUpdate",y,x);for(const p of ee)p.updateGuards.forEach(g=>{N.push(At(g,y,x))});return N.push(d),Ue(N)}).then(()=>{N=[];for(const p of ue)if(p.beforeEnter)if(Xe(p.beforeEnter))for(const g of p.beforeEnter)N.push(At(g,y,x));else N.push(At(p.beforeEnter,y,x));return N.push(d),Ue(N)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),N=rr(ue,"beforeRouteEnter",y,x,jt),N.push(d),Ue(N))).then(()=>{N=[];for(const p of o.list())N.push(At(p,y,x));return N.push(d),Ue(N)}).catch(p=>ft(p,8)?p:Promise.reject(p))}function St(y,x,N){l.list().forEach(k=>jt(()=>k(y,x,N)))}function Gt(y,x,N,k,ee){const ue=O(y,x);if(ue)return ue;const d=x===Rt,p=yn?history.state:{};N&&(k||d?i.replace(y.fullPath,te({scroll:d&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),a.value=y,tt(y,x,N,d),It()}let et;function Vn(){et||(et=i.listen((y,x,N)=>{if(!ks.listening)return;const k=H(y),ee=$(k);if(ee){he(te(ee,{replace:!0}),k).catch(ts);return}c=k;const ue=a.value;yn&&Bp(Fl(ue.fullPath,N.delta),Hi()),Ze(k,ue).catch(d=>ft(d,12)?d:ft(d,2)?(he(d.to,k).then(p=>{ft(p,20)&&!N.delta&&N.type===ds.pop&&i.go(-1,!1)}).catch(ts),Promise.reject()):(N.delta&&i.go(-N.delta,!1),J(d,k,ue))).then(d=>{d=d||Gt(k,ue,!1),d&&(N.delta&&!ft(d,8)?i.go(-N.delta,!1):N.type===ds.pop&&ft(d,20)&&i.go(-1,!1)),St(k,ue,d)}).catch(ts)}))}let fn=jn(),me=jn(),ne;function J(y,x,N){It(y);const k=me.list();return k.length?k.forEach(ee=>ee(y,x,N)):console.error(y),Promise.reject(y)}function ut(){return ne&&a.value!==Rt?Promise.resolve():new Promise((y,x)=>{fn.add([y,x])})}function It(y){return ne||(ne=!y,Vn(),fn.list().forEach(([x,N])=>y?N(y):x()),fn.reset()),y}function tt(y,x,N,k){const{scrollBehavior:ee}=t;if(!yn||!ee)return Promise.resolve();const ue=!N&&Up(Fl(y.fullPath,0))||(k||!N)&&history.state&&history.state.scroll||null;return fo().then(()=>ee(y,x,ue)).then(d=>d&&Hp(d)).catch(d=>J(d,y,x))}const xe=y=>i.go(y);let dn;const pn=new Set,ks={currentRoute:a,listening:!0,addRoute:_,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:w,resolve:H,options:t,push:Y,replace:de,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:me.add,isReady:ut,install(y){const x=this;y.component("RouterLink",ti),y.component("RouterView",lu),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(a)}),yn&&!dn&&a.value===Rt&&(dn=!0,Y(i.location).catch(ee=>{}));const N={};for(const ee in Rt)Object.defineProperty(N,ee,{get:()=>a.value[ee],enumerable:!0});y.provide(vo,x),y.provide(ou,uc(N)),y.provide(Or,a);const k=y.unmount;pn.add(y),y.unmount=function(){pn.delete(y),pn.size<1&&(c=Rt,et&&et(),et=null,a.value=Rt,dn=!1,ne=!1),k()}}};function Ue(y){return y.reduce((x,N)=>x.then(()=>jt(N)),Promise.resolve())}return ks}function __(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>An(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>An(c,a))||i.push(a))}return[n,s,i]}const au=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},g_=t=>(Cc("data-v-df096e8c"),t=t(),bc(),t),m_={class:"wrapper"},y_={class:"app-header"},v_=g_(()=>P("img",{alt:"Vue logo",class:"logo",src:dp,width:"30",height:"30"},null,-1)),E_={class:"header-wrapper"},C_={__name:"App",setup(t){return(e,n)=>(Ge(),it("div",m_,[P("div",y_,[v_,P("div",E_,[be(lt(ti),{class:"nav-link",to:"/"},{default:Ks(()=>[es("Trang chủ")]),_:1}),be(lt(ti),{class:"nav-link",to:"/about"},{default:Ks(()=>[es("Thống kê")]),_:1}),be(lt(ti),{class:"nav-link",to:"/goods"},{default:Ks(()=>[es("Danh mục")]),_:1})])]),be(lt(lu),{class:"home-view"})]))}},b_=au(C_,[["__scopeId","data-v-df096e8c"]]),w_="modulepreload",S_=function(t){return"/"+t},Jl={},or=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.all(n.map(l=>{if(l=S_(l),l in Jl)return;Jl[l]=!0;const a=l.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":w_,a||(u.as="script",u.crossOrigin=""),u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};var Xl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Ln(e)},Ln=function(t){return new Error("Firebase Database ("+cu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},I_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):I_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new T_;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class T_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hu=function(t){const e=uu(t);return Eo.encodeByteArray(e,!0)},ci=function(t){return hu(t).replace(/\./g,"")},Dr=function(t){try{return Eo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){return fu(void 0,t)}function fu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!N_(n)||(t[n]=fu(t[n],e[n]));return t}function N_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=()=>x_().__FIREBASE_DEFAULTS__,P_=()=>{if(typeof process>"u"||typeof Xl>"u")return;const t=Xl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dr(t[1]);return e&&JSON.parse(e)},du=()=>{try{return A_()||P_()||O_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},D_=t=>{var e,n;return(n=(e=du())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k_=t=>{const e=D_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},pu=()=>{var t;return(t=du())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ci(JSON.stringify(n)),ci(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _u(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L_())}function F_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gu(){return cu.NODE_ADMIN===!0}function H_(){try{return typeof indexedDB=="object"}catch{return!1}}function B_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="FirebaseError";class Rs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=U_,Object.setPrototypeOf(this,Rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mu.prototype.create)}}class mu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?V_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rs(i,l,s)}}function V_(t,e){return t.replace(W_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const W_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ps(Dr(r[0])||""),n=ps(Dr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},$_=function(t){const e=yu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},j_=function(t){const e=yu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function On(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Zl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ui(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ea(r)&&ea(o)){if(!kr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ea(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Co(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ui=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return t&&t._delegate?t._delegate:t}class _s{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q_(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Y_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Y_(t){return t===Yt?void 0:t}function Q_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new K_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const X_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Z_=ie.INFO,eg={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},tg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=eg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vu{constructor(e){this.name=e,this._logLevel=Z_,this._logHandler=tg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?X_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const ng=(t,e)=>e.some(n=>t instanceof n);let ta,na;function sg(){return ta||(ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ig(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eu=new WeakMap,Mr=new WeakMap,Cu=new WeakMap,lr=new WeakMap,bo=new WeakMap;function rg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(kt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eu.set(n,t)}).catch(()=>{}),bo.set(e,t),e}function og(t){if(Mr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Mr.set(t,e)}let Lr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lg(t){Lr=t(Lr)}function ag(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ar(this),e,...n);return Cu.set(s,e.sort?e.sort():[e]),kt(s)}:ig().includes(t)?function(...e){return t.apply(ar(this),e),kt(Eu.get(this))}:function(...e){return kt(t.apply(ar(this),e))}}function cg(t){return typeof t=="function"?ag(t):(t instanceof IDBTransaction&&og(t),ng(t,sg())?new Proxy(t,Lr):t)}function kt(t){if(t instanceof IDBRequest)return rg(t);if(lr.has(t))return lr.get(t);const e=cg(t);return e!==t&&(lr.set(t,e),bo.set(e,t)),e}const ar=t=>bo.get(t);function ug(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=kt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(kt(o.result),a.oldVersion,a.newVersion,kt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const hg=["get","getKey","getAll","getAllKeys","count"],fg=["put","add","delete","clear"],cr=new Map;function sa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=fg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||hg.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return cr.set(e,r),r}lg(t=>({...t,get:(e,n,s)=>sa(e,n)||t.get(e,n,s),has:(e,n)=>!!sa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fr="@firebase/app",ia="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new vu("@firebase/app"),_g="@firebase/app-compat",gg="@firebase/analytics-compat",mg="@firebase/analytics",yg="@firebase/app-check-compat",vg="@firebase/app-check",Eg="@firebase/auth",Cg="@firebase/auth-compat",bg="@firebase/database",wg="@firebase/database-compat",Sg="@firebase/functions",Ig="@firebase/functions-compat",Tg="@firebase/installations",Rg="@firebase/installations-compat",Ng="@firebase/messaging",xg="@firebase/messaging-compat",Ag="@firebase/performance",Pg="@firebase/performance-compat",Og="@firebase/remote-config",Dg="@firebase/remote-config-compat",kg="@firebase/storage",Mg="@firebase/storage-compat",Lg="@firebase/firestore",Fg="@firebase/vertexai-preview",Hg="@firebase/firestore-compat",Bg="firebase",Ug="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]",Vg={[Fr]:"fire-core",[_g]:"fire-core-compat",[mg]:"fire-analytics",[gg]:"fire-analytics-compat",[vg]:"fire-app-check",[yg]:"fire-app-check-compat",[Eg]:"fire-auth",[Cg]:"fire-auth-compat",[bg]:"fire-rtdb",[wg]:"fire-rtdb-compat",[Sg]:"fire-fn",[Ig]:"fire-fn-compat",[Tg]:"fire-iid",[Rg]:"fire-iid-compat",[Ng]:"fire-fcm",[xg]:"fire-fcm-compat",[Ag]:"fire-perf",[Pg]:"fire-perf-compat",[Og]:"fire-rc",[Dg]:"fire-rc-compat",[kg]:"fire-gcs",[Mg]:"fire-gcs-compat",[Lg]:"fire-fst",[Hg]:"fire-fst-compat",[Fg]:"fire-vertex","fire-js":"fire-js",[Bg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map,Wg=new Map,Br=new Map;function ra(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Br.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Br.set(e,t);for(const n of hi.values())ra(n,t);for(const n of Wg.values())ra(n,t);return!0}function $g(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new mu("app","Firebase",jg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=Ug;function bu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=pu()),!n)throw Mt.create("no-options");const r=hi.get(i);if(r){if(kr(n,r.options)&&kr(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new J_(i);for(const a of Br.values())o.addComponent(a);const l=new Gg(n,s,o);return hi.set(i,l),l}function zg(t=Hr){const e=hi.get(t);if(!e&&t===Hr&&pu())return bu();if(!e)throw Mt.create("no-app",{appName:t});return e}function In(t,e,n){var s;let i=(s=Vg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(l.join(" "));return}fi(new _s(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="firebase-heartbeat-database",Yg=1,gs="firebase-heartbeat-store";let ur=null;function wu(){return ur||(ur=ug(Kg,Yg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),ur}async function Qg(t){try{const n=(await wu()).transaction(gs),s=await n.objectStore(gs).get(Su(t));return await n.done,s}catch(e){if(e instanceof Rs)yt.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(n.message)}}}async function oa(t,e){try{const s=(await wu()).transaction(gs,"readwrite");await s.objectStore(gs).put(e,Su(t)),await s.done}catch(n){if(n instanceof Rs)yt.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yt.warn(s.message)}}}function Su(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=1024,Xg=30*24*60*60*1e3;class Zg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n,s;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=la();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const a=new Date(l.date).valueOf();return Date.now()-a<=Xg}),this._storage.overwrite(this._heartbeatsCache))}catch(i){yt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=la(),{heartbeatsToSend:s,unsentEntries:i}=em(this._heartbeatsCache.heartbeats),r=ci(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return yt.warn(n),""}}}function la(){return new Date().toISOString().substring(0,10)}function em(t,e=Jg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),aa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),aa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H_()?B_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return oa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return oa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function aa(t){return ci(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){fi(new _s("platform-logger",e=>new dg(e),"PRIVATE")),fi(new _s("heartbeat",e=>new Zg(e),"PRIVATE")),In(Fr,ia,t),In(Fr,ia,"esm2017"),In("fire-js","")}nm("");var sm="firebase",im="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(sm,im,"app");var ca={};const ua="@firebase/database",ha="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu="";function rm(t){Iu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new om(e)}}catch{}return new lm},Zt=Tu("localStorage"),am=Tu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new vu("@firebase/database"),cm=function(){let t=1;return function(){return t++}}(),Ru=function(t){const e=z_(t),n=new q_;n.update(e);const s=n.digest();return Eo.encodeByteArray(s)},Ns=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ns.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let ss=null,fa=!0;const um=function(t,e){S(!e,"Can't turn on custom loggers persistently."),Tn.logLevel=ie.VERBOSE,ss=Tn.log.bind(Tn)},we=function(...t){if(fa===!0&&(fa=!1,ss===null&&am.get("logging_enabled")===!0&&um()),ss){const e=Ns.apply(null,t);ss(e)}},xs=function(t){return function(...e){we(t,...e)}},Ur=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ns(...t);Tn.error(e)},vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ns(...t)}`;throw Tn.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+Ns(...t);Tn.warn(e)},hm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},fm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",ln="[MAX_NAME]",Hn=function(t,e){if(t===e)return 0;if(t===Dn||e===ln)return-1;if(e===Dn||t===ln)return 1;{const n=da(t),s=da(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},dm=function(t,e){return t===e?0:t<e?-1:1},Gn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},wo=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=wo(t[e[s]]);return n+="}",n},xu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Au=function(t){S(!Nu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},pm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_m=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const mm=new RegExp("^-?(0*)\\d{1,10}$"),ym=-2147483648,vm=2147483647,da=function(t){if(mm.test(t)){const e=Number(t);if(e>=ym&&e<=vm)return e}return null},Bn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Em=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},is=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class ni{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ni.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="5",Pu="v",Ou="s",Du="r",ku="f",Mu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lu="ls",Fu="p",Vr="ac",Hu="websocket",Bu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vu(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Hu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wm(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.counters_={}}incrementCounter(e,n=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return R_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={},fr={};function Io(t){const e=t.toString();return hr[e]||(hr[e]=new Sm),hr[e]}function Im(t,e){const n=t.toString();return fr[n]||(fr[n]=e()),fr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Bn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="start",Rm="close",Nm="pLPCommand",xm="pRTLPCB",Wu="id",$u="pw",ju="ser",Am="cb",Pm="seg",Om="ts",Dm="d",km="dframe",Gu=1870,qu=30,Mm=Gu-qu,Lm=25e3,Fm=3e4;class vn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xs(e),this.stats_=Io(n),this.urlFn=a=>(this.appCheckToken&&(a[Vr]=this.appCheckToken),Vu(n,Bu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Tm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fm)),fm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new To((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pa)this.id=l,this.password=a;else if(o===Rm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[pa]="t",s[ju]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Am]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Pu]=So,this.transportSessionId&&(s[Ou]=this.transportSessionId),this.lastSessionId&&(s[Lu]=this.lastSessionId),this.applicationId&&(s[Fu]=this.applicationId),this.appCheckToken&&(s[Vr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mu.test(location.hostname)&&(s[Du]=ku);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vn.forceAllow_=!0}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){return vn.forceAllow_?!0:!vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pm()&&!_m()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hu(n),i=xu(s,Mm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[km]="t",s[Wu]=e,s[$u]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class To{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cm(),window[Nm+this.uniqueCallbackIdentifier]=e,window[xm+this.uniqueCallbackIdentifier]=n,this.myIFrame=To.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wu]=this.myID,e[$u]=this.myPW,e[ju]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qu+s.length<=Gu;){const o=this.pendingSegs.shift();s=s+"&"+Pm+i+"="+o.seg+"&"+Om+i+"="+o.ts+"&"+Dm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Lm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=16384,Bm=45e3;let di=null;typeof MozWebSocket<"u"?di=MozWebSocket:typeof WebSocket<"u"&&(di=WebSocket);class ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xs(this.connId),this.stats_=Io(n),this.connURL=ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Pu]=So,typeof location<"u"&&location.hostname&&Mu.test(location.hostname)&&(o[Du]=ku),n&&(o[Ou]=n),s&&(o[Lu]=s),i&&(o[Vr]=i),r&&(o[Fu]=r),Vu(e,Hu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zt.set("previous_websocket_failure",!0);try{let s;gu(),this.mySock=new di(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&di!==null&&!ze.forceDisallow_}static previouslyFailed(){return Zt.isInMemoryStorage||Zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xu(n,Hm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Bm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ze.responsesRequiredToBeHealthy=2;ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vn,ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ze&&ze.isAvailable();let s=n&&!ze.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ze];else{const i=this.transports_=[];for(const r of ms.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=6e4,Vm=5e3,Wm=10*1024,$m=100*1024,dr="t",_a="d",jm="s",ga="r",Gm="e",ma="o",ya="a",va="n",Ea="p",qm="h";class zm{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xs("c:"+this.id+":"),this.transportManager_=new ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$m?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dr in e){const n=e[dr];n===ya?this.upgradeIfSecondaryHealthy_():n===ga?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ma&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Gn("t",e),s=Gn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ea,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ya,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:va,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Gn("t",e),s=Gn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Gn(dr,e);if(_a in e){const s=e[_a];if(n===qm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===va){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jm?this.onConnectionShutdown_(s):n===ga?this.onReset_(s):n===Gm?Ur("Server Error: "+s):n===ma?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ur("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),So!==s&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Um))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ea,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Ku{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_u()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pi}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=32,ba=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new se("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bt(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Yu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Km(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ju(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Ne(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xu(t,e){if(Bt(t)!==Bt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ke(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bt(t)>Bt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ym{constructor(e,n){this.errorPrefix_=n,this.parts_=Qu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ui(this.parts_[s]);Zu(this)}}function Qm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ui(e),Zu(t)}function Jm(t){const e=t.parts_.pop();t.byteLength_-=Ui(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zu(t){if(t.byteLength_>ba)throw new Error(t.errorPrefix_+"has a key path longer than "+ba+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ca)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ca+") or object contains a cycle "+Qt(t))}function Qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Ku{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ro}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=1e3,Xm=60*5*1e3,wa=30*1e3,Zm=1.3,ey=3e4,ty="server_kill",Sa=3;class mt extends zu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=mt.nextPersistentConnectionId_++,this.log_=xs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qn,this.maxReconnectDelay_=Xm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!gu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ro.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Bi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;mt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ct(e,"w")){const s=On(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||j_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ur("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ey&&(this.reconnectDelay_=qn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new zm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Oe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(ty)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Oe(h),a())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zl(this.interruptReasons_)&&(this.reconnectDelay_=qn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>wo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sa&&(this.reconnectDelay_=wa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Iu.replace(/\./g,"-")]=1,_u()?e["framework.cordova"]=1:F_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pi.getInstance().currentlyOnline();return Zl(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(Dn,e),i=new j(Dn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class eh extends Vi{static get __EMPTY_NODE(){return Ws}static set __EMPTY_NODE(e){Ws=e}compare(e,n){return Hn(e.name,n.name)}isDefinedOn(e){throw Ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(ln,Ws)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Ws)}toString(){return".key"}}const Rn=new eh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=i??Pe.EMPTY_NODE,this.right=r??Pe.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class ny{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pe{constructor(e,n=Pe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $s(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $s(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $s(this.root_,null,this.comparator_,!0,e)}}Pe.EMPTY_NODE=new ny;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t,e){return Hn(t.name,e.name)}function No(t,e){return Hn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr;function iy(t){Wr=t}const th=function(t){return typeof t=="number"?"number:"+Au(t):"string:"+t},nh=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else S(t===Wr||t.isEmpty(),"priority of unexpected type.");S(t===Wr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nh(this.priorityNode_)}static set __childrenNodeConstructor(e){Ia=e}static get __childrenNodeConstructor(){return Ia}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+th(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Au(this.value_):e+=this.value_,this.lazyHash_=Ru(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh,ih;function ry(t){sh=t}function oy(t){ih=t}class ly extends Vi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(ln,new ve("[PRIORITY-POST]",ih))}makePost(e,n){const s=sh(e);return new j(n,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=Math.log(2);class cy{constructor(e){const n=r=>parseInt(Math.log(r)/ay,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _i=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+a,v=i(a,_),w=i(_+1,c);return h=t[_],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,v,w)}},r=function(a){let c=null,u=null,h=t.length;const f=function(v,w){const D=h-v,H=h;h-=v;const M=i(D+1,H),O=t[D],Y=n?n(O):O;_(new Ee(Y,O.node,w,null,M))},_=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),D=Math.pow(2,a.count-(v+1));w?f(D,Ee.BLACK):(f(D,Ee.BLACK),f(D,Ee.RED))}return u},o=new cy(t.length),l=r(o);return new Pe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;const gn={};class pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(gn&&fe,"ChildrenNode.ts has not been loaded"),pr=pr||new pt({".priority":gn},{".priority":fe}),pr}get(e){const n=On(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pe?n:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=_i(s,e.getCompare()):l=gn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new pt(u,c)}addToIndexes(e,n){const s=ui(this.indexes_,(i,r)=>{const o=On(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===gn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),_i(l,o.getCompare())}else return gn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ui(this.indexes_,i=>{if(i===gn)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&nh(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zn||(zn=new B(new Pe(No),null,pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zn:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?zn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{S(z(e)!==".priority"||Bt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+th(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ru(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===As?-1:0}withIndex(e){if(e===Rn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uy extends B{constructor(){super(new Pe(No),B.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const As=new uy;Object.defineProperties(j,{MIN:{value:new j(Dn,B.EMPTY_NODE)},MAX:{value:new j(ln,As)}});eh.__EMPTY_NODE=B.EMPTY_NODE;ve.__childrenNodeConstructor=B;iy(As);oy(As);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=!0;function Ce(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Ce(e))}if(!(t instanceof Array)&&hy){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ce(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return B.EMPTY_NODE;const r=_i(n,sy,o=>o.name,No);if(s){const o=_i(n,fe.getCompare());return new B(r,Ce(e),new pt({".priority":o},{".priority":fe}))}else return new B(r,Ce(e),pt.Default)}else{let n=B.EMPTY_NODE;return Me(t,(s,i)=>{if(Ct(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}ry(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends Vi{constructor(e){super(),this.indexPath_=e,S(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,As);return new j(ln,e)}toString(){return Qu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy extends Vi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=Ce(e);return new j(n,s)}toString(){return".value"}}const py=new dy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){return{type:"value",snapshotNode:t}}function kn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ys(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _y(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ys(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(kn(n,s)):o.trackChildChange(vs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ys(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(vs(i,r,o))}else s.trackChildChange(kn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.indexedFilter_=new xo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Es.getStartPost_(e),this.endPost_=Es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new j(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(vs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ys(n,h));const w=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(kn(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ys(c.name,c.node)),r.trackChildChange(kn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Ao;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function my(t){return t.loadsAllData()?new xo(t.getIndex()):t.hasLimit()?new gy(t):new Es(t)}function Ta(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===py?n="$value":t.index_===Rn?n="$key":(S(t.index_ instanceof fy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ra(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends zu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=xs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=gi.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ta(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),On(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=gi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ta(e._queryParams),s=e._path.toString(),i=new Bi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+G_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ps(l.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){return{value:null,children:new Map}}function oh(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,mi());const i=t.children.get(s);e=re(e),oh(i,e,n)}}function $r(t,e,n){t.value!==null?n(e,t.value):vy(t,(s,i)=>{const r=new se(e.toString()+"/"+s);$r(i,r,n)})}function vy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=10*1e3,Cy=30*1e3,by=5*60*1e3;class wy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ey(e);const s=Na+(Cy-Na)*Math.random();is(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&Ct(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),is(this.reportStats_.bind(this),Math.floor(Math.random()*2*by))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function lh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Po(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Oo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=lh()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new yi(Q(),n,this.revert)}}else return S(z(this.path)===e,"operationForChild called for unrelated child."),new yi(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Cs(this.source,Q()):new Cs(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return q(this.path)?new an(this.source,Q(),this.snap.getImmediateChild(e)):new an(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new an(this.source,Q(),n.value):new bs(this.source,Q(),n)}else return S(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bs(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Iy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_y(o.childName,o.snapshotNode))}),Kn(t,i,"child_removed",e,s,n),Kn(t,i,"child_added",e,s,n),Kn(t,i,"child_moved",r,s,n),Kn(t,i,"child_changed",e,s,n),Kn(t,i,"value",e,s,n),i}function Kn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Ry(t,l,a)),o.forEach(l=>{const a=Ty(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ty(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ry(t,e,n){if(e.childName==null||n.childName==null)throw Ln("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e){return{eventCache:t,serverCache:e}}function rs(t,e,n,s){return Wi(new Ut(e,n,s),t.serverCache)}function ah(t,e,n,s){return Wi(t.eventCache,new Ut(e,n,s))}function vi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r;const Ny=()=>(_r||(_r=new Pe(dm)),_r);class ae{constructor(e,n=Ny()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Me(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:_e(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new ae(null)}}set(e,n){if(q(e))return new ae(n,this.children);{const s=z(e),r=(this.children.get(s)||new ae(null)).set(re(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new ae(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(re(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),_e(n,i),s):new ae(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new ae(null))}}function os(t,e,n){if(q(e))return new Je(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Je(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new Je(r)}}}function xa(t,e,n){let s=t;return Me(n,(i,r)=>{s=os(s,_e(e,i),r)}),s}function Aa(t,e){if(q(e))return Je.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new Je(n)}}function jr(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function Pa(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function Lt(t,e){if(q(e))return t;{const n=hn(t,e);return n!=null?new Je(new ae(n)):new Je(t.writeTree_.subtree(e))}}function Gr(t){return t.writeTree_.isEmpty()}function Mn(t,e){return ch(Q(),t.writeTree_,e)}function ch(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ch(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e){return dh(e,t)}function xy(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=os(t.visibleWrites,e,n)),t.lastWriteId=s}function Ay(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Py(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Oy(l,s.path)?i=!1:Ke(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Dy(t),!0;if(s.snap)t.visibleWrites=Aa(t.visibleWrites,s.path);else{const l=s.children;Me(l,a=>{t.visibleWrites=Aa(t.visibleWrites,_e(s.path,a))})}return!0}else return!1}function Oy(t,e){if(t.snap)return Ke(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ke(_e(t.path,n),e))return!0;return!1}function Dy(t){t.visibleWrites=uh(t.allWrites,ky,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ky(t){return t.visible}function uh(t,e,n){let s=Je.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ke(n,o)?(l=Ne(n,o),s=os(s,l,r.snap)):Ke(o,n)&&(l=Ne(o,n),s=os(s,Q(),r.snap.getChild(l)));else if(r.children){if(Ke(n,o))l=Ne(n,o),s=xa(s,l,r.children);else if(Ke(o,n))if(l=Ne(o,n),q(l))s=xa(s,Q(),r.children);else{const a=On(r.children,z(l));if(a){const c=a.getChild(re(l));s=os(s,Q(),c)}}}else throw Ln("WriteRecord should have .snap or .children")}}return s}function hh(t,e,n,s,i){if(!s&&!i){const r=hn(t.visibleWrites,e);if(r!=null)return r;{const o=Lt(t.visibleWrites,e);if(Gr(o))return n;if(n==null&&!jr(o,Q()))return null;{const l=n||B.EMPTY_NODE;return Mn(o,l)}}}else{const r=Lt(t.visibleWrites,e);if(!i&&Gr(r))return n;if(!i&&n==null&&!jr(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ke(c.path,e)||Ke(e,c.path))},l=uh(t.allWrites,o,e),a=n||B.EMPTY_NODE;return Mn(l,a)}}}function My(t,e,n){let s=B.EMPTY_NODE;const i=hn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Lt(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=Mn(Lt(r,new se(o)),l);s=s.updateImmediateChild(o,a)}),Pa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Lt(t.visibleWrites,e);return Pa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ly(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(jr(t.visibleWrites,r))return null;{const o=Lt(t.visibleWrites,r);return Gr(o)?i.getChild(n):Mn(o,i.getChild(n))}}function Fy(t,e,n,s){const i=_e(e,n),r=hn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Lt(t.visibleWrites,i);return Mn(o,s.getNode().getImmediateChild(n))}else return null}function Hy(t,e){return hn(t.visibleWrites,e)}function By(t,e,n,s,i,r,o){let l;const a=Lt(t.visibleWrites,e),c=hn(a,Q());if(c!=null)l=c;else if(n!=null)l=Mn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Uy(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function Ei(t,e,n,s){return hh(t.writeTree,t.treePath,e,n,s)}function Do(t,e){return My(t.writeTree,t.treePath,e)}function Oa(t,e,n,s){return Ly(t.writeTree,t.treePath,e,n,s)}function Ci(t,e){return Hy(t.writeTree,_e(t.treePath,e))}function Vy(t,e,n,s,i,r){return By(t.writeTree,t.treePath,e,n,s,i,r)}function ko(t,e,n){return Fy(t.writeTree,t.treePath,e,n)}function fh(t,e){return dh(_e(t.treePath,e),t.writeTree)}function dh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,vs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ys(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,kn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,vs(s,e.snapshotNode,i.oldSnap));else throw Ln("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ph=new $y;class Mo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ut(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ko(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),r=Vy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){return{filter:t}}function Gy(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qy(t,e,n,s,i){const r=new Wy;let o,l;if(n.type===Ye.OVERWRITE){const c=n;c.source.fromUser?o=qr(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=bi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ye.MERGE){const c=n;c.source.fromUser?o=Ky(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=zr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ye.ACK_USER_WRITE){const c=n;c.revert?o=Jy(t,e,c.path,s,i,r):o=Yy(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=Qy(t,e,n.path,s,r);else throw Ln("Unknown operation type: "+n.type);const a=r.getChanges();return zy(e,o,a),{viewCache:o,changes:a}}function zy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=vi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(rh(vi(e)))}}function _h(t,e,n,s,i,r){const o=e.eventCache;if(Ci(s,n)!=null)return e;{let l,a;if(q(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cn(e),u=c instanceof B?c:B.EMPTY_NODE,h=Do(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ei(s,cn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){S(Bt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Oa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=re(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Oa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=ko(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return rs(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function bi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=z(n);if(!a.isCompleteForPath(n)&&Bt(n)>1)return e;const v=re(n),D=a.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?c=u.updatePriority(a.getNode(),D):c=u.updateChild(a.getNode(),_,D,v,ph,null)}const h=ah(e,c,a.isFullyInitialized()||q(n),u.filtersNodes()),f=new Mo(i,h,r);return _h(t,h,n,i,f,l)}function qr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Mo(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=rs(e,c,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=rs(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=re(n),_=l.getNode().getImmediateChild(h);let v;if(q(f))v=s;else{const w=u.getCompleteChild(h);w!=null?Yu(f)===".priority"&&w.getChild(Ju(f)).isEmpty()?v=w:v=w.updateChild(f,s):v=B.EMPTY_NODE}if(_.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),h,v,f,u,o);a=rs(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Da(t,e){return t.eventCache.isCompleteForChild(e)}function Ky(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=_e(n,a);Da(e,z(u))&&(l=qr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=_e(n,a);Da(e,z(u))||(l=qr(t,l,u,c,i,r,o))}),l}function ka(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;q(n)?c=s:c=new ae(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=ka(t,_,f);a=bi(t,a,new se(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),w=ka(t,v,f);a=bi(t,a,new se(h),w,i,r,o,l)}}),a}function Yy(t,e,n,s,i,r,o){if(Ci(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return bi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(q(n)){let c=new ae(null);return a.getNode().forEachChild(Rn,(u,h)=>{c=c.set(new se(u),h)}),zr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ae(null);return s.foreach((u,h)=>{const f=_e(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),zr(t,e,n,c,i,r,l,o)}}function Qy(t,e,n,s,i){const r=e.serverCache,o=ah(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return _h(t,o,n,s,ph,i)}function Jy(t,e,n,s,i,r){let o;if(Ci(s,n)!=null)return e;{const l=new Mo(s,e,i),a=e.eventCache.getNode();let c;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ei(s,cn(e));else{const h=e.serverCache.getNode();S(h instanceof B,"serverChildren would be complete if leaf node"),u=Do(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=z(n);let h=ko(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,re(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,B.EMPTY_NODE,re(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ei(s,cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ci(s,Q())!=null,rs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new xo(s.getIndex()),r=my(s);this.processor_=jy(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new Ut(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ut(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wi(h,u),this.eventGenerator_=new Sy(this.query_)}get query(){return this.query_}}function Zy(t){return t.viewCache_.serverCache.getNode()}function ev(t){return vi(t.viewCache_)}function tv(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Ma(t){return t.eventRegistrations_.length===0}function nv(t,e){t.eventRegistrations_.push(e)}function La(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Fa(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(S(cn(t.viewCache_),"We should always have a full cache before handling merges"),S(vi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qy(t.processor_,i,e,n,s);return Gy(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,gh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function sv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(kn(r,o))}),n.isFullyInitialized()&&s.push(rh(n.getNode())),gh(t,s,n.getNode(),e)}function gh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Iy(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class mh{constructor(){this.views=new Map}}function iv(t){S(!wi,"__referenceConstructor has already been defined"),wi=t}function rv(){return S(wi,"Reference.ts has not been loaded"),wi}function ov(t){return t.views.size===0}function Lo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),Fa(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Fa(o,e,n,s));return r}}function yh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ei(n,i?s:null),a=!1;l?a=!0:s instanceof B?(l=Do(n,s),a=!1):(l=B.EMPTY_NODE,a=!1);const c=Wi(new Ut(l,a,!1),new Ut(s,i,!1));return new Xy(e,c)}return o}function lv(t,e,n,s,i,r){const o=yh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nv(o,n),sv(o,n)}function av(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Vt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(La(c,n,s)),Ma(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(La(a,n,s)),Ma(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Vt(t)&&r.push(new(rv())(e._repo,e._path)),{removed:r,events:o}}function vh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ft(t,e){let n=null;for(const s of t.views.values())n=n||tv(s,e);return n}function Eh(t,e){if(e._queryParams.loadsAllData())return ji(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ch(t,e){return Eh(t,e)!=null}function Vt(t){return ji(t)!=null}function ji(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;function cv(t){S(!Si,"__referenceConstructor has already been defined"),Si=t}function uv(){return S(Si,"Reference.ts has not been loaded"),Si}let hv=1;class Ha{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=Uy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bh(t,e,n,s,i){return xy(t.pendingWriteTree_,e,n,s,i),i?Os(t,new an(lh(),e,n)):[]}function en(t,e,n=!1){const s=Ay(t.pendingWriteTree_,e);if(Py(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(Q(),!0):Me(s.children,o=>{r=r.set(new se(o),!0)}),Os(t,new yi(s.path,r,n))}else return[]}function Ps(t,e,n){return Os(t,new an(Po(),e,n))}function fv(t,e,n){const s=ae.fromObject(n);return Os(t,new bs(Po(),e,s))}function dv(t,e){return Os(t,new Cs(Po(),e))}function pv(t,e,n){const s=Ho(t,n);if(s){const i=Bo(s),r=i.path,o=i.queryId,l=Ne(r,e),a=new Cs(Oo(o),l);return Uo(t,r,a)}else return[]}function wh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ch(o,e))){const a=av(o,e,n,s);ov(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Vt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=yv(f);for(let v=0;v<_.length;++v){const w=_[v],D=w.query,H=Rh(t,w);t.listenProvider_.startListening(ls(D),ws(t,D),H.hashFn,H.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ls(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Gi(f));t.listenProvider_.stopListening(ls(f),_)}))}vv(t,c)}return l}function Sh(t,e,n,s){const i=Ho(t,s);if(i!=null){const r=Bo(i),o=r.path,l=r.queryId,a=Ne(o,e),c=new an(Oo(l),a,n);return Uo(t,o,c)}else return[]}function _v(t,e,n,s){const i=Ho(t,s);if(i){const r=Bo(i),o=r.path,l=r.queryId,a=Ne(o,e),c=ae.fromObject(n),u=new bs(Oo(l),a,c);return Uo(t,o,u)}else return[]}function gv(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=Ne(f,i);r=r||Ft(_,v),o=o||Vt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Vt(l),r=r||Ft(l,Q())):(l=new mh,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=Ft(v,Q());w&&(r=r.updateImmediateChild(_,w))}));const c=Ch(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Gi(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Ev();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=$i(t.pendingWriteTree_,i);let h=lv(l,e,n,u,r,a);if(!c&&!o&&!s){const f=Eh(l,e);h=h.concat(Cv(t,e,f))}return h}function Fo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ne(o,e),c=Ft(l,a);if(c)return c});return hh(i,e,r,n,!0)}function mv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ne(c,n);s=s||Ft(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Ft(i,Q()):(i=new mh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ut(s,!0,!1):null,l=$i(t.pendingWriteTree_,e._path),a=yh(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return ev(a)}function Os(t,e){return Ih(e,t.syncPointTree_,null,$i(t.pendingWriteTree_,Q()))}function Ih(t,e,n,s){if(q(t.path))return Th(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Ft(i,Q()));let r=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=fh(s,o);r=r.concat(Ih(l,a,c,u))}return i&&(r=r.concat(Lo(i,t,s,n))),r}}function Th(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Ft(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=fh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Th(u,l,a,c)))}),i&&(r=r.concat(Lo(i,t,s,n))),r}function Rh(t,e){const n=e.query,s=ws(t,n);return{hashFn:()=>(Zy(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?pv(t,n._path,s):dv(t,n._path);{const r=gm(i,n);return wh(t,n,null,r)}}}}function ws(t,e){const n=Gi(e);return t.queryToTagMap.get(n)}function Gi(t){return t._path.toString()+"$"+t._queryIdentifier}function Ho(t,e){return t.tagToQueryMap.get(e)}function Bo(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Uo(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=$i(t.pendingWriteTree_,e);return Lo(s,n,i,null)}function yv(t){return t.fold((e,n,s)=>{if(n&&Vt(n))return[ji(n)];{let i=[];return n&&(i=vh(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function ls(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(uv())(t._repo,t._path):t}function vv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Gi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ev(){return hv++}function Cv(t,e,n){const s=e._path,i=ws(t,e),r=Rh(t,n),o=t.listenProvider_.startListening(ls(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!Vt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!q(c)&&u&&Vt(u))return[ji(u).query];{let f=[];return u&&(f=f.concat(vh(u).map(_=>_.query))),Me(h,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ls(u),ws(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vo(n)}node(){return this.node_}}class Wo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Wo(this.syncTree_,n)}node(){return Fo(this.syncTree_,this.path_)}}const bv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ba=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Sv(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},Sv=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Iv=function(t,e,n,s){return $o(e,new Wo(n,t),s)},Nh=function(t,e,n){return $o(t,new Vo(e),n)};function $o(t,e,n){const s=t.getPriority().val(),i=Ba(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ba(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ve(i))),o.forEachChild(fe,(l,a)=>{const c=$o(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Go(t,e){let n=e instanceof se?e:new se(e),s=t,i=z(n);for(;i!==null;){const r=On(s.node.children,i)||{children:{},childCount:0};s=new jo(i,s,r),n=re(n),i=z(n)}return s}function Un(t){return t.node.value}function xh(t,e){t.node.value=e,Kr(t)}function Ah(t){return t.node.childCount>0}function Tv(t){return Un(t)===void 0&&!Ah(t)}function qi(t,e){Me(t.node.children,(n,s)=>{e(new jo(n,t,s))})}function Ph(t,e,n,s){n&&!s&&e(t),qi(t,i=>{Ph(i,e,!0,s)}),n&&s&&e(t)}function Rv(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ds(t){return new se(t.parent===null?t.name:Ds(t.parent)+"/"+t.name)}function Kr(t){t.parent!==null&&Nv(t.parent,t.name,t)}function Nv(t,e,n){const s=Tv(n),i=Ct(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Kr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Kr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=/[\[\].#$\/\u0000-\u001F\u007F]/,Av=/[\[\].#$\u0000-\u001F\u007F]/,gr=10*1024*1024,Oh=function(t){return typeof t=="string"&&t.length!==0&&!xv.test(t)},Dh=function(t){return typeof t=="string"&&t.length!==0&&!Av.test(t)},Pv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dh(t)},Ov=function(t,e,n,s){qo(Co(t,"value"),e,n)},qo=function(t,e,n){const s=n instanceof se?new Ym(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qt(s)+" with contents = "+e.toString());if(Nu(e))throw new Error(t+"contains "+e.toString()+" "+Qt(s));if(typeof e=="string"&&e.length>gr/3&&Ui(e)>gr)throw new Error(t+"contains a string greater than "+gr+" utf8 bytes "+Qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Oh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qm(s,o),qo(t,l,s),Jm(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qt(s)+" in addition to actual children.")}},kh=function(t,e,n,s){if(!Dh(n))throw new Error(Co(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Dv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kh(t,e,n)},Mh=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Oh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Pv(n))throw new Error(Co(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lh(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Xu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ct(t,e,n){Lh(t,n),Lv(t,s=>Ke(s,e)||Ke(e,s))}function Lv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Fv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Fv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ss&&we("event: "+n.toString()),Bn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="repo_interrupt",Bv=25;class Uv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Mv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mi(),this.transactionQueueTree_=new jo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vv(t,e,n){if(t.stats_=Io(t.repoInfo_),t.forceRestClient_||Em())t.server_=new gi(t.repoInfo_,(s,i,r,o)=>{Ua(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Va(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new mt(t.repoInfo_,e,(s,i,r,o)=>{Ua(t,s,i,r,o)},s=>{Va(t,s)},s=>{$v(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Im(t.repoInfo_,()=>new wy(t.stats_,t.server_)),t.infoData_=new yy,t.infoSyncTree_=new Ha({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Ps(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ko(t,"connected",!1),t.serverSyncTree_=new Ha({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ct(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Wv(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zo(t){return bv({timestamp:Wv(t)})}function Ua(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ui(n,c=>Ce(c));o=_v(t.serverSyncTree_,r,a,i)}else{const a=Ce(n);o=Sh(t.serverSyncTree_,r,a,i)}else if(s){const a=ui(n,c=>Ce(c));o=fv(t.serverSyncTree_,r,a)}else{const a=Ce(n);o=Ps(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ki(t,r)),ct(t.eventQueue_,l,o)}function Va(t,e){Ko(t,"connected",e),e===!1&&qv(t)}function $v(t,e){Me(e,(n,s)=>{Ko(t,n,s)})}function Ko(t,e,n){const s=new se("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Ps(t.infoSyncTree_,s,i);ct(t.eventQueue_,s,r)}function Fh(t){return t.nextWriteId_++}function jv(t,e,n){const s=mv(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());gv(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ps(t.serverSyncTree_,e._path,r);else{const l=ws(t.serverSyncTree_,e);o=Sh(t.serverSyncTree_,e._path,r,l)}return ct(t.eventQueue_,e._path,o),wh(t.serverSyncTree_,e,n,null,!0),r},i=>(zi(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Gv(t,e,n,s,i){zi(t,"set",{path:e.toString(),value:n,priority:s});const r=zo(t),o=Ce(n,s),l=Fo(t.serverSyncTree_,e),a=Nh(o,l,r),c=Fh(t),u=bh(t.serverSyncTree_,e,a,c,!0);Lh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Oe("set at "+e+" failed: "+f);const w=en(t.serverSyncTree_,c,!v);ct(t.eventQueue_,e,w),Kv(t,i,f,_)});const h=Wh(t,e);Ki(t,h),ct(t.eventQueue_,h,[])}function qv(t){zi(t,"onDisconnectEvents");const e=zo(t),n=mi();$r(t.onDisconnect_,Q(),(i,r)=>{const o=Iv(i,r,t.serverSyncTree_,e);oh(n,i,o)});let s=[];$r(n,Q(),(i,r)=>{s=s.concat(Ps(t.serverSyncTree_,i,r));const o=Wh(t,i);Ki(t,o)}),t.onDisconnect_=mi(),ct(t.eventQueue_,Q(),s)}function zv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Hv)}function zi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Kv(t,e,n,s){e&&Bn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Hh(t,e,n){return Fo(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Yo(t,e=t.transactionQueueTree_){if(e||Yi(t,e),Un(e)){const n=Uh(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Yv(t,Ds(e),n)}else Ah(e)&&qi(e,n=>{Yo(t,n)})}function Yv(t,e,n){const s=n.map(c=>c.currentWriteId),i=Hh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ne(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{zi(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(en(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Yi(t,Go(t.transactionQueueTree_,e)),Yo(t,t.transactionQueueTree_),ct(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Bn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Oe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ki(t,e)}},o)}function Ki(t,e){const n=Bh(t,e),s=Ds(n),i=Uh(t,n);return Qv(t,i,s),s}function Qv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ne(n,a.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Bv)u=!0,h="maxretry",i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Hh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){qo("transaction failed: Data returned ",_,a.path);let v=Ce(_);typeof _=="object"&&_!=null&&Ct(_,".priority")||(v=v.updatePriority(f.getPriority()));const D=a.currentWriteId,H=zo(t),M=Nh(v,f,H);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=M,a.currentWriteId=Fh(t),o.splice(o.indexOf(D),1),i=i.concat(bh(t.serverSyncTree_,a.path,M,a.currentWriteId,a.applyLocally)),i=i.concat(en(t.serverSyncTree_,D,!0))}else u=!0,h="nodata",i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Yi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Bn(s[l]);Yo(t,t.transactionQueueTree_)}function Bh(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Un(s)===void 0;)s=Go(s,n),e=re(e),n=z(e);return s}function Uh(t,e){const n=[];return Vh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Vh(t,e,n){const s=Un(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);qi(e,i=>{Vh(t,i,n)})}function Yi(t,e){const n=Un(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xh(e,n.length>0?n:void 0)}qi(e,s=>{Yi(t,s)})}function Wh(t,e){const n=Ds(Bh(t,e)),s=Go(t.transactionQueueTree_,e);return Rv(s,i=>{mr(t,i)}),mr(t,s),Ph(s,i=>{mr(t,i)}),n}function mr(t,e){const n=Un(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(en(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xh(e,void 0):n.length=r+1,ct(t.eventQueue_,Ds(e),i);for(let o=0;o<s.length;o++)Bn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Xv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wa=function(t,e){const n=Zv(t),s=n.namespace;n.domain==="firebase.com"&&vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Uu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},Zv=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Jv(t.substring(u,h)));const f=Xv(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class tE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Yu(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=Ra(this._queryParams),n=wo(e);return n==="{}"?"default":n}get _queryObject(){return Ra(this._queryParams)}isEqual(e){if(e=Fn(e),!(e instanceof Qo))return!1;const n=this._repo===e._repo,s=Xu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Km(this._path)}}class bt extends Qo{constructor(e,n){super(e,n,new Ao,!1)}get parent(){const e=Ju(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ss{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=Yr(this.ref,e);return new Ss(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ss(i,Yr(this.ref,s),fe)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function js(t,e){return t=Fn(t),t._checkNotDeleted("ref"),e!==void 0?Yr(t._root,e):t._root}function Yr(t,e){return t=Fn(t),z(t._path)===null?Dv("child","path",e):kh("child","path",e),new bt(t._repo,_e(t._path,e))}function uC(t){return Mh("remove",t._path),Qr(t,null)}function Qr(t,e){t=Fn(t),Mh("set",t._path),Ov("set",e,t._path);const n=new Bi;return Gv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function $a(t){t=Fn(t);const e=new nE(()=>{}),n=new Jo(e);return jv(t._repo,t,n).then(s=>new Ss(s,new bt(t._repo,t._path),t._queryParams.getIndex()))}class Jo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new eE("value",this,new Ss(e.snapshotNode,new bt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tE(this,e,n):null}matches(e){return e instanceof Jo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}iv(bt);cv(bt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="FIREBASE_DATABASE_EMULATOR_HOST",Jr={};let iE=!1;function rE(t,e,n,s){t.repoInfo_=new Uu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function oE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wa(r,i),l=o.repoInfo,a;typeof process<"u"&&ca&&(a=ca[sE]),a?(r=`http://${a}?ns=${l.namespace}`,o=Wa(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new bm(t.name,t.options,e);kv("Invalid Firebase Database URL",o),q(o.path)||vt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=aE(l,t,c,new Cm(t.name,n));return new cE(u,t)}function lE(t,e){const n=Jr[e];(!n||n[t.key]!==t)&&vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zv(t),delete n[t.key]}function aE(t,e,n,s){let i=Jr[e.name];i||(i={},Jr[e.name]=i);let r=i[t.toURLString()];return r&&vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Uv(t,iE,n,s),i[t.toURLString()]=r,r}class cE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vt("Cannot call "+e+" on a deleted database.")}}function uE(t=zg(),e){const n=$g(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=k_("database");s&&hE(n,...s)}return n}function hE(t,e,n,s={}){t=Fn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&vt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ni(ni.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:M_(s.mockUserToken,t.app.options.projectId);r=new ni(o)}rE(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){rm(qg),fi(new _s("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return oE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),In(ua,ha,t),In(ua,ha,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fE();const dE={apiKey:"AIzaSyAAeGX3hrpOvwPW4b9592BB9EHenjNyeIo",authDomain:"final-6482f.firebaseapp.com",databaseURL:"https://final-6482f-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"final-6482f",storageBucket:"final-6482f.appspot.com",messagingSenderId:"993703155420",appId:"1:993703155420:web:f2316fa78778d17a998619",measurementId:"G-M9G5NTYFQK"},pE=bu(dE),Gs=uE(pE),_E={components:{},data(){return{productData:[],returnProductData:[],goods:[],dvt:[],khachHang:"",tongTien:0,result:null,totalAmount:0}},methods:{addProduct(){this.productData.push({khachHang:"",tenSp:"",sl:null,gia:null,thanhtien:null,dvt:""}),console.log(this.productData)},addReturnProduct(){this.returnProductData.push({khachHang:"",tenSp:"",sl:null,gia:null,thanhtien:null,dvt:""})},calculateTotal(t){t.thanhtien=t.sl*t.gia,this.updateTotalAmount()},updateTotalAmount(){this.tongTien=this.productData.reduce((t,e)=>t+e.thanhtien,0)-this.returnProductData.reduce((t,e)=>t+e.thanhtien,0)},validateData(){if(!this.khachHang.trim())return alert("Vui lòng nhập tên khách hàng."),!1;if(this.productData.length===0&&this.returnProductData.length===0)return console.log("asas"),alert("Vui lòng nhập đầy đủ thông tin sản phẩm bán ra hợp lệ."),!1;if(this.productData){for(const t of this.productData)if(!t.tenSp.trim()||t.sl<=0||t.gia<=0||!t.dvt.trim())return alert("Vui lòng nhập đầy đủ thông tin sản phẩm bán ra hợp lệ."),!1}if(this.returnProductData){for(const t of this.returnProductData)if(!t.tenSp.trim()||t.sl<=0||t.gia<=0||!t.dvt.trim())return alert("Vui lòng nhập đầy đủ thông tin sản phẩm thu về hợp lệ."),!1}return!0},saveProductDataToLocalStorage(){const t={productData:this.productData,returnProductData:this.returnProductData,khachHang:this.khachHang,tongTien:this.tongTien};localStorage.setItem("bills",JSON.stringify(t))},loadProductDataFromLocalStorage(){const t=JSON.parse(localStorage.getItem("bills"));t&&(this.productData=t.productData||this.productData,this.returnProductData=t.returnProductData||this.returnProductData,this.khachHang=t.khachHang||this.khachHang,this.tongTien=t.tongTien||this.tongTien)},removeProduct(t,e){e==="product"?this.productData.splice(t,1):this.returnProductData.splice(t,1),this.updateTotalAmount()},getCurrentDateTime(){const t=new Date;return`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`},exportToJSON(){if(this.validateData()){const t=new Date().toLocaleDateString("vi-VN").replace(/\//g,"_"),e=this.productData.map(i=>({dvt:i.dvt,gia:i.gia,sl:i.sl,thanhtien:i.thanhtien,tenSp:i.tenSp})),n=this.returnProductData.map(i=>({dvt:i.dvt,gia:i.gia,sl:i.sl,thanhtien:i.thanhtien,tenSp:i.tenSp})),s=js(Gs,"hoadon/"+t);$a(s).then(i=>{let r=null,o=i.size;if(i.forEach(l=>{const a=l.val();a.khachHang===this.khachHang&&(r=a,o=l.key)}),r){e.forEach(a=>{const c=r.sanPham.find(u=>u.tenSp===a.tenSp&&u.dvt===a.dvt);c?(c.sl+=a.sl,c.thanhtien+=a.thanhtien):r.sanPham.push(a)}),n.forEach(a=>{const c=r.thuVe.find(u=>u.tenSp===a.tenSp&&u.dvt===a.dvt);c?(c.sl+=a.sl,c.thanhtien+=a.thanhtien):r.thuVe.push(a)}),r.tongTien+=this.tongTien;const l=js(Gs,`hoadon/${t}/${o}`);Qr(l,r).then(()=>{alert("Dữ liệu đã được cập nhật thành công"),this.clearAll()}).catch(a=>alert("Lỗi khi cập nhật dữ liệu:",a))}else{const l=js(Gs,`hoadon/${t}/${i.size}`),a={khachHang:this.khachHang,ngay:this.getCurrentDateTime(),sanPham:e,thuVe:n,tongTien:this.tongTien};Qr(l,a).then(()=>{alert("Dữ liệu đã được tạo mới thành công"),this.clearAll()}).catch(c=>alert("Lỗi khi tạo dữ liệu:",c))}}).catch(i=>alert("Lỗi khi lấy dữ liệu:",i))}},clearAll(){this.productData=[],this.returnProductData=[],this.khachHang="",this.tongTien=0,localStorage.removeItem("bills")},fetchDVT(){const t=js(Gs,"dvt");$a(t).then(e=>{const n=[],s=e.val();s&&Object.entries(s).forEach(([i,r])=>{n.push({key:i,value:r})}),this.dvt=n}),console.log(this.dvt)}},watch:{productData:{handler(){this.saveProductDataToLocalStorage()},deep:!0},returnProductData:{handler(){this.saveProductDataToLocalStorage()},deep:!0},khachHang:{handler(t){localStorage.setItem("khachHang",t)}}},created(){this.loadProductDataFromLocalStorage(),this.fetchDVT()}},wt=t=>(Cc("data-v-321aed21"),t=t(),bc(),t),gE={class:"container"},mE={class:"khach-hang"},yE=wt(()=>P("p",null,"Khách hàng:",-1)),vE={class:"table"},EE=wt(()=>P("caption",null," Hóa đơn ",-1)),CE=wt(()=>P("tr",null,[P("td",{scope:"col",class:"table-header stt"}),P("td",{scope:"col",class:"table-header val-sl"},"Sl"),P("td",{scope:"col",class:"table-header val-dvt"},"ĐVT"),P("td",{scope:"col",class:"table-header ten_sp"},"Tên SP"),P("td",{scope:"col",class:"table-header val-gia_sp"},"Giá"),P("td",{scope:"col",class:"table-header val-thanh_tien"},"TT"),P("td",{scope:"col",class:"table-header val-hanh_dong"})],-1)),bE={scope:"col"},wE={scope:"value",class:"val-sl"},SE=["onUpdate:modelValue","onInput"],IE={scope:"value",class:"val-dvt dvt-style"},TE=["onUpdate:modelValue"],RE=wt(()=>P("option",{value:""},"---",-1)),NE=["value"],xE={scope:"value"},AE=["onUpdate:modelValue"],PE={scope:"value",class:"val-gia_sp"},OE=["onUpdate:modelValue","onInput"],DE={scope:"col",class:"val-thanh_tien thanh_tien_style"},kE=["value"],ME=["onClick"],LE=wt(()=>P("p",null,"⌫",-1)),FE=[LE],HE={class:"table"},BE=wt(()=>P("caption",null," Hàng thu về ",-1)),UE=wt(()=>P("tr",null,[P("td",{scope:"col",class:"table-header stt"}),P("td",{scope:"col",class:"table-header val-sl"},"Sl"),P("td",{scope:"col",class:"table-header val-dvt"},"ĐVT"),P("td",{scope:"col",class:"table-header ten_sp"},"Tên SP"),P("td",{scope:"col",class:"table-header val-gia_sp"},"Giá"),P("td",{scope:"col",class:"table-header val-thanh_tien"},"TT"),P("td",{scope:"col",class:"table-header val-hanh_dong"})],-1)),VE={scope:"col"},WE={scope:"value",class:"val-sl"},$E=["onUpdate:modelValue","onInput"],jE={scope:"value",class:"val-dvt dvt-style"},GE=["onUpdate:modelValue"],qE=wt(()=>P("option",{value:""},"---",-1)),zE=["value"],KE={scope:"value"},YE=["onUpdate:modelValue"],QE={scope:"value",class:"val-gia_sp"},JE=["onUpdate:modelValue","onInput"],XE={scope:"col",class:"val-thanh_tien thanh_tien_style"},ZE=["value"],eC=["onClick"],tC=wt(()=>P("p",null,"⌫",-1)),nC=[tC],sC={class:"tong-tien"},iC={class:"btn-wrap"};function rC(t,e,n,s,i,r){return Ge(),it("div",gE,[P("div",mE,[yE,ht(P("input",{required:"","onUpdate:modelValue":e[0]||(e[0]=o=>i.khachHang=o)},null,512),[[Kt,i.khachHang]])]),P("table",vE,[EE,CE,(Ge(!0),it(Fe,null,Us(i.productData,(o,l)=>(Ge(),it("tr",{key:l},[P("td",bE,mn(l+1),1),P("td",wE,[ht(P("input",{type:"number","onUpdate:modelValue":a=>o.sl=a,class:"sl-input",onInput:a=>r.calculateTotal(o)},null,40,SE),[[Kt,o.sl]])]),P("td",IE,[ht(P("select",{class:"dvt-input","onUpdate:modelValue":a=>o.dvt=a},[RE,(Ge(!0),it(Fe,null,Us(i.dvt,(a,c)=>(Ge(),it("option",{key:c,value:a.value},mn(a.key),9,NE))),128))],8,TE),[[Ol,o.dvt]])]),P("td",xE,[ht(P("input",{type:"text","onUpdate:modelValue":a=>o.tenSp=a,class:"ten_sp-input"},null,8,AE),[[Kt,o.tenSp]])]),P("td",PE,[ht(P("input",{type:"number",class:"gia-input","onUpdate:modelValue":a=>o.gia=a,onInput:a=>r.calculateTotal(o)},null,40,OE),[[Kt,o.gia]])]),P("td",DE,[P("input",{class:"thanh_tien-input",value:o.thanhtien,readonly:""},null,8,kE)]),P("td",{class:"val-hanh_dong",onClick:a=>r.removeProduct(l,"product")},FE,8,ME)]))),128))]),P("button",{class:"btn",style:{"margin-top":"10px"},onClick:e[1]||(e[1]=(...o)=>r.addProduct&&r.addProduct(...o))},"+"),P("table",HE,[BE,UE,(Ge(!0),it(Fe,null,Us(i.returnProductData,(o,l)=>(Ge(),it("tr",{key:l},[P("td",VE,mn(l+1),1),P("td",WE,[ht(P("input",{type:"number","onUpdate:modelValue":a=>o.sl=a,class:"sl-input",onInput:a=>r.calculateTotal(o)},null,40,$E),[[Kt,o.sl]])]),P("td",jE,[ht(P("select",{class:"dvt-input","onUpdate:modelValue":a=>o.dvt=a},[qE,(Ge(!0),it(Fe,null,Us(i.dvt,(a,c)=>(Ge(),it("option",{key:c,value:a.value},mn(a.key),9,zE))),128))],8,GE),[[Ol,o.dvt]])]),P("td",KE,[ht(P("input",{type:"text","onUpdate:modelValue":a=>o.tenSp=a,class:"ten_sp-input"},null,8,YE),[[Kt,o.tenSp]])]),P("td",QE,[ht(P("input",{type:"number",class:"gia-input","onUpdate:modelValue":a=>o.gia=a,onInput:a=>r.calculateTotal(o)},null,40,JE),[[Kt,o.gia]])]),P("td",XE,[P("input",{class:"thanh_tien-input",value:o.thanhtien,readonly:""},null,8,ZE)]),P("td",{class:"val-hanh_dong",onClick:a=>r.removeProduct(l,"return_product")},nC,8,eC)]))),128))]),P("button",{class:"btn",style:{"margin-top":"10px"},onClick:e[2]||(e[2]=(...o)=>r.addReturnProduct&&r.addReturnProduct(...o))},"+"),P("p",sC,[es(" Tổng tiền: "),P("span",null,mn(i.tongTien),1)]),P("div",iC,[P("button",{class:"btn",onClick:e[3]||(e[3]=(...o)=>r.clearAll&&r.clearAll(...o))},"↺"),P("button",{class:"btn",onClick:e[4]||(e[4]=(...o)=>r.exportToJSON&&r.exportToJSON(...o))},"↪")])])}const oC=au(_E,[["render",rC],["__scopeId","data-v-321aed21"]]),lC=p_({history:jp("/"),routes:[{path:"/",name:"home",component:oC},{path:"/about",name:"about",component:()=>or(()=>import("./AboutView-GXNVfUqw.js"),__vite__mapDeps([0,1]))},{path:"/edit",name:"edit",component:()=>or(()=>import("./EditSp-Bvd0XiJv.js"),__vite__mapDeps([2,3]))},{path:"/goods",name:"goods",component:()=>or(()=>import("./AllGoods-Bvn-VFuN.js"),[])}]}),$h=up(b_);$h.use(lC);$h.mount("#app");export{Fe as F,au as _,uC as a,P as b,it as c,Gs as d,Us as e,es as f,$a as g,cC as h,Kt as i,bc as j,aC as k,Ge as o,Cc as p,js as r,Qr as s,mn as t,Ol as v,ht as w};
