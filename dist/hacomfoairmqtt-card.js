function e(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const o=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:u,getOwnPropertySymbols:d,getPrototypeOf:h}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,_=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!a(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=s?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...u(e),...d(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=s;const n=r.fromAttribute(t,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(void 0!==e){const n=this.constructor;if(!1===s&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??y)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");const S=globalThis,w=e=>e,A=S.trustedTypes,x=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+T,C=`<${k}>`,M=document,O=()=>M.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,H="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,R=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,V=/"/g,j=/^(?:script|style|textarea|title)$/i,I=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),q=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),D=new WeakMap,W=M.createTreeWalker(M,129);function Z(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,s=[];let r,n=2===t?"<svg>":3===t?"<math>":"",o=F;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,u=0;for(;u<i.length&&(o.lastIndex=u,c=o.exec(i),null!==c);)u=o.lastIndex,o===F?"!--"===c[1]?o=N:void 0!==c[1]?o=U:void 0!==c[2]?(j.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=R):void 0!==c[3]&&(o=R):o===R?">"===c[0]?(o=r??F,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?R:'"'===c[3]?V:z):o===V||o===z?o=R:o===N||o===U?o=F:(o=R,r=void 0);const d=o===R&&e[t+1].startsWith("/>")?" ":"";n+=o===F?i+C:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+T+d):i+T+(-2===l?t:d)}return[Z(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class G{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0;const o=e.length-1,a=this.parts,[c,l]=K(e,t);if(this.el=G.createElement(c,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=W.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(E)){const t=l[n++],i=s.getAttribute(e).split(T),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?ee:"?"===o[1]?te:"@"===o[1]?ie:Y}),s.removeAttribute(e)}else e.startsWith(T)&&(a.push({type:6,index:r}),s.removeAttribute(e));if(j.test(s.tagName)){const e=s.textContent.split(T),t=e.length-1;if(t>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],O()),W.nextNode(),a.push({type:2,index:++r});s.append(e[t],O())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(T,e+1));)a.push({type:7,index:r}),e+=T.length-1}r++}}static createElement(e,t){const i=M.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,s){if(t===q)return t;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=P(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(t=J(e,r._$AS(e,t.values),r,s)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??M).importNode(t,!0);W.currentNode=s;let r=W.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new X(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new se(r,this,e)),this._$AV.push(t),a=i[++o]}n!==a?.index&&(r=W.nextNode(),n++)}return W.currentNode=M,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),P(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Q(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=D.get(e.strings);return void 0===t&&D.set(e.strings,t=new G(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new X(this.O(O()),this.O(O()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(void 0===r)e=J(this,e,t,0),n=!P(e)||e!==this._$AH&&e!==q,n&&(this._$AH=e);else{const s=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=J(this,s[i+o],t,o),a===q&&(a=this._$AH[o]),n||=!P(a)||a!==this._$AH[o],a===B?e=B:e!==B&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class te extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class ie extends Y{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??B)===q)return;const i=this._$AH,s=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const re=S.litHtmlPolyfillSupport;re?.(G,X),(S.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;class oe extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let r=s._$litPart$;if(void 0===r){const e=i?.renderBefore??null;s._$litPart$=r=new X(t.insertBefore(O(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}oe._$litElement$=!0,oe.finalized=!0,ne.litElementHydrateSupport?.({LitElement:oe});const ae=ne.litElementPolyfillSupport;ae?.({LitElement:oe}),(ne.litElementVersions??=[]).push("4.2.2");const ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},le=(e=ce,t,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,r,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];t.call(this,i),this.requestUpdate(s,r,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ue(e){return(t,i)=>"object"==typeof i?le(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function de(e){return ue({...e,state:!0,attribute:!1})}const he={outsideTempSensor:["_outside_temperature","_outsidetemp","_outdoor_temperature"],supplyTempSensor:["_supply_temperature","_supplytemp","_supply_air_temperature"],returnTempSensor:["_return_temperature","_returntemp","_extract_temperature","_indoor_temperature"],exhaustTempSensor:["_exhaust_temperature","_exhausttemp"],filterStatusSensor:["_filter_status","_filterstatus"],bypassValveSensor:["_bypass_valve","_bypass_state"],summerModeSensor:["_summer_mode","_season"],preheatingStatusSensor:["_preheating_status","_preheatingstatus"],supplyAirLevelSensor:["_supply_air_level","_supply_fan_duty"],returnAirLevelSensor:["_return_air_level","_exhaust_fan_duty"],supplyAirFlowSensor:["_supply_air_flow"],exhaustAirFlowSensor:["_exhaust_air_flow"],outsideHumiditySensor:["_outside_humidity","_outdoor_humidity"],insideHumiditySensor:["_return_humidity","_extract_humidity","_indoor_humidity"],powerSensor:["_power_ventilation"]},pe={climateEntity:"climate.ca350_climate",outsideTempSensor:"sensor.ca350_outside_temperature",supplyTempSensor:"sensor.ca350_supply_temperature",returnTempSensor:"sensor.ca350_return_temperature",exhaustTempSensor:"sensor.ca350_exhaust_temperature",filterStatusSensor:"binary_sensor.ca350_filter_status",bypassValveSensor:"binary_sensor.ca350_bypass_valve",summerModeSensor:"binary_sensor.ca350_summer_mode",preheatingStatusSensor:"binary_sensor.ca350_preheating_status",supplyAirLevelSensor:"sensor.ca350_supply_air_level",returnAirLevelSensor:"sensor.ca350_return_air_level"},me=/ca350|ca550|comfo/;function fe(e){return e.slice(e.indexOf(".")+1)}const ge={en:{common:{version:"Version",invalid_configuration:"Invalid configuration",missing_climate:"Please set climateEntity",entity_not_found:"Entity not found"},card:{description:"Shows a Zehnder ComfoAir ventilation unit (hacomfoairmqtt, ComfoClime, ...) as a house diagram with fan speed buttons.",target_temperature:"Target temperature",air_level:"Air level",filter:"Filter",filter_ok:"Filter OK",filter_change:"Replace filter",bypass:"Bypass",preheating:"Preheating",season:"Season",summer:"Summer",winter:"Winter",transition:"Transition",humidity:"Humidity",air_flow:"Air flow",power:"Power",fan_speed:"Fan speed"},editor:{name:"Name (optional)",climateEntity:"Climate entity (required, controls the fan speed)",temperatures:"Temperatures",outsideTempSensor:"Outside air (entering the unit)",supplyTempSensor:"Supply air (into the rooms)",returnTempSensor:"Return / extract air (from the rooms)",exhaustTempSensor:"Exhaust air (leaving the house)",status:"Status",filterStatusSensor:"Filter status",bypassValveSensor:"Bypass valve",summerModeSensor:"Summer mode / season",preheatingStatusSensor:"Preheating",air:"Air flow",supplyAirLevelSensor:"Supply air level (%)",returnAirLevelSensor:"Return air level (%)",supplyAirFlowSensor:"Supply air flow (m³/h)",exhaustAirFlowSensor:"Exhaust air flow (m³/h)",extra:"Humidity and power",outsideHumiditySensor:"Outside humidity",insideHumiditySensor:"Inside humidity",powerSensor:"Power consumption"},fan_mode:{off:"Off",low:"Low",medium:"Medium",high:"High",auto:"Auto"}},de:{common:{version:"Version",invalid_configuration:"Ungültige Konfiguration",missing_climate:"Bitte climateEntity angeben",entity_not_found:"Entität nicht gefunden"},card:{target_temperature:"Solltemperatur",air_level:"Luftstufe",filter:"Filter",filter_ok:"Filter OK",filter_change:"Filter wechseln",bypass:"Bypass",preheating:"Vorheizung",season:"Saison",summer:"Sommer",winter:"Winter",transition:"Übergang",humidity:"Luftfeuchtigkeit",air_flow:"Luftmenge",power:"Leistung",fan_speed:"Lüftungsstufe"},editor:{name:"Name (optional)",climateEntity:"Klima-Entität (erforderlich, steuert die Lüftungsstufe)",temperatures:"Temperaturen",outsideTempSensor:"Außenluft (ins Gerät)",supplyTempSensor:"Zuluft (in die Räume)",returnTempSensor:"Abluft (aus den Räumen)",exhaustTempSensor:"Fortluft (nach draußen)",status:"Status",filterStatusSensor:"Filterstatus",bypassValveSensor:"Bypassklappe",summerModeSensor:"Sommerbetrieb / Saison",preheatingStatusSensor:"Vorheizung",air:"Luftmenge",supplyAirLevelSensor:"Zuluftstufe (%)",returnAirLevelSensor:"Abluftstufe (%)",supplyAirFlowSensor:"Zuluftmenge (m³/h)",exhaustAirFlowSensor:"Abluftmenge (m³/h)",extra:"Luftfeuchtigkeit und Leistung",outsideHumiditySensor:"Luftfeuchtigkeit außen",insideHumiditySensor:"Luftfeuchtigkeit innen",powerSensor:"Leistungsaufnahme"},fan_mode:{off:"Aus",low:"Niedrig",medium:"Mittel",high:"Hoch",auto:"Auto"}},fr:{common:{version:"Version",invalid_configuration:"Configuration invalide",missing_climate:"Veuillez indiquer climateEntity",entity_not_found:"Entité introuvable"},card:{target_temperature:"Température de consigne",air_level:"Niveau d'air",filter:"Filtre",filter_ok:"Filtre OK",filter_change:"Remplacer le filtre",bypass:"Bypass",preheating:"Préchauffage",season:"Saison",summer:"Été",winter:"Hiver",transition:"Mi-saison",humidity:"Humidité",air_flow:"Débit d'air",power:"Puissance",fan_speed:"Vitesse de ventilation"},editor:{name:"Nom (facultatif)",climateEntity:"Entité climat (obligatoire, commande la vitesse)",temperatures:"Températures",outsideTempSensor:"Air extérieur (entrant dans l'appareil)",supplyTempSensor:"Air soufflé (vers les pièces)",returnTempSensor:"Air repris (des pièces)",exhaustTempSensor:"Air rejeté (vers l'extérieur)",status:"État",filterStatusSensor:"État du filtre",bypassValveSensor:"Clapet bypass",summerModeSensor:"Mode été / saison",preheatingStatusSensor:"Préchauffage",air:"Débit d'air",supplyAirLevelSensor:"Niveau air soufflé (%)",returnAirLevelSensor:"Niveau air repris (%)",supplyAirFlowSensor:"Débit air soufflé (m³/h)",exhaustAirFlowSensor:"Débit air repris (m³/h)",extra:"Humidité et puissance",outsideHumiditySensor:"Humidité extérieure",insideHumiditySensor:"Humidité intérieure",powerSensor:"Consommation"},fan_mode:{off:"Arrêt",low:"Bas",medium:"Moyen",high:"Élevé",auto:"Auto"}},lb:{common:{version:"Versioun",invalid_configuration:"Ongëlteg Konfiguratioun",missing_climate:"W.e.g. climateEntity uginn",entity_not_found:"Entitéit net fonnt"},card:{target_temperature:"Zil-Temperatur",air_level:"Loftstuf",filter:"Filter",filter_ok:"Filter OK",filter_change:"Filter wiesselen",bypass:"Bypass",preheating:"Virhëtzen",season:"Saison",summer:"Summer",winter:"Wanter",transition:"Iwwergang",humidity:"Loftfiichtegkeet",air_flow:"Loftmass",power:"Leeschtung",fan_speed:"Ventilatiounsstuf"},editor:{name:"Numm (optional)",climateEntity:"Klima-Entitéit (néideg, stéiert d'Ventilatiounsstuf)",temperatures:"Temperaturen",outsideTempSensor:"Baussenloft (an den Apparat)",supplyTempSensor:"Zouloft (an d'Zëmmeren)",returnTempSensor:"Ofloft (aus den Zëmmeren)",exhaustTempSensor:"Fortloft (eraus)",status:"Status",filterStatusSensor:"Filterstatus",bypassValveSensor:"Bypass-Klapp",summerModeSensor:"Summermodus / Saison",preheatingStatusSensor:"Virhëtzen",air:"Loftmass",supplyAirLevelSensor:"Zouloftstuf (%)",returnAirLevelSensor:"Ofloftstuf (%)",supplyAirFlowSensor:"Zouloftmass (m³/h)",exhaustAirFlowSensor:"Ofloftmass (m³/h)",extra:"Loftfiichtegkeet a Leeschtung",outsideHumiditySensor:"Loftfiichtegkeet dobaussen",insideHumiditySensor:"Loftfiichtegkeet bannen",powerSensor:"Stroumverbrauch"},fan_mode:{off:"Aus",low:"Niddreg",medium:"Mëttel",high:"Héich",auto:"Auto"}}};let _e="en";function ve(e,t){const i=t.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,ge[e]);return"string"==typeof i?i:void 0}function ye(e,t){const i=(t||_e).toLowerCase();return ve(i,e)??ve(i.split(/[-_]/)[0],e)??ve("en",e)??e}const be=["climateEntity","outsideTempSensor","supplyTempSensor","returnTempSensor","exhaustTempSensor","supplyAirLevelSensor","returnAirLevelSensor","filterStatusSensor","bypassValveSensor","summerModeSensor","preheatingStatusSensor","outsideHumiditySensor","insideHumiditySensor","supplyAirFlowSensor","exhaustAirFlowSensor","powerSensor"];console.info(`%c  HAComfoairMQTT Card \n%c  ${ye("common.version")} 1.0.1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const $e=window;$e.customCards=$e.customCards||[],$e.customCards.push({type:"hacomfoairmqtt-card",name:"HAComfoairMQTT Card",description:ye("card.description","en"),preview:!0,documentationURL:"https://github.com/mweimerskirch/lovelace-hacomfoairmqtt"});const Se={off:"mdi:fan-off",low:"mdi:fan-speed-1",medium:"mdi:fan-speed-2",high:"mdi:fan-speed-3",auto:"mdi:fan-auto"},we=["on","true","open","yes","active","full"],Ae=["unavailable","unknown"];function xe(e){const t=e.state.toLowerCase();if(we.includes(t))return!0;const i=Number(t);return!Number.isNaN(i)&&i>0}let Ee=class extends oe{static getStubConfig(e){return function(e){if(!e)return{...pe};const t=Object.keys(e.states).filter(e=>me.test(e)),i=t.find(t=>t.startsWith("climate.")&&Array.isArray(e.states[t].attributes.fan_modes));if(!i)return{...pe};const s=fe(i).replace(/_climate$/,""),r={climateEntity:i};for(const[e,i]of Object.entries(he))for(const n of i){const i=t.filter(e=>(e.startsWith("sensor.")||e.startsWith("binary_sensor."))&&e.endsWith(n));if(i.length){i.sort((e,t)=>Number(fe(t).startsWith(s))-Number(fe(e).startsWith(s))||Number(t.startsWith("binary_sensor."))-Number(e.startsWith("binary_sensor."))||e.length-t.length),r[e]=i[0];break}}return r}(e)}static getConfigForm(){const e=(e,t)=>({name:e,selector:{entity:{domain:t}}}),t=t=>e(t,["sensor"]),i=t=>e(t,["binary_sensor","sensor"]),s=(e,t,i=!1)=>({type:"expandable",name:e,flatten:!0,title:ye(`editor.${e}`),expanded:i,schema:t});return{schema:[{name:"name",selector:{text:{}}},{...e("climateEntity",["climate"]),required:!0},s("temperatures",[t("outsideTempSensor"),t("supplyTempSensor"),t("returnTempSensor"),t("exhaustTempSensor")],!0),s("status",[i("filterStatusSensor"),i("bypassValveSensor"),i("summerModeSensor"),i("preheatingStatusSensor")]),s("air",[t("supplyAirLevelSensor"),t("returnAirLevelSensor"),t("supplyAirFlowSensor"),t("exhaustAirFlowSensor")]),s("extra",[t("outsideHumiditySensor"),t("insideHumiditySensor"),t("powerSensor")])],computeLabel:e=>ye(`editor.${e.name}`)}}setConfig(e){if(!e)throw new Error(ye("common.invalid_configuration"));if(!e.climateEntity)throw new Error(ye("common.missing_climate"));this.config={...e}}getCardSize(){return 6}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}shouldUpdate(e){if(!this.config)return!1;if(e.has("config")||e.has("pendingFanMode"))return!0;const t=e.get("hass");if(!t||!this.hass)return!0;if(t.locale?.language!==this.hass.locale?.language)return!0;const i=this.config;return be.some(e=>{const s=i[e];return s&&t.states[s]!==this.hass.states[s]})}stateOf(e){const t=this.config?.[e],i=t?this.hass?.states[t]:void 0;return i&&!Ae.includes(i.state)?i:void 0}format(e){if(!e)return"–";if(this.hass?.formatEntityState)return this.hass.formatEntityState(e);const t=e.attributes.unit_of_measurement;return t?`${e.state} ${t}`:e.state}moreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}willUpdate(e){super.willUpdate(e),this.pendingFanMode&&this.climateState()?.attributes.fan_mode===this.pendingFanMode&&this.clearPendingFanMode()}disconnectedCallback(){super.disconnectedCallback(),this.clearPendingFanMode()}climateState(){return this.config?this.hass?.states[this.config.climateEntity]:void 0}clearPendingFanMode(){window.clearTimeout(this.pendingTimer),this.pendingTimer=void 0,this.pendingFanMode=void 0}setFanMode(e){this.hass&&this.config&&(this.climateState()?.attributes.fan_mode===e?this.clearPendingFanMode():(window.clearTimeout(this.pendingTimer),this.pendingFanMode=e,this.pendingTimer=window.setTimeout(()=>this.clearPendingFanMode(),9e4)),this.hass.callService("climate","set_fan_mode",{entity_id:this.config.climateEntity,fan_mode:e}).catch(()=>this.clearPendingFanMode()))}renderValue(e,t=""){const i=this.config?.[e],s=i?this.hass?.states[i]?.attributes.friendly_name??i:"";return I`<button
      class="value ${t}"
      ?disabled=${!i}
      title=${s}
      aria-label=${s?`${s}: ${this.format(this.stateOf(e))}`:B}
      @click=${()=>this.moreInfo(i)}
    >
      ${this.format(this.stateOf(e))}
    </button>`}renderStatusIcon(e,t,i,s,r){const n=this.config?.[e];if(!n)return B;const o=this.stateOf(e),a=o?`${i}: ${this.format(o)}`:`${i}: –`;return I`<button
      class="status tone-${r} ${o&&s?"":"inactive"}"
      title=${a}
      aria-label=${a}
      @click=${()=>this.moreInfo(n)}
    >
      <ha-icon .icon=${o?t:"mdi:help-circle-outline"}></ha-icon>
    </button>`}renderStatusIcons(){const e=this.stateOf("filterStatusSensor"),t=this.stateOf("bypassValveSensor"),i=this.stateOf("preheatingStatusSensor");return I`<div class="statuses">
      ${this.renderStatusIcon("filterStatusSensor","mdi:air-filter",ye(e&&xe(e)?"card.filter_change":"card.filter_ok"),!!e&&xe(e),"warning")}
      ${this.renderStatusIcon("bypassValveSensor","mdi:valve",ye("card.bypass"),!!t&&xe(t),"primary")}
      ${this.renderStatusIcon("preheatingStatusSensor","mdi:radiator",ye("card.preheating"),!!i&&xe(i),"heat")}
    </div>`}renderSeason(){const e=this.stateOf("summerModeSensor"),t=e?function(e){const t=e.state.toLowerCase();return["on","summer","cooling","true","1"].includes(t)?"summer":["off","winter","heating","false","0"].includes(t)?"winter":["transition","transitional"].includes(t)?"transition":void 0}(e):void 0,i="summer"===t?"mdi:weather-sunny":"winter"===t?"mdi:snowflake":"mdi:sun-snowflake-variant";return I`<div class="sky">
      ${this.renderStatusIcon("summerModeSensor",i,ye(t?`card.${t}`:"card.season"),!0,t??"transition")}
    </div>`}renderAirLevel(){const e=this.stateOf("supplyAirLevelSensor"),t=this.stateOf("returnAirLevelSensor");if(!e&&!t)return B;const i=t&&(!e||Math.round(Number(e.state))!==Math.round(Number(t.state))),s=ye("card.air_level");return I`<button
      class="level"
      title=${s}
      aria-label=${`${s}: ${[e,i?t:void 0].filter(e=>e).map(e=>this.format(e)).join(" / ")}`}
      @click=${()=>this.moreInfo(this.config?.supplyAirLevelSensor??this.config?.returnAirLevelSensor)}
    >
      <ha-icon icon="mdi:speedometer"></ha-icon>
      <span class="level-value">${e?this.format(e):this.format(t)}</span>
      ${i&&e?I`<span class="level-return">${this.format(t)}</span>`:B}
    </button>`}renderTargetTemperature(){const e=this.hass?.states[this.config.climateEntity],t=e?.attributes.temperature;if(null==t)return B;const i=this.hass?.formatEntityAttributeValue?this.hass.formatEntityAttributeValue(e,"temperature"):`${t} °C`,s=ye("card.target_temperature");return I`<button
      class="target"
      title=${s}
      aria-label=${`${s}: ${i}`}
      @click=${()=>this.moreInfo(this.config?.climateEntity)}
    >
      <ha-icon icon="mdi:thermostat"></ha-icon><span>${i}</span>
    </button>`}renderFanButtons(e){const t=Array.isArray(e.attributes.fan_modes)?e.attributes.fan_modes:["off","low","medium","high"],i=this.pendingFanMode??e.attributes.fan_mode;return I`<div class="fan-modes" role="group" aria-label=${ye("card.fan_speed")}>
      ${t.map(t=>{const s=ye(`fan_mode.${t}`)===`fan_mode.${t}`?t:ye(`fan_mode.${t}`);return I`<button
          class="fan-mode ${this.pendingFanMode===t?"pending":""}"
          aria-busy=${this.pendingFanMode===t?"true":"false"}
          aria-pressed=${i===t?"true":"false"}
          title=${s}
          aria-label=${s}
          ?disabled=${Ae.includes(e.state)}
          @click=${()=>this.setFanMode(t)}
        >
          <ha-icon .icon=${Se[t]??"mdi:fan"}></ha-icon>
        </button>`})}
    </div>`}renderExtras(){const e=[],t=(t,i,s,r,n=" → ")=>{const o=t.filter(e=>this.config?.[e]);if(!o.length)return;const a=o.map(e=>this.format(this.stateOf(e))).join(n);e.push(I`<button
        class="chip chip-${r}"
        title=${s}
        aria-label=${`${s}: ${a}`}
        @click=${()=>this.moreInfo(this.config?.[o[0]])}
      >
        <ha-icon .icon=${i}></ha-icon>
        <span>${a}</span>
      </button>`)};return t(["outsideHumiditySensor","insideHumiditySensor"],"mdi:water-percent",ye("card.humidity"),"cool"),t(["supplyAirFlowSensor","exhaustAirFlowSensor"],"mdi:weather-windy",ye("card.air_flow"),"fan"," / "),t(["powerSensor"],"mdi:flash",ye("card.power"),"power"),e.length?I`<div class="extras">${e}</div>`:B}render(){if(!this.config||!this.hass)return I``;var e;(e=this.hass.locale?.language??this.hass.language)&&(_e=e);const t=this.hass.states[this.config.climateEntity];return t?I`
      <ha-card>
        <div class="header">
          <span class="name">${this.config.name??""}</span>
          <button
            class="more-info"
            title=${t.attributes.friendly_name??""}
            aria-label=${t.attributes.friendly_name??this.config.climateEntity}
            @click=${()=>this.moreInfo(this.config?.climateEntity)}
          >
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </button>
        </div>
        <div class="diagram">
          <!-- 160 × 94 units = the diagram's aspect ratio, so the overlays below can use matching percentages -->
          <svg class="scene" viewBox="0 6 160 94" aria-hidden="true">
            <line class="ground" x1="6" y1="97.5" x2="154" y2="97.5"></line>
            <rect class="chimney" x="98" y="13" width="8" height="18" rx="1.5"></rect>
            <path class="house" d="M40 97 V40 L80 10 L120 40 V97 Z"></path>
            <path class="roof" d="M34 44.5 L80 10 L126 44.5"></path>
          </svg>
          ${this.renderSeason()} ${this.renderTargetTemperature()}
          <div class="band band-in">
            ${this.renderValue("outsideTempSensor","outside")}
            <span class="duct"><ha-icon icon="mdi:arrow-right"></ha-icon></span>
            ${this.renderValue("supplyTempSensor","inside")}
          </div>
          <div class="band band-out">
            ${this.renderValue("exhaustTempSensor","outside")}
            <span class="duct"><ha-icon icon="mdi:arrow-left"></ha-icon></span>
            ${this.renderValue("returnTempSensor","inside")}
          </div>
          <div class="levels">${this.renderAirLevel()}</div>
          ${this.renderStatusIcons()}
        </div>
        ${this.renderFanButtons(t)} ${this.renderExtras()}
      </ha-card>
    `:I`<ha-card>
        <div class="warning-box">${ye("common.entity_not_found")}: ${this.config.climateEntity}</div>
      </ha-card>`}};Ee.styles=((e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new n(i,e,s)})`
    :host {
      /* Fresh (outside) air is blue, used (indoor) air orange – the colors HA uses for cooling and heating. */
      --cac-cool: var(--state-climate-cool-color, #2b9af9);
      --cac-warm: var(--state-climate-heat-color, #ff8100);
      --cac-fan: var(--state-fan-active-color, var(--primary-color, #03a9f4));
      --cac-sun: var(--amber-color, #ffc107);
      --cac-power: var(--state-sensor-power-color, var(--amber-color, #ffc107));
      --cac-text: var(--primary-text-color, #212121);
      --cac-muted: var(--secondary-text-color, #727272);
      --cac-surface: color-mix(in srgb, var(--cac-text) 5%, transparent);
      --cac-surface-strong: color-mix(in srgb, var(--cac-text) 9%, transparent);
      --cac-radius: var(--ha-border-radius-lg, 12px);
      /* Opaque mixes (no alpha), so overlapping SVG shapes don't produce darker seams */
      --cac-bg: var(--ha-card-background, var(--card-background-color, #fff));
      --cac-house: color-mix(in srgb, var(--cac-text) 5%, var(--cac-bg));
      --cac-wall: color-mix(in srgb, var(--cac-text) 14%, var(--cac-bg));
      --cac-roof: color-mix(in srgb, var(--cac-text) 24%, var(--cac-bg));
    }

    ha-card {
      height: 100%;
      box-sizing: border-box;
      padding: 4px 16px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow: hidden;
    }

    button {
      font: inherit;
      color: inherit;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    button:disabled {
      cursor: default;
    }
    button:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      min-height: 44px;
      margin-right: -8px;
    }
    .name {
      font-size: var(--ha-card-header-font-size, 1.15rem);
      font-weight: 500;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .more-info {
      flex: none;
      color: var(--cac-muted);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.15s;
    }
    .more-info:hover {
      background: var(--cac-surface);
    }

    /* The diagram scales with the card width (container query units), so it never overflows (issue #2). */
    .diagram {
      container-type: inline-size;
      position: relative;
      width: 100%;
      max-width: 440px;
      margin: 0 auto;
      aspect-ratio: 160 / 94;
    }
    /* cqw on the container itself would resolve against the viewport, so size its children */
    .diagram > * {
      font-size: clamp(11px, 4.1cqw, 17px);
      --mdc-icon-size: clamp(14px, 5cqw, 22px);
    }

    .scene {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .ground {
      stroke: var(--divider-color, rgba(0, 0, 0, 0.12));
      stroke-width: 1.2;
      stroke-linecap: round;
    }
    .house {
      fill: var(--cac-house);
      stroke: var(--cac-wall);
      stroke-width: 2;
      stroke-linejoin: round;
    }
    .chimney {
      fill: var(--cac-wall);
    }
    .roof {
      fill: none;
      stroke: var(--cac-roof);
      stroke-width: 4.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* House (viewBox units): walls at x 40 / 120 (25 % / 75 %), eaves at y 40, floor at y 97 */
    .sky {
      position: absolute;
      left: 88%;
      top: 16%;
      transform: translate(-50%, -50%);
    }
    .sky .status {
      --mdc-icon-size: clamp(18px, 7cqw, 30px);
      padding: 0.35em;
    }

    .target {
      position: absolute;
      left: 50%;
      top: 27.7%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      gap: 0.2em;
      padding: 0.1em 0.35em;
      border-radius: 999px;
      font-size: clamp(12px, 5cqw, 21px);
      font-weight: 500;
      white-space: nowrap;
      letter-spacing: -0.01em;
    }
    .target ha-icon {
      color: var(--cac-muted);
      --mdc-icon-size: 1.05em;
    }

    /* Air-flow bands: centered on the left wall (x 40 = 25 %), half outside, half inside */
    .band {
      position: absolute;
      left: 1.25%;
      width: 47.5%;
      height: 13.8%;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      border-radius: 999px;
      box-sizing: border-box;
    }
    .band-in {
      top: 43.6%;
      --cac-band: var(--cac-cool);
      background: linear-gradient(
        90deg,
        color-mix(in srgb, var(--cac-cool) 22%, transparent),
        color-mix(in srgb, var(--cac-cool) 12%, transparent)
      );
    }
    .band-out {
      top: 62.8%;
      --cac-band: var(--cac-warm);
      background: linear-gradient(
        90deg,
        color-mix(in srgb, var(--cac-warm) 12%, transparent),
        color-mix(in srgb, var(--cac-warm) 22%, transparent)
      );
    }
    .duct {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 8cqw;
      height: 8cqw;
      min-width: 20px;
      min-height: 20px;
      border-radius: 50%;
      background: var(--cac-band);
      color: #fff;
      box-shadow: 0 0 0 2px var(--cac-bg);
      --mdc-icon-size: clamp(13px, 4.6cqw, 20px);
    }
    .value {
      min-width: 0;
      height: 100%;
      padding: 0 0.3em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      border-radius: 999px;
    }
    .value:not(:disabled):hover {
      background: color-mix(in srgb, var(--cac-band) 14%, transparent);
    }

    /* Air level: inside the house, right of the bands */
    .levels {
      position: absolute;
      left: 50.5%;
      width: 23%;
      top: 43.6%;
      height: 33%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .level {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.15;
      padding: 0.2em 0.3em;
      border-radius: var(--cac-radius);
      white-space: nowrap;
      max-width: 100%;
      font-variant-numeric: tabular-nums;
    }
    .level ha-icon {
      color: var(--cac-fan);
      margin-bottom: 0.1em;
    }
    .level-value {
      font-weight: 500;
    }
    .level-return {
      font-size: 0.8em;
      color: var(--cac-muted);
    }
    .level:hover,
    .target:hover {
      background: var(--cac-surface);
    }

    .statuses {
      position: absolute;
      left: 27.5%;
      width: 45%;
      top: 80.9%;
      height: 14.9%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4cqw;
    }
    .status {
      display: flex;
      padding: 0.2em;
      border-radius: 50%;
      color: var(--cac-tone);
      background: color-mix(in srgb, var(--cac-tone) 18%, transparent);
      transition:
        background-color 0.2s,
        color 0.2s;
    }
    .status.inactive {
      color: var(--cac-muted);
      background: none;
      opacity: 0.55;
    }
    .tone-warning {
      --cac-tone: var(--error-color, #db4437);
    }
    .tone-primary {
      --cac-tone: var(--primary-color, #03a9f4);
    }
    .tone-heat {
      --cac-tone: var(--cac-warm);
    }
    .tone-summer {
      --cac-tone: var(--cac-sun);
    }
    .tone-winter {
      --cac-tone: var(--cac-cool);
    }
    .tone-transition {
      --cac-tone: var(--cac-muted);
    }
    .sky .status.tone-transition {
      background: var(--cac-surface);
    }

    /* Fan speed: a segmented control like the HA tile card features */
    .fan-modes {
      display: flex;
      gap: 4px;
      padding: 4px;
      border-radius: calc(var(--cac-radius) + 4px);
      background: var(--cac-surface);
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
    }
    .fan-mode {
      flex: 1 1 0;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--cac-radius);
      color: var(--cac-muted);
      --mdc-icon-size: 22px;
      transition:
        background-color 0.2s,
        color 0.2s;
    }
    .fan-mode:not(:disabled):hover {
      background: var(--cac-surface);
      color: var(--cac-text);
    }
    .fan-mode[aria-pressed='true'],
    .fan-mode[aria-pressed='true']:hover {
      background: var(--cac-fan);
      color: var(--text-primary-color, #fff);
    }
    .fan-mode:disabled {
      opacity: 0.5;
    }
    /* Requested but not yet confirmed by the device */
    .fan-mode.pending {
      animation: cac-pulse 1.2s ease-in-out infinite;
    }
    @keyframes cac-pulse {
      50% {
        opacity: 0.45;
      }
    }

    .extras {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }
    .chip {
      display: flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      padding: 0 12px 0 8px;
      box-sizing: border-box;
      border-radius: 16px;
      background: var(--cac-surface);
      font-size: 0.875rem;
      font-weight: 500;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
      --mdc-icon-size: 18px;
    }
    .chip:hover {
      background: var(--cac-surface-strong);
    }
    .chip-cool ha-icon {
      color: var(--cac-cool);
    }
    .chip-fan ha-icon {
      color: var(--cac-fan);
    }
    .chip-power ha-icon {
      color: var(--cac-power);
    }

    .warning-box {
      padding: 16px;
      color: var(--error-color, #db4437);
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        transition: none !important;
      }
      .fan-mode.pending {
        animation: none;
        opacity: 0.6;
      }
    }
  `,e([ue({attribute:!1})],Ee.prototype,"hass",void 0),e([de()],Ee.prototype,"config",void 0),e([de()],Ee.prototype,"pendingFanMode",void 0),Ee=e([(e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})("hacomfoairmqtt-card")],Ee);export{Ee as HAComfoAirMQTTCard};
