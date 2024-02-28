import{R as at,Q as ae,a as D}from"./QBtn.1fdb35a8.js";import{c as H,h as Z,a as Ee,b as rt}from"./render.7653c63f.js";import{c as v,h as T,i as ie,e as O,t as He,r as w,o as X,a as J,w as it,s as Le,b as ut,d as st,g as j,f as ct,j as Fe,n as De,k as $e,l as me,m as M,p as ye,q as dt,u as ft,v as we,x as vt,y as ne,z as ht,A as bt,B as gt,C as mt,D as fe,E as ve,F as z,G as m,H as Y,I as he,J as ze}from"./index.c8fe7b55.js";import{u as yt,a as be,b as Be,r as wt,g as Tt,c as Ct,d as qt,e as ge,Q as pt,f as Pe,h as G}from"./QDialog.640425fd.js";import{Q as Ve,a as Qe}from"./QCard.411e978f.js";import{a as _t,b as St}from"./axios.52c06b43.js";import"./use-form.44fa8ac3.js";var xt=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:C}){const r=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:r.value},Z(C.default))}}),kt=H({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:C}){const r=v(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${n.length!==0?" "+n:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>T("div",{class:r.value},Z(C.default))}});let Rt=0;const Lt=["click","keydown"],$t={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Rt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function zt(e,C,r,n){const l=ie(He,O);if(l===O)return console.error("QTab/QRouteTab component needs to be child of QTabs"),O;const{proxy:f}=j(),h=w(null),S=w(null),b=w(null),d=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),x=v(()=>l.currentModel.value===e.name),B=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(x.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(n!==void 0?n.linkClass.value:"")),$=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),s=v(()=>e.disable===!0||l.hasFocus.value===!0||x.value===!1&&l.hasActiveTab.value===!0?-1:e.tabindex||0);function p(u,t){if(t!==!0&&h.value!==null&&h.value.focus(),e.disable===!0){n!==void 0&&n.hasRouterLink.value===!0&&Le(u);return}if(n===void 0){l.updateModel({name:e.name}),r("click",u);return}if(n.hasRouterLink.value===!0){const y=(_={})=>{let P;const I=_.to===void 0||ct(_.to,e.to)===!0?l.avoidRouteWatcher=yt():null;return n.navigateToRouterLink(u,{..._,returnRouterError:!0}).catch(E=>{P=E}).then(E=>{if(I===l.avoidRouteWatcher&&(l.avoidRouteWatcher=!1,P===void 0&&(E===void 0||E.message!==void 0&&E.message.startsWith("Avoided redundant navigation")===!0)&&l.updateModel({name:e.name})),_.returnRouterError===!0)return P!==void 0?Promise.reject(P):E})};r("click",u,y),u.defaultPrevented!==!0&&y();return}r("click",u)}function Q(u){ut(u,[13,32])?p(u,!0):st(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&l.onKbdNavigate(u.keyCode,f.$el)===!0&&Le(u),r("keydown",u)}function A(){const u=l.tabProps.value.narrowIndicator,t=[],y=T("div",{ref:b,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&t.push(T(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&t.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&t.push(e.alertIcon!==void 0?T(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&t.push(y);const _=[T("div",{class:"q-focus-helper",tabindex:-1,ref:h}),T("div",{class:$.value},Ee(C.default,t))];return u===!1&&_.push(y),_}const L={name:v(()=>e.name),rootRef:S,tabIndicatorRef:b,routeData:n};X(()=>{l.unregisterTab(L)}),J(()=>{l.registerTab(L)});function a(u,t){const y={ref:S,class:B.value,tabindex:s.value,role:"tab","aria-selected":x.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:p,onKeydown:Q,...t};return it(T(u,y,A()),[[at,d.value]])}return{renderTab:a,$tabs:l}}var Ie=H({name:"QTab",props:$t,emits:Lt,setup(e,{slots:C,emit:r}){const{renderTab:n}=zt(e,C,r);return()=>n("div")}});function Bt(){const e=w(!Fe.value);return e.value===!1&&J(()=>{e.value=!0}),e}const Oe=typeof ResizeObserver!="undefined",Ae=Oe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var re=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:C}){let r=null,n,l={width:-1,height:-1};function f(b){b===!0||e.debounce===0||e.debounce==="0"?h():r===null&&(r=setTimeout(h,e.debounce))}function h(){if(r!==null&&(clearTimeout(r),r=null),n){const{offsetWidth:b,offsetHeight:d}=n;(b!==l.width||d!==l.height)&&(l={width:b,height:d},C("resize",l))}}const{proxy:S}=j();if(S.trigger=f,Oe===!0){let b;const d=x=>{n=S.$el.parentNode,n?(b=new ResizeObserver(f),b.observe(n),h()):x!==!0&&$e(()=>{d(!0)})};return J(()=>{d()}),X(()=>{r!==null&&clearTimeout(r),b!==void 0&&(b.disconnect!==void 0?b.disconnect():n&&b.unobserve(n))}),De}else{let x=function(){r!==null&&(clearTimeout(r),r=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",f,me.passive),d=void 0)},B=function(){x(),n&&n.contentDocument&&(d=n.contentDocument.defaultView,d.addEventListener("resize",f,me.passive),h())};const b=Bt();let d;return J(()=>{$e(()=>{n=S.$el,n&&B()})}),X(x),()=>{if(b.value===!0)return T("object",{class:"q--avoid-card-border",style:Ae.style,tabindex:-1,type:"text/html",data:Ae.url,"aria-hidden":"true",onLoad:B})}}}});function Pt(e,C,r){const n=r===!0?["left","right"]:["top","bottom"];return`absolute-${C===!0?n[0]:n[1]}${e?` text-${e}`:""}`}const Vt=["left","center","right","justify"];var Qt=H({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Vt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:C,emit:r}){const{proxy:n}=j(),{$q:l}=n,{registerTick:f}=be(),{registerTick:h}=be(),{registerTick:S}=be(),{registerTimeout:b,removeTimeout:d}=Be(),{registerTimeout:x,removeTimeout:B}=Be(),$=w(null),s=w(null),p=w(e.modelValue),Q=w(!1),A=w(!0),L=w(!1),a=w(!1),u=[],t=w(0),y=w(!1);let _=null,P=null,I;const E=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Pt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),We=v(()=>{const o=t.value,i=p.value;for(let c=0;c<o;c++)if(u[c].name.value===i)return!0;return!1}),Ne=v(()=>`q-tabs__content--align-${Q.value===!0?"left":a.value===!0?"justify":e.align}`),je=v(()=>`q-tabs row no-wrap items-center q-tabs--${Q.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ue=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ne.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),ee=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),te=v(()=>e.vertical!==!0&&l.lang.rtl===!0),ue=v(()=>wt===!1&&te.value===!0);M(te,K),M(()=>e.modelValue,o=>{se({name:o,setCurrent:!0,skipEmit:!0})}),M(()=>e.outsideArrows,le);function se({name:o,setCurrent:i,skipEmit:c}){p.value!==o&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",o),(i===!0||e["onUpdate:modelValue"]===void 0)&&(Ke(p.value,o),p.value=o))}function le(){f(()=>{Te({width:$.value.offsetWidth,height:$.value.offsetHeight})})}function Te(o){if(ee.value===void 0||s.value===null)return;const i=o[ee.value.container],c=Math.min(s.value[ee.value.scroll],Array.prototype.reduce.call(s.value.children,(R,q)=>R+(q[ee.value.content]||0),0)),k=i>0&&c>i;Q.value=k,k===!0&&h(K),a.value=i<parseInt(e.breakpoint,10)}function Ke(o,i){const c=o!=null&&o!==""?u.find(R=>R.name.value===o):null,k=i!=null&&i!==""?u.find(R=>R.name.value===i):null;if(c&&k){const R=c.tabIndicatorRef.value,q=k.tabIndicatorRef.value;_!==null&&(clearTimeout(_),_=null),R.style.transition="none",R.style.transform="none",q.style.transition="none",q.style.transform="none";const g=R.getBoundingClientRect(),V=q.getBoundingClientRect();q.style.transform=e.vertical===!0?`translate3d(0,${g.top-V.top}px,0) scale3d(1,${V.height?g.height/V.height:1},1)`:`translate3d(${g.left-V.left}px,0,0) scale3d(${V.width?g.width/V.width:1},1,1)`,S(()=>{_=setTimeout(()=>{_=null,q.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",q.style.transform="none"},70)})}k&&Q.value===!0&&U(k.rootRef.value)}function U(o){const{left:i,width:c,top:k,height:R}=s.value.getBoundingClientRect(),q=o.getBoundingClientRect();let g=e.vertical===!0?q.top-k:q.left-i;if(g<0){s.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(g),K();return}g+=e.vertical===!0?q.height-R:q.width-c,g>0&&(s.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(g),K())}function K(){const o=s.value;if(o===null)return;const i=o.getBoundingClientRect(),c=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);te.value===!0?(A.value=Math.ceil(c+i.width)<o.scrollWidth-1,L.value=c>0):(A.value=c>0,L.value=e.vertical===!0?Math.ceil(c+i.height)<o.scrollHeight:Math.ceil(c+i.width)<o.scrollWidth)}function Ce(o){P!==null&&clearInterval(P),P=setInterval(()=>{Ye(o)===!0&&W()},5)}function qe(){Ce(ue.value===!0?Number.MAX_SAFE_INTEGER:0)}function pe(){Ce(ue.value===!0?0:Number.MAX_SAFE_INTEGER)}function W(){P!==null&&(clearInterval(P),P=null)}function Ge(o,i){const c=Array.prototype.filter.call(s.value.children,V=>V===i||V.matches&&V.matches(".q-tab.q-focusable")===!0),k=c.length;if(k===0)return;if(o===36)return U(c[0]),c[0].focus(),!0;if(o===35)return U(c[k-1]),c[k-1].focus(),!0;const R=o===(e.vertical===!0?38:37),q=o===(e.vertical===!0?40:39),g=R===!0?-1:q===!0?1:void 0;if(g!==void 0){const V=te.value===!0?-1:1,F=c.indexOf(i)+g*V;return F>=0&&F<k&&(U(c[F]),c[F].focus({preventScroll:!0})),!0}}const Xe=v(()=>ue.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,i)=>{o.scrollLeft=-i}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,i)=>{o.scrollTop=i}}:{get:o=>o.scrollLeft,set:(o,i)=>{o.scrollLeft=i}});function Ye(o){const i=s.value,{get:c,set:k}=Xe.value;let R=!1,q=c(i);const g=o<q?-1:1;return q+=g*5,q<0?(R=!0,q=0):(g===-1&&q<=o||g===1&&q>=o)&&(R=!0,q=o),k(i,q),K(),R}function _e(o,i){for(const c in o)if(o[c]!==i[c])return!1;return!0}function Je(){let o=null,i={matchedLen:0,queryDiff:9999,hrefLen:0};const c=u.filter(g=>g.routeData!==void 0&&g.routeData.hasRouterLink.value===!0),{hash:k,query:R}=n.$route,q=Object.keys(R).length;for(const g of c){const V=g.routeData.exact.value===!0;if(g.routeData[V===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:F,query:ce,matched:ot,href:nt}=g.routeData.resolvedLink.value,de=Object.keys(ce).length;if(V===!0){if(F!==k||de!==q||_e(R,ce)===!1)continue;o=g.name.value;break}if(F!==""&&F!==k||de!==0&&_e(ce,R)===!1)continue;const N={matchedLen:ot.length,queryDiff:q-de,hrefLen:nt.length-F.length};if(N.matchedLen>i.matchedLen){o=g.name.value,i=N;continue}else if(N.matchedLen!==i.matchedLen)continue;if(N.queryDiff<i.queryDiff)o=g.name.value,i=N;else if(N.queryDiff!==i.queryDiff)continue;N.hrefLen>i.hrefLen&&(o=g.name.value,i=N)}o===null&&u.some(g=>g.routeData===void 0&&g.name.value===p.value)===!0||se({name:o,setCurrent:!0})}function Ze(o){if(d(),y.value!==!0&&$.value!==null&&o.target&&typeof o.target.closest=="function"){const i=o.target.closest(".q-tab");i&&$.value.contains(i)===!0&&(y.value=!0,Q.value===!0&&U(i))}}function et(){b(()=>{y.value=!1},30)}function oe(){xe.avoidRouteWatcher===!1?x(Je):B()}function Se(){if(I===void 0){const o=M(()=>n.$route.fullPath,oe);I=()=>{o(),I=void 0}}}function tt(o){u.push(o),t.value++,le(),o.routeData===void 0||n.$route===void 0?x(()=>{if(Q.value===!0){const i=p.value,c=i!=null&&i!==""?u.find(k=>k.name.value===i):null;c&&U(c.rootRef.value)}}):(Se(),o.routeData.hasRouterLink.value===!0&&oe())}function lt(o){u.splice(u.indexOf(o),1),t.value--,le(),I!==void 0&&o.routeData!==void 0&&(u.every(i=>i.routeData===void 0)===!0&&I(),oe())}const xe={currentModel:p,tabProps:E,hasFocus:y,hasActiveTab:We,registerTab:tt,unregisterTab:lt,verifyRouteModel:oe,updateModel:se,onKbdNavigate:Ge,avoidRouteWatcher:!1};ye(He,xe);function ke(){_!==null&&clearTimeout(_),W(),I!==void 0&&I()}let Re;return X(ke),dt(()=>{Re=I!==void 0,ke()}),ft(()=>{Re===!0&&Se(),le()}),()=>T("div",{ref:$,class:je.value,role:"tablist",onFocusin:Ze,onFocusout:et},[T(re,{onResize:Te}),T("div",{ref:s,class:Ue.value,onScroll:K},Z(C.default)),T(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W}),T(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(L.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:pe,onTouchstartPassive:pe,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W})])}}),It=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:C}){const r=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:r.value,role:"toolbar"},Z(C.default))}}),At=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:C,emit:r}){const{proxy:{$q:n}}=j(),l=ie(we,O);if(l===O)return console.error("QHeader needs to be child of QLayout"),O;const f=w(parseInt(e.heightHint,10)),h=w(!0),S=v(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||n.platform.is.ios&&l.isContainer.value===!0),b=v(()=>{if(e.modelValue!==!0)return 0;if(S.value===!0)return h.value===!0?f.value:0;const a=f.value-l.scroll.value.position;return a>0?a:0}),d=v(()=>e.modelValue!==!0||S.value===!0&&h.value!==!0),x=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),B=v(()=>"q-header q-layout__section--marginal "+(S.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),$=v(()=>{const a=l.rows.value.top,u={};return a[0]==="l"&&l.left.space===!0&&(u[n.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),a[2]==="r"&&l.right.space===!0&&(u[n.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),u});function s(a,u){l.update("header",a,u)}function p(a,u){a.value!==u&&(a.value=u)}function Q({height:a}){p(f,a),s("size",a)}function A(a){x.value===!0&&p(h,!0),r("focusin",a)}M(()=>e.modelValue,a=>{s("space",a),p(h,!0),l.animate()}),M(b,a=>{s("offset",a)}),M(()=>e.reveal,a=>{a===!1&&p(h,e.modelValue)}),M(h,a=>{l.animate(),r("reveal",a)}),M(l.scroll,a=>{e.reveal===!0&&p(h,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const L={};return l.instances.header=L,e.modelValue===!0&&s("size",f.value),s("space",e.modelValue),s("offset",b.value),X(()=>{l.instances.header===L&&(l.instances.header=void 0,s("size",0),s("offset",0),s("space",!1))}),()=>{const a=rt(C.default,[]);return e.elevated===!0&&a.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(T(re,{debounce:0,onResize:Q})),T("header",{class:B.value,style:$.value,onFocusin:A},a)}}}),Mt=H({name:"QPageContainer",setup(e,{slots:C}){const{proxy:{$q:r}}=j(),n=ie(we,O);if(n===O)return console.error("QPageContainer needs to be child of QLayout"),O;ye(vt,!0);const l=v(()=>{const f={};return n.header.space===!0&&(f.paddingTop=`${n.header.size}px`),n.right.space===!0&&(f[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(f.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(f[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),f});return()=>T("div",{class:"q-page-container",style:l.value},Z(C.default))}});const{passive:Me}=me,Et=["both","horizontal","vertical"];var Ht=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Et.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:C}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,l,f;M(()=>e.scrollTarget,()=>{b(),S()});function h(){n!==null&&n();const B=Math.max(0,Ct(l)),$=qt(l),s={top:B-r.position.top,left:$-r.position.left};if(e.axis==="vertical"&&s.top===0||e.axis==="horizontal"&&s.left===0)return;const p=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";r.position={top:B,left:$},r.directionChanged=r.direction!==p,r.delta=s,r.directionChanged===!0&&(r.direction=p,r.inflectionPoint=r.position),C("scroll",{...r})}function S(){l=Tt(f,e.scrollTarget),l.addEventListener("scroll",d,Me),d(!0)}function b(){l!==void 0&&(l.removeEventListener("scroll",d,Me),l=void 0)}function d(B){if(B===!0||e.debounce===0||e.debounce==="0")h();else if(n===null){const[$,s]=e.debounce?[setTimeout(h,e.debounce),clearTimeout]:[requestAnimationFrame(h),cancelAnimationFrame];n=()=>{s($),n=null}}}const{proxy:x}=j();return M(()=>x.$q.lang.rtl,h),J(()=>{f=x.$el.parentNode,S()}),X(()=>{n!==null&&n(),b()}),Object.assign(x,{trigger:d,getPosition:()=>r}),De}}),Ft=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:C,emit:r}){const{proxy:{$q:n}}=j(),l=w(null),f=w(n.screen.height),h=w(e.container===!0?0:n.screen.width),S=w({position:0,direction:"down",inflectionPoint:0}),b=w(0),d=w(Fe.value===!0?0:ge()),x=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),B=v(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),$=v(()=>d.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),s=v(()=>d.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function p(t){if(e.container===!0||document.qScrollPrevented!==!0){const y={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};S.value=y,e.onScroll!==void 0&&r("scroll",y)}}function Q(t){const{height:y,width:_}=t;let P=!1;f.value!==y&&(P=!0,f.value=y,e.onScrollHeight!==void 0&&r("scrollHeight",y),L()),h.value!==_&&(P=!0,h.value=_),P===!0&&e.onResize!==void 0&&r("resize",t)}function A({height:t}){b.value!==t&&(b.value=t,L())}function L(){if(e.container===!0){const t=f.value>b.value?ge():0;d.value!==t&&(d.value=t)}}let a=null;const u={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:l,height:f,containerHeight:b,scrollbarWidth:d,totalWidth:v(()=>h.value+d.value),rows:v(()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:S,animate(){a!==null?clearTimeout(a):document.body.classList.add("q-body--layout-animate"),a=setTimeout(()=>{a=null,document.body.classList.remove("q-body--layout-animate")},155)},update(t,y,_){u[t][y]=_}};if(ye(we,u),ge()>0){let _=function(){t=null,y.classList.remove("hide-scrollbar")},P=function(){if(t===null){if(y.scrollHeight>n.screen.height)return;y.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(_,300)},I=function(E){t!==null&&E==="remove"&&(clearTimeout(t),_()),window[`${E}EventListener`]("resize",P)},t=null;const y=document.body;M(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),ht(()=>{I("remove")})}return()=>{const t=Ee(C.default,[T(Ht,{onScroll:p}),T(re,{onResize:Q})]),y=T("div",{class:x.value,style:B.value,ref:e.container===!0?void 0:l,tabindex:-1},t);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:l},[T(re,{onResize:A}),T("div",{class:"absolute-full",style:$.value},[T("div",{class:"scroll",style:s.value},[y])])]):y}}});function Dt(){return ie(bt)}const Ot={class:"q-pa-md",style:{width:"525px"}},Yt={__name:"MainLayout",setup(e){const C=w(!1),r=gt(),n=Dt(),l=w(null),f=w(null),h=w(null),S=w(null),b=()=>{r.push("/teach")},d=()=>{r.push("/")},x=()=>{r.push("/chat")},B=()=>{r.push("/about")},$=w(!1),s=w("login"),p=()=>{$.value!==!0?n.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):(_t.post("http://your-backend-server.com/login",{account:l.value,password:f.value}).then(L=>{console.log(L)}).catch(L=>{console.error(L)}),n.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"}))},Q=async()=>{var L,a;if($.value!==!0)n.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"});else try{await St.post("/users",{account:l.value,email:h.value,password:f.value}),n.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u8A3B\u518A\u6210\u529F"}),r.push("/login")}catch(u){const t=((a=(L=u==null?void 0:u.response)==null?void 0:L.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66";n.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:t})}},A=()=>{l.value=null,f.value=null,S.value=null,h.value=null};return(L,a)=>{const u=mt("router-view");return fe(),ve(Ft,{view:"lHh Lpr lFf"},{default:z(()=>[m(At,{elevated:""},{default:z(()=>[m(It,{style:{background:"black"}},{default:z(()=>[m(xt,null,{default:z(()=>[m(D,{flat:"",stretch:"",style:{color:"white"},onClick:d},{default:z(()=>[Y("trading")]),_:1})]),_:1}),m(kt,{stretch:"",flat:""},{default:z(()=>[m(D,{style:{color:"white"},onClick:b},{default:z(()=>[Y("\u6559\u5B78\u5C08\u5340")]),_:1}),m(D,{style:{color:"white"},onClick:x},{default:z(()=>[Y("\u4EA4\u6D41\u5C08\u5340")]),_:1}),m(D,{style:{color:"white"},onClick:B},{default:z(()=>[Y("\u95DC\u65BC\u6211\u5011")]),_:1}),m(D,{style:{color:"white"},onClick:a[0]||(a[0]=t=>C.value=!0)},{default:z(()=>[Y("\u8A3B\u518A/\u767B\u5165")]),_:1})]),_:1}),m(pt,{modelValue:C.value,"onUpdate:modelValue":a[8]||(a[8]=t=>C.value=t)},{default:z(()=>[m(Ve,null,{default:z(()=>[m(Ve,{style:{"background-color":"#272727"}},{default:z(()=>[m(Qe,null,{default:z(()=>[m(Qt,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=t=>s.value=t),dense:"",align:"justify",class:"bg-1d text-white shadow-2",breakpoint:0},{default:z(()=>[m(Ie,{name:"login",label:"\u767B\u5165"}),m(Ie,{name:"signin",label:"\u8A3B\u518A"})]),_:1},8,["modelValue"])]),_:1}),m(Qe,{style:{width:"800px"}},{default:z(()=>[he("div",Ot,[s.value==="login"?(fe(),ve(Pe,{key:0,onSubmit:p,onReset:A,class:"q-gutter-md tw"},{default:z(()=>[m(G,{filled:"",modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=t=>l.value=t),label:"\u4F60\u7684\u5E33\u865F *","lazy-rules":"",dark:"",rules:[t=>t&&t.length>0||"\u8ACB\u8F38\u5165\u5E33\u865F"]},null,8,["modelValue","rules"]),m(G,{filled:"",modelValue:f.value,"onUpdate:modelValue":a[3]||(a[3]=t=>f.value=t),label:"\u4F60\u7684\u5BC6\u78BC *","lazy-rules":"",dark:"",rules:[t=>t&&t.length>0||"\u8ACB\u8F38\u5165\u5BC6\u78BC"]},null,8,["modelValue","rules"]),he("div",null,[m(D,{label:"\u767B\u5165",type:"submit",color:"black"}),m(D,{label:"\u91CD\u7F6E",type:"reset",color:"white",flat:"",class:"q-ml-sm"})])]),_:1})):ze("",!0),s.value==="signin"?(fe(),ve(Pe,{key:1,onSubmit:Q,onReset:A,class:"q-gutter-md tw"},{default:z(()=>[m(G,{filled:"",modelValue:l.value,"onUpdate:modelValue":a[4]||(a[4]=t=>l.value=t),label:"\u4F60\u7684\u5E33\u865F *","lazy-rules":"",dark:"",rules:[t=>t&&t.length>0||"\u8ACB\u8F38\u5165\u5E33\u865F"],class:"text-white"},null,8,["modelValue","rules"]),m(G,{filled:"",modelValue:h.value,"onUpdate:modelValue":a[5]||(a[5]=t=>h.value=t),label:"\u4F60\u7684\u4FE1\u7BB1 *","lazy-rules":"",dark:"",rules:[t=>t&&t.length>0||"\u8ACB\u8F38\u5165\u4FE1\u7BB1"]},null,8,["modelValue","rules"]),m(G,{filled:"",modelValue:f.value,"onUpdate:modelValue":a[6]||(a[6]=t=>f.value=t),label:"\u4F60\u7684\u5BC6\u78BC *","lazy-rules":"",dark:"",rules:[t=>t&&t.length>0||"\u8ACB\u8F38\u5165\u5BC6\u78BC"]},null,8,["modelValue","rules"]),m(G,{filled:"",modelValue:S.value,"onUpdate:modelValue":a[7]||(a[7]=t=>S.value=t),label:"\u518D\u6B21\u8F38\u5165\u5BC6\u78BC *","lazy-rules":"",dark:"",rules:[t=>t&&t.length>0||"\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC"]},null,8,["modelValue","rules"]),he("div",null,[m(D,{label:"\u8A3B\u518A",type:"submit",color:"black"}),m(D,{label:"\u91CD\u7F6E",type:"reset",color:"white",flat:"",class:"q-ml-sm"})])]),_:1})):ze("",!0)])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),m(Mt,null,{default:z(()=>[m(u)]),_:1})]),_:1})}}};export{Yt as default};
