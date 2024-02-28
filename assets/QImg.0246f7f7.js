import{a7 as j,c as g,r as u,m as I,o as Q,h as a,T as $}from"./index.c8fe7b55.js";import{b as P}from"./QBtn.1fdb35a8.js";import{c as A,h as E}from"./render.7653c63f.js";function U(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),j.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const F={ratio:[String,Number]};function H(e,r){return g(()=>{const o=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const L=16/9;var W=A({name:"QImg",props:{...F,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:L},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:o}){const S=u(e.initialRatio),h=H(e,S);let t=null,d=!1;const l=[u(null),u(v())],n=u(0),s=u(!1),c=u(!1),q=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),C=g(()=>({width:e.width,height:e.height})),R=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),T=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));I(()=>y(),b);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function v(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function b(i){t!==null&&(clearTimeout(t),t=null),c.value=!1,i===null?(s.value=!1,l[n.value^1].value=v()):s.value=!0,l[n.value].value=i}function z({target:i}){d!==!0&&(t!==null&&(clearTimeout(t),t=null),S.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,_(i,1))}function _(i,f){d===!0||f===1e3||(i.complete===!0?N(i):t=setTimeout(()=>{t=null,_(i,f+1)},50))}function N(i){d!==!0&&(n.value=n.value^1,l[n.value].value=null,s.value=!1,c.value=!1,o("load",i.currentSrc||i.src))}function k(i){t!==null&&(clearTimeout(t),t=null),s.value=!1,c.value=!0,l[n.value].value=null,l[n.value^1].value=v(),o("error",i)}function w(i){const f=l[i].value,m={key:"img_"+i,class:R.value,style:T.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...f};return n.value===i?(m.class+=" q-img__image--waiting",Object.assign(m,{onLoad:z,onError:k})):m.class+=" q-img__image--loaded",a("div",{class:"q-img__container absolute-full",key:"img"+i},a("img",m))}function B(){return s.value!==!0?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},E(r[c.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[a(P,{color:e.spinnerColor,size:e.spinnerSize})])}return b(y()),Q(()=>{d=!0,t!==null&&(clearTimeout(t),t=null)}),()=>{const i=[];return h.value!==null&&i.push(a("div",{key:"filler",style:h.value})),c.value!==!0&&(l[0].value!==null&&i.push(w(0)),l[1].value!==null&&i.push(w(1))),i.push(a($,{name:"q-transition--fade"},B)),a("div",{class:q.value,style:C.value,role:"img","aria-label":e.alt},i)}}});export{W as Q,U as c};
