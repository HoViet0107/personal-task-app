const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-CYRqCgb_.js","assets/AboutView-Dy2YmjQ5.css","assets/EditSp-DU69V2cf.js","assets/EditSp-DjMr529s.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qr(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const ce={},gn=[],Ve=()=>{},jh=()=>!1,yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gh=Object.prototype.hasOwnProperty,K=(t,e)=>Gh.call(t,e),B=Array.isArray,mn=t=>Cs(t)==="[object Map]",vi=t=>Cs(t)==="[object Set]",el=t=>Cs(t)==="[object Date]",V=t=>typeof t=="function",ge=t=>typeof t=="string",ot=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",ja=t=>(oe(t)||V(t))&&V(t.then)&&V(t.catch),Ga=Object.prototype.toString,Cs=t=>Ga.call(t),qh=t=>Cs(t).slice(8,-1),qa=t=>Cs(t)==="[object Object]",Zr=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zh=/-(\w)/g,Je=Ei(t=>t.replace(zh,(e,n)=>n?n.toUpperCase():"")),Kh=/\B([A-Z])/g,on=Ei(t=>t.replace(Kh,"-$1").toLowerCase()),Ci=Ei(t=>t.charAt(0).toUpperCase()+t.slice(1)),ji=Ei(t=>t?`on${Ci(t)}`:""),Lt=(t,e)=>!Object.is(t,e),Bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},za=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Qs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tl;const Ka=()=>tl||(tl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eo(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?Xh(s):eo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||oe(t))return t}const Yh=/;(?![^(]*\))/g,Qh=/:([^]+)/,Jh=/\/\*[^]*?\*\//g;function Xh(t){const e={};return t.replace(Jh,"").split(Yh).forEach(n=>{if(n){const s=n.split(Qh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function to(t){let e="";if(ge(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=to(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ef=Qr(Zh);function Ya(t){return!!t||t===""}function tf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=bi(t[s],e[s]);return n}function bi(t,e){if(t===e)return!0;let n=el(t),s=el(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ot(t),s=ot(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?tf(t,e):!1;if(n=oe(t),s=oe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!bi(t[o],e[o]))return!1}}return String(t)===String(e)}function nf(t,e){return t.findIndex(n=>bi(n,e))}const Qa=t=>!!(t&&t.__v_isRef===!0),Us=t=>ge(t)?t:t==null?"":B(t)||oe(t)&&(t.toString===Ga||!V(t.toString))?Qa(t)?Us(t.value):JSON.stringify(t,Ja,2):String(t),Ja=(t,e)=>Qa(e)?Ja(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Gi(s,r)+" =>"]=i,n),{})}:vi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gi(n))}:ot(e)?Gi(e):oe(e)&&!B(e)&&!qa(e)?String(e):e,Gi=(t,e="")=>{var n;return ot(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class sf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function rf(t,e=je){e&&e.active&&e.effects.push(t)}function of(){return je}let Xt;class no{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,rf(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ut();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(lf(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Wt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=At,n=Xt;try{return At=!0,Xt=this,this._runnings++,nl(this),this.fn()}finally{sl(this),this._runnings--,Xt=n,At=e}}stop(){this.active&&(nl(this),sl(this),this.onStop&&this.onStop(),this.active=!1)}}function lf(t){return t.value}function nl(t){t._trackId++,t._depsLength=0}function sl(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Xa(t.deps[e],t);t.deps.length=t._depsLength}}function Xa(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let At=!0,dr=0;const Za=[];function Ut(){Za.push(At),At=!1}function Wt(){const t=Za.pop();At=t===void 0?!0:t}function so(){dr++}function io(){for(dr--;!dr&&pr.length;)pr.shift()()}function ec(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Xa(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const pr=[];function tc(t,e,n){so();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&pr.push(s.scheduler)))}io()}const nc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},_r=new WeakMap,Zt=Symbol(""),gr=Symbol("");function De(t,e,n){if(At&&Xt){let s=_r.get(t);s||_r.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=nc(()=>s.delete(n))),ec(Xt,i)}}function ft(t,e,n,s,i,r){const o=_r.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&B(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!ot(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":B(t)?Zr(n)&&l.push(o.get("length")):(l.push(o.get(Zt)),mn(t)&&l.push(o.get(gr)));break;case"delete":B(t)||(l.push(o.get(Zt)),mn(t)&&l.push(o.get(gr)));break;case"set":mn(t)&&l.push(o.get(Zt));break}so();for(const a of l)a&&tc(a,4);io()}const af=Qr("__proto__,__v_isRef,__isVue"),sc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ot)),il=cf();function cf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)De(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ut(),so();const s=Z(this)[e].apply(this,n);return io(),Wt(),s}}),t}function uf(t){ot(t)||(t=String(t));const e=Z(this);return De(e,"has",t),e.hasOwnProperty(t)}class ic{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?wf:ac:r?lc:oc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=B(e);if(!i){if(o&&K(il,n))return Reflect.get(il,n,s);if(n==="hasOwnProperty")return uf}const l=Reflect.get(e,n,s);return(ot(n)?sc.has(n):af(n))||(i||De(e,"get",n),r)?l:ke(l)?o&&Zr(n)?l:l.value:oe(l)?i?uc(l):Si(l):l}}class rc extends ic{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=en(r);if(!Sn(s)&&!en(s)&&(r=Z(r),s=Z(s)),!B(e)&&ke(r)&&!ke(s))return a?!1:(r.value=s,!0)}const o=B(e)&&Zr(n)?Number(n)<e.length:K(e,n),l=Reflect.set(e,n,s,i);return e===Z(i)&&(o?Lt(s,r)&&ft(e,"set",n,s):ft(e,"add",n,s)),l}deleteProperty(e,n){const s=K(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ft(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!ot(n)||!sc.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",B(e)?"length":Zt),Reflect.ownKeys(e)}}class hf extends ic{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ff=new rc,df=new hf,pf=new rc(!0);const ro=t=>t,wi=t=>Reflect.getPrototypeOf(t);function Ps(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(Lt(e,r)&&De(i,"get",e),De(i,"get",r));const{has:o}=wi(i),l=s?ro:n?ao:is;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Os(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(Lt(t,i)&&De(s,"has",t),De(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ds(t,e=!1){return t=t.__v_raw,!e&&De(Z(t),"iterate",Zt),Reflect.get(t,"size",t)}function rl(t,e=!1){!e&&!Sn(t)&&!en(t)&&(t=Z(t));const n=Z(this);return wi(n).has.call(n,t)||(n.add(t),ft(n,"add",t,t)),this}function ol(t,e,n=!1){!n&&!Sn(e)&&!en(e)&&(e=Z(e));const s=Z(this),{has:i,get:r}=wi(s);let o=i.call(s,t);o||(t=Z(t),o=i.call(s,t));const l=r.call(s,t);return s.set(t,e),o?Lt(e,l)&&ft(s,"set",t,e):ft(s,"add",t,e),this}function ll(t){const e=Z(this),{has:n,get:s}=wi(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ft(e,"delete",t,void 0),r}function al(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function ks(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Z(o),a=e?ro:t?ao:is;return!t&&De(l,"iterate",Zt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Ms(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=mn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?ro:e?ao:is;return!e&&De(r,"iterate",a?gr:Zt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _f(){const t={get(r){return Ps(this,r)},get size(){return Ds(this)},has:Os,add:rl,set:ol,delete:ll,clear:al,forEach:ks(!1,!1)},e={get(r){return Ps(this,r,!1,!0)},get size(){return Ds(this)},has:Os,add(r){return rl.call(this,r,!0)},set(r,o){return ol.call(this,r,o,!0)},delete:ll,clear:al,forEach:ks(!1,!0)},n={get(r){return Ps(this,r,!0)},get size(){return Ds(this,!0)},has(r){return Os.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:ks(!0,!1)},s={get(r){return Ps(this,r,!0,!0)},get size(){return Ds(this,!0)},has(r){return Os.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ms(r,!1,!1),n[r]=Ms(r,!0,!1),e[r]=Ms(r,!1,!0),s[r]=Ms(r,!0,!0)}),[t,n,e,s]}const[gf,mf,yf,vf]=_f();function oo(t,e){const n=e?t?vf:yf:t?mf:gf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(K(n,i)&&i in s?n:s,i,r)}const Ef={get:oo(!1,!1)},Cf={get:oo(!1,!0)},bf={get:oo(!0,!1)};const oc=new WeakMap,lc=new WeakMap,ac=new WeakMap,wf=new WeakMap;function Sf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function If(t){return t.__v_skip||!Object.isExtensible(t)?0:Sf(qh(t))}function Si(t){return en(t)?t:lo(t,!1,ff,Ef,oc)}function cc(t){return lo(t,!1,pf,Cf,lc)}function uc(t){return lo(t,!0,df,bf,ac)}function lo(t,e,n,s,i){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=If(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function zn(t){return en(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function en(t){return!!(t&&t.__v_isReadonly)}function Sn(t){return!!(t&&t.__v_isShallow)}function hc(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Tf(t){return Object.isExtensible(t)&&za(t,"__v_skip",!0),t}const is=t=>oe(t)?Si(t):t,ao=t=>oe(t)?uc(t):t;class fc{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new no(()=>e(this._value),()=>Ws(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return(!e._cacheable||e.effect.dirty)&&Lt(e._value,e._value=e.effect.run())&&Ws(e,4),dc(e),e.effect._dirtyLevel>=2&&Ws(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rf(t,e,n=!1){let s,i;const r=V(t);return r?(s=t,i=Ve):(s=t.get,i=t.set),new fc(s,i,r||!i,n)}function dc(t){var e;At&&Xt&&(t=Z(t),ec(Xt,(e=t.dep)!=null?e:t.dep=nc(()=>t.dep=void 0,t instanceof fc?t:void 0)))}function Ws(t,e=4,n,s){t=Z(t);const i=t.dep;i&&tc(i,e)}function ke(t){return!!(t&&t.__v_isRef===!0)}function xf(t){return pc(t,!1)}function Nf(t){return pc(t,!0)}function pc(t,e){return ke(t)?t:new Af(t,e)}class Af{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:is(e)}get value(){return dc(this),this._value}set value(e){const n=this.__v_isShallow||Sn(e)||en(e);e=n?e:Z(e),Lt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:is(e),Ws(this,4))}}function dt(t){return ke(t)?t.value:t}const Pf={get:(t,e,n)=>dt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function _c(t){return zn(t)?t:new Proxy(t,Pf)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pt(t,e,n,s){try{return s?t(...s):t()}catch(i){Ii(i,e,n)}}function Ye(t,e,n,s){if(V(t)){const i=Pt(t,e,n,s);return i&&ja(i)&&i.catch(r=>{Ii(r,e,n)}),i}if(B(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Ye(t[r],e,n,s));return i}}function Ii(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Ut(),Pt(a,null,10,[t,o,l]),Wt();return}}Of(t,n,i,s)}function Of(t,e,n,s=!0){console.error(t)}let rs=!1,mr=!1;const Se=[];let rt=0;const yn=[];let Tt=null,Kt=0;const gc=Promise.resolve();let co=null;function uo(t){const e=co||gc;return t?e.then(this?t.bind(this):t):e}function Df(t){let e=rt+1,n=Se.length;for(;e<n;){const s=e+n>>>1,i=Se[s],r=os(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ho(t){(!Se.length||!Se.includes(t,rs&&t.allowRecurse?rt+1:rt))&&(t.id==null?Se.push(t):Se.splice(Df(t.id),0,t),mc())}function mc(){!rs&&!mr&&(mr=!0,co=gc.then(vc))}function kf(t){const e=Se.indexOf(t);e>rt&&Se.splice(e,1)}function Mf(t){B(t)?yn.push(...t):(!Tt||!Tt.includes(t,t.allowRecurse?Kt+1:Kt))&&yn.push(t),mc()}function cl(t,e,n=rs?rt+1:0){for(;n<Se.length;n++){const s=Se[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Se.splice(n,1),n--,s()}}}function yc(t){if(yn.length){const e=[...new Set(yn)].sort((n,s)=>os(n)-os(s));if(yn.length=0,Tt){Tt.push(...e);return}for(Tt=e,Kt=0;Kt<Tt.length;Kt++){const n=Tt[Kt];n.active!==!1&&n()}Tt=null,Kt=0}}const os=t=>t.id==null?1/0:t.id,Lf=(t,e)=>{const n=os(t)-os(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vc(t){mr=!1,rs=!0,Se.sort(Lf);try{for(rt=0;rt<Se.length;rt++){const e=Se[rt];e&&e.active!==!1&&Pt(e,e.i,e.i?15:14)}}finally{rt=0,Se.length=0,yc(),rs=!1,co=null,(Se.length||yn.length)&&vc()}}let Fe=null,Ti=null;function Js(t){const e=Fe;return Fe=t,Ti=t&&t.type.__scopeId||null,e}function Ec(t){Ti=t}function Cc(){Ti=null}function yr(t,e=Fe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yl(-1);const r=Js(e);let o;try{o=t(...i)}finally{Js(r),s._d&&yl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function St(t,e){if(Fe===null)return t;const n=Pi(Fe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=ce]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&Nt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function jt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Ut(),Ye(a,n,8,[t.el,l,t,e]),Wt())}}function bc(t,e){t.shapeFlag&6&&t.component?bc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wc(t,e){return V(t)?Te({name:t.name},e,{setup:t}):t}const Vs=t=>!!t.type.__asyncLoader,Sc=t=>t.type.__isKeepAlive;function Ff(t,e){Ic(t,"a",e)}function Hf(t,e){Ic(t,"da",e)}function Ic(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ri(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Sc(i.parent.vnode)&&Bf(s,e,n,i),i=i.parent}}function Bf(t,e,n,s){const i=Ri(e,t,s,!0);Tc(()=>{Xr(s[e],i)},n)}function Ri(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ut();const l=bs(n),a=Ye(e,n,t,o);return l(),Wt(),a});return s?i.unshift(r):i.push(r),r}}const yt=t=>(e,n=Ie)=>{(!Ai||t==="sp")&&Ri(t,(...s)=>e(...s),n)},Uf=yt("bm"),Wf=yt("m"),Vf=yt("bu"),$f=yt("u"),jf=yt("bum"),Tc=yt("um"),Gf=yt("sp"),qf=yt("rtg"),zf=yt("rtc");function Kf(t,e=Ie){Ri("ec",t,e)}const Yf="components";function Qf(t,e){return Xf(Yf,t,!0,e)||t}const Jf=Symbol.for("v-ndc");function Xf(t,e,n=!0,s=!1){const i=Fe||Ie;if(i){const r=i.type;{const l=$d(r,!1);if(l&&(l===e||l===Je(e)||l===Ci(Je(e))))return r}const o=ul(i[t]||r[t],e)||ul(i.appContext[t],e);return!o&&s?r:o}}function ul(t,e){return t&&(t[e]||t[Je(e)]||t[Ci(Je(e))])}function Zf(t,e,n,s){let i;const r=n;if(B(t)||ge(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(oe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r)}}else i=[];return i}const vr=t=>t?qc(t)?Pi(t):vr(t.parent):null,Kn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$emit:t=>t.emit,$options:t=>fo(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ho(t.update)}),$nextTick:t=>t.n||(t.n=uo.bind(t.proxy)),$watch:t=>bd.bind(t)}),qi=(t,e)=>t!==ce&&!t.__isScriptSetup&&K(t,e),ed={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(qi(s,e))return o[e]=1,s[e];if(i!==ce&&K(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,r[e];if(n!==ce&&K(n,e))return o[e]=4,n[e];Er&&(o[e]=0)}}const u=Kn[e];let h,f;if(u)return e==="$attrs"&&De(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ce&&K(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,K(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return qi(i,e)?(i[e]=n,!0):s!==ce&&K(s,e)?(s[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&K(t,o)||qi(e,o)||(l=r[0])&&K(l,o)||K(s,o)||K(Kn,o)||K(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hl(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Er=!0;function td(t){const e=fo(t),n=t.proxy,s=t.ctx;Er=!1,e.beforeCreate&&fl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:v,activated:w,deactivated:O,beforeDestroy:F,beforeUnmount:k,destroyed:P,unmounted:Y,render:de,renderTracked:$,renderTriggered:he,errorCaptured:Be,serverPrefetch:Vt,expose:Ze,inheritAttrs:Ct,components:$t,directives:et,filters:Fn}=e;if(c&&nd(c,s,null),o)for(const ne in o){const J=o[ne];V(J)&&(s[ne]=J.bind(n))}if(i){const ne=i.call(n,n);oe(ne)&&(t.data=Si(ne))}if(Er=!0,r)for(const ne in r){const J=r[ne],at=V(J)?J.bind(n,n):V(J.get)?J.get.bind(n,n):Ve,bt=!V(J)&&V(J.set)?J.set.bind(n):Ve,tt=Ge({get:at,set:bt});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ne=>tt.value=Ne})}if(l)for(const ne in l)Rc(l[ne],s,n,ne);if(a){const ne=V(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(J=>{$s(J,ne[J])})}u&&fl(u,t,"c");function me(ne,J){B(J)?J.forEach(at=>ne(at.bind(n))):J&&ne(J.bind(n))}if(me(Uf,h),me(Wf,f),me(Vf,_),me($f,v),me(Ff,w),me(Hf,O),me(Kf,Be),me(zf,$),me(qf,he),me(jf,k),me(Tc,Y),me(Gf,Vt),B(Ze))if(Ze.length){const ne=t.exposed||(t.exposed={});Ze.forEach(J=>{Object.defineProperty(ne,J,{get:()=>n[J],set:at=>n[J]=at})})}else t.exposed||(t.exposed={});de&&t.render===Ve&&(t.render=de),Ct!=null&&(t.inheritAttrs=Ct),$t&&(t.components=$t),et&&(t.directives=et)}function nd(t,e,n=Ve){B(t)&&(t=Cr(t));for(const s in t){const i=t[s];let r;oe(i)?"default"in i?r=pt(i.from||s,i.default,!0):r=pt(i.from||s):r=pt(i),ke(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function fl(t,e,n){Ye(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rc(t,e,n,s){const i=s.includes(".")?Wc(n,s):()=>n[s];if(ge(t)){const r=e[t];V(r)&&js(i,r)}else if(V(t))js(i,t.bind(n));else if(oe(t))if(B(t))t.forEach(r=>Rc(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&js(i,r,t)}}function fo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Xs(a,c,o,!0)),Xs(a,e,o)),oe(e)&&r.set(e,a),a}function Xs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Xs(t,r,n,!0),i&&i.forEach(o=>Xs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=sd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const sd={data:dl,props:pl,emits:pl,methods:Gn,computed:Gn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Gn,directives:Gn,watch:rd,provide:dl,inject:id};function dl(t,e){return e?t?function(){return Te(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function id(t,e){return Gn(Cr(t),Cr(e))}function Cr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Gn(t,e){return t?Te(Object.create(null),t,e):e}function pl(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Te(Object.create(null),hl(t),hl(e??{})):e}function rd(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function xc(){return{app:null,config:{isNativeTag:jh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let od=0;function ld(t,e){return function(s,i=null){V(s)||(s=Te({},s)),i!=null&&!oe(i)&&(i=null);const r=xc(),o=new WeakSet;let l=!1;const a=r.app={_uid:od++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Gd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(a,...u)):V(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=be(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Pi(f.component)}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){const u=vn;vn=a;try{return c()}finally{vn=u}}};return a}}let vn=null;function $s(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function pt(t,e,n=!1){const s=Ie||Fe;if(s||vn){const i=vn?vn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}const Nc={},Ac=()=>Object.create(Nc),Pc=t=>Object.getPrototypeOf(t)===Nc;function ad(t,e,n,s=!1){const i={},r=Ac();t.propsDefaults=Object.create(null),Oc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:cc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function cd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Z(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(xi(t.emitsOptions,f))continue;const _=e[f];if(a)if(K(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const v=Je(f);i[v]=br(a,l,v,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Oc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!K(e,h)&&((u=on(h))===h||!K(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=br(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!K(e,h))&&(delete r[h],c=!0)}c&&ft(t.attrs,"set","")}function Oc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(qn(a))continue;const c=e[a];let u;i&&K(i,u=Je(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:xi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=Z(n),c=l||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=br(i,a,h,c[h],t,!K(c,h))}}return o}function br(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=K(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=bs(i);s=c[n]=a.call(null,e),u()}}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===on(n))&&(s=!0))}return s}const ud=new WeakMap;function Dc(t,e,n=!1){const s=n?ud:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!V(t)){const u=h=>{a=!0;const[f,_]=Dc(h,e,!0);Te(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return oe(t)&&s.set(t,gn),gn;if(B(r))for(let u=0;u<r.length;u++){const h=Je(r[u]);_l(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=Je(u);if(_l(h)){const f=r[u],_=o[h]=B(f)||V(f)?{type:f}:Te({},f),v=_.type;let w=!1,O=!0;if(B(v))for(let F=0;F<v.length;++F){const k=v[F],P=V(k)&&k.name;if(P==="Boolean"){w=!0;break}else P==="String"&&(O=!1)}else w=V(v)&&v.name==="Boolean";_[0]=w,_[1]=O,(w||K(_,"default"))&&l.push(h)}}const c=[o,l];return oe(t)&&s.set(t,c),c}function _l(t){return t[0]!=="$"&&!qn(t)}const kc=t=>t[0]==="_"||t==="$stable",po=t=>B(t)?t.map(it):[it(t)],hd=(t,e,n)=>{if(e._n)return e;const s=yr((...i)=>po(e(...i)),n);return s._c=!1,s},Mc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(kc(i))continue;const r=t[i];if(V(r))e[i]=hd(i,r,s);else if(r!=null){const o=po(r);e[i]=()=>o}}},Lc=(t,e)=>{const n=po(e);t.slots.default=()=>n},Fc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},fd=(t,e,n)=>{const s=t.slots=Ac();if(t.vnode.shapeFlag&32){const i=e._;i?(Fc(s,e,n),n&&za(s,"_",i,!0)):Mc(e,s)}else e&&Lc(t,e)},dd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Fc(i,e,n):(r=!e.$stable,Mc(e,i)),o=e}else e&&(Lc(t,e),o={default:1});if(r)for(const l in i)!kc(l)&&o[l]==null&&delete i[l]};function wr(t,e,n,s,i=!1){if(B(t)){t.forEach((f,_)=>wr(f,e&&(B(e)?e[_]:e),n,s,i));return}if(Vs(s)&&!i)return;const r=s.shapeFlag&4?Pi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ge(c)?(u[c]=null,K(h,c)&&(h[c]=null)):ke(c)&&(c.value=null)),V(a))Pt(a,l,12,[o,u]);else{const f=ge(a),_=ke(a);if(f||_){const v=()=>{if(t.f){const w=f?K(h,a)?h[a]:u[a]:a.value;i?B(w)&&Xr(w,r):B(w)?w.includes(r)||w.push(r):f?(u[a]=[r],K(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,K(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Ae(v,n)):v()}}}const pd=Symbol("_vte"),_d=t=>t.__isTeleport,Ae=Ad;function gd(t){return md(t)}function md(t,e){const n=Ka();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Ve,insertStaticContent:v}=t,w=(d,p,g,E=null,m=null,b=null,R=void 0,I=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Bn(d,p)&&(E=y(d),Ne(d,m,b,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:A,shapeFlag:L}=p;switch(C){case Ni:O(d,p,g,E);break;case tn:F(d,p,g,E);break;case Gs:d==null&&k(p,g,E,R);break;case We:$t(d,p,g,E,m,b,R,I,T);break;default:L&1?de(d,p,g,E,m,b,R,I,T):L&6?et(d,p,g,E,m,b,R,I,T):(L&64||L&128)&&C.process(d,p,g,E,m,b,R,I,T,D)}A!=null&&m&&wr(A,d&&d.ref,b,p||d,!p)},O=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},F=(d,p,g,E)=>{d==null?s(p.el=a(p.children||""),g,E):p.el=d.el},k=(d,p,g,E)=>{[d.el,d.anchor]=v(d.children,p,g,E,d.el,d.anchor)},P=({el:d,anchor:p},g,E)=>{let m;for(;d&&d!==p;)m=f(d),s(d,g,E),d=m;s(p,g,E)},Y=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},de=(d,p,g,E,m,b,R,I,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null?$(p,g,E,m,b,R,I,T):Vt(d,p,m,b,R,I,T)},$=(d,p,g,E,m,b,R,I)=>{let T,C;const{props:A,shapeFlag:L,transition:M,dirs:W}=d;if(T=d.el=o(d.type,b,A&&A.is,A),L&8?u(T,d.children):L&16&&Be(d.children,T,null,E,m,zi(d,b),R,I),W&&jt(d,null,E,"created"),he(T,d,d.scopeId,R,E),A){for(const le in A)le!=="value"&&!qn(le)&&r(T,le,null,A[le],b,E);"value"in A&&r(T,"value",null,A.value,b),(C=A.onVnodeBeforeMount)&&st(C,E,d)}W&&jt(d,null,E,"beforeMount");const G=yd(m,M);G&&M.beforeEnter(T),s(T,p,g),((C=A&&A.onVnodeMounted)||G||W)&&Ae(()=>{C&&st(C,E,d),G&&M.enter(T),W&&jt(d,null,E,"mounted")},m)},he=(d,p,g,E,m)=>{if(g&&_(d,g),E)for(let b=0;b<E.length;b++)_(d,E[b]);if(m){let b=m.subTree;if(p===b){const R=m.vnode;he(d,R,R.scopeId,R.slotScopeIds,m.parent)}}},Be=(d,p,g,E,m,b,R,I,T=0)=>{for(let C=T;C<d.length;C++){const A=d[C]=I?Rt(d[C]):it(d[C]);w(null,A,p,g,E,m,b,R,I)}},Vt=(d,p,g,E,m,b,R)=>{const I=p.el=d.el;let{patchFlag:T,dynamicChildren:C,dirs:A}=p;T|=d.patchFlag&16;const L=d.props||ce,M=p.props||ce;let W;if(g&&Gt(g,!1),(W=M.onVnodeBeforeUpdate)&&st(W,g,p,d),A&&jt(p,d,g,"beforeUpdate"),g&&Gt(g,!0),(L.innerHTML&&M.innerHTML==null||L.textContent&&M.textContent==null)&&u(I,""),C?Ze(d.dynamicChildren,C,I,g,E,zi(p,m),b):R||J(d,p,I,null,g,E,zi(p,m),b,!1),T>0){if(T&16)Ct(I,L,M,g,m);else if(T&2&&L.class!==M.class&&r(I,"class",null,M.class,m),T&4&&r(I,"style",L.style,M.style,m),T&8){const G=p.dynamicProps;for(let le=0;le<G.length;le++){const X=G[le],ye=L[X],$e=M[X];($e!==ye||X==="value")&&r(I,X,ye,$e,m,g)}}T&1&&d.children!==p.children&&u(I,p.children)}else!R&&C==null&&Ct(I,L,M,g,m);((W=M.onVnodeUpdated)||A)&&Ae(()=>{W&&st(W,g,p,d),A&&jt(p,d,g,"updated")},E)},Ze=(d,p,g,E,m,b,R)=>{for(let I=0;I<p.length;I++){const T=d[I],C=p[I],A=T.el&&(T.type===We||!Bn(T,C)||T.shapeFlag&70)?h(T.el):g;w(T,C,A,null,E,m,b,R,!0)}},Ct=(d,p,g,E,m)=>{if(p!==g){if(p!==ce)for(const b in p)!qn(b)&&!(b in g)&&r(d,b,p[b],null,m,E);for(const b in g){if(qn(b))continue;const R=g[b],I=p[b];R!==I&&b!=="value"&&r(d,b,I,R,m,E)}"value"in g&&r(d,"value",p.value,g.value,m)}},$t=(d,p,g,E,m,b,R,I,T)=>{const C=p.el=d?d.el:l(""),A=p.anchor=d?d.anchor:l("");let{patchFlag:L,dynamicChildren:M,slotScopeIds:W}=p;W&&(I=I?I.concat(W):W),d==null?(s(C,g,E),s(A,g,E),Be(p.children||[],g,A,m,b,R,I,T)):L>0&&L&64&&M&&d.dynamicChildren?(Ze(d.dynamicChildren,M,g,m,b,R,I),(p.key!=null||m&&p===m.subTree)&&Hc(d,p,!0)):J(d,p,g,A,m,b,R,I,T)},et=(d,p,g,E,m,b,R,I,T)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?m.ctx.activate(p,g,E,R,T):Fn(p,g,E,m,b,R,T):an(d,p,T)},Fn=(d,p,g,E,m,b,R)=>{const I=d.component=Hd(d,E,m);if(Sc(d)&&(I.ctx.renderer=D),Bd(I,!1,R),I.asyncDep){if(m&&m.registerDep(I,me,R),!d.el){const T=I.subTree=be(tn);F(null,T,p,g)}}else me(I,d,p,g,m,b,R)},an=(d,p,g)=>{const E=p.component=d.component;if(Rd(d,p,g))if(E.asyncDep&&!E.asyncResolved){ne(E,p,g);return}else E.next=p,kf(E.update),E.effect.dirty=!0,E.update();else p.el=d.el,E.vnode=p},me=(d,p,g,E,m,b,R)=>{const I=()=>{if(d.isMounted){let{next:A,bu:L,u:M,parent:W,vnode:G}=d;{const hn=Bc(d);if(hn){A&&(A.el=G.el,ne(d,A,R)),hn.asyncDep.then(()=>{d.isUnmounted||I()});return}}let le=A,X;Gt(d,!1),A?(A.el=G.el,ne(d,A,R)):A=G,L&&Bs(L),(X=A.props&&A.props.onVnodeBeforeUpdate)&&st(X,W,A,G),Gt(d,!0);const ye=Ki(d),$e=d.subTree;d.subTree=ye,w($e,ye,h($e.el),y($e),d,m,b),A.el=ye.el,le===null&&xd(d,ye.el),M&&Ae(M,m),(X=A.props&&A.props.onVnodeUpdated)&&Ae(()=>st(X,W,A,G),m)}else{let A;const{el:L,props:M}=p,{bm:W,m:G,parent:le}=d,X=Vs(p);if(Gt(d,!1),W&&Bs(W),!X&&(A=M&&M.onVnodeBeforeMount)&&st(A,le,p),Gt(d,!0),L&&ue){const ye=()=>{d.subTree=Ki(d),ue(L,d.subTree,d,m,null)};X?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=Ki(d);w(null,ye,g,E,d,m,b),p.el=ye.el}if(G&&Ae(G,m),!X&&(A=M&&M.onVnodeMounted)){const ye=p;Ae(()=>st(A,le,ye),m)}(p.shapeFlag&256||le&&Vs(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Ae(d.a,m),d.isMounted=!0,p=g=E=null}},T=d.effect=new no(I,Ve,()=>ho(C),d.scope),C=d.update=()=>{T.dirty&&T.run()};C.i=d,C.id=d.uid,Gt(d,!0),C()},ne=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,cd(d,p.props,E,g),dd(d,p.children,g),Ut(),cl(d),Wt()},J=(d,p,g,E,m,b,R,I,T=!1)=>{const C=d&&d.children,A=d?d.shapeFlag:0,L=p.children,{patchFlag:M,shapeFlag:W}=p;if(M>0){if(M&128){bt(C,L,g,E,m,b,R,I,T);return}else if(M&256){at(C,L,g,E,m,b,R,I,T);return}}W&8?(A&16&&Ue(C,m,b),L!==C&&u(g,L)):A&16?W&16?bt(C,L,g,E,m,b,R,I,T):Ue(C,m,b,!0):(A&8&&u(g,""),W&16&&Be(L,g,E,m,b,R,I,T))},at=(d,p,g,E,m,b,R,I,T)=>{d=d||gn,p=p||gn;const C=d.length,A=p.length,L=Math.min(C,A);let M;for(M=0;M<L;M++){const W=p[M]=T?Rt(p[M]):it(p[M]);w(d[M],W,g,null,m,b,R,I,T)}C>A?Ue(d,m,b,!0,!1,L):Be(p,g,E,m,b,R,I,T,L)},bt=(d,p,g,E,m,b,R,I,T)=>{let C=0;const A=p.length;let L=d.length-1,M=A-1;for(;C<=L&&C<=M;){const W=d[C],G=p[C]=T?Rt(p[C]):it(p[C]);if(Bn(W,G))w(W,G,g,null,m,b,R,I,T);else break;C++}for(;C<=L&&C<=M;){const W=d[L],G=p[M]=T?Rt(p[M]):it(p[M]);if(Bn(W,G))w(W,G,g,null,m,b,R,I,T);else break;L--,M--}if(C>L){if(C<=M){const W=M+1,G=W<A?p[W].el:E;for(;C<=M;)w(null,p[C]=T?Rt(p[C]):it(p[C]),g,G,m,b,R,I,T),C++}}else if(C>M)for(;C<=L;)Ne(d[C],m,b,!0),C++;else{const W=C,G=C,le=new Map;for(C=G;C<=M;C++){const Le=p[C]=T?Rt(p[C]):it(p[C]);Le.key!=null&&le.set(Le.key,C)}let X,ye=0;const $e=M-G+1;let hn=!1,Jo=0;const Hn=new Array($e);for(C=0;C<$e;C++)Hn[C]=0;for(C=W;C<=L;C++){const Le=d[C];if(ye>=$e){Ne(Le,m,b,!0);continue}let nt;if(Le.key!=null)nt=le.get(Le.key);else for(X=G;X<=M;X++)if(Hn[X-G]===0&&Bn(Le,p[X])){nt=X;break}nt===void 0?Ne(Le,m,b,!0):(Hn[nt-G]=C+1,nt>=Jo?Jo=nt:hn=!0,w(Le,p[nt],g,null,m,b,R,I,T),ye++)}const Xo=hn?vd(Hn):gn;for(X=Xo.length-1,C=$e-1;C>=0;C--){const Le=G+C,nt=p[Le],Zo=Le+1<A?p[Le+1].el:E;Hn[C]===0?w(null,nt,g,Zo,m,b,R,I,T):hn&&(X<0||C!==Xo[X]?tt(nt,g,Zo,2):X--)}}},tt=(d,p,g,E,m=null)=>{const{el:b,type:R,transition:I,children:T,shapeFlag:C}=d;if(C&6){tt(d.component.subTree,p,g,E);return}if(C&128){d.suspense.move(p,g,E);return}if(C&64){R.move(d,p,g,D);return}if(R===We){s(b,p,g);for(let L=0;L<T.length;L++)tt(T[L],p,g,E);s(d.anchor,p,g);return}if(R===Gs){P(d,p,g);return}if(E!==2&&C&1&&I)if(E===0)I.beforeEnter(b),s(b,p,g),Ae(()=>I.enter(b),m);else{const{leave:L,delayLeave:M,afterLeave:W}=I,G=()=>s(b,p,g),le=()=>{L(b,()=>{G(),W&&W()})};M?M(b,G,le):le()}else s(b,p,g)},Ne=(d,p,g,E=!1,m=!1)=>{const{type:b,props:R,ref:I,children:T,dynamicChildren:C,shapeFlag:A,patchFlag:L,dirs:M,cacheIndex:W}=d;if(L===-2&&(m=!1),I!=null&&wr(I,null,g,d,!0),W!=null&&(p.renderCache[W]=void 0),A&256){p.ctx.deactivate(d);return}const G=A&1&&M,le=!Vs(d);let X;if(le&&(X=R&&R.onVnodeBeforeUnmount)&&st(X,p,d),A&6)As(d.component,g,E);else{if(A&128){d.suspense.unmount(g,E);return}G&&jt(d,null,p,"beforeUnmount"),A&64?d.type.remove(d,p,g,D,E):C&&!C.hasOnce&&(b!==We||L>0&&L&64)?Ue(C,p,g,!1,!0):(b===We&&L&384||!m&&A&16)&&Ue(T,p,g),E&&cn(d)}(le&&(X=R&&R.onVnodeUnmounted)||G)&&Ae(()=>{X&&st(X,p,d),G&&jt(d,null,p,"unmounted")},g)},cn=d=>{const{type:p,el:g,anchor:E,transition:m}=d;if(p===We){un(g,E);return}if(p===Gs){Y(d);return}const b=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:R,delayLeave:I}=m,T=()=>R(g,b);I?I(d.el,b,T):T()}else b()},un=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},As=(d,p,g)=>{const{bum:E,scope:m,update:b,subTree:R,um:I,m:T,a:C}=d;gl(T),gl(C),E&&Bs(E),m.stop(),b&&(b.active=!1,Ne(R,d,p,g)),I&&Ae(I,p),Ae(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ue=(d,p,g,E=!1,m=!1,b=0)=>{for(let R=b;R<d.length;R++)Ne(d[R],p,g,E,m)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=f(d.anchor||d.el),g=p&&p[pd];return g?f(g):p};let N=!1;const x=(d,p,g)=>{d==null?p._vnode&&Ne(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,g),p._vnode=d,N||(N=!0,cl(),yc(),N=!1)},D={p:w,um:Ne,m:tt,r:cn,mt:Fn,mc:Be,pc:J,pbc:Ze,n:y,o:t};let ee,ue;return{render:x,hydrate:ee,createApp:ld(x,ee)}}function zi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hc(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Rt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Hc(o,l)),l.type===Ni&&(l.el=o.el)}}function vd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Bc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bc(e)}function gl(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Ed=Symbol.for("v-scx"),Cd=()=>pt(Ed),Ls={};function js(t,e,n){return Uc(t,e,n)}function Uc(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=ce){if(e&&r){const $=e;e=(...he)=>{$(...he),de()}}const a=Ie,c=$=>s===!0?$:Nt($,s===!1?1:void 0);let u,h=!1,f=!1;if(ke(t)?(u=()=>t.value,h=Sn(t)):zn(t)?(u=()=>c(t),h=!0):B(t)?(f=!0,h=t.some($=>zn($)||Sn($)),u=()=>t.map($=>{if(ke($))return $.value;if(zn($))return c($);if(V($))return Pt($,a,2)})):V(t)?e?u=()=>Pt(t,a,2):u=()=>(_&&_(),Ye(t,a,3,[v])):u=Ve,e&&s){const $=u;u=()=>Nt($())}let _,v=$=>{_=P.onStop=()=>{Pt($,a,4),_=P.onStop=void 0}},w;if(Ai)if(v=Ve,e?n&&Ye(e,a,3,[u(),f?[]:void 0,v]):u(),i==="sync"){const $=Cd();w=$.__watcherHandles||($.__watcherHandles=[])}else return Ve;let O=f?new Array(t.length).fill(Ls):Ls;const F=()=>{if(!(!P.active||!P.dirty))if(e){const $=P.run();(s||h||(f?$.some((he,Be)=>Lt(he,O[Be])):Lt($,O)))&&(_&&_(),Ye(e,a,3,[$,O===Ls?void 0:f&&O[0]===Ls?[]:O,v]),O=$)}else P.run()};F.allowRecurse=!!e;let k;i==="sync"?k=F:i==="post"?k=()=>Ae(F,a&&a.suspense):(F.pre=!0,a&&(F.id=a.uid),k=()=>ho(F));const P=new no(u,Ve,k),Y=of(),de=()=>{P.stop(),Y&&Xr(Y.effects,P)};return e?n?F():O=P.run():i==="post"?Ae(P.run.bind(P),a&&a.suspense):P.run(),w&&w.push(de),de}function bd(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?Wc(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=bs(this),l=Uc(i,r.bind(s),n);return o(),l}function Wc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Nt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ke(t))Nt(t.value,e,n);else if(B(t))for(let s=0;s<t.length;s++)Nt(t[s],e,n);else if(vi(t)||mn(t))t.forEach(s=>{Nt(s,e,n)});else if(qa(t)){for(const s in t)Nt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Nt(t[s],e,n)}return t}const wd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Je(e)}Modifiers`]||t[`${on(e)}Modifiers`];function Sd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&wd(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ge(u)?u.trim():u)),o.number&&(i=n.map(Qs)));let l,a=s[l=ji(e)]||s[l=ji(Je(e))];!a&&r&&(a=s[l=ji(on(e))]),a&&Ye(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ye(c,t,6,i)}}function Vc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const a=c=>{const u=Vc(c,e,!0);u&&(l=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(oe(t)&&s.set(t,null),null):(B(r)?r.forEach(a=>o[a]=null):Te(o,r),oe(t)&&s.set(t,o),o)}function xi(t,e){return!t||!yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,on(e))||K(t,e))}function Ki(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:f,setupState:_,ctx:v,inheritAttrs:w}=t,O=Js(t);let F,k;try{if(n.shapeFlag&4){const Y=i||s,de=Y;F=it(c.call(de,Y,u,h,_,f,v)),k=l}else{const Y=e;F=it(Y.length>1?Y(h,{attrs:l,slots:o,emit:a}):Y(h,null)),k=e.props?l:Id(l)}}catch(Y){Yn.length=0,Ii(Y,t,1),F=be(tn)}let P=F;if(k&&w!==!1){const Y=Object.keys(k),{shapeFlag:de}=P;Y.length&&de&7&&(r&&Y.some(Jr)&&(k=Td(k,r)),P=In(P,k,!1,!0))}return n.dirs&&(P=In(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),F=P,Js(O),F}const Id=t=>{let e;for(const n in t)(n==="class"||n==="style"||yi(n))&&((e||(e={}))[n]=t[n]);return e},Td=(t,e)=>{const n={};for(const s in t)(!Jr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Rd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ml(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!xi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ml(s,o,c):!0:!!o;return!1}function ml(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!xi(n,r))return!0}return!1}function xd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Nd=t=>t.__isSuspense;function Ad(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Mf(t)}const We=Symbol.for("v-fgt"),Ni=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Gs=Symbol.for("v-stc"),Yn=[];let He=null;function Qn(t=!1){Yn.push(He=t?null:[])}function Pd(){Yn.pop(),He=Yn[Yn.length-1]||null}let ls=1;function yl(t){ls+=t,t<0&&He&&(He.hasOnce=!0)}function $c(t){return t.dynamicChildren=ls>0?He||gn:null,Pd(),ls>0&&He&&He.push(t),t}function qs(t,e,n,s,i,r){return $c(U(t,e,n,s,i,r,!0))}function Od(t,e,n,s,i){return $c(be(t,e,n,s,i,!0))}function Sr(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const jc=({key:t})=>t??null,zs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||ke(t)||V(t)?{i:Fe,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,s=0,i=null,r=t===We?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jc(e),ref:e&&zs(e),scopeId:Ti,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return l?(_o(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ge(n)?8:16),ls>0&&!o&&He&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&He.push(a),a}const be=Dd;function Dd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Jf)&&(t=tn),Sr(t)){const l=In(t,e,!0);return n&&_o(l,n),ls>0&&!r&&He&&(l.shapeFlag&6?He[He.indexOf(t)]=l:He.push(l)),l.patchFlag=-2,l}if(jd(t)&&(t=t.__vccOpts),e){e=kd(e);let{class:l,style:a}=e;l&&!ge(l)&&(e.class=to(l)),oe(a)&&(hc(a)&&!B(a)&&(a=Te({},a)),e.style=eo(a))}const o=ge(t)?1:Nd(t)?128:_d(t)?64:oe(t)?4:V(t)?2:0;return U(t,e,n,s,i,o,r,!0)}function kd(t){return t?hc(t)||Pc(t)?Te({},t):t:null}function In(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Md(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&jc(c),ref:e&&e.ref?n&&r?B(r)?r.concat(zs(e)):[r,zs(e)]:zs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&bc(u,a.clone(u)),u}function Ir(t=" ",e=0){return be(Ni,null,t,e)}function Gc(t,e){const n=be(Gs,null,t);return n.staticCount=e,n}function VE(t="",e=!1){return e?(Qn(),Od(tn,null,t)):be(tn,null,t)}function it(t){return t==null||typeof t=="boolean"?be(tn):B(t)?be(We,null,t.slice()):typeof t=="object"?Rt(t):be(Ni,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function _o(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),_o(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Pc(e)?e._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),s&64?(n=16,e=[Ir(e)]):n=8);t.children=e,t.shapeFlag|=n}function Md(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=to([e.class,s.class]));else if(i==="style")e.style=eo([e.style,s.style]);else if(yi(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function st(t,e,n,s=null){Ye(t,e,7,[n,s])}const Ld=xc();let Fd=0;function Hd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Ld,r={uid:Fd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new sf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dc(s,i),emitsOptions:Vc(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Sd.bind(null,r),t.ce&&t.ce(r),r}let Ie=null,Zs,Tr;{const t=Ka(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Zs=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Tr=e("__VUE_SSR_SETTERS__",n=>Ai=n)}const bs=t=>{const e=Ie;return Zs(t),t.scope.on(),()=>{t.scope.off(),Zs(e)}},vl=()=>{Ie&&Ie.scope.off(),Zs(null)};function qc(t){return t.vnode.shapeFlag&4}let Ai=!1;function Bd(t,e=!1,n=!1){e&&Tr(e);const{props:s,children:i}=t.vnode,r=qc(t);ad(t,s,r,e),fd(t,i,n);const o=r?Ud(t,e):void 0;return e&&Tr(!1),o}function Ud(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ed);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Vd(t):null,r=bs(t);Ut();const o=Pt(s,t,0,[t.props,i]);if(Wt(),r(),ja(o)){if(o.then(vl,vl),e)return o.then(l=>{El(t,l,e)}).catch(l=>{Ii(l,t,0)});t.asyncDep=o}else El(t,o,e)}else zc(t,e)}function El(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=_c(e)),zc(t,n)}let Cl;function zc(t,e,n){const s=t.type;if(!t.render){if(!e&&Cl&&!s.render){const i=s.template||fo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Te(Te({isCustomElement:r,delimiters:l},o),a);s.render=Cl(i,c)}}t.render=s.render||Ve}{const i=bs(t);Ut();try{td(t)}finally{Wt(),i()}}}const Wd={get(t,e){return De(t,"get",""),t[e]}};function Vd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Wd),slots:t.slots,emit:t.emit,expose:e}}function Pi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_c(Tf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kn)return Kn[n](t)},has(e,n){return n in e||n in Kn}})):t.proxy}function $d(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function jd(t){return V(t)&&"__vccOpts"in t}const Ge=(t,e)=>Rf(t,e,Ai);function Kc(t,e,n){const s=arguments.length;return s===2?oe(e)&&!B(e)?Sr(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Sr(n)&&(n=[n]),be(t,e,n))}const Gd="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const qd="http://www.w3.org/2000/svg",zd="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,bl=ut&&ut.createElement("template"),Kd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ut.createElementNS(qd,t):e==="mathml"?ut.createElementNS(zd,t):n?ut.createElement(t,{is:n}):ut.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ut.createTextNode(t),createComment:t=>ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{bl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=bl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yd=Symbol("_vtc");function Qd(t,e,n){const s=t[Yd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wl=Symbol("_vod"),Jd=Symbol("_vsh"),Xd=Symbol(""),Zd=/(^|;)\s*display\s*:/;function ep(t,e,n){const s=t.style,i=ge(n);let r=!1;if(n&&!i){if(e)if(ge(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ks(s,l,"")}else for(const o in e)n[o]==null&&Ks(s,o,"");for(const o in n)o==="display"&&(r=!0),Ks(s,o,n[o])}else if(i){if(e!==n){const o=s[Xd];o&&(n+=";"+o),s.cssText=n,r=Zd.test(n)}}else e&&t.removeAttribute("style");wl in t&&(t[wl]=r?s.display:"",t[Jd]&&(s.display="none"))}const Sl=/\s*!important$/;function Ks(t,e,n){if(B(n))n.forEach(s=>Ks(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=tp(t,e);Sl.test(n)?t.setProperty(on(s),n.replace(Sl,""),"important"):t[s]=n}}const Il=["Webkit","Moz","ms"],Yi={};function tp(t,e){const n=Yi[e];if(n)return n;let s=Je(e);if(s!=="filter"&&s in t)return Yi[e]=s;s=Ci(s);for(let i=0;i<Il.length;i++){const r=Il[i]+s;if(r in t)return Yi[e]=r}return e}const Tl="http://www.w3.org/1999/xlink";function Rl(t,e,n,s,i,r=ef(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tl,e.slice(6,e.length)):t.setAttributeNS(Tl,e,n):n==null||r&&!Ya(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ot(n)?String(n):n)}function np(t,e,n,s){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Ya(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(e)}function Yt(t,e,n,s){t.addEventListener(e,n,s)}function sp(t,e,n,s){t.removeEventListener(e,n,s)}const xl=Symbol("_vei");function ip(t,e,n,s,i=null){const r=t[xl]||(t[xl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=rp(e);if(s){const c=r[e]=ap(s,i);Yt(t,l,c,a)}else o&&(sp(t,l,o,a),r[e]=void 0)}}const Nl=/(?:Once|Passive|Capture)$/;function rp(t){let e;if(Nl.test(t)){e={};let s;for(;s=t.match(Nl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let Qi=0;const op=Promise.resolve(),lp=()=>Qi||(op.then(()=>Qi=0),Qi=Date.now());function ap(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ye(cp(s,n.value),e,5,[s])};return n.value=t,n.attached=lp(),n}function cp(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,up=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Qd(t,s,o):e==="style"?ep(t,n,s):yi(e)?Jr(e)||ip(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hp(t,e,s,o))?(np(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rl(t,e,s,o,r,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rl(t,e,s,o))};function hp(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Al(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Al(e)&&ge(n)?!1:e in t}const ei=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Bs(e,n):e};function fp(t){t.target.composing=!0}function Pl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const En=Symbol("_assign"),fn={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[En]=ei(i);const r=s||i.props&&i.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Qs(l)),t[En](l)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",fp),Yt(t,"compositionend",Pl),Yt(t,"change",Pl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[En]=ei(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Qs(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Ol={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=vi(e);Yt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Qs(ti(o)):ti(o));t[En](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,uo(()=>{t._assigning=!1})}),t[En]=ei(s)},mounted(t,{value:e,modifiers:{number:n}}){Dl(t,e)},beforeUpdate(t,e,n){t[En]=ei(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Dl(t,e)}};function Dl(t,e,n){const s=t.multiple,i=B(e);if(!(s&&!i&&!vi(e))){for(let r=0,o=t.options.length;r<o;r++){const l=t.options[r],a=ti(l);if(s)if(i){const c=typeof a;c==="string"||c==="number"?l.selected=e.some(u=>String(u)===String(a)):l.selected=nf(e,a)>-1}else l.selected=e.has(a);else if(bi(ti(l),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ti(t){return"_value"in t?t._value:t.value}const dp=Te({patchProp:up},Kd);let kl;function pp(){return kl||(kl=gd(dp))}const _p=(...t)=>{const e=pp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=mp(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,gp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function gp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function mp(t){return ge(t)?document.querySelector(t):t}const yp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const pn=typeof document<"u";function vp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Ji(t,e){const n={};for(const s in e){const i=e[s];n[s]=Xe(i)?i.map(t):t(i)}return n}const Jn=()=>{},Xe=Array.isArray,Yc=/#/g,Ep=/&/g,Cp=/\//g,bp=/=/g,wp=/\?/g,Qc=/\+/g,Sp=/%5B/g,Ip=/%5D/g,Jc=/%5E/g,Tp=/%60/g,Xc=/%7B/g,Rp=/%7C/g,Zc=/%7D/g,xp=/%20/g;function go(t){return encodeURI(""+t).replace(Rp,"|").replace(Sp,"[").replace(Ip,"]")}function Np(t){return go(t).replace(Xc,"{").replace(Zc,"}").replace(Jc,"^")}function Rr(t){return go(t).replace(Qc,"%2B").replace(xp,"+").replace(Yc,"%23").replace(Ep,"%26").replace(Tp,"`").replace(Xc,"{").replace(Zc,"}").replace(Jc,"^")}function Ap(t){return Rr(t).replace(bp,"%3D")}function Pp(t){return go(t).replace(Yc,"%23").replace(wp,"%3F")}function Op(t){return t==null?"":Pp(t).replace(Cp,"%2F")}function as(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Dp=/\/$/,kp=t=>t.replace(Dp,"");function Xi(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Hp(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:as(o)}}function Mp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ml(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Tn(e.matched[s],n.matched[i])&&eu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fp(t[n],e[n]))return!1;return!0}function Fp(t,e){return Xe(t)?Ll(t,e):Xe(e)?Ll(e,t):t===e}function Ll(t,e){return Xe(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Hp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var cs;(function(t){t.pop="pop",t.push="push"})(cs||(cs={}));var Xn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xn||(Xn={}));function Bp(t){if(!t)if(pn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kp(t)}const Up=/^[^#]+#/;function Wp(t,e){return t.replace(Up,"#")+e}function Vp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Oi=()=>({left:window.scrollX,top:window.scrollY});function $p(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Vp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Fl(t,e){return(history.state?history.state.position-e:-1)+t}const xr=new Map;function jp(t,e){xr.set(t,e)}function Gp(t){const e=xr.get(t);return xr.delete(t),e}let qp=()=>location.protocol+"//"+location.host;function tu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),Ml(a,"")}return Ml(n,t)+s+i}function zp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=tu(t,location),v=n.value,w=e.value;let O=0;if(f){if(n.value=_,e.value=f,o&&o===v){o=null;return}O=w?f.position-w.position:0}else s(_);i.forEach(F=>{F(n.value,v,{delta:O,type:cs.pop,direction:O?O>0?Xn.forward:Xn.back:Xn.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const v=i.indexOf(f);v>-1&&i.splice(v,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(te({},f.state,{scroll:Oi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function Hl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Oi():null}}function Kp(t){const{history:e,location:n}=window,s={value:tu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:qp()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=te({},e.state,Hl(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=te({},i.value,e.state,{forward:a,scroll:Oi()});r(u.current,u,!0);const h=te({},Hl(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function Yp(t){t=Bp(t);const e=Kp(t),n=zp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:Wp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Qp(t){return typeof t=="string"||t&&typeof t=="object"}function nu(t){return typeof t=="string"||typeof t=="symbol"}const su=Symbol("");var Bl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bl||(Bl={}));function Rn(t,e){return te(new Error,{type:t,[su]:!0},e)}function ct(t,e){return t instanceof Error&&su in t&&(e==null||!!(t.type&e))}const Ul="[^/]+?",Jp={sensitive:!1,strict:!1,start:!0,end:!0},Xp=/[.+*?^${}()[\]/\\]/g;function Zp(t,e){const n=te({},Jp,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Xp,"\\$&"),_+=40;else if(f.type===1){const{value:v,repeatable:w,optional:O,regexp:F}=f;r.push({name:v,repeatable:w,optional:O});const k=F||Ul;if(k!==Ul){_+=10;try{new RegExp(`(${k})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+Y.message)}}let P=w?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(P=O&&c.length<2?`(?:/${P})`:"/"+P),O&&(P+="?"),i+=P,_+=20,O&&(_+=-8),w&&(_+=-20),k===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",v=r[f-1];h[v.name]=_&&v.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:v,repeatable:w,optional:O}=_,F=v in c?c[v]:"";if(Xe(F)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=Xe(F)?F.join("/"):F;if(!k)if(O)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function e_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function iu(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=e_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Wl(s))return 1;if(Wl(i))return-1}return i.length-s.length}function Wl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const t_={type:0,value:""},n_=/[a-zA-Z0-9_]/;function s_(t){if(!t)return[[]];if(t==="/")return[[t_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:n_.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function i_(t,e,n){const s=Zp(s_(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function r_(t,e){const n=[],s=new Map;e=jl({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,f,_){const v=!_,w=o_(h);w.aliasOf=_&&_.record;const O=jl(e,h),F=[w];if("alias"in h){const Y=typeof h.alias=="string"?[h.alias]:h.alias;for(const de of Y)F.push(te({},w,{components:_?_.record.components:w.components,path:de,aliasOf:_?_.record:w}))}let k,P;for(const Y of F){const{path:de}=Y;if(f&&de[0]!=="/"){const $=f.record.path,he=$[$.length-1]==="/"?"":"/";Y.path=f.record.path+(de&&he+de)}if(k=i_(Y,f,O),_?_.alias.push(k):(P=P||k,P!==k&&P.alias.push(k),v&&h.name&&!$l(k)&&o(h.name)),ru(k)&&a(k),w.children){const $=w.children;for(let he=0;he<$.length;he++)r($[he],k,_&&_.children[he])}_=_||k}return P?()=>{o(P)}:Jn}function o(h){if(nu(h)){const f=s.get(h);f&&(s.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function l(){return n}function a(h){const f=c_(h,n);n.splice(f,0,h),h.record.name&&!$l(h)&&s.set(h.record.name,h)}function c(h,f){let _,v={},w,O;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw Rn(1,{location:h});O=_.record.name,v=te(Vl(f.params,_.keys.filter(P=>!P.optional).concat(_.parent?_.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),h.params&&Vl(h.params,_.keys.map(P=>P.name))),w=_.stringify(v)}else if(h.path!=null)w=h.path,_=n.find(P=>P.re.test(w)),_&&(v=_.parse(w),O=_.record.name);else{if(_=f.name?s.get(f.name):n.find(P=>P.re.test(f.path)),!_)throw Rn(1,{location:h,currentLocation:f});O=_.record.name,v=te({},f.params,h.params),w=_.stringify(v)}const F=[];let k=_;for(;k;)F.unshift(k.record),k=k.parent;return{name:O,path:w,params:v,matched:F,meta:a_(F)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:i}}function Vl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function o_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:l_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function l_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function $l(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function a_(t){return t.reduce((e,n)=>te(e,n.meta),{})}function jl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function c_(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;iu(t,e[r])<0?s=r:n=r+1}const i=u_(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function u_(t){let e=t;for(;e=e.parent;)if(ru(e)&&iu(t,e)===0)return e}function ru({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function h_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Qc," "),o=r.indexOf("="),l=as(o<0?r:r.slice(0,o)),a=o<0?null:as(r.slice(o+1));if(l in e){let c=e[l];Xe(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Gl(t){let e="";for(let n in t){const s=t[n];if(n=Ap(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(s)?s.map(r=>r&&Rr(r)):[s&&Rr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function f_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Xe(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const d_=Symbol(""),ql=Symbol(""),mo=Symbol(""),ou=Symbol(""),Nr=Symbol("");function Un(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const c=f=>{f===!1?a(Rn(4,{from:n,to:e})):f instanceof Error?a(f):Qp(f)?a(Rn(2,{from:e,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),l())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function Zi(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let a=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(p_(a)){const u=(a.__vccOpts||a)[e];u&&r.push(xt(u,n,s,o,l,i))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const h=vp(u)?u.default:u;o.components[l]=h;const _=(h.__vccOpts||h)[e];return _&&xt(_,n,s,o,l,i)()}))}}return r}function p_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zl(t){const e=pt(mo),n=pt(ou),s=Ge(()=>{const a=dt(t.to);return e.resolve(a)}),i=Ge(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Tn.bind(null,u));if(f>-1)return f;const _=Kl(a[c-2]);return c>1&&Kl(u)===_&&h[h.length-1].path!==_?h.findIndex(Tn.bind(null,a[c-2])):f}),r=Ge(()=>i.value>-1&&m_(n.params,s.value.params)),o=Ge(()=>i.value>-1&&i.value===n.matched.length-1&&eu(n.params,s.value.params));function l(a={}){return g_(a)?e[dt(t.replace)?"replace":"push"](dt(t.to)).catch(Jn):Promise.resolve()}return{route:s,href:Ge(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const __=wc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zl,setup(t,{slots:e}){const n=Si(zl(t)),{options:s}=pt(mo),i=Ge(()=>({[Yl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Kc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Ar=__;function g_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function m_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Xe(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Kl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yl=(t,e,n)=>t??e??n,y_=wc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=pt(Nr),i=Ge(()=>t.route||s.value),r=pt(ql,0),o=Ge(()=>{let c=dt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Ge(()=>i.value.matched[o.value]);$s(ql,Ge(()=>o.value+1)),$s(d_,l),$s(Nr,i);const a=xf();return js(()=>[a.value,l.value,t.name],([c,u,h],[f,_,v])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Tn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Ql(n.default,{Component:f,route:c});const _=h.props[u],v=_?_===!0?c.params:typeof _=="function"?_(c):_:null,O=Kc(f,te({},v,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Ql(n.default,{Component:O,route:c})||O}}});function Ql(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lu=y_;function v_(t){const e=r_(t.routes,t),n=t.parseQuery||h_,s=t.stringifyQuery||Gl,i=t.history,r=Un(),o=Un(),l=Un(),a=Nf(It);let c=It;pn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ji.bind(null,y=>""+y),h=Ji.bind(null,Op),f=Ji.bind(null,as);function _(y,N){let x,D;return nu(y)?(x=e.getRecordMatcher(y),D=N):D=y,e.addRoute(D,x)}function v(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function w(){return e.getRoutes().map(y=>y.record)}function O(y){return!!e.getRecordMatcher(y)}function F(y,N){if(N=te({},N||a.value),typeof y=="string"){const p=Xi(n,y,N.path),g=e.resolve({path:p.path},N),E=i.createHref(p.fullPath);return te(p,g,{params:f(g.params),hash:as(p.hash),redirectedFrom:void 0,href:E})}let x;if(y.path!=null)x=te({},y,{path:Xi(n,y.path,N.path).path});else{const p=te({},y.params);for(const g in p)p[g]==null&&delete p[g];x=te({},y,{params:h(p)}),N.params=h(N.params)}const D=e.resolve(x,N),ee=y.hash||"";D.params=u(f(D.params));const ue=Mp(s,te({},y,{hash:Np(ee),path:D.path})),d=i.createHref(ue);return te({fullPath:ue,hash:ee,query:s===Gl?f_(y.query):y.query||{}},D,{redirectedFrom:void 0,href:d})}function k(y){return typeof y=="string"?Xi(n,y,a.value.path):te({},y)}function P(y,N){if(c!==y)return Rn(8,{from:N,to:y})}function Y(y){return he(y)}function de(y){return Y(te(k(y),{replace:!0}))}function $(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:x}=N;let D=typeof x=="function"?x(y):x;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),te({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function he(y,N){const x=c=F(y),D=a.value,ee=y.state,ue=y.force,d=y.replace===!0,p=$(x);if(p)return he(te(k(p),{state:typeof p=="object"?te({},ee,p.state):ee,force:ue,replace:d}),N||x);const g=x;g.redirectedFrom=N;let E;return!ue&&Lp(s,D,x)&&(E=Rn(16,{to:g,from:D}),tt(D,D,!0,!1)),(E?Promise.resolve(E):Ze(g,D)).catch(m=>ct(m)?ct(m,2)?m:bt(m):J(m,g,D)).then(m=>{if(m){if(ct(m,2))return he(te({replace:d},k(m.to),{state:typeof m.to=="object"?te({},ee,m.to.state):ee,force:ue}),N||g)}else m=$t(g,D,!0,d,ee);return Ct(g,D,m),m})}function Be(y,N){const x=P(y,N);return x?Promise.reject(x):Promise.resolve()}function Vt(y){const N=un.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Ze(y,N){let x;const[D,ee,ue]=E_(y,N);x=Zi(D.reverse(),"beforeRouteLeave",y,N);for(const p of D)p.leaveGuards.forEach(g=>{x.push(xt(g,y,N))});const d=Be.bind(null,y,N);return x.push(d),Ue(x).then(()=>{x=[];for(const p of r.list())x.push(xt(p,y,N));return x.push(d),Ue(x)}).then(()=>{x=Zi(ee,"beforeRouteUpdate",y,N);for(const p of ee)p.updateGuards.forEach(g=>{x.push(xt(g,y,N))});return x.push(d),Ue(x)}).then(()=>{x=[];for(const p of ue)if(p.beforeEnter)if(Xe(p.beforeEnter))for(const g of p.beforeEnter)x.push(xt(g,y,N));else x.push(xt(p.beforeEnter,y,N));return x.push(d),Ue(x)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),x=Zi(ue,"beforeRouteEnter",y,N,Vt),x.push(d),Ue(x))).then(()=>{x=[];for(const p of o.list())x.push(xt(p,y,N));return x.push(d),Ue(x)}).catch(p=>ct(p,8)?p:Promise.reject(p))}function Ct(y,N,x){l.list().forEach(D=>Vt(()=>D(y,N,x)))}function $t(y,N,x,D,ee){const ue=P(y,N);if(ue)return ue;const d=N===It,p=pn?history.state:{};x&&(D||d?i.replace(y.fullPath,te({scroll:d&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),a.value=y,tt(y,N,x,d),bt()}let et;function Fn(){et||(et=i.listen((y,N,x)=>{if(!As.listening)return;const D=F(y),ee=$(D);if(ee){he(te(ee,{replace:!0}),D).catch(Jn);return}c=D;const ue=a.value;pn&&jp(Fl(ue.fullPath,x.delta),Oi()),Ze(D,ue).catch(d=>ct(d,12)?d:ct(d,2)?(he(d.to,D).then(p=>{ct(p,20)&&!x.delta&&x.type===cs.pop&&i.go(-1,!1)}).catch(Jn),Promise.reject()):(x.delta&&i.go(-x.delta,!1),J(d,D,ue))).then(d=>{d=d||$t(D,ue,!1),d&&(x.delta&&!ct(d,8)?i.go(-x.delta,!1):x.type===cs.pop&&ct(d,20)&&i.go(-1,!1)),Ct(D,ue,d)}).catch(Jn)}))}let an=Un(),me=Un(),ne;function J(y,N,x){bt(y);const D=me.list();return D.length?D.forEach(ee=>ee(y,N,x)):console.error(y),Promise.reject(y)}function at(){return ne&&a.value!==It?Promise.resolve():new Promise((y,N)=>{an.add([y,N])})}function bt(y){return ne||(ne=!y,Fn(),an.list().forEach(([N,x])=>y?x(y):N()),an.reset()),y}function tt(y,N,x,D){const{scrollBehavior:ee}=t;if(!pn||!ee)return Promise.resolve();const ue=!x&&Gp(Fl(y.fullPath,0))||(D||!x)&&history.state&&history.state.scroll||null;return uo().then(()=>ee(y,N,ue)).then(d=>d&&$p(d)).catch(d=>J(d,y,N))}const Ne=y=>i.go(y);let cn;const un=new Set,As={currentRoute:a,listening:!0,addRoute:_,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:w,resolve:F,options:t,push:Y,replace:de,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:me.add,isReady:at,install(y){const N=this;y.component("RouterLink",Ar),y.component("RouterView",lu),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(a)}),pn&&!cn&&a.value===It&&(cn=!0,Y(i.location).catch(ee=>{}));const x={};for(const ee in It)Object.defineProperty(x,ee,{get:()=>a.value[ee],enumerable:!0});y.provide(mo,N),y.provide(ou,cc(x)),y.provide(Nr,a);const D=y.unmount;un.add(y),y.unmount=function(){un.delete(y),un.size<1&&(c=It,et&&et(),et=null,a.value=It,cn=!1,ne=!1),D()}}};function Ue(y){return y.reduce((N,x)=>N.then(()=>Vt(x)),Promise.resolve())}return As}function E_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Tn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Tn(c,a))||i.push(a))}return[n,s,i]}const au=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},C_=t=>(Ec("data-v-35810b55"),t=t(),Cc(),t),b_={class:"wrapper-big"},w_=C_(()=>U("img",{alt:"Vue logo",class:"logo",src:yp,width:"30",height:"30"},null,-1)),S_={class:"wrapper"},I_={__name:"App",setup(t){return(e,n)=>{const s=Qf("HelloWorld");return Qn(),qs(We,null,[U("header",null,[U("div",b_,[w_,U("div",S_,[be(dt(Ar),{class:"nav-link left",to:"/"},{default:yr(()=>[Ir("Trang chủ")]),_:1}),be(dt(Ar),{class:"nav-link",to:"/about"},{default:yr(()=>[Ir("Thống kê")]),_:1})])]),be(s,{msg:"MyCalv!"})]),be(dt(lu),{class:"main"})],64)}}},T_=au(I_,[["__scopeId","data-v-35810b55"]]),R_="modulepreload",x_=function(t){return"/"+t},Jl={},Xl=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.all(n.map(l=>{if(l=x_(l),l in Jl)return;Jl[l]=!0;const a=l.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":R_,a||(u.as="script",u.crossOrigin=""),u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};var Zl={};/**
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
 */const S=function(t,e){if(!t)throw On(e)},On=function(t){return new Error("Firebase Database ("+cu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const uu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},N_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new A_;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class A_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hu=function(t){const e=uu(t);return yo.encodeByteArray(e,!0)},ni=function(t){return hu(t).replace(/\./g,"")},Pr=function(t){try{return yo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function P_(t){return fu(void 0,t)}function fu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!O_(n)||(t[n]=fu(t[n],e[n]));return t}function O_(t){return t!=="__proto__"}/**
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
 */function D_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k_=()=>D_().__FIREBASE_DEFAULTS__,M_=()=>{if(typeof process>"u"||typeof Zl>"u")return;const t=Zl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pr(t[1]);return e&&JSON.parse(e)},du=()=>{try{return k_()||M_()||L_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},F_=t=>{var e,n;return(n=(e=du())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},H_=t=>{const e=F_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},pu=()=>{var t;return(t=du())===null||t===void 0?void 0:t.config};/**
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
 */class Di{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function B_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ni(JSON.stringify(n)),ni(JSON.stringify(o)),""].join(".")}/**
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
 */function U_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _u(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U_())}function W_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gu(){return cu.NODE_ADMIN===!0}function V_(){try{return typeof indexedDB=="object"}catch{return!1}}function $_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const j_="FirebaseError";class ws extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=j_,Object.setPrototypeOf(this,ws.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mu.prototype.create)}}class mu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?G_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ws(i,l,s)}}function G_(t,e){return t.replace(q_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const q_=/\{\$([^}]+)}/g;/**
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
 */function us(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
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
 */const yu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=us(Pr(r[0])||""),n=us(Pr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},z_=function(t){const e=yu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K_=function(t){const e=yu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ea(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Or(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ta(r)&&ta(o)){if(!Or(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ta(t){return t!==null&&typeof t=="object"}/**
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
 */function Y_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Q_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function vo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const J_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ki=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Dn(t){return t&&t._delegate?t._delegate:t}class hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class X_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Di;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eg(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Z_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z_(t){return t===qt?void 0:t}function eg(t){return t.instantiationMode==="EAGER"}/**
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
 */class tg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const ng={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},sg=ie.INFO,ig={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},rg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ig[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vu{constructor(e){this.name=e,this._logLevel=sg,this._logHandler=rg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const og=(t,e)=>e.some(n=>t instanceof n);let na,sa;function lg(){return na||(na=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ag(){return sa||(sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eu=new WeakMap,Dr=new WeakMap,Cu=new WeakMap,er=new WeakMap,Eo=new WeakMap;function cg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ot(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eu.set(n,t)}).catch(()=>{}),Eo.set(e,t),e}function ug(t){if(Dr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Dr.set(t,e)}let kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hg(t){kr=t(kr)}function fg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(tr(this),e,...n);return Cu.set(s,e.sort?e.sort():[e]),Ot(s)}:ag().includes(t)?function(...e){return t.apply(tr(this),e),Ot(Eu.get(this))}:function(...e){return Ot(t.apply(tr(this),e))}}function dg(t){return typeof t=="function"?fg(t):(t instanceof IDBTransaction&&ug(t),og(t,lg())?new Proxy(t,kr):t)}function Ot(t){if(t instanceof IDBRequest)return cg(t);if(er.has(t))return er.get(t);const e=dg(t);return e!==t&&(er.set(t,e),Eo.set(e,t)),e}const tr=t=>Eo.get(t);function pg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Ot(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Ot(o.result),a.oldVersion,a.newVersion,Ot(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const _g=["get","getKey","getAll","getAllKeys","count"],gg=["put","add","delete","clear"],nr=new Map;function ia(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nr.get(e))return nr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=gg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_g.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return nr.set(e,r),r}hg(t=>({...t,get:(e,n,s)=>ia(e,n)||t.get(e,n,s),has:(e,n)=>!!ia(e,n)||t.has(e,n)}));/**
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
 */class mg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mr="@firebase/app",ra="0.10.9";/**
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
 */const gt=new vu("@firebase/app"),vg="@firebase/app-compat",Eg="@firebase/analytics-compat",Cg="@firebase/analytics",bg="@firebase/app-check-compat",wg="@firebase/app-check",Sg="@firebase/auth",Ig="@firebase/auth-compat",Tg="@firebase/database",Rg="@firebase/database-compat",xg="@firebase/functions",Ng="@firebase/functions-compat",Ag="@firebase/installations",Pg="@firebase/installations-compat",Og="@firebase/messaging",Dg="@firebase/messaging-compat",kg="@firebase/performance",Mg="@firebase/performance-compat",Lg="@firebase/remote-config",Fg="@firebase/remote-config-compat",Hg="@firebase/storage",Bg="@firebase/storage-compat",Ug="@firebase/firestore",Wg="@firebase/vertexai-preview",Vg="@firebase/firestore-compat",$g="firebase",jg="10.13.0";/**
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
 */const Lr="[DEFAULT]",Gg={[Mr]:"fire-core",[vg]:"fire-core-compat",[Cg]:"fire-analytics",[Eg]:"fire-analytics-compat",[wg]:"fire-app-check",[bg]:"fire-app-check-compat",[Sg]:"fire-auth",[Ig]:"fire-auth-compat",[Tg]:"fire-rtdb",[Rg]:"fire-rtdb-compat",[xg]:"fire-fn",[Ng]:"fire-fn-compat",[Ag]:"fire-iid",[Pg]:"fire-iid-compat",[Og]:"fire-fcm",[Dg]:"fire-fcm-compat",[kg]:"fire-perf",[Mg]:"fire-perf-compat",[Lg]:"fire-rc",[Fg]:"fire-rc-compat",[Hg]:"fire-gcs",[Bg]:"fire-gcs-compat",[Ug]:"fire-fst",[Vg]:"fire-fst-compat",[Wg]:"fire-vertex","fire-js":"fire-js",[$g]:"fire-js-all"};/**
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
 */const ii=new Map,qg=new Map,Fr=new Map;function oa(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(Fr.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Fr.set(e,t);for(const n of ii.values())oa(n,t);for(const n of qg.values())oa(n,t);return!0}function zg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new mu("app","Firebase",Kg);/**
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
 */class Yg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Qg=jg;function bu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Lr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(n||(n=pu()),!n)throw Dt.create("no-options");const r=ii.get(i);if(r){if(Or(n,r.options)&&Or(s,r.config))return r;throw Dt.create("duplicate-app",{appName:i})}const o=new tg(i);for(const a of Fr.values())o.addComponent(a);const l=new Yg(n,s,o);return ii.set(i,l),l}function Jg(t=Lr){const e=ii.get(t);if(!e&&t===Lr&&pu())return bu();if(!e)throw Dt.create("no-app",{appName:t});return e}function Cn(t,e,n){var s;let i=(s=Gg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(l.join(" "));return}ri(new hs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Xg="firebase-heartbeat-database",Zg=1,fs="firebase-heartbeat-store";let sr=null;function wu(){return sr||(sr=pg(Xg,Zg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),sr}async function em(t){try{const n=(await wu()).transaction(fs),s=await n.objectStore(fs).get(Su(t));return await n.done,s}catch(e){if(e instanceof ws)gt.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(n.message)}}}async function la(t,e){try{const s=(await wu()).transaction(fs,"readwrite");await s.objectStore(fs).put(e,Su(t)),await s.done}catch(n){if(n instanceof ws)gt.warn(n.message);else{const s=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(s.message)}}}function Su(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tm=1024,nm=30*24*60*60*1e3;class sm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n,s;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=aa();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const a=new Date(l.date).valueOf();return Date.now()-a<=nm}),this._storage.overwrite(this._heartbeatsCache))}catch(i){gt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=aa(),{heartbeatsToSend:s,unsentEntries:i}=im(this._heartbeatsCache.heartbeats),r=ni(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return gt.warn(n),""}}}function aa(){return new Date().toISOString().substring(0,10)}function im(t,e=tm){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ca(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ca(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return V_()?$_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await em(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ca(t){return ni(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function om(t){ri(new hs("platform-logger",e=>new mg(e),"PRIVATE")),ri(new hs("heartbeat",e=>new sm(e),"PRIVATE")),Cn(Mr,ra,t),Cn(Mr,ra,"esm2017"),Cn("fire-js","")}om("");var lm="firebase",am="10.13.0";/**
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
 */Cn(lm,am,"app");var ua={};const ha="@firebase/database",fa="1.0.7";/**
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
 */let Iu="";function cm(t){Iu=t}/**
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
 */class um{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:us(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class hm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Tu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new um(e)}}catch{}return new hm},Qt=Tu("localStorage"),fm=Tu("sessionStorage");/**
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
 */const bn=new vu("@firebase/database"),dm=function(){let t=1;return function(){return t++}}(),Ru=function(t){const e=J_(t),n=new Q_;n.update(e);const s=n.digest();return yo.encodeByteArray(s)},Ss=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ss.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let Zn=null,da=!0;const pm=function(t,e){S(!e,"Can't turn on custom loggers persistently."),bn.logLevel=ie.VERBOSE,Zn=bn.log.bind(bn)},we=function(...t){if(da===!0&&(da=!1,Zn===null&&fm.get("logging_enabled")===!0&&pm()),Zn){const e=Ss.apply(null,t);Zn(e)}},Is=function(t){return function(...e){we(t,...e)}},Hr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ss(...t);bn.error(e)},mt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ss(...t)}`;throw bn.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+Ss(...t);bn.warn(e)},_m=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Nn="[MIN_NAME]",nn="[MAX_NAME]",kn=function(t,e){if(t===e)return 0;if(t===Nn||e===nn)return-1;if(e===Nn||t===nn)return 1;{const n=pa(t),s=pa(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},mm=function(t,e){return t===e?0:t<e?-1:1},Wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},Co=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=Co(t[e[s]]);return n+="}",n},Nu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Au=function(t){S(!xu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},ym=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Em(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Cm=new RegExp("^-?(0*)\\d{1,10}$"),bm=-2147483648,wm=2147483647,pa=function(t){if(Cm.test(t)){const e=Number(t);if(e>=bm&&e<=wm)return e}return null},Mn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Im{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Tm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Ys{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ys.OWNER="owner";/**
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
 */const bo="5",Pu="v",Ou="s",Du="r",ku="f",Mu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lu="ls",Fu="p",Br="ac",Hu="websocket",Bu="long_polling";/**
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
 */class Uu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Rm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Wu(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Hu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Rm(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class xm{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return P_(this.counters_)}}/**
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
 */const ir={},rr={};function wo(t){const e=t.toString();return ir[e]||(ir[e]=new xm),ir[e]}function Nm(t,e){const n=t.toString();return rr[n]||(rr[n]=e()),rr[n]}/**
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
 */class Am{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Mn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _a="start",Pm="close",Om="pLPCommand",Dm="pRTLPCB",Vu="id",$u="pw",ju="ser",km="cb",Mm="seg",Lm="ts",Fm="d",Hm="dframe",Gu=1870,qu=30,Bm=Gu-qu,Um=25e3,Wm=3e4;class _n{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Is(e),this.stats_=wo(n),this.urlFn=a=>(this.appCheckToken&&(a[Br]=this.appCheckToken),Wu(n,Bu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Am(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wm)),gm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new So((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_a)this.id=l,this.password=a;else if(o===Pm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[_a]="t",s[ju]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[km]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Pu]=bo,this.transportSessionId&&(s[Ou]=this.transportSessionId),this.lastSessionId&&(s[Lu]=this.lastSessionId),this.applicationId&&(s[Fu]=this.applicationId),this.appCheckToken&&(s[Br]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mu.test(location.hostname)&&(s[Du]=ku);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ym()&&!vm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hu(n),i=Nu(s,Bm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Hm]="t",s[Vu]=e,s[$u]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class So{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dm(),window[Om+this.uniqueCallbackIdentifier]=e,window[Dm+this.uniqueCallbackIdentifier]=n,this.myIFrame=So.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vu]=this.myID,e[$u]=this.myPW,e[ju]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qu+s.length<=Gu;){const o=this.pendingSegs.shift();s=s+"&"+Mm+i+"="+o.seg+"&"+Lm+i+"="+o.ts+"&"+Fm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Um)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Vm=16384,$m=45e3;let oi=null;typeof MozWebSocket<"u"?oi=MozWebSocket:typeof WebSocket<"u"&&(oi=WebSocket);class qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Is(this.connId),this.stats_=wo(n),this.connURL=qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Pu]=bo,typeof location<"u"&&location.hostname&&Mu.test(location.hostname)&&(o[Du]=ku),n&&(o[Ou]=n),s&&(o[Lu]=s),i&&(o[Br]=i),r&&(o[Fu]=r),Wu(e,Hu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let s;gu(),this.mySock=new oi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&oi!==null&&!qe.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=us(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Nu(n,Vm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($m))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2;qe.healthyTimeout=3e4;/**
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
 */class ds{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_n,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qe&&qe.isAvailable();let s=n&&!qe.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qe];else{const i=this.transports_=[];for(const r of ds.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
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
 */const jm=6e4,Gm=5e3,qm=10*1024,zm=100*1024,or="t",ga="d",Km="s",ma="r",Ym="e",ya="o",va="a",Ea="n",Ca="p",Qm="h";class Jm{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Is("c:"+this.id+":"),this.transportManager_=new ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(or in e){const n=e[or];n===va?this.upgradeIfSecondaryHealthy_():n===ma?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ya&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ca,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:va,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ea,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wn(or,e);if(ga in e){const s=e[ga];if(n===Qm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ea){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Km?this.onConnectionShutdown_(s):n===ma?this.onReset_(s):n===Ym?Hr("Server Error: "+s):n===ya?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bo!==s&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ca,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class li extends Ku{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_u()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new li}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ba=32,wa=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new se("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ft(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Yu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Xm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ju(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return xe(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xu(t,e){if(Ft(t)!==Ft(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ft(t)>Ft(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Zm{constructor(e,n){this.errorPrefix_=n,this.parts_=Qu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ki(this.parts_[s]);Zu(this)}}function ey(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ki(e),Zu(t)}function ty(t){const e=t.parts_.pop();t.byteLength_-=ki(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zu(t){if(t.byteLength_>wa)throw new Error(t.errorPrefix_+"has a key path longer than "+wa+" bytes ("+t.byteLength_+").");if(t.parts_.length>ba)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ba+") or object contains a cycle "+zt(t))}function zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Io extends Ku{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Io}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Vn=1e3,ny=60*5*1e3,Sa=30*1e3,sy=1.3,iy=3e4,ry="server_kill",Ia=3;class _t extends zu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=_t.nextPersistentConnectionId_++,this.log_=Is("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vn,this.maxReconnectDelay_=ny,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!gu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Io.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&li.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Di,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;_t.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const s=xn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=z_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hr("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iy&&(this.reconnectDelay_=Vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_t.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Jm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Oe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(ry)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Oe(h),a())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ea(this.interruptReasons_)&&(this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Co(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ia&&(this.reconnectDelay_=Sa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ia&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Iu.replace(/\./g,"-")]=1,_u()?e["framework.cordova"]=1:W_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=li.getInstance().currentlyOnline();return ea(this.interruptReasons_)&&e}}_t.nextPersistentConnectionId_=0;_t.nextConnectionId_=0;/**
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
 */class Mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(Nn,e),i=new j(Nn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
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
 */let Fs;class eh extends Mi{static get __EMPTY_NODE(){return Fs}static set __EMPTY_NODE(e){Fs=e}compare(e,n){return kn(e.name,n.name)}isDefinedOn(e){throw On("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(nn,Fs)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Fs)}toString(){return".key"}}const wn=new eh;/**
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
 */class Hs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=i??Pe.EMPTY_NODE,this.right=r??Pe.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class oy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pe{constructor(e,n=Pe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hs(this.root_,null,this.comparator_,!0,e)}}Pe.EMPTY_NODE=new oy;/**
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
 */function ly(t,e){return kn(t.name,e.name)}function To(t,e){return kn(t,e)}/**
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
 */let Ur;function ay(t){Ur=t}const th=function(t){return typeof t=="number"?"number:"+Au(t):"string:"+t},nh=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else S(t===Ur||t.isEmpty(),"priority of unexpected type.");S(t===Ur||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ta;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nh(this.priorityNode_)}static set __childrenNodeConstructor(e){Ta=e}static get __childrenNodeConstructor(){return Ta}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Ft(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+th(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Au(this.value_):e+=this.value_,this.lazyHash_=Ru(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let sh,ih;function cy(t){sh=t}function uy(t){ih=t}class hy extends Mi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?kn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(nn,new ve("[PRIORITY-POST]",ih))}makePost(e,n){const s=sh(e);return new j(n,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new hy;/**
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
 */const fy=Math.log(2);class dy{constructor(e){const n=r=>parseInt(Math.log(r)/fy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ai=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+a,v=i(a,_),w=i(_+1,c);return h=t[_],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,v,w)}},r=function(a){let c=null,u=null,h=t.length;const f=function(v,w){const O=h-v,F=h;h-=v;const k=i(O+1,F),P=t[O],Y=n?n(P):P;_(new Ee(Y,P.node,w,null,k))},_=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),O=Math.pow(2,a.count-(v+1));w?f(O,Ee.BLACK):(f(O,Ee.BLACK),f(O,Ee.RED))}return u},o=new dy(t.length),l=r(o);return new Pe(s||e,l)};/**
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
 */let lr;const dn={};class ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(dn&&fe,"ChildrenNode.ts has not been loaded"),lr=lr||new ht({".priority":dn},{".priority":fe}),lr}get(e){const n=xn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pe?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ai(s,e.getCompare()):l=dn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ht(u,c)}addToIndexes(e,n){const s=si(this.indexes_,(i,r)=>{const o=xn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===dn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ai(l,o.getCompare())}else return dn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new ht(s,this.indexSet_)}removeFromIndexes(e,n){const s=si(this.indexes_,i=>{if(i===dn)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new ht(s,this.indexSet_)}}/**
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
 */let $n;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&nh(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $n||($n=new H(new Pe(To),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$n}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$n:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$n:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{S(z(e)!==".priority"||Ft(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+th(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ru(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===wn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wn?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class py extends H{constructor(){super(new Pe(To),H.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Ts=new py;Object.defineProperties(j,{MIN:{value:new j(Nn,H.EMPTY_NODE)},MAX:{value:new j(nn,Ts)}});eh.__EMPTY_NODE=H.EMPTY_NODE;ve.__childrenNodeConstructor=H;ay(Ts);uy(Ts);/**
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
 */const _y=!0;function Ce(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Ce(e))}if(!(t instanceof Array)&&_y){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ce(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return H.EMPTY_NODE;const r=ai(n,ly,o=>o.name,To);if(s){const o=ai(n,fe.getCompare());return new H(r,Ce(e),new ht({".priority":o},{".priority":fe}))}else return new H(r,Ce(e),ht.Default)}else{let n=H.EMPTY_NODE;return Me(t,(s,i)=>{if(vt(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}cy(Ce);/**
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
 */class gy extends Mi{constructor(e){super(),this.indexPath_=e,S(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?kn(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new j(nn,e)}toString(){return Qu(this.indexPath_,0).join("/")}}/**
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
 */class my extends Mi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?kn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=Ce(e);return new j(n,s)}toString(){return".value"}}const yy=new my;/**
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
 */function rh(t){return{type:"value",snapshotNode:t}}function An(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ps(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ro{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ps(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(An(n,s)):o.trackChildChange(_s(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ps(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(_s(i,r,o))}else s.trackChildChange(An(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gs{constructor(e){this.indexedFilter_=new Ro(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gs.getStartPost_(e),this.endPost_=gs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ey{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new j(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(_s(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ps(n,h));const w=l.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(An(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ps(c.name,c.node)),r.trackChildChange(An(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
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
 */class xo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Nn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new xo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Cy(t){return t.loadsAllData()?new Ro(t.getIndex()):t.hasLimit()?new Ey(t):new gs(t)}function Ra(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===yy?n="$value":t.index_===wn?n="$key":(S(t.index_ instanceof gy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function xa(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class ci extends zu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Is("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ci.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ra(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),xn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ci.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ra(e._queryParams),s=e._path.toString(),i=new Di;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Y_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=us(l.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class by{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ui(){return{value:null,children:new Map}}function oh(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,ui());const i=t.children.get(s);e=re(e),oh(i,e,n)}}function Wr(t,e,n){t.value!==null?n(e,t.value):wy(t,(s,i)=>{const r=new se(e.toString()+"/"+s);Wr(i,r,n)})}function wy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Sy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Na=10*1e3,Iy=30*1e3,Ty=5*60*1e3;class Ry{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Sy(e);const s=Na+(Iy-Na)*Math.random();es(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),es(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ty))}}/**
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
 */var Ke;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ke||(Ke={}));function lh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function No(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ao(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class hi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ke.ACK_USER_WRITE,this.source=lh()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new hi(Q(),n,this.revert)}}else return S(z(this.path)===e,"operationForChild called for unrelated child."),new hi(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class ms{constructor(e,n){this.source=e,this.path=n,this.type=Ke.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new ms(this.source,Q()):new ms(this.source,re(this.path))}}/**
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
 */class sn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ke.OVERWRITE}operationForChild(e){return q(this.path)?new sn(this.source,Q(),this.snap.getImmediateChild(e)):new sn(this.source,re(this.path),this.snap)}}/**
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
 */class ys{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ke.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new sn(this.source,Q(),n.value):new ys(this.source,Q(),n)}else return S(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ys(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ht{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class xy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ny(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(vy(o.childName,o.snapshotNode))}),jn(t,i,"child_removed",e,s,n),jn(t,i,"child_added",e,s,n),jn(t,i,"child_moved",r,s,n),jn(t,i,"child_changed",e,s,n),jn(t,i,"value",e,s,n),i}function jn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Py(t,l,a)),o.forEach(l=>{const a=Ay(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ay(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Py(t,e,n){if(e.childName==null||n.childName==null)throw On("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Li(t,e){return{eventCache:t,serverCache:e}}function ts(t,e,n,s){return Li(new Ht(e,n,s),t.serverCache)}function ah(t,e,n,s){return Li(t.eventCache,new Ht(e,n,s))}function fi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ar;const Oy=()=>(ar||(ar=new Pe(mm)),ar);class ae{constructor(e,n=Oy()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Me(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:_e(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new ae(null)}}set(e,n){if(q(e))return new ae(n,this.children);{const s=z(e),r=(this.children.get(s)||new ae(null)).set(re(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new ae(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(re(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),_e(n,i),s):new ae(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new ae(null))}}function ns(t,e,n){if(q(e))return new Qe(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=xe(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function Aa(t,e,n){let s=t;return Me(n,(i,r)=>{s=ns(s,_e(e,i),r)}),s}function Pa(t,e){if(q(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new Qe(n)}}function Vr(t,e){return ln(t,e)!=null}function ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function Oa(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function kt(t,e){if(q(e))return t;{const n=ln(t,e);return n!=null?new Qe(new ae(n)):new Qe(t.writeTree_.subtree(e))}}function $r(t){return t.writeTree_.isEmpty()}function Pn(t,e){return ch(Q(),t.writeTree_,e)}function ch(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ch(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
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
 */function Fi(t,e){return dh(e,t)}function Dy(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ns(t.visibleWrites,e,n)),t.lastWriteId=s}function ky(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function My(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ly(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Fy(t),!0;if(s.snap)t.visibleWrites=Pa(t.visibleWrites,s.path);else{const l=s.children;Me(l,a=>{t.visibleWrites=Pa(t.visibleWrites,_e(s.path,a))})}return!0}else return!1}function Ly(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(_e(t.path,n),e))return!0;return!1}function Fy(t){t.visibleWrites=uh(t.allWrites,Hy,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Hy(t){return t.visible}function uh(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=xe(n,o),s=ns(s,l,r.snap)):ze(o,n)&&(l=xe(o,n),s=ns(s,Q(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=xe(n,o),s=Aa(s,l,r.children);else if(ze(o,n))if(l=xe(o,n),q(l))s=Aa(s,Q(),r.children);else{const a=xn(r.children,z(l));if(a){const c=a.getChild(re(l));s=ns(s,Q(),c)}}}else throw On("WriteRecord should have .snap or .children")}}return s}function hh(t,e,n,s,i){if(!s&&!i){const r=ln(t.visibleWrites,e);if(r!=null)return r;{const o=kt(t.visibleWrites,e);if($r(o))return n;if(n==null&&!Vr(o,Q()))return null;{const l=n||H.EMPTY_NODE;return Pn(o,l)}}}else{const r=kt(t.visibleWrites,e);if(!i&&$r(r))return n;if(!i&&n==null&&!Vr(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},l=uh(t.allWrites,o,e),a=n||H.EMPTY_NODE;return Pn(l,a)}}}function By(t,e,n){let s=H.EMPTY_NODE;const i=ln(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=kt(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=Pn(kt(r,new se(o)),l);s=s.updateImmediateChild(o,a)}),Oa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=kt(t.visibleWrites,e);return Oa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Uy(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Vr(t.visibleWrites,r))return null;{const o=kt(t.visibleWrites,r);return $r(o)?i.getChild(n):Pn(o,i.getChild(n))}}function Wy(t,e,n,s){const i=_e(e,n),r=ln(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=kt(t.visibleWrites,i);return Pn(o,s.getNode().getImmediateChild(n))}else return null}function Vy(t,e){return ln(t.visibleWrites,e)}function $y(t,e,n,s,i,r,o){let l;const a=kt(t.visibleWrites,e),c=ln(a,Q());if(c!=null)l=c;else if(n!=null)l=Pn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function jy(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function di(t,e,n,s){return hh(t.writeTree,t.treePath,e,n,s)}function Po(t,e){return By(t.writeTree,t.treePath,e)}function Da(t,e,n,s){return Uy(t.writeTree,t.treePath,e,n,s)}function pi(t,e){return Vy(t.writeTree,_e(t.treePath,e))}function Gy(t,e,n,s,i,r){return $y(t.writeTree,t.treePath,e,n,s,i,r)}function Oo(t,e,n){return Wy(t.writeTree,t.treePath,e,n)}function fh(t,e){return dh(_e(t.treePath,e),t.writeTree)}function dh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class qy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,_s(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ps(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,An(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,_s(s,e.snapshotNode,i.oldSnap));else throw On("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ph=new zy;class Do{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ht(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Oo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),r=Gy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Ky(t){return{filter:t}}function Yy(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Qy(t,e,n,s,i){const r=new qy;let o,l;if(n.type===Ke.OVERWRITE){const c=n;c.source.fromUser?o=jr(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=_i(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ke.MERGE){const c=n;c.source.fromUser?o=Xy(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Gr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ke.ACK_USER_WRITE){const c=n;c.revert?o=tv(t,e,c.path,s,i,r):o=Zy(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ke.LISTEN_COMPLETE)o=ev(t,e,n.path,s,r);else throw On("Unknown operation type: "+n.type);const a=r.getChanges();return Jy(e,o,a),{viewCache:o,changes:a}}function Jy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(rh(fi(e)))}}function _h(t,e,n,s,i,r){const o=e.eventCache;if(pi(s,n)!=null)return e;{let l,a;if(q(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rn(e),u=c instanceof H?c:H.EMPTY_NODE,h=Po(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=di(s,rn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){S(Ft(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Da(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=re(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Da(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Oo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return ts(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function _i(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=z(n);if(!a.isCompleteForPath(n)&&Ft(n)>1)return e;const v=re(n),O=a.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?c=u.updatePriority(a.getNode(),O):c=u.updateChild(a.getNode(),_,O,v,ph,null)}const h=ah(e,c,a.isFullyInitialized()||q(n),u.filtersNodes()),f=new Do(i,h,r);return _h(t,h,n,i,f,l)}function jr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Do(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ts(e,c,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=ts(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=re(n),_=l.getNode().getImmediateChild(h);let v;if(q(f))v=s;else{const w=u.getCompleteChild(h);w!=null?Yu(f)===".priority"&&w.getChild(Ju(f)).isEmpty()?v=w:v=w.updateChild(f,s):v=H.EMPTY_NODE}if(_.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),h,v,f,u,o);a=ts(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ka(t,e){return t.eventCache.isCompleteForChild(e)}function Xy(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=_e(n,a);ka(e,z(u))&&(l=jr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=_e(n,a);ka(e,z(u))||(l=jr(t,l,u,c,i,r,o))}),l}function Ma(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Gr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;q(n)?c=s:c=new ae(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=Ma(t,_,f);a=_i(t,a,new se(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),w=Ma(t,v,f);a=_i(t,a,new se(h),w,i,r,o,l)}}),a}function Zy(t,e,n,s,i,r,o){if(pi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return _i(t,e,n,a.getNode().getChild(n),i,r,l,o);if(q(n)){let c=new ae(null);return a.getNode().forEachChild(wn,(u,h)=>{c=c.set(new se(u),h)}),Gr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ae(null);return s.foreach((u,h)=>{const f=_e(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Gr(t,e,n,c,i,r,l,o)}}function ev(t,e,n,s,i){const r=e.serverCache,o=ah(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return _h(t,o,n,s,ph,i)}function tv(t,e,n,s,i,r){let o;if(pi(s,n)!=null)return e;{const l=new Do(s,e,i),a=e.eventCache.getNode();let c;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=di(s,rn(e));else{const h=e.serverCache.getNode();S(h instanceof H,"serverChildren would be complete if leaf node"),u=Po(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=z(n);let h=Oo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,re(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,H.EMPTY_NODE,re(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=di(s,rn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||pi(s,Q())!=null,ts(e,c,o,t.filter.filtersNodes())}}/**
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
 */class nv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ro(s.getIndex()),r=Cy(s);this.processor_=Ky(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,l.getNode(),null),u=new Ht(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ht(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Li(h,u),this.eventGenerator_=new xy(this.query_)}get query(){return this.query_}}function sv(t){return t.viewCache_.serverCache.getNode()}function iv(t){return fi(t.viewCache_)}function rv(t,e){const n=rn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function La(t){return t.eventRegistrations_.length===0}function ov(t,e){t.eventRegistrations_.push(e)}function Fa(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ha(t,e,n,s){e.type===Ke.MERGE&&e.source.queryId!==null&&(S(rn(t.viewCache_),"We should always have a full cache before handling merges"),S(fi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Qy(t.processor_,i,e,n,s);return Yy(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,gh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function lv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(An(r,o))}),n.isFullyInitialized()&&s.push(rh(n.getNode())),gh(t,s,n.getNode(),e)}function gh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ny(t.eventGenerator_,e,n,i)}/**
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
 */let gi;class mh{constructor(){this.views=new Map}}function av(t){S(!gi,"__referenceConstructor has already been defined"),gi=t}function cv(){return S(gi,"Reference.ts has not been loaded"),gi}function uv(t){return t.views.size===0}function ko(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),Ha(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ha(o,e,n,s));return r}}function yh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=di(n,i?s:null),a=!1;l?a=!0:s instanceof H?(l=Po(n,s),a=!1):(l=H.EMPTY_NODE,a=!1);const c=Li(new Ht(l,a,!1),new Ht(s,i,!1));return new nv(e,c)}return o}function hv(t,e,n,s,i,r){const o=yh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ov(o,n),lv(o,n)}function fv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Bt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Fa(c,n,s)),La(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Fa(a,n,s)),La(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Bt(t)&&r.push(new(cv())(e._repo,e._path)),{removed:r,events:o}}function vh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mt(t,e){let n=null;for(const s of t.views.values())n=n||rv(s,e);return n}function Eh(t,e){if(e._queryParams.loadsAllData())return Hi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ch(t,e){return Eh(t,e)!=null}function Bt(t){return Hi(t)!=null}function Hi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let mi;function dv(t){S(!mi,"__referenceConstructor has already been defined"),mi=t}function pv(){return S(mi,"Reference.ts has not been loaded"),mi}let _v=1;class Ba{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=jy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bh(t,e,n,s,i){return Dy(t.pendingWriteTree_,e,n,s,i),i?xs(t,new sn(lh(),e,n)):[]}function Jt(t,e,n=!1){const s=ky(t.pendingWriteTree_,e);if(My(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(Q(),!0):Me(s.children,o=>{r=r.set(new se(o),!0)}),xs(t,new hi(s.path,r,n))}else return[]}function Rs(t,e,n){return xs(t,new sn(No(),e,n))}function gv(t,e,n){const s=ae.fromObject(n);return xs(t,new ys(No(),e,s))}function mv(t,e){return xs(t,new ms(No(),e))}function yv(t,e,n){const s=Lo(t,n);if(s){const i=Fo(s),r=i.path,o=i.queryId,l=xe(r,e),a=new ms(Ao(o),l);return Ho(t,r,a)}else return[]}function wh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ch(o,e))){const a=fv(o,e,n,s);uv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Bt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=bv(f);for(let v=0;v<_.length;++v){const w=_[v],O=w.query,F=Rh(t,w);t.listenProvider_.startListening(ss(O),vs(t,O),F.hashFn,F.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ss(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Bi(f));t.listenProvider_.stopListening(ss(f),_)}))}wv(t,c)}return l}function Sh(t,e,n,s){const i=Lo(t,s);if(i!=null){const r=Fo(i),o=r.path,l=r.queryId,a=xe(o,e),c=new sn(Ao(l),a,n);return Ho(t,o,c)}else return[]}function vv(t,e,n,s){const i=Lo(t,s);if(i){const r=Fo(i),o=r.path,l=r.queryId,a=xe(o,e),c=ae.fromObject(n),u=new ys(Ao(l),a,c);return Ho(t,o,u)}else return[]}function Ev(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=xe(f,i);r=r||Mt(_,v),o=o||Bt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Bt(l),r=r||Mt(l,Q())):(l=new mh,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=Mt(v,Q());w&&(r=r.updateImmediateChild(_,w))}));const c=Ch(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Bi(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Sv();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Fi(t.pendingWriteTree_,i);let h=hv(l,e,n,u,r,a);if(!c&&!o&&!s){const f=Eh(l,e);h=h.concat(Iv(t,e,f))}return h}function Mo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),c=Mt(l,a);if(c)return c});return hh(i,e,r,n,!0)}function Cv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=xe(c,n);s=s||Mt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Mt(i,Q()):(i=new mh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ht(s,!0,!1):null,l=Fi(t.pendingWriteTree_,e._path),a=yh(i,e,l,r?o.getNode():H.EMPTY_NODE,r);return iv(a)}function xs(t,e){return Ih(e,t.syncPointTree_,null,Fi(t.pendingWriteTree_,Q()))}function Ih(t,e,n,s){if(q(t.path))return Th(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Mt(i,Q()));let r=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=fh(s,o);r=r.concat(Ih(l,a,c,u))}return i&&(r=r.concat(ko(i,t,s,n))),r}}function Th(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Mt(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=fh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Th(u,l,a,c)))}),i&&(r=r.concat(ko(i,t,s,n))),r}function Rh(t,e){const n=e.query,s=vs(t,n);return{hashFn:()=>(sv(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?yv(t,n._path,s):mv(t,n._path);{const r=Em(i,n);return wh(t,n,null,r)}}}}function vs(t,e){const n=Bi(e);return t.queryToTagMap.get(n)}function Bi(t){return t._path.toString()+"$"+t._queryIdentifier}function Lo(t,e){return t.tagToQueryMap.get(e)}function Fo(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Ho(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Fi(t.pendingWriteTree_,e);return ko(s,n,i,null)}function bv(t){return t.fold((e,n,s)=>{if(n&&Bt(n))return[Hi(n)];{let i=[];return n&&(i=vh(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pv())(t._repo,t._path):t}function wv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Bi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Sv(){return _v++}function Iv(t,e,n){const s=e._path,i=vs(t,e),r=Rh(t,n),o=t.listenProvider_.startListening(ss(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!Bt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!q(c)&&u&&Bt(u))return[Hi(u).query];{let f=[];return u&&(f=f.concat(vh(u).map(_=>_.query))),Me(h,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ss(u),vs(t,u))}}return o}/**
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
 */class Bo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bo(n)}node(){return this.node_}}class Uo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Uo(this.syncTree_,n)}node(){return Mo(this.syncTree_,this.path_)}}const Tv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ua=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Rv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xv(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Rv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},xv=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Nv=function(t,e,n,s){return Wo(e,new Uo(n,t),s)},xh=function(t,e,n){return Wo(t,new Bo(e),n)};function Wo(t,e,n){const s=t.getPriority().val(),i=Ua(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ua(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ve(i))),o.forEachChild(fe,(l,a)=>{const c=Wo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Vo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function $o(t,e){let n=e instanceof se?e:new se(e),s=t,i=z(n);for(;i!==null;){const r=xn(s.node.children,i)||{children:{},childCount:0};s=new Vo(i,s,r),n=re(n),i=z(n)}return s}function Ln(t){return t.node.value}function Nh(t,e){t.node.value=e,qr(t)}function Ah(t){return t.node.childCount>0}function Av(t){return Ln(t)===void 0&&!Ah(t)}function Ui(t,e){Me(t.node.children,(n,s)=>{e(new Vo(n,t,s))})}function Ph(t,e,n,s){n&&!s&&e(t),Ui(t,i=>{Ph(i,e,!0,s)}),n&&s&&e(t)}function Pv(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ns(t){return new se(t.parent===null?t.name:Ns(t.parent)+"/"+t.name)}function qr(t){t.parent!==null&&Ov(t.parent,t.name,t)}function Ov(t,e,n){const s=Av(n),i=vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,qr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qr(t))}/**
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
 */const Dv=/[\[\].#$\/\u0000-\u001F\u007F]/,kv=/[\[\].#$\u0000-\u001F\u007F]/,cr=10*1024*1024,Oh=function(t){return typeof t=="string"&&t.length!==0&&!Dv.test(t)},Dh=function(t){return typeof t=="string"&&t.length!==0&&!kv.test(t)},Mv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dh(t)},Lv=function(t,e,n,s){jo(vo(t,"value"),e,n)},jo=function(t,e,n){const s=n instanceof se?new Zm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zt(s));if(typeof e=="function")throw new Error(t+"contains a function "+zt(s)+" with contents = "+e.toString());if(xu(e))throw new Error(t+"contains "+e.toString()+" "+zt(s));if(typeof e=="string"&&e.length>cr/3&&ki(e)>cr)throw new Error(t+"contains a string greater than "+cr+" utf8 bytes "+zt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Oh(o)))throw new Error(t+" contains an invalid key ("+o+") "+zt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ey(s,o),jo(t,l,s),ty(s)}),i&&r)throw new Error(t+' contains ".value" child '+zt(s)+" in addition to actual children.")}},kh=function(t,e,n,s){if(!Dh(n))throw new Error(vo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kh(t,e,n)},Mh=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Hv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Oh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Mv(n))throw new Error(vo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Bv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lh(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Xu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function lt(t,e,n){Lh(t,n),Uv(t,s=>ze(s,e)||ze(e,s))}function Uv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Wv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Wv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zn&&we("event: "+n.toString()),Mn(s)}}}/**
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
 */const Vv="repo_interrupt",$v=25;class jv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ui(),this.transactionQueueTree_=new Vo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gv(t,e,n){if(t.stats_=wo(t.repoInfo_),t.forceRestClient_||Sm())t.server_=new ci(t.repoInfo_,(s,i,r,o)=>{Wa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Va(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new _t(t.repoInfo_,e,(s,i,r,o)=>{Wa(t,s,i,r,o)},s=>{Va(t,s)},s=>{zv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Nm(t.repoInfo_,()=>new Ry(t.stats_,t.server_)),t.infoData_=new by,t.infoSyncTree_=new Ba({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Rs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),qo(t,"connected",!1),t.serverSyncTree_=new Ba({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);lt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function qv(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Go(t){return Tv({timestamp:qv(t)})}function Wa(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=si(n,c=>Ce(c));o=vv(t.serverSyncTree_,r,a,i)}else{const a=Ce(n);o=Sh(t.serverSyncTree_,r,a,i)}else if(s){const a=si(n,c=>Ce(c));o=gv(t.serverSyncTree_,r,a)}else{const a=Ce(n);o=Rs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Vi(t,r)),lt(t.eventQueue_,l,o)}function Va(t,e){qo(t,"connected",e),e===!1&&Qv(t)}function zv(t,e){Me(e,(n,s)=>{qo(t,n,s)})}function qo(t,e,n){const s=new se("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Rs(t.infoSyncTree_,s,i);lt(t.eventQueue_,s,r)}function Fh(t){return t.nextWriteId_++}function Kv(t,e,n){const s=Cv(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());Ev(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Rs(t.serverSyncTree_,e._path,r);else{const l=vs(t.serverSyncTree_,e);o=Sh(t.serverSyncTree_,e._path,r,l)}return lt(t.eventQueue_,e._path,o),wh(t.serverSyncTree_,e,n,null,!0),r},i=>(Wi(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Yv(t,e,n,s,i){Wi(t,"set",{path:e.toString(),value:n,priority:s});const r=Go(t),o=Ce(n,s),l=Mo(t.serverSyncTree_,e),a=xh(o,l,r),c=Fh(t),u=bh(t.serverSyncTree_,e,a,c,!0);Lh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Oe("set at "+e+" failed: "+f);const w=Jt(t.serverSyncTree_,c,!v);lt(t.eventQueue_,e,w),Xv(t,i,f,_)});const h=Vh(t,e);Vi(t,h),lt(t.eventQueue_,h,[])}function Qv(t){Wi(t,"onDisconnectEvents");const e=Go(t),n=ui();Wr(t.onDisconnect_,Q(),(i,r)=>{const o=Nv(i,r,t.serverSyncTree_,e);oh(n,i,o)});let s=[];Wr(n,Q(),(i,r)=>{s=s.concat(Rs(t.serverSyncTree_,i,r));const o=Vh(t,i);Vi(t,o)}),t.onDisconnect_=ui(),lt(t.eventQueue_,Q(),s)}function Jv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Vv)}function Wi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Xv(t,e,n,s){e&&Mn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Hh(t,e,n){return Mo(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function zo(t,e=t.transactionQueueTree_){if(e||$i(t,e),Ln(e)){const n=Uh(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Zv(t,Ns(e),n)}else Ah(e)&&Ui(e,n=>{zo(t,n)})}function Zv(t,e,n){const s=n.map(c=>c.currentWriteId),i=Hh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Wi(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Jt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();$i(t,$o(t.transactionQueueTree_,e)),zo(t,t.transactionQueueTree_),lt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Mn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Oe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Vi(t,e)}},o)}function Vi(t,e){const n=Bh(t,e),s=Ns(n),i=Uh(t,n);return eE(t,i,s),s}function eE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=xe(n,a.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=$v)u=!0,h="maxretry",i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Hh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){jo("transaction failed: Data returned ",_,a.path);let v=Ce(_);typeof _=="object"&&_!=null&&vt(_,".priority")||(v=v.updatePriority(f.getPriority()));const O=a.currentWriteId,F=Go(t),k=xh(v,f,F);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=k,a.currentWriteId=Fh(t),o.splice(o.indexOf(O),1),i=i.concat(bh(t.serverSyncTree_,a.path,k,a.currentWriteId,a.applyLocally)),i=i.concat(Jt(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}$i(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Mn(s[l]);zo(t,t.transactionQueueTree_)}function Bh(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Ln(s)===void 0;)s=$o(s,n),e=re(e),n=z(e);return s}function Uh(t,e){const n=[];return Wh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Wh(t,e,n){const s=Ln(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ui(e,i=>{Wh(t,i,n)})}function $i(t,e){const n=Ln(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Nh(e,n.length>0?n:void 0)}Ui(e,s=>{$i(t,s)})}function Vh(t,e){const n=Ns(Bh(t,e)),s=$o(t.transactionQueueTree_,e);return Pv(s,i=>{ur(t,i)}),ur(t,s),Ph(s,i=>{ur(t,i)}),n}function ur(t,e){const n=Ln(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Nh(e,void 0):n.length=r+1,lt(t.eventQueue_,Ns(e),i);for(let o=0;o<s.length;o++)Mn(s[o])}}/**
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
 */function tE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const $a=function(t,e){const n=sE(t),s=n.namespace;n.domain==="firebase.com"&&mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_m();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Uu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},sE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=tE(t.substring(u,h)));const f=nE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class iE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class rE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class oE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ko{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Yu(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=xa(this._queryParams),n=Co(e);return n==="{}"?"default":n}get _queryObject(){return xa(this._queryParams)}isEqual(e){if(e=Dn(e),!(e instanceof Ko))return!1;const n=this._repo===e._repo,s=Xu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Xm(this._path)}}class Et extends Ko{constructor(e,n){super(e,n,new xo,!1)}get parent(){const e=Ju(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Es{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=zr(this.ref,e);return new Es(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Es(i,zr(this.ref,s),fe)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hr(t,e){return t=Dn(t),t._checkNotDeleted("ref"),e!==void 0?zr(t._root,e):t._root}function zr(t,e){return t=Dn(t),z(t._path)===null?Fv("child","path",e):kh("child","path",e),new Et(t._repo,_e(t._path,e))}function $E(t){return Mh("remove",t._path),Kr(t,null)}function Kr(t,e){t=Dn(t),Mh("set",t._path),Lv("set",e,t._path);const n=new Di;return Yv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function lE(t){t=Dn(t);const e=new oE(()=>{}),n=new Yo(e);return Kv(t._repo,t,n).then(s=>new Es(s,new Et(t._repo,t._path),t._queryParams.getIndex()))}class Yo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new iE("value",this,new Es(e.snapshotNode,new Et(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rE(this,e,n):null}matches(e){return e instanceof Yo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}av(Et);dv(Et);/**
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
 */const aE="FIREBASE_DATABASE_EMULATOR_HOST",Yr={};let cE=!1;function uE(t,e,n,s){t.repoInfo_=new Uu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function hE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$a(r,i),l=o.repoInfo,a;typeof process<"u"&&ua&&(a=ua[aE]),a?(r=`http://${a}?ns=${l.namespace}`,o=$a(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new Tm(t.name,t.options,e);Hv("Invalid Firebase Database URL",o),q(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=dE(l,t,c,new Im(t.name,n));return new pE(u,t)}function fE(t,e){const n=Yr[e];(!n||n[t.key]!==t)&&mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Jv(t),delete n[t.key]}function dE(t,e,n,s){let i=Yr[e.name];i||(i={},Yr[e.name]=i);let r=i[t.toURLString()];return r&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jv(t,cE,n,s),i[t.toURLString()]=r,r}class pE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function _E(t=Jg(),e){const n=zg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=H_("database");s&&gE(n,...s)}return n}function gE(t,e,n,s={}){t=Dn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ys(Ys.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:B_(s.mockUserToken,t.app.options.projectId);r=new Ys(o)}uE(i,e,n,r)}/**
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
 */function mE(t){cm(Qg),ri(new hs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return hE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Cn(ha,fa,t),Cn(ha,fa,"esm2017")}_t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};mE();const yE={apiKey:"AIzaSyAAeGX3hrpOvwPW4b9592BB9EHenjNyeIo",authDomain:"final-6482f.firebaseapp.com",databaseURL:"https://final-6482f-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"final-6482f",storageBucket:"final-6482f.appspot.com",messagingSenderId:"993703155420",appId:"1:993703155420:web:f2316fa78778d17a998619",measurementId:"G-M9G5NTYFQK"},vE=bu(yE),fr=_E(vE),EE={data(){return{productData:[{khachHang:"",tenSp:"",sl:0,gia:0,thanhtien:0,dvt:""}],khachHang:"",tongTien:0,number1:0,number2:0,operation:"",result:null,totalAmount:0}},methods:{addProduct(){this.productData.push({khachHang:"",tenSp:"",sl:0,gia:0,thanhtien:0,dvt:""})},calculateTotal(t){t.thanhtien=t.sl*t.gia,this.updateTotalAmount()},updateTotalAmount(){this.tongTien=this.productData.reduce((t,e)=>t+e.thanhtien,0)},validateData(){if(!this.khachHang.trim())return alert("Vui lòng nhập tên khách hàng."),!1;for(const t of this.productData)if(!t.tenSp.trim()||t.sl<=0||t.gia<=0||!t.dvt.trim())return alert("Vui lòng nhập đầy đủ thông tin sản phẩm hợp lệ."),!1;return!0},getCurrentDateTime(){const t=new Date;return`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`},saveProductDataToLocalStorage(){const t={productData:this.productData,khachHang:this.khachHang,tongTien:this.tongTien};localStorage.setItem("productData",JSON.stringify(t))},loadProductDataFromLocalStorage(){const t=JSON.parse(localStorage.getItem("productData"));t&&(this.productData=t.productData||this.productData,this.khachHang=t.khachHang||this.khachHang,this.tongTien=t.tongTien||this.tongTien)},exportToJSON(){if(this.validateData()){const t=new Date().toLocaleDateString("vi-VN").replace(/\//g,"_"),e=this.productData.map(s=>({dvt:s.dvt,gia:s.gia,sl:s.sl,thanhtien:s.thanhtien,tenSp:s.tenSp})),n=hr(fr,"hoadon/"+t);lE(n).then(s=>{let i=null,r=s.size;if(s.forEach(o=>{const l=o.val();l.khachHang===this.khachHang&&(i=l,r=o.key)}),i){e.forEach(l=>{const a=i.sanPham.find(c=>c.tenSp===l.tenSp&&c.dvt===l.dvt);a?(a.sl+=l.sl,a.thanhtien+=l.thanhtien):i.sanPham.push(l)}),i.tongTien+=this.tongTien;const o=hr(fr,`hoadon/${t}/${r}`);Kr(o,i).then(()=>{alert("Dữ liệu đã được cập nhật thành công"),this.clearAll()}).catch(l=>alert("Lỗi khi cập nhật dữ liệu:",l))}else{const o=hr(fr,`hoadon/${t}/${s.size}`),l={khachHang:this.khachHang,ngay:this.getCurrentDateTime(),sanPham:e,tongTien:this.tongTien};Kr(o,l).then(()=>{alert("Dữ liệu đã được tạo mới thành công"),this.clearAll()}).catch(a=>alert("Lỗi khi tạo dữ liệu:",a))}}).catch(s=>alert("Lỗi khi lấy dữ liệu:",s))}},clearAll(){this.productData=[{khachHang:"",tenSp:"",sl:0,gia:0,thanhtien:0,dvt:""}],this.khachHang="",this.tongTien=0,localStorage.removeItem("productData")},calculateResult(){switch(this.operation){case"add":this.result=this.number1+this.number2;break;case"multiply":this.result=this.number1*this.number2;break;case"minus":this.result=this.number1-this.number2;break;case"devide":this.result=this.number1/this.number2;break}}},watch:{productData:{handler(){this.saveProductDataToLocalStorage()},deep:!0},khachHang:{handler(t){localStorage.setItem("khachHang",t)}}},created(){this.loadProductDataFromLocalStorage()}},Qo=t=>(Ec("data-v-44971562"),t=t(),Cc(),t),CE=Qo(()=>U("header",null,"Hóa đơn sản phẩm",-1)),bE={class:"khach-hang"},wE=Qo(()=>U("p",null,"Khách hàng:",-1)),SE=Qo(()=>U("thead",null,[U("tr",null,[U("th"),U("th",null,"Tên SP"),U("th",{style:{padding:"0px 10px",width:"35px"}},"SL"),U("th",{style:{padding:"0px 5px"}},"ĐVT"),U("th",{style:{padding:"0px 15px",width:"35px !important"}},"Giá"),U("th",{style:{padding:"0px 5px",width:"40px"}},"Thành tiền")])],-1)),IE=["onUpdate:modelValue"],TE={class:"sl"},RE=["onUpdate:modelValue","onInput"],xE=["onUpdate:modelValue"],NE=Gc('<option value="" data-v-44971562>---</option><option value="Thùng" data-v-44971562>T</option><option value="Gói" data-v-44971562>G</option><option value="Hộp" data-v-44971562>H</option><option value="Cái" data-v-44971562>C</option><option value="Bịch" data-v-44971562>B</option>',6),AE=[NE],PE={class:"gia"},OE=["onUpdate:modelValue","onInput"],DE=["value"],kE={class:"to-right"},ME={class:"btn-wrap"},LE={style:{"margin-top":"1rem",float:"right"}},FE=Gc('<option value="" data-v-44971562>(---)</option><option value="add" data-v-44971562>( + )</option><option value="multiply" data-v-44971562>( * )</option><option value="minus" data-v-44971562>( - )</option><option value="devide" data-v-44971562>( / )</option>',5),HE=[FE];function BE(t,e,n,s,i,r){return Qn(),qs(We,null,[CE,U("div",bE,[wE,U("p",null,[St(U("input",{required:"","onUpdate:modelValue":e[0]||(e[0]=o=>i.khachHang=o)},null,512),[[fn,i.khachHang]])])]),U("main",null,[U("table",null,[SE,U("tbody",null,[(Qn(!0),qs(We,null,Zf(i.productData,(o,l)=>(Qn(),qs("tr",{key:l},[U("td",null,Us(l+1),1),U("td",null,[St(U("input",{required:"","onUpdate:modelValue":a=>o.tenSp=a,class:"ten-sp"},null,8,IE),[[fn,o.tenSp]])]),U("td",TE,[St(U("input",{required:"",class:"sl","onUpdate:modelValue":a=>o.sl=a,type:"number",onInput:a=>r.calculateTotal(o)},null,40,RE),[[fn,o.sl,void 0,{number:!0}]])]),U("td",null,[St(U("select",{class:"dvt","onUpdate:modelValue":a=>o.dvt=a},AE,8,xE),[[Ol,o.dvt]])]),U("td",PE,[St(U("input",{required:"",class:"gia","onUpdate:modelValue":a=>o.gia=a,type:"number",onInput:a=>r.calculateTotal(o)},null,40,OE),[[fn,o.gia,void 0,{number:!0}]])]),U("td",null,[U("input",{required:"",class:"thanhtien",value:o.thanhtien,readonly:""},null,8,DE)])]))),128))])]),U("p",kE,"Tổng tiền: "+Us(i.tongTien),1),U("div",ME,[U("button",{class:"to-right",onClick:e[1]||(e[1]=(...o)=>r.clearAll&&r.clearAll(...o))},"🗑️"),U("button",{class:"to-right",onClick:e[2]||(e[2]=(...o)=>r.addProduct&&r.addProduct(...o))},"➕"),U("button",{class:"to-right",onClick:e[3]||(e[3]=(...o)=>r.exportToJSON&&r.exportToJSON(...o))},"Xuất")]),U("div",LE,[St(U("select",{style:{"margin-right":"10px"},"onUpdate:modelValue":e[4]||(e[4]=o=>i.operation=o),onChange:e[5]||(e[5]=(...o)=>r.calculateResult&&r.calculateResult(...o))},HE,544),[[Ol,i.operation]]),St(U("input",{style:{"margin-right":"10px",width:"80px"},"onUpdate:modelValue":e[6]||(e[6]=o=>i.number1=o),type:"number",placeholder:"Số thứ nhất"},null,512),[[fn,i.number1,void 0,{number:!0}]]),St(U("input",{style:{"margin-right":"10px",width:"80px"},"onUpdate:modelValue":e[7]||(e[7]=o=>i.number2=o),type:"number",placeholder:"Số thứ hai"},null,512),[[fn,i.number2,void 0,{number:!0}]]),U("button",{onClick:e[8]||(e[8]=(...o)=>r.calculateResult&&r.calculateResult(...o))},"( = )"),U("p",null,"Kết quả: "+Us(i.result),1)])])],64)}const UE=au(EE,[["render",BE],["__scopeId","data-v-44971562"]]),WE=v_({history:Yp("/"),routes:[{path:"/",name:"home",component:UE},{path:"/about",name:"about",component:()=>Xl(()=>import("./AboutView-CYRqCgb_.js"),__vite__mapDeps([0,1]))},{path:"/edit",name:"edit",component:()=>Xl(()=>import("./EditSp-DU69V2cf.js"),__vite__mapDeps([2,3]))}]}),$h=_p(T_);$h.use(WE);$h.mount("#app");export{We as F,au as _,$E as a,U as b,qs as c,fr as d,Zf as e,Ir as f,lE as g,VE as h,fn as i,Cc as j,Gc as k,Qn as o,Ec as p,hr as r,Kr as s,Us as t,Ol as v,St as w};
