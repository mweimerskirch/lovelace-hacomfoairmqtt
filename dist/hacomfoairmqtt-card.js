/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,s,n){var r,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(i<3?r(o):i>3?r(t,s,o):r(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},n=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${n}--\x3e`,i=new RegExp(`${n}|${r}`);class o{constructor(e,t){this.parts=[],this.element=t;const s=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let l=0,u=-1,p=0;const{strings:h,values:{length:m}}=e;for(;p<m;){const e=o.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)a(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=h[p],s=d.exec(t)[2],n=s.toLowerCase()+"$lit$",r=e.getAttribute(n);e.removeAttribute(n);const o=r.split(i);this.parts.push({type:"attribute",index:u,name:s,strings:o}),p+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,r=t.split(i),o=r.length-1;for(let t=0;t<o;t++){let s,i=r[t];if(""===i)s=c();else{const e=d.exec(i);null!==e&&a(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(i)}n.insertBefore(s,e),this.parts.push({type:"node",index:++u})}""===r[o]?(n.insertBefore(c(),e),s.push(e)):e.data=r[o],p+=o}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&u!==l||(u++,t.insertBefore(c(),e)),l=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(s.push(e),u--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=r.pop()}for(const e of s)e.parentNode.removeChild(e)}}const a=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e,t){const{element:{content:s},parts:n}=e,r=document.createTreeWalker(s,133,null,!1);let i=h(n),o=n[i],a=-1,l=0;const c=[];let d=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,i=h(n,i),o=n[i]}c.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},h=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(l(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=e=>"function"==typeof e&&m.has(e),g={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,o=0,a=0,c=r.nextNode();for(;o<n.length;)if(i=n[o],l(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(s.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=s.pop(),c=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),y=` ${n} `;class b{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===e.indexOf("--\x3e",o+1);const a=d.exec(e);t+=null===a?e+(s?y:r):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==S&&(t=S.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new T(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=s[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let n="";for(let r=0;r<t;r++){n+=e[r];const t=s[r];if(void 0!==t){const e=t.value;if(w(e)||!x(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||w(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class ${constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const s=new _(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const r of e)s=t[n],void 0===s&&(s=new $(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(r),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class M extends C{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends T{}let N=!1;(()=>{try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class E{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=V(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const V=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(e){let t=k.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},k.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(n);return s=t.keyString.get(r),void 0===s&&(s=new o(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const k=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,s,n){const r=t[0];if("."===r){return new M(e,t.slice(1),s).parts}if("@"===r)return[new E(e,t.slice(1),n.eventContext)];if("?"===r)return[new P(e,t.slice(1),s)];return new C(e,t,s).parts}handleTextExpression(e){return new $(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const L=(e,...t)=>new b(e,t,"html",D)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,H=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const Y=e=>t=>{const s=H(t.type,e);let r=k.get(s);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},k.set(s,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(n);if(i=r.keyString.get(a),void 0===i){const s=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(s,e),i=new o(t,s),r.keyString.set(a,i)}return r.stringsArray.set(t.strings,i),i},j=["html","svg"],q=new Set,R=(e,t,s)=>{q.add(e);const n=s?s.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{j.forEach(t=>{const s=k.get(H(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),u(e,s)})})})(e);const a=n.content;s?function(e,t,s=null){const{element:{content:n},parts:r}=e;if(null==s)return void n.appendChild(t);const i=document.createTreeWalker(n,133,null,!1);let o=h(r),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===s&&(a=p(t),s.parentNode.insertBefore(t,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=h(r,o);return}o=h(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),u(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),B={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:F};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=B){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,s,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdateInternal(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||B}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=F){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||z,r="function"==typeof n?n:n.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||z.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=B){const n=this.constructor,r=n._attributeNameForProperty(e,s);if(void 0!==r){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,s){let n=!0;if(void 0!==e){const r=this.constructor;s=s||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:n}=t;return{kind:s,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function Q(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):Z(e,t)}function K(e){return Q({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class ee{constructor(e,t){if(t!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const s=t.reduce((t,s,n)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[n+1],e[0]);return new ee(s,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const se={};class ne extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),n=[];s.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ee(String(t),X)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==se&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return se}}ne.finalized=!0,ne.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=I.has(t),o=U&&11===t.nodeType&&!!t.host,a=o&&!q.has(r),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=I.get(t);void 0===r&&(s(t,t.firstChild),I.set(t,r=new $(Object.assign({templateFactory:O},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:Y(r)},n)),a){const e=I.get(l);I.delete(l);const n=e.value instanceof _?e.value.template:void 0;R(r,l,n),s(t,t.firstChild),t.appendChild(l),I.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var re=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ie="[^\\s]+",oe=/\[([^]*?)\]/gm;function ae(e,t){for(var s=[],n=0,r=e.length;n<r;n++)s.push(e[n].substr(0,t));return s}var le=function(e){return function(t,s){var n=s[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return n>-1?n:null}};function ce(e){for(var t=[],s=1;s<arguments.length;s++)t[s-1]=arguments[s];for(var n=0,r=t;n<r.length;n++){var i=r[n];for(var o in i)e[o]=i[o]}return e}var de=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ue=["January","February","March","April","May","June","July","August","September","October","November","December"],pe=ae(ue,3),he={dayNamesShort:ae(de,3),dayNames:de,monthNamesShort:pe,monthNames:ue,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},me=ce({},he),fe=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},ge={D:function(e){return String(e.getDate())},DD:function(e){return fe(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return fe(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return fe(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return fe(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return fe(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return fe(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return fe(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return fe(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return fe(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return fe(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return fe(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(Math.floor(Math.abs(t)/60),2)+":"+fe(Math.abs(t)%60,2)}},ve=function(e){return+e-1},_e=[null,"[1-9]\\d?"],Se=[null,ie],ye=["isPm",ie,function(e,t){var s=e.toLowerCase();return s===t.amPm[0]?0:s===t.amPm[1]?1:null}],be=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var s=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?s:-s}return 0}],we=(le("monthNamesShort"),le("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xe=function(e,t,s){if(void 0===t&&(t=we.default),void 0===s&&(s={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var n=[];t=(t=we[t]||t).replace(oe,(function(e,t){return n.push(t),"@@@"}));var r=ce(ce({},me),s);return(t=t.replace(re,(function(t){return ge[t](e,r)}))).replace(/@@@/g,(function(){return n.shift()}))},Ce=(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e,t,s,n){n=n||{},s=null==s?{}:s;var r=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=s,e.dispatchEvent(r),r});let Te=class extends ne{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _climateEntity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.climateEntity)||"climate.ca350_climate"}get _outsideTempSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.outsideTempSensor)||"sensor.ca350_outsidetemp"}get _exhaustTempSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.exhaustTempSensor)||"sensor.ca350_exhausttemp"}get _returnTempSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.returnTempSensor)||"sensor.ca350_returntemp"}get _supplyTempSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.supplyTempSensor)||"sensor.ca350_supplytemp"}get _filterStatusSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.filterStatusSensor)||"binary_sensor.ca350_filterstatus"}get _bypassValveSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.bypassValveSensor)||"binary_sensor.ca350_bypass_valve"}get _summerModeSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.summerModeSensor)||"binary_sensor.ca350_summer_mode"}get _fanSpeedSupplySensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.fanSpeedSupplySensor)||"sensor.ca350_fan_speed_supply"}get _fanSpeedExhaustSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.fanSpeedExhaustSensor)||"sensor.ca350_fan_speed_exhaust"}get _returnAirLevelSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.returnAirLevelSensor)||"sensor.ca350_return_air_level"}get _supplyAirLevelSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.supplyAirLevelSensor)||"sensor.ca350_supply_air_level"}get _preheatingStatusSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.preheatingStatusSensor)||"binary_sensor.ca350_preheatingstatus"}render(){if(!this.hass||!this._helpers)return L``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states).filter(e=>"climate"===e.substr(0,e.indexOf("."))),t=Object.keys(this.hass.states).filter(e=>"sensor"===e.substr(0,e.indexOf("."))),s=Object.keys(this.hass.states).filter(e=>"binary_sensor"===e.substr(0,e.indexOf(".")));return L`
      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 MQTT Climate Entity (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"climateEntity"}
        >
          <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._climateEntity)}>
            ${e.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 outside temperature sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"outsideTempSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._outsideTempSensor)}>
            ${t.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 exhaust temperature sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"exhaustTempSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._exhaustTempSensor)}>
            ${t.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 return temperature sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"returnTempSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._returnTempSensor)}>
            ${t.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 supply temperature sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"supplyTempSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._supplyTempSensor)}>
            ${t.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 filter status sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"filterStatusSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${s.indexOf(this._filterStatusSensor)}>
            ${s.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 Bypass valve sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"bypassValveSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${s.indexOf(this._bypassValveSensor)}>
            ${s.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 summer mode sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"summerModeSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${s.indexOf(this._summerModeSensor)}>
            ${s.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 return air level sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"returnAirLevelSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._returnAirLevelSensor)}>
            ${t.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 supply air level sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"supplyAirLevelSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._supplyAirLevelSensor)}>
            ${t.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 preheating status sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"preheatingStatusSensor"}
        >
          <paper-listbox slot="dropdown-content" .selected=${s.indexOf(this._preheatingStatusSensor)}>
            ${s.map(e=>L`
                <paper-item>${e}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),Ce(this,"config-changed",{config:this._config}))}static get styles(){return te`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }

      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }

      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }

      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }

      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }

      ha-formfield {
        padding-bottom: 8px;
      }
    `}};e([Q({attribute:!1})],Te.prototype,"hass",void 0),e([K()],Te.prototype,"_config",void 0),e([K()],Te.prototype,"_toggle",void 0),e([K()],Te.prototype,"_helpers",void 0),Te=e([J("hacomfoairmqtt-card-editor")],Te);var $e={version:"Version",invalid_configuration:"Invalid configuration"},Pe={common:$e},Me=Object.freeze({__proto__:null,common:$e,default:Pe}),Ae={version:"Version",invalid_configuration:"Ungültige Konfiguration"},Ne={common:Ae},Ee=Object.freeze({__proto__:null,common:Ae,default:Ne}),Ve={version:"Version",invalid_configuration:"Configuration invalide"},Oe={common:Ve},ke={version:"Versioun",invalid_configuration:"Ongëlteg Konfiguratioun"},Ie={common:ke};const De={en:Me,fr:Object.freeze({__proto__:null,common:Ve,default:Oe}),de:Ee,lb:Object.freeze({__proto__:null,common:ke,default:Ie})};function Le(e,t="",s=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=e.split(".").reduce((e,t)=>e[t],De[n])}catch(t){r=e.split(".").reduce((e,t)=>e[t],De.en)}return void 0===r&&(r=e.split(".").reduce((e,t)=>e[t],De.en)),""!==t&&""!==s&&(r=r.replace(t,s)),r}console.info(`%c  HAComfoairMQTT Card \n%c  ${Le("common.version")} 0.1.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"hacomfoairmqtt-card",name:"HAComfoairMQTT Card",description:"A template custom card for you to create something awesome"});let He=class extends ne{constructor(){super(...arguments),this.fanToggleButtons=[{label:"Off",value:"off",icon:"mdi:fan-off"},{label:"Low",value:"low",icon:"mdi:fan-speed-1"},{label:"Medium",value:"medium",icon:"mdi:fan-speed-2"},{label:"High",value:"high",icon:"mdi:fan-speed-3"}]}static async getConfigElement(){return document.createElement("hacomfoairmqtt-card-editor")}static getStubConfig(){return{climateEntity:"climate.ca350_climate",outsideTempSensor:"sensor.ca350_outsidetemp",exhaustTempSensor:"sensor.ca350_exhausttemp",returnTempSensor:"sensor.ca350_returntemp",supplyTempSensor:"sensor.ca350_supplytemp",filterStatusSensor:"binary_sensor.ca350_filterstatus",bypassValveSensor:"binary_sensor.ca350_bypass_valve",summerModeSensor:"binary_sensor.ca350_summer_mode",returnAirLevelSensor:"sensor.ca350_return_air_level",supplyAirLevelSensor:"sensor.ca350_supply_air_level",preheatingStatusSensor:"binary_sensor.ca350_preheatingstatus"}}setConfig(e){if(!e)throw new Error(Le("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=Object.assign({name:"Boilerplate"},e)}shouldUpdate(e){return!!this.config&&function(e,t){if(t.has("config"))return!0;const s=t.get("hass");if(s&&e.config&&s.states&&e.hass.states){const t=e.config,n=s.states,r=e.hass.states;return t.climateEntity&&n[t.climateEntity]!==r[t.climateEntity]||t.outsideTempSensor&&n[t.outsideTempSensor]!==r[t.outsideTempSensor]||t.exhaustTempSensor&&n[t.exhaustTempSensor]!==r[t.exhaustTempSensor]||t.returnTempSensor&&n[t.returnTempSensor]!==r[t.returnTempSensor]||t.supplyTempSensor&&n[t.supplyTempSensor]!==r[t.supplyTempSensor]||t.filterStatusSensor&&n[t.filterStatusSensor]!==r[t.filterStatusSensor]||t.bypassValveSensor&&n[t.bypassValveSensor]!==r[t.bypassValveSensor]||t.summerModeSensor&&n[t.summerModeSensor]!==r[t.summerModeSensor]||t.returnAirLevelSensor&&n[t.returnAirLevelSensor]!==r[t.returnAirLevelSensor]||t.supplyAirLevelSensor&&n[t.supplyAirLevelSensor]!==r[t.supplyAirLevelSensor]||t.preheatingStatusSensor&&n[t.preheatingStatusSensor]!==r[t.preheatingStatusSensor]}return!1}(this,e)}renderFanButtons(){return L`
      <div class="fan-speeds flex-col-row">
        ${this.fanToggleButtons.map(e=>L`
            <mwc-button
              .value=${e.value}
              ?active=${this.hass.states[this.config.climateEntity].attributes.fan_mode===e.value}
              role="button"
              @click=${this._changeFanSpeed}>
              <ha-icon
                .icon=${e.icon}>
              </ha-icon>
            </mwc-button>
          `)}
      </div>
    `}renderTemperatures(){return L`
      <div class="temperatures temperatures-in">
        <div>
          ${this.hass.states[this.config.outsideTempSensor]?this.hass.states[this.config.outsideTempSensor].state+" °C":"-"}
        </div>
        <ha-icon icon="mdi:arrow-right-bold-outline"></ha-icon>
        <div>
          ${this.hass.states[this.config.supplyTempSensor]?this.hass.states[this.config.supplyTempSensor].state+" °C":"-"}
        </div>
      </div>
      <div class="temperatures temperatures-out">
        <div>
          ${this.hass.states[this.config.returnTempSensor]?this.hass.states[this.config.returnTempSensor].state+" °C":"-"}
        </div>
        <ha-icon icon="mdi:arrow-left-bold-outline"></ha-icon>
        <div>
          ${this.hass.states[this.config.exhaustTempSensor]?this.hass.states[this.config.exhaustTempSensor].state+" °C":"-"}
        </div>
      </div>`}renderThermostat(){return L`
      <div>
        <ha-icon icon="mdi:thermostat"></ha-icon>
        ${this.config.climateEntity&&this.hass.states[this.config.climateEntity]?this.hass.states[this.config.climateEntity].attributes.temperature:"-"}
        °C
      </div>`}renderSpeed(){return L`
      <div>
        <ha-icon icon="mdi:speedometer"></ha-icon>
        ${this.hass.states[this.config.supplyAirLevelSensor]?parseInt(this.hass.states[this.config.supplyAirLevelSensor].state)+"%":"-"}
        ${this.hass.states[this.config.returnAirLevelSensor]&&parseInt(this.hass.states[this.config.supplyAirLevelSensor].state)!==parseInt(this.hass.states[this.config.returnAirLevelSensor].state)?parseInt(this.hass.states[this.config.returnAirLevelSensor].state)+"%":""}
      </div>`}render(){return L`
      <ha-card>
        <mwc-icon-button
          class="more-info"
          label="Open more info"
          @click=${this._handleMoreInfo}
          tabindex="0"
        >
          <ha-icon icon="mdi:dots-vertical"></ha-icon>
        </mwc-icon-button>

        <div class="content">
          <div>
            <svg class="house" viewBox="0 0 124 94">
              <g><path d="m 62,2 60,30 v 60 H 2 V 32 Z"></path></g>
            </svg>
            <div class="house-container">
              ${this.renderFanButtons()}
              ${this.renderTemperatures()}
              <div class="speeds">
                ${this.renderThermostat()}
                ${this.renderSpeed()}
              </div>
            </div>
            <div class="icons">
              ${this.renderFilterIcon()}
              ${this.renderBypassIcon()}
              ${this.renderPreheatIcon()}
              ${this.renderSeasonIcon()}
            </div>
          </div>
        </div>
      </ha-card>
    `}_handleMoreInfo(){Ce(this,"hass-more-info",{entityId:this.config.climateEntity})}_handleFilterIconClick(){Ce(this,"hass-more-info",{entityId:this.config.filterStatusSensor})}_handleBypassIconClick(){Ce(this,"hass-more-info",{entityId:this.config.bypassValveSensor})}_handlePreheatIconClick(){Ce(this,"hass-more-info",{entityId:this.config.preheatingStatusSensor})}_handleSeasonIconClick(){Ce(this,"hass-more-info",{entityId:this.config.summerModeSensor})}_changeFanSpeed(e){console.log("Fan Action:",e.currentTarget.value);const t={entity_id:this.config.climateEntity,fan_mode:e.currentTarget.value};this.hass.callService("climate","set_fan_mode",t)}renderFilterIcon(){if(!this.hass.states[this.config.filterStatusSensor])return L`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;const e=this.hass.states[this.config.filterStatusSensor]&&"on"!=this.hass.states[this.config.filterStatusSensor].state;return L`
      <ha-icon
        class=${e?"inactive":"warning"}
        icon="mdi:air-filter"
        @click=${this._handleFilterIconClick}
      ></ha-icon>`}renderBypassIcon(){if(!this.hass.states[this.config.bypassValveSensor])return L`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;const e=this.hass.states[this.config.bypassValveSensor]&&"1"==this.hass.states[this.config.bypassValveSensor].state;return L`
      <ha-icon
        class=${e?"":"inactive"}
        icon="mdi:electric-switch"
        @click=${this._handleBypassIconClick}
      ></ha-icon>`}renderPreheatIcon(){if(!this.hass.states[this.config.preheatingStatusSensor])return L`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;const e=this.hass.states[this.config.preheatingStatusSensor]&&"1"==this.hass.states[this.config.preheatingStatusSensor].state;return L`
      <ha-icon
        class=${e?"":"inactive"}
        icon="mdi:radiator"
        @click=${this._handlePreheatIconClick}
      ></ha-icon>`}renderSeasonIcon(){if(!this.hass.states[this.config.summerModeSensor])return L`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;const e="off"==this.hass.states[this.config.summerModeSensor].state;return L`
      <ha-icon
        icon=${e?"mdi:snowflake":"mdi:weather-sunny"}
        @click=${this._handleSeasonIconClick}
      ></ha-icon>`}getCardSize(){return 6}};He.styles=te`
    ha-card {
      height: 100%;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      text-align: center;
      --name-font-size: 1.2rem;
      --brightness-font-size: 1.2rem;
    }

    .more-info {
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 0;
      border-radius: 100%;
      color: var(--secondary-text-color);
      z-index: 1;
    }

    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 16px;
    }

    .content > div {
      position: relative;
    }

    .inactive {
      opacity: 0.33;
    }

    .warning {
      color: var(--error-color);
    }

    .house,
    .house-container {
      width: 260px;
      height: 200px;
    }

    .house {
      fill: none;
      stroke-width: 2px;
      stroke: var(--primary-text-color);
    }

    .house-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .house-container .fan-speeds {
      position: absolute;
      bottom: 6px;
      width: 90%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 1px solid var(--primary-text-color);
      margin: 0 auto;
      left: 0;
      right: 0;
    }

    .icons {
      position: absolute;
      top: 50px;
      left: 50%;
      margin-left: -80px;
      width: 160px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }

    .temperatures {
      border-top: 1px solid var(--primary-text-color);
      border-bottom: 1px solid var(--primary-text-color);
      background: var(--card-background-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      width: 140px;
      left: 50%;
      margin-left: -190px;
    }

    .temperatures-in {
      top: 88px;
    }

    .temperatures-out {
      top: 122px;
      flex-direction: row-reverse;
    }

    .speeds {
      position: absolute;
      width: 140px;
      left: 38%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      top: 90px;
    }

    .speeds :first-child {
      font-size: 140%;
      margin-bottom: 5px;
    }

    mwc-button {
      opacity: .33;
    }

    mwc-button[active] {
      opacity: 1;
    }
  `,e([Q({attribute:!1})],He.prototype,"hass",void 0),e([K()],He.prototype,"config",void 0),He=e([J("hacomfoairmqtt-card")],He);export{He as HAComfoAirMQTTCard};
