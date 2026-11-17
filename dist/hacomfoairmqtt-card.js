function e(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let n=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=i.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&i.set(t,e))}return e}toString(){return this.cssText}};const o=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:d}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,_=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},y=(e,t)=>!a(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);void 0!==r&&c(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const n=r?.call(this);i?.call(this,t),this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=d(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...u(e),...h(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(s)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of r){const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(void 0!==r&&!0===s.reflect){const i=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(t,s.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const s=this.constructor,r=s._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=s.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=r;const n=i.fromAttribute(t,e.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,t,s,r=!1,i){if(void 0!==e){const n=this.constructor;if(!1===r&&(i=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??y)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==i||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e){const{wrapped:e}=s,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,s,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");const S=globalThis,w=e=>e,A=S.trustedTypes,x=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+T,C=`<${k}>`,O=document,L=()=>O.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,F=/>/g,R=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,V=/"/g,j=/^(?:script|style|textarea|title)$/i,I=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),q=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),D=new WeakMap,W=O.createTreeWalker(O,129);function Z(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}const K=(e,t)=>{const s=e.length-1,r=[];let i,n=2===t?"<svg>":3===t?"<math>":"",o=N;for(let t=0;t<s;t++){const s=e[t];let a,c,l=-1,u=0;for(;u<s.length&&(o.lastIndex=u,c=o.exec(s),null!==c);)u=o.lastIndex,o===N?"!--"===c[1]?o=U:void 0!==c[1]?o=F:void 0!==c[2]?(j.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=R):void 0!==c[3]&&(o=R):o===R?">"===c[0]?(o=i??N,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?R:'"'===c[3]?V:z):o===V||o===z?o=R:o===U||o===F?o=N:(o=R,i=void 0);const h=o===R&&e[t+1].startsWith("/>")?" ":"";n+=o===N?s+C:l>=0?(r.push(a),s.slice(0,l)+E+s.slice(l)+T+h):s+T+(-2===l?t:h)}return[Z(e,n+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class G{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,n=0;const o=e.length-1,a=this.parts,[c,l]=K(e,t);if(this.el=G.createElement(c,s),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=W.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(E)){const t=l[n++],s=r.getAttribute(e).split(T),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:o[2],strings:s,ctor:"."===o[1]?ee:"?"===o[1]?te:"@"===o[1]?se:Y}),r.removeAttribute(e)}else e.startsWith(T)&&(a.push({type:6,index:i}),r.removeAttribute(e));if(j.test(r.tagName)){const e=r.textContent.split(T),t=e.length-1;if(t>0){r.textContent=A?A.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],L()),W.nextNode(),a.push({type:2,index:++i});r.append(e[t],L())}}}else if(8===r.nodeType)if(r.data===k)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(T,e+1));)a.push({type:7,index:i}),e+=T.length-1}i++}}static createElement(e,t){const s=O.createElement("template");return s.innerHTML=e,s}}function J(e,t,s=e,r){if(t===q)return t;let i=void 0!==r?s._$Co?.[r]:s._$Cl;const n=H(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e),i._$AT(e,s,r)),void 0!==r?(s._$Co??=[])[r]=i:s._$Cl=i),void 0!==i&&(t=J(e,i._$AS(e,t.values),i,r)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);W.currentNode=r;let i=W.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new X(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new re(i,this,e)),this._$AV.push(t),a=s[++o]}n!==a?.index&&(i=W.nextNode(),n++)}return W.currentNode=O,r}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),H(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>P(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,r="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=G.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Q(r,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=D.get(e.strings);return void 0===t&&D.set(e.strings,t=new G(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new X(this.O(L()),this.O(L()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}_$AI(e,t=this,s,r){const i=this.strings;let n=!1;if(void 0===i)e=J(this,e,t,0),n=!H(e)||e!==this._$AH&&e!==q,n&&(this._$AH=e);else{const r=e;let o,a;for(e=i[0],o=0;o<i.length-1;o++)a=J(this,r[s+o],t,o),a===q&&(a=this._$AH[o]),n||=!H(a)||a!==this._$AH[o],a===B?e=B:e!==B&&(e+=(a??"")+i[o+1]),this._$AH[o]=a}n&&!r&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class te extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class se extends Y{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??B)===q)return;const s=this._$AH,r=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==B&&(s===B||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const ie=S.litHtmlPolyfillSupport;ie?.(G,X),(S.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;class oe extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const r=s?.renderBefore??t;let i=r._$litPart$;if(void 0===i){const e=s?.renderBefore??null;r._$litPart$=i=new X(t.insertBefore(L(),e),e,void 0,s??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}oe._$litElement$=!0,oe.finalized=!0,ne.litElementHydrateSupport?.({LitElement:oe});const ae=ne.litElementPolyfillSupport;ae?.({LitElement:oe}),(ne.litElementVersions??=[]).push("4.2.2");const ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},le=(e=ce,t,s)=>{const{kind:r,metadata:i}=s;let n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),n.set(s.name,e),"accessor"===r){const{name:r}=s;return{set(s){const i=t.get.call(this);t.set.call(this,s),this.requestUpdate(r,i,e,!0,s)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];t.call(this,s),this.requestUpdate(r,i,e,!0,s)}}throw Error("Unsupported decorator location: "+r)};function ue(e){return(t,s)=>"object"==typeof s?le(e,t,s):((e,t,s)=>{const r=t.hasOwnProperty(s);return t.constructor.createProperty(s,e),r?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}const he={outsideTempSensor:["_outside_temperature","_outsidetemp","_outdoor_temperature"],supplyTempSensor:["_supply_temperature","_supplytemp","_supply_air_temperature"],returnTempSensor:["_return_temperature","_returntemp","_extract_temperature","_indoor_temperature"],exhaustTempSensor:["_exhaust_temperature","_exhausttemp"],filterStatusSensor:["_filter_status","_filterstatus"],bypassValveSensor:["_bypass_valve","_bypass_state"],summerModeSensor:["_summer_mode","_season"],preheatingStatusSensor:["_preheating_status","_preheatingstatus"],supplyAirLevelSensor:["_supply_air_level","_supply_fan_duty"],returnAirLevelSensor:["_return_air_level","_exhaust_fan_duty"],supplyAirFlowSensor:["_supply_air_flow"],exhaustAirFlowSensor:["_exhaust_air_flow"],outsideHumiditySensor:["_outside_humidity","_outdoor_humidity"],insideHumiditySensor:["_return_humidity","_extract_humidity","_indoor_humidity"],powerSensor:["_power_ventilation"]},de={climateEntity:"climate.ca350_climate",outsideTempSensor:"sensor.ca350_outside_temperature",supplyTempSensor:"sensor.ca350_supply_temperature",returnTempSensor:"sensor.ca350_return_temperature",exhaustTempSensor:"sensor.ca350_exhaust_temperature",filterStatusSensor:"binary_sensor.ca350_filter_status",bypassValveSensor:"binary_sensor.ca350_bypass_valve",summerModeSensor:"binary_sensor.ca350_summer_mode",preheatingStatusSensor:"binary_sensor.ca350_preheating_status",supplyAirLevelSensor:"sensor.ca350_supply_air_level",returnAirLevelSensor:"sensor.ca350_return_air_level"},pe=/ca350|ca550|comfo/;function me(e){return e.slice(e.indexOf(".")+1)}const fe={en:{common:{version:"Version",invalid_configuration:"Invalid configuration",missing_climate:"Please set climateEntity",entity_not_found:"Entity not found"},card:{description:"Shows a Zehnder ComfoAir ventilation unit (hacomfoairmqtt, ComfoClime, ...) as a house diagram with fan speed buttons.",target_temperature:"Target temperature",air_level:"Air level",filter:"Filter",filter_ok:"Filter OK",filter_change:"Replace filter",bypass:"Bypass",preheating:"Preheating",season:"Season",summer:"Summer",winter:"Winter",transition:"Transition",humidity:"Humidity",air_flow:"Air flow",power:"Power",fan_speed:"Fan speed"},editor:{name:"Name (optional)",climateEntity:"Climate entity (required, controls the fan speed)",temperatures:"Temperatures",outsideTempSensor:"Outside air (entering the unit)",supplyTempSensor:"Supply air (into the rooms)",returnTempSensor:"Return / extract air (from the rooms)",exhaustTempSensor:"Exhaust air (leaving the house)",status:"Status",filterStatusSensor:"Filter status",bypassValveSensor:"Bypass valve",summerModeSensor:"Summer mode / season",preheatingStatusSensor:"Preheating",air:"Air flow",supplyAirLevelSensor:"Supply air level (%)",returnAirLevelSensor:"Return air level (%)",supplyAirFlowSensor:"Supply air flow (m³/h)",exhaustAirFlowSensor:"Exhaust air flow (m³/h)",extra:"Humidity and power",outsideHumiditySensor:"Outside humidity",insideHumiditySensor:"Inside humidity",powerSensor:"Power consumption"},fan_mode:{off:"Off",low:"Low",medium:"Medium",high:"High",auto:"Auto"}},de:{common:{version:"Version",invalid_configuration:"Ungültige Konfiguration",missing_climate:"Bitte climateEntity angeben",entity_not_found:"Entität nicht gefunden"},card:{target_temperature:"Solltemperatur",air_level:"Luftstufe",filter:"Filter",filter_ok:"Filter OK",filter_change:"Filter wechseln",bypass:"Bypass",preheating:"Vorheizung",season:"Saison",summer:"Sommer",winter:"Winter",transition:"Übergang",humidity:"Luftfeuchtigkeit",air_flow:"Luftmenge",power:"Leistung",fan_speed:"Lüftungsstufe"},editor:{name:"Name (optional)",climateEntity:"Klima-Entität (erforderlich, steuert die Lüftungsstufe)",temperatures:"Temperaturen",outsideTempSensor:"Außenluft (ins Gerät)",supplyTempSensor:"Zuluft (in die Räume)",returnTempSensor:"Abluft (aus den Räumen)",exhaustTempSensor:"Fortluft (nach draußen)",status:"Status",filterStatusSensor:"Filterstatus",bypassValveSensor:"Bypassklappe",summerModeSensor:"Sommerbetrieb / Saison",preheatingStatusSensor:"Vorheizung",air:"Luftmenge",supplyAirLevelSensor:"Zuluftstufe (%)",returnAirLevelSensor:"Abluftstufe (%)",supplyAirFlowSensor:"Zuluftmenge (m³/h)",exhaustAirFlowSensor:"Abluftmenge (m³/h)",extra:"Luftfeuchtigkeit und Leistung",outsideHumiditySensor:"Luftfeuchtigkeit außen",insideHumiditySensor:"Luftfeuchtigkeit innen",powerSensor:"Leistungsaufnahme"},fan_mode:{off:"Aus",low:"Niedrig",medium:"Mittel",high:"Hoch",auto:"Auto"}},fr:{common:{version:"Version",invalid_configuration:"Configuration invalide",missing_climate:"Veuillez indiquer climateEntity",entity_not_found:"Entité introuvable"},card:{target_temperature:"Température de consigne",air_level:"Niveau d'air",filter:"Filtre",filter_ok:"Filtre OK",filter_change:"Remplacer le filtre",bypass:"Bypass",preheating:"Préchauffage",season:"Saison",summer:"Été",winter:"Hiver",transition:"Mi-saison",humidity:"Humidité",air_flow:"Débit d'air",power:"Puissance",fan_speed:"Vitesse de ventilation"},editor:{name:"Nom (facultatif)",climateEntity:"Entité climat (obligatoire, commande la vitesse)",temperatures:"Températures",outsideTempSensor:"Air extérieur (entrant dans l'appareil)",supplyTempSensor:"Air soufflé (vers les pièces)",returnTempSensor:"Air repris (des pièces)",exhaustTempSensor:"Air rejeté (vers l'extérieur)",status:"État",filterStatusSensor:"État du filtre",bypassValveSensor:"Clapet bypass",summerModeSensor:"Mode été / saison",preheatingStatusSensor:"Préchauffage",air:"Débit d'air",supplyAirLevelSensor:"Niveau air soufflé (%)",returnAirLevelSensor:"Niveau air repris (%)",supplyAirFlowSensor:"Débit air soufflé (m³/h)",exhaustAirFlowSensor:"Débit air repris (m³/h)",extra:"Humidité et puissance",outsideHumiditySensor:"Humidité extérieure",insideHumiditySensor:"Humidité intérieure",powerSensor:"Consommation"},fan_mode:{off:"Arrêt",low:"Bas",medium:"Moyen",high:"Élevé",auto:"Auto"}},lb:{common:{version:"Versioun",invalid_configuration:"Ongëlteg Konfiguratioun",missing_climate:"W.e.g. climateEntity uginn",entity_not_found:"Entitéit net fonnt"},card:{target_temperature:"Zil-Temperatur",air_level:"Loftstuf",filter:"Filter",filter_ok:"Filter OK",filter_change:"Filter wiesselen",bypass:"Bypass",preheating:"Virhëtzen",season:"Saison",summer:"Summer",winter:"Wanter",transition:"Iwwergang",humidity:"Loftfiichtegkeet",air_flow:"Loftmass",power:"Leeschtung",fan_speed:"Ventilatiounsstuf"},editor:{name:"Numm (optional)",climateEntity:"Klima-Entitéit (néideg, stéiert d'Ventilatiounsstuf)",temperatures:"Temperaturen",outsideTempSensor:"Baussenloft (an den Apparat)",supplyTempSensor:"Zouloft (an d'Zëmmeren)",returnTempSensor:"Ofloft (aus den Zëmmeren)",exhaustTempSensor:"Fortloft (eraus)",status:"Status",filterStatusSensor:"Filterstatus",bypassValveSensor:"Bypass-Klapp",summerModeSensor:"Summermodus / Saison",preheatingStatusSensor:"Virhëtzen",air:"Loftmass",supplyAirLevelSensor:"Zouloftstuf (%)",returnAirLevelSensor:"Ofloftstuf (%)",supplyAirFlowSensor:"Zouloftmass (m³/h)",exhaustAirFlowSensor:"Ofloftmass (m³/h)",extra:"Loftfiichtegkeet a Leeschtung",outsideHumiditySensor:"Loftfiichtegkeet dobaussen",insideHumiditySensor:"Loftfiichtegkeet bannen",powerSensor:"Stroumverbrauch"},fan_mode:{off:"Aus",low:"Niddreg",medium:"Mëttel",high:"Héich",auto:"Auto"}}};let ge="en";function _e(e,t){const s=t.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,fe[e]);return"string"==typeof s?s:void 0}function ve(e,t){const s=(t||ge).toLowerCase();return _e(s,e)??_e(s.split(/[-_]/)[0],e)??_e("en",e)??e}const ye=["climateEntity","outsideTempSensor","supplyTempSensor","returnTempSensor","exhaustTempSensor","supplyAirLevelSensor","returnAirLevelSensor","filterStatusSensor","bypassValveSensor","summerModeSensor","preheatingStatusSensor","outsideHumiditySensor","insideHumiditySensor","supplyAirFlowSensor","exhaustAirFlowSensor","powerSensor"];console.info(`%c  HAComfoairMQTT Card \n%c  ${ve("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const be=window;be.customCards=be.customCards||[],be.customCards.push({type:"hacomfoairmqtt-card",name:"HAComfoairMQTT Card",description:ve("card.description","en"),preview:!0,documentationURL:"https://github.com/mweimerskirch/lovelace-hacomfoairmqtt"});const $e={off:"mdi:fan-off",low:"mdi:fan-speed-1",medium:"mdi:fan-speed-2",high:"mdi:fan-speed-3",auto:"mdi:fan-auto"},Se=["on","true","open","yes","active","full"],we=["unavailable","unknown"];function Ae(e){const t=e.state.toLowerCase();if(Se.includes(t))return!0;const s=Number(t);return!Number.isNaN(s)&&s>0}let xe=class extends oe{static getStubConfig(e){return function(e){if(!e)return{...de};const t=Object.keys(e.states).filter(e=>pe.test(e)),s=t.find(t=>t.startsWith("climate.")&&Array.isArray(e.states[t].attributes.fan_modes));if(!s)return{...de};const r=me(s).replace(/_climate$/,""),i={climateEntity:s};for(const[e,s]of Object.entries(he))for(const n of s){const s=t.filter(e=>(e.startsWith("sensor.")||e.startsWith("binary_sensor."))&&e.endsWith(n));if(s.length){s.sort((e,t)=>Number(me(t).startsWith(r))-Number(me(e).startsWith(r))||Number(t.startsWith("binary_sensor."))-Number(e.startsWith("binary_sensor."))||e.length-t.length),i[e]=s[0];break}}return i}(e)}static getConfigForm(){const e=(e,t)=>({name:e,selector:{entity:{domain:t}}}),t=t=>e(t,["sensor"]),s=t=>e(t,["binary_sensor","sensor"]),r=(e,t,s=!1)=>({type:"expandable",name:e,flatten:!0,title:ve(`editor.${e}`),expanded:s,schema:t});return{schema:[{name:"name",selector:{text:{}}},{...e("climateEntity",["climate"]),required:!0},r("temperatures",[t("outsideTempSensor"),t("supplyTempSensor"),t("returnTempSensor"),t("exhaustTempSensor")],!0),r("status",[s("filterStatusSensor"),s("bypassValveSensor"),s("summerModeSensor"),s("preheatingStatusSensor")]),r("air",[t("supplyAirLevelSensor"),t("returnAirLevelSensor"),t("supplyAirFlowSensor"),t("exhaustAirFlowSensor")]),r("extra",[t("outsideHumiditySensor"),t("insideHumiditySensor"),t("powerSensor")])],computeLabel:e=>ve(`editor.${e.name}`)}}setConfig(e){if(!e)throw new Error(ve("common.invalid_configuration"));if(!e.climateEntity)throw new Error(ve("common.missing_climate"));this.config={...e}}getCardSize(){return 6}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}shouldUpdate(e){if(!this.config)return!1;if(e.has("config"))return!0;const t=e.get("hass");if(!t||!this.hass)return!0;if(t.locale?.language!==this.hass.locale?.language)return!0;const s=this.config;return ye.some(e=>{const r=s[e];return r&&t.states[r]!==this.hass.states[r]})}stateOf(e){const t=this.config?.[e],s=t?this.hass?.states[t]:void 0;return s&&!we.includes(s.state)?s:void 0}format(e){if(!e)return"–";if(this.hass?.formatEntityState)return this.hass.formatEntityState(e);const t=e.attributes.unit_of_measurement;return t?`${e.state} ${t}`:e.state}moreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}setFanMode(e){this.hass?.callService("climate","set_fan_mode",{entity_id:this.config.climateEntity,fan_mode:e})}renderValue(e,t=""){const s=this.config?.[e],r=s?this.hass?.states[s]?.attributes.friendly_name??s:"";return I`<button
      class="value ${t}"
      ?disabled=${!s}
      title=${r}
      aria-label=${r?`${r}: ${this.format(this.stateOf(e))}`:B}
      @click=${()=>this.moreInfo(s)}
    >
      ${this.format(this.stateOf(e))}
    </button>`}renderStatusIcon(e,t,s,r,i){const n=this.config?.[e];if(!n)return B;const o=this.stateOf(e),a=o?`${s}: ${this.format(o)}`:`${s}: –`;return I`<button
      class="status tone-${i} ${o&&r?"":"inactive"}"
      title=${a}
      aria-label=${a}
      @click=${()=>this.moreInfo(n)}
    >
      <ha-icon .icon=${o?t:"mdi:help-circle-outline"}></ha-icon>
    </button>`}renderStatusIcons(){const e=this.stateOf("filterStatusSensor"),t=this.stateOf("bypassValveSensor"),s=this.stateOf("preheatingStatusSensor");return I`<div class="statuses">
      ${this.renderStatusIcon("filterStatusSensor","mdi:air-filter",ve(e&&Ae(e)?"card.filter_change":"card.filter_ok"),!!e&&Ae(e),"warning")}
      ${this.renderStatusIcon("bypassValveSensor","mdi:valve",ve("card.bypass"),!!t&&Ae(t),"primary")}
      ${this.renderStatusIcon("preheatingStatusSensor","mdi:radiator",ve("card.preheating"),!!s&&Ae(s),"heat")}
    </div>`}renderSeason(){const e=this.stateOf("summerModeSensor"),t=e?function(e){const t=e.state.toLowerCase();return["on","summer","cooling","true","1"].includes(t)?"summer":["off","winter","heating","false","0"].includes(t)?"winter":["transition","transitional"].includes(t)?"transition":void 0}(e):void 0,s="summer"===t?"mdi:weather-sunny":"winter"===t?"mdi:snowflake":"mdi:sun-snowflake-variant";return I`<div class="sky">
      ${this.renderStatusIcon("summerModeSensor",s,ve(t?`card.${t}`:"card.season"),!0,t??"transition")}
    </div>`}renderAirLevel(){const e=this.stateOf("supplyAirLevelSensor"),t=this.stateOf("returnAirLevelSensor");if(!e&&!t)return B;const s=t&&(!e||Math.round(Number(e.state))!==Math.round(Number(t.state))),r=ve("card.air_level");return I`<button
      class="level"
      title=${r}
      aria-label=${`${r}: ${[e,s?t:void 0].filter(e=>e).map(e=>this.format(e)).join(" / ")}`}
      @click=${()=>this.moreInfo(this.config?.supplyAirLevelSensor??this.config?.returnAirLevelSensor)}
    >
      <ha-icon icon="mdi:speedometer"></ha-icon>
      <span class="level-value">${e?this.format(e):this.format(t)}</span>
      ${s&&e?I`<span class="level-return">${this.format(t)}</span>`:B}
    </button>`}renderTargetTemperature(){const e=this.hass?.states[this.config.climateEntity],t=e?.attributes.temperature;if(null==t)return B;const s=this.hass?.formatEntityAttributeValue?this.hass.formatEntityAttributeValue(e,"temperature"):`${t} °C`,r=ve("card.target_temperature");return I`<button
      class="target"
      title=${r}
      aria-label=${`${r}: ${s}`}
      @click=${()=>this.moreInfo(this.config?.climateEntity)}
    >
      <ha-icon icon="mdi:thermostat"></ha-icon><span>${s}</span>
    </button>`}renderFanButtons(e){const t=Array.isArray(e.attributes.fan_modes)?e.attributes.fan_modes:["off","low","medium","high"],s=e.attributes.fan_mode;return I`<div class="fan-modes" role="group" aria-label=${ve("card.fan_speed")}>
      ${t.map(t=>{const r=ve(`fan_mode.${t}`)===`fan_mode.${t}`?t:ve(`fan_mode.${t}`);return I`<button
          class="fan-mode"
          aria-pressed=${s===t?"true":"false"}
          title=${r}
          aria-label=${r}
          ?disabled=${we.includes(e.state)}
          @click=${()=>this.setFanMode(t)}
        >
          <ha-icon .icon=${$e[t]??"mdi:fan"}></ha-icon>
        </button>`})}
    </div>`}renderExtras(){const e=[],t=(t,s,r,i,n=" → ")=>{const o=t.filter(e=>this.config?.[e]);if(!o.length)return;const a=o.map(e=>this.format(this.stateOf(e))).join(n);e.push(I`<button
        class="chip chip-${i}"
        title=${r}
        aria-label=${`${r}: ${a}`}
        @click=${()=>this.moreInfo(this.config?.[o[0]])}
      >
        <ha-icon .icon=${s}></ha-icon>
        <span>${a}</span>
      </button>`)};return t(["outsideHumiditySensor","insideHumiditySensor"],"mdi:water-percent",ve("card.humidity"),"cool"),t(["supplyAirFlowSensor","exhaustAirFlowSensor"],"mdi:weather-windy",ve("card.air_flow"),"fan"," / "),t(["powerSensor"],"mdi:flash",ve("card.power"),"power"),e.length?I`<div class="extras">${e}</div>`:B}render(){if(!this.config||!this.hass)return I``;var e;(e=this.hass.locale?.language??this.hass.language)&&(ge=e);const t=this.hass.states[this.config.climateEntity];return t?I`
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
        <div class="warning-box">${ve("common.entity_not_found")}: ${this.config.climateEntity}</div>
      </ha-card>`}};xe.styles=((e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[r+1],e[0]);return new n(s,e,r)})`
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
    }
  `,e([ue({attribute:!1})],xe.prototype,"hass",void 0),e([function(e){return ue({...e,state:!0,attribute:!1})}()],xe.prototype,"config",void 0),xe=e([(e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})("hacomfoairmqtt-card")],xe);export{xe as HAComfoAirMQTTCard};
