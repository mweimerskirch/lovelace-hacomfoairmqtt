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
function e(e,t,n,s){var r,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(i<3?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o
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
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},s=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${s}--\x3e`,i=new RegExp(`${s}|${r}`);class o{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let c=0,d=-1,h=0;const{strings:p,values:{length:m}}=e;for(;h<m;){const e=o.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)a(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=p[h],n=u.exec(t)[2],s=n.toLowerCase()+"$lit$",r=e.getAttribute(s);e.removeAttribute(s);const o=r.split(i);this.parts.push({type:"attribute",index:d,name:n,strings:o}),h+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,r=t.split(i),o=r.length-1;for(let t=0;t<o;t++){let n,i=r[t];if(""===i)n=l();else{const e=u.exec(i);null!==e&&a(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}s.insertBefore(n,e),this.parts.push({type:"node",index:++d})}""===r[o]?(s.insertBefore(l(),e),n.push(e)):e.data=r[o],h+=o}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&d!==c||(d++,t.insertBefore(l(),e)),c=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(n.push(e),d--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),h++}}else o.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const a=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:n},parts:s}=e,r=document.createTreeWalker(n,133,null,!1);let i=p(s),o=s[i],a=-1,c=0;const l=[];let u=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-c,i=p(s,i),o=s[i]}l.forEach(e=>e.parentNode.removeChild(e))}const h=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},p=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(c(t))return n}return-1};
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
class _{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],s=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,o=0,a=0,l=r.nextNode();for(;o<s.length;)if(i=s[o],c(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=n.pop(),l=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),S=` ${s} `;class b{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=u.exec(e);t+=null===a?e+(n?S:r):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==y&&(t=y.createHTML(t)),e.innerHTML=t,e}}
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
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let s="";for(let r=0;r<t;r++){s+=e[r];const t=n[r];if(void 0!==t){const e=t.value;if(w(e)||!x(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||w(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const r of e)n=t[s],void 0===n&&(n=new T(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(r),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class M extends C{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends P{}let $=!1;(()=>{try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class N{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(s);return n=t.keyString.get(r),void 0===n&&(n=new o(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,I=new WeakMap;
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
 */const j=new
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
class{handleAttributeExpressions(e,t,n,s){const r=t[0];if("."===r){return new M(e,t.slice(1),n).parts}if("@"===r)return[new N(e,t.slice(1),s.eventContext)];if("?"===r)return[new k(e,t.slice(1),n)];return new C(e,t,n).parts}handleTextExpression(e){return new T(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const U=(e,...t)=>new b(e,t,"html",j)
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
 */,D=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const R=e=>t=>{const n=D(t.type,e);let r=V.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},V.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(s);if(i=r.keyString.get(a),void 0===i){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),i=new o(t,n),r.keyString.set(a,i)}return r.stringsArray.set(t.strings,i),i},q=["html","svg"],H=new Set,Y=(e,t,n)=>{H.add(e);const s=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{q.forEach(t=>{const n=V.get(D(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),d(e,n)})})})(e);const a=s.content;n?function(e,t,n=null){const{element:{content:s},parts:r}=e;if(null==n)return void s.appendChild(t);const i=document.createTreeWalker(s,133,null,!1);let o=p(r),a=0,c=-1;for(;i.nextNode();){c++;for(i.currentNode===n&&(a=h(t),n.parentNode.insertBefore(t,n));-1!==o&&r[o].index===c;){if(a>0){for(;-1!==o;)r[o].index+=a,o=p(r,o);return}o=p(r,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),d(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),B={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:F};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=B){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdateInternal(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||B}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=F){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||z,r="function"==typeof s?s:s.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||z.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=B){const s=this.constructor,r=s._attributeNameForProperty(e,n);if(void 0!==r){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let s=!0;if(void 0!==e){const r=this.constructor;n=n||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;
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
const W=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:s}=t;return{kind:n,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Q(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):Z(e,t)}function K(e){return Q({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class ee{constructor(e,t){if(t!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const n=t.reduce((t,n,s)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[s+1],e[0]);return new ee(n,X)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ne={};class se extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),s=[];n.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ee(String(t),X)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ne}}se.finalized=!0,se.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,i=I.has(t),o=L&&11===t.nodeType&&!!t.host,a=o&&!H.has(r),c=a?document.createDocumentFragment():t;if(((e,t,s)=>{let r=I.get(t);void 0===r&&(n(t,t.firstChild),I.set(t,r=new T(Object.assign({templateFactory:O},s))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:R(r)},s)),a){const e=I.get(c);I.delete(c);const s=e.value instanceof _?e.value.template:void 0;Y(r,c,s),n(t,t.firstChild),t.appendChild(c),I.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var re=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ie="[^\\s]+",oe=/\[([^]*?)\]/gm;function ae(e,t){for(var n=[],s=0,r=e.length;s<r;s++)n.push(e[s].substr(0,t));return n}var ce=function(e){return function(t,n){var s=n[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return s>-1?s:null}};function le(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var s=0,r=t;s<r.length;s++){var i=r[s];for(var o in i)e[o]=i[o]}return e}var ue=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],he=ae(de,3),pe={dayNamesShort:ae(ue,3),dayNames:ue,monthNamesShort:he,monthNames:de,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},me=le({},pe),fe=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},ge={D:function(e){return String(e.getDate())},DD:function(e){return fe(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return fe(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return fe(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return fe(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return fe(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return fe(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return fe(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return fe(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return fe(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return fe(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return fe(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(Math.floor(Math.abs(t)/60),2)+":"+fe(Math.abs(t)%60,2)}},ve=function(e){return+e-1},_e=[null,"[1-9]\\d?"],ye=[null,ie],Se=["isPm",ie,function(e,t){var n=e.toLowerCase();return n===t.amPm[0]?0:n===t.amPm[1]?1:null}],be=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var n=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?n:-n}return 0}],we=(ce("monthNamesShort"),ce("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xe=function(e,t,n){if(void 0===t&&(t=we.default),void 0===n&&(n={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var s=[];t=(t=we[t]||t).replace(oe,(function(e,t){return s.push(t),"@@@"}));var r=le(le({},me),n);return(t=t.replace(re,(function(t){return ge[t](e,r)}))).replace(/@@@/g,(function(){return s.shift()}))},Ce=(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e,t,n,s){s=s||{},n=null==n?{}:n;var r=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=n,e.dispatchEvent(r),r});let Pe=class extends se{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _climateEntity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.climateEntity)||"climate.ca350_climate"}get _outsideTempSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.outsideTempSensor)||"sensor.ca350_outsidetemp"}get _exhaustTempSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.exhaustTempSensor)||"sensor.ca350_exhausttemp"}get _returnTempSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.returnTempSensor)||"sensor.ca350_returntemp"}get _supplyTempSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.supplyTempSensor)||"sensor.ca350_supplytemp"}get _filterStatusSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.filterStatusSensor)||"binary_sensor.ca350_filterstatus"}get _bypassValveSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.bypassValveSensor)||"binary_sensor.ca350_bypass_valve"}get _summerModeSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.summerModeSensor)||"binary_sensor.ca350_summer_mode"}get _fanSpeedSupplySensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.fanSpeedSupplySensor)||"sensor.ca350_fan_speed_supply"}get _fanSpeedExhaustSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.fanSpeedExhaustSensor)||"sensor.ca350_fan_speed_exhaust"}get _returnAirLevelSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.returnAirLevelSensor)||"sensor.ca350_return_air_level"}get _supplyAirLevelSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.supplyAirLevelSensor)||"sensor.ca350_supply_air_level"}get _preheatingStatusSensor(){var e;return(null===(e=this._config)||void 0===e?void 0:e.preheatingStatusSensor)||"binary_sensor.ca350_preheatingstatus"}render(){if(!this.hass||!this._helpers)return U``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states).filter(e=>"climate"===e.substr(0,e.indexOf("."))),t=Object.keys(this.hass.states).filter(e=>"sensor"===e.substr(0,e.indexOf("."))),n=Object.keys(this.hass.states).filter(e=>"binary_sensor"===e.substr(0,e.indexOf(".")));return U`
      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 MQTT Climate Entity (required)"
          @value-changed=${this._valueChanged}
          .configValue=${"climateEntity"}
        >
          <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._climateEntity)}>
            ${e.map(e=>U`
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
            ${t.map(e=>U`
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
            ${t.map(e=>U`
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
            ${t.map(e=>U`
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
            ${t.map(e=>U`
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
          <paper-listbox slot="dropdown-content" .selected=${n.indexOf(this._filterStatusSensor)}>
            ${n.map(e=>U`
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
          <paper-listbox slot="dropdown-content" .selected=${n.indexOf(this._bypassValveSensor)}>
            ${n.map(e=>U`
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
          <paper-listbox slot="dropdown-content" .selected=${n.indexOf(this._summerModeSensor)}>
            ${n.map(e=>U`
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
            ${t.map(e=>U`
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
            ${t.map(e=>U`
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
          <paper-listbox slot="dropdown-content" .selected=${n.indexOf(this._preheatingStatusSensor)}>
            ${n.map(e=>U`
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
    `}};e([Q({attribute:!1})],Pe.prototype,"hass",void 0),e([K()],Pe.prototype,"_config",void 0),e([K()],Pe.prototype,"_toggle",void 0),e([K()],Pe.prototype,"_helpers",void 0),Pe=e([W("hacomfoairmqtt-card-editor")],Pe);var Te={version:"Version",invalid_configuration:"Invalid configuration"},ke={common:Te},Me=Object.freeze({__proto__:null,common:Te,default:ke}),Ee={version:"Version",invalid_configuration:"Ungültige Konfiguration"},$e={common:Ee},Ne=Object.freeze({__proto__:null,common:Ee,default:$e}),Ae={version:"Version",invalid_configuration:"Configuration invalide"},Oe={common:Ae},Ve={version:"Versioun",invalid_configuration:"Ongëlteg Konfiguratioun"},Ie={common:Ve};const je={en:Me,fr:Object.freeze({__proto__:null,common:Ae,default:Oe}),de:Ne,lb:Object.freeze({__proto__:null,common:Ve,default:Ie})};function Ue(e,t="",n=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=e.split(".").reduce((e,t)=>e[t],je[s])}catch(t){r=e.split(".").reduce((e,t)=>e[t],je.en)}return void 0===r&&(r=e.split(".").reduce((e,t)=>e[t],je.en)),""!==t&&""!==n&&(r=r.replace(t,n)),r}function De(e){return{type:"unsubscribe_events",subscription:e}}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var Le=function(e,t){this.options=t,this.commandId=1,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this.setSocket(e)},Re={haVersion:{configurable:!0}};Re.haVersion.get=function(){return this.socket.haVersion},Le.prototype.setSocket=function(e){var t=this,n=this.socket;if(this.socket=e,e.addEventListener("message",(function(e){return t._handleMessage(e)})),e.addEventListener("close",(function(e){return t._handleClose(e)})),n){var s=this.commands;this.commandId=1,this.commands=new Map,s.forEach((function(e){"subscribe"in e&&e.subscribe().then((function(t){e.unsubscribe=t,e.resolve()}))})),this.fireEvent("ready")}},Le.prototype.addEventListener=function(e,t){var n=this.eventListeners.get(e);n||this.eventListeners.set(e,n=[]),n.push(t)},Le.prototype.removeEventListener=function(e,t){var n=this.eventListeners.get(e);if(n){var s=n.indexOf(t);-1!==s&&n.splice(s,1)}},Le.prototype.fireEvent=function(e,t){var n=this;(this.eventListeners.get(e)||[]).forEach((function(e){return e(n,t)}))},Le.prototype.close=function(){this.closeRequested=!0,this.socket.close()},Le.prototype.subscribeEvents=function(e,t){try{return Promise.resolve(this.subscribeMessage(e,function(e){var t={type:"subscribe_events"};return e&&(t.event_type=e),t}(t)))}catch(e){return Promise.reject(e)}},Le.prototype.ping=function(){return this.sendMessagePromise({type:"ping"})},Le.prototype.sendMessage=function(e,t){t||(t=this._genCmdId()),e.id=t,this.socket.send(JSON.stringify(e))},Le.prototype.sendMessagePromise=function(e){var t=this;return new Promise((function(n,s){var r=t._genCmdId();t.commands.set(r,{resolve:n,reject:s}),t.sendMessage(e,r)}))},Le.prototype.subscribeMessage=function(e,t){try{var n,s=this,r=s._genCmdId();return Promise.resolve(new Promise((function(i,o){n={resolve:i,reject:o,callback:e,subscribe:function(){return s.subscribeMessage(e,t)},unsubscribe:function(){try{return Promise.resolve(s.sendMessagePromise(De(r))).then((function(){s.commands.delete(r)}))}catch(e){return Promise.reject(e)}}},s.commands.set(r,n);try{s.sendMessage(t,r)}catch(e){}}))).then((function(){return function(){return n.unsubscribe()}}))}catch(e){return Promise.reject(e)}},Le.prototype._handleMessage=function(e){var t=JSON.parse(e.data),n=this.commands.get(t.id);switch(t.type){case"event":n?n.callback(t.event):(console.warn("Received event for unknown subscription "+t.id+". Unsubscribing."),this.sendMessagePromise(De(t.id)));break;case"result":n&&(t.success?(n.resolve(t.result),"subscribe"in n||this.commands.delete(t.id)):(n.reject(t.error),this.commands.delete(t.id)));break;case"pong":n?(n.resolve(),this.commands.delete(t.id)):console.warn("Received unknown pong response "+t.id)}},Le.prototype._handleClose=function(e){var t=this;if(this.commands.forEach((function(e){"subscribe"in e||e.reject({type:"result",success:!1,error:{code:3,message:"Connection lost"}})})),!this.closeRequested){this.fireEvent("disconnected");var n=Object.assign({},this.options,{setupRetry:0}),s=function(e){var r=t;setTimeout((function(){try{var t=function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return Promise.resolve(n.createSocket(n)).then((function(e){r.setSocket(e)}))}),(function(t){2===t?r.fireEvent("reconnect-error",t):s(e+1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(e){return Promise.reject(e)}}),1e3*Math.min(e,5))};s(0)}},Le.prototype._genCmdId=function(){return++this.commandId},Object.defineProperties(Le.prototype,Re);var qe=function(e){return 1e3*e+Date.now()},He=function(e,t){this.data=e,this._saveTokens=t},Ye={wsUrl:{configurable:!0},accessToken:{configurable:!0},expired:{configurable:!0}};Ye.wsUrl.get=function(){return"ws"+this.data.hassUrl.substr(4)+"/api/websocket"},Ye.accessToken.get=function(){return this.data.access_token},Ye.expired.get=function(){return Date.now()>this.data.expires},He.prototype.refreshAccessToken=function(){try{var e=this;return Promise.resolve(function(e,t,n){try{var s="undefined"!=typeof location&&location;if(s&&"https:"===s.protocol){var r=document.createElement("a");if(r.href=e,"http:"===r.protocol&&"localhost"!==r.hostname)throw 5}var i=new FormData;return null!==t&&i.append("client_id",t),Object.keys(n).forEach((function(e){i.append(e,n[e])})),Promise.resolve(fetch(e+"/auth/token",{method:"POST",credentials:"same-origin",body:i})).then((function(n){if(!n.ok)throw 400===n.status||403===n.status?2:new Error("Unable to fetch tokens");return Promise.resolve(n.json()).then((function(n){return n.hassUrl=e,n.clientId=t,n.expires=qe(n.expires_in),n}))}))}catch(e){return Promise.reject(e)}}(e.data.hassUrl,e.data.clientId,{grant_type:"refresh_token",refresh_token:e.data.refresh_token})).then((function(t){t.refresh_token=e.data.refresh_token,e.data=t,e._saveTokens&&e._saveTokens(t)}))}catch(e){return Promise.reject(e)}},He.prototype.revoke=function(){try{var e=this,t=new FormData;return t.append("action","revoke"),t.append("token",e.data.refresh_token),Promise.resolve(fetch(e.data.hassUrl+"/auth/token",{method:"POST",credentials:"same-origin",body:t})).then((function(){e._saveTokens&&e._saveTokens(null)}))}catch(e){return Promise.reject(e)}},Object.defineProperties(He.prototype,Ye);var ze=function(e){try{return Promise.resolve(function(e){return e.sendMessagePromise({type:"get_states"})}(e)).then((function(e){for(var t={},n=0;n<e.length;n++){var s=e[n];t[s.entity_id]=s}return t}))}catch(e){return Promise.reject(e)}},Fe=function(e,t){return e.subscribeEvents((function(e){return function(t,n){var s,r=t.state;if(void 0!==r){var i=e.data,o=i.entity_id,a=i.new_state;if(a)t.setState(((s={})[a.entity_id]=a,s));else{var c=Object.assign({},r);delete c[o],t.setState(c,!0)}}}(t)}),"state_changed")},Be=function(e){return function(e,t,n,s){if(e[t])return e[t];var r,i=0,o=function(e){var t=[];function n(n,s){e=s?n:Object.assign({},e,n);for(var r=t,i=0;i<r.length;i++)r[i](e)}return{get state(){return e},action:function(t){function s(e){n(e,!1)}return function(){for(var n=arguments,r=[e],i=0;i<arguments.length;i++)r.push(n[i]);var o=t.apply(this,r);if(null!=o)return o.then?o.then(s):s(o)}},setState:n,subscribe:function(e){return t.push(e),function(){!function(e){for(var n=[],s=0;s<t.length;s++)t[s]===e?e=null:n.push(t[s]);t=n}(e)}}}}(),a=function(){return n(e).then((function(e){return o.setState(e,!0)}))},c=function(){return a().catch((function(t){if(e.socket.readyState==e.socket.OPEN)throw t}))};return e[t]={get state(){return o.state},refresh:a,subscribe:function(t){1==++i&&(s&&(r=s(e,o)),e.addEventListener("ready",c),c());var n=o.subscribe(t);return void 0!==o.state&&setTimeout((function(){return t(o.state)}),0),function(){n(),--i||(r&&r.then((function(e){e()})),e.removeEventListener("ready",a))}}},e[t]}(e,"_ent",ze,Fe)};console.info(`%c  HAComfoairMQTT Card \n%c  ${Ue("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"hacomfoairmqtt-card",name:"HAComfoairMQTT Card",description:"A template custom card for you to create something awesome"});let Je=class extends se{constructor(){super(...arguments),this.fanToggleButtons=[{label:"Off",value:"off",icon:"mdi:fan-off"},{label:"Low",value:"low",icon:"mdi:fan-speed-1"},{label:"Medium",value:"medium",icon:"mdi:fan-speed-2"},{label:"High",value:"high",icon:"mdi:fan-speed-3"}]}static async getConfigElement(){return document.createElement("hacomfoairmqtt-card-editor")}static getStubConfig(){return{climateEntity:"climate.ca350_climate",outsideTempSensor:"sensor.ca350_outsidetemp",exhaustTempSensor:"sensor.ca350_exhausttemp",returnTempSensor:"sensor.ca350_returntemp",supplyTempSensor:"sensor.ca350_supplytemp",filterStatusSensor:"binary_sensor.ca350_filterstatus",bypassValveSensor:"binary_sensor.ca350_bypass_valve",summerModeSensor:"binary_sensor.ca350_summer_mode",returnAirLevelSensor:"sensor.ca350_return_air_level",supplyAirLevelSensor:"sensor.ca350_supply_air_level",preheatingStatusSensor:"binary_sensor.ca350_preheatingstatus"}}connectedCallback(){console.log("connectedCallback"),super.connectedCallback(),this.doSubscribeEntities()}doSubscribeEntities(){var e;(null===(e=this.hass)||void 0===e?void 0:e.connection)&&!this._unsubscribeEntitites&&this.isConnected&&(console.log(this.isConnected),this._unsubscribeEntitites=function(e,t){return Be(e).subscribe(t)}(this.hass.connection,e=>this.entitiesUpdated(e)))}entitiesUpdated(e){console.log("entitiesUpdated"),this._climateEntity=e[this.config.climateEntity]}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeEntitites&&(this._unsubscribeEntitites(),this._unsubscribeEntitites=void 0)}setConfig(e){if(!e)throw new Error(Ue("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=Object.assign({name:"Boilerplate"},e)}shouldUpdate(e){return!!this.config&&function(e,t,n){if(t.has("config")||n)return!0;if(e.config.entity){var s=t.get("hass");return!s||s.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}renderFanButtons(){return U`
      <div class="fan-speeds flex-col-row">
        ${this.fanToggleButtons.map(e=>U`
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
    `}renderTemperatures(){return U`
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
      </div>`}renderThermostat(){return U`
      <div>
        <ha-icon icon="mdi:thermostat"></ha-icon>
        ${this.config.climateEntity&&this.hass.states[this.config.climateEntity]?this.hass.states[this.config.climateEntity].attributes.temperature:"-"}
        °C
      </div>`}renderSpeed(){return U`
      <div>
        <ha-icon icon="mdi:speedometer"></ha-icon>
        ${this.hass.states[this.config.supplyAirLevelSensor]?parseInt(this.hass.states[this.config.supplyAirLevelSensor].state)+"%":"-"}
        ${this.hass.states[this.config.returnAirLevelSensor]&&parseInt(this.hass.states[this.config.supplyAirLevelSensor].state)!==parseInt(this.hass.states[this.config.returnAirLevelSensor].state)?parseInt(this.hass.states[this.config.returnAirLevelSensor].state)+"%":""}
      </div>`}render(){return U`
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
            <ha-svg-icon
              class="house"
              viewBox="0 0 124 94"
              path="m 62,2 60,30 v 60 H 2 V 32 Z"
            ></ha-svg-icon>
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
    `}_handleMoreInfo(){Ce(this,"hass-more-info",{entityId:this.config.climateEntity})}_handleFilterIconClick(){Ce(this,"hass-more-info",{entityId:this.config.filterStatusSensor})}_handleBypassIconClick(){Ce(this,"hass-more-info",{entityId:this.config.bypassValveSensor})}_handlePreheatIconClick(){Ce(this,"hass-more-info",{entityId:this.config.preheatingStatusSensor})}_handleSeasonIconClick(){Ce(this,"hass-more-info",{entityId:this.config.summerModeSensor})}_changeFanSpeed(e){console.log("Fan Action:",e.currentTarget.value);const t={entity_id:this.config.climateEntity,fan_mode:e.currentTarget.value};this.hass.callService("climate","set_fan_mode",t)}renderFilterIcon(){if(!this.hass.states[this.config.filterStatusSensor])return U`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;const e=this.hass.states[this.config.filterStatusSensor]&&"on"!=this.hass.states[this.config.filterStatusSensor].state;return U`
      <ha-icon
        class=${e?"inactive":"warning"}
        icon="mdi:air-filter"
        @click=${this._handleFilterIconClick}
      ></ha-icon>`}renderBypassIcon(){if(!this.hass.states[this.config.bypassValveSensor])return U`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;const e=this.hass.states[this.config.bypassValveSensor]&&"1"==this.hass.states[this.config.bypassValveSensor].state;return U`
      <ha-icon
        class=${e?"":"inactive"}
        icon="mdi:electric-switch"
        @click=${this._handleBypassIconClick}
      ></ha-icon>`}renderPreheatIcon(){if(!this.hass.states[this.config.preheatingStatusSensor])return U`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;const e=this.hass.states[this.config.preheatingStatusSensor]&&"1"==this.hass.states[this.config.preheatingStatusSensor].state;return U`
      <ha-icon
        class=${e?"":"inactive"}
        icon="mdi:radiator"
        @click=${this._handlePreheatIconClick}
      ></ha-icon>`}renderSeasonIcon(){if(!this.hass.states[this.config.summerModeSensor])return U`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;const e="off"==this.hass.states[this.config.summerModeSensor].state;return U`
      <ha-icon
        icon=${e?"mdi:snowflake":"mdi:weather-sunny"}
        @click=${this._handleSeasonIconClick}
      ></ha-icon>`}getCardSize(){return 6}};Je.styles=te`
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
  `,e([K()],Je.prototype,"config",void 0),e([K()],Je.prototype,"_climateEntity",void 0),Je=e([W("hacomfoairmqtt-card")],Je);export{Je as HAComfoAirMQTTCard};
