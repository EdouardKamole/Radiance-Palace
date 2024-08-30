"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[6575],{922719:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>s,XF:()=>r});let a=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>a(t/2,e/2,2*Math.random()*Math.PI),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,s=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},775089:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var a=n(667294),i=n(883119),r=n(214877),s=n(103322);function o(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let l={};function m(e){let t=l[e];return t&&t.screenWidth===window.innerWidth||(l[e]={screenWidth:window.innerWidth}),l[e]}let u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class p{constructor(){o(this,"idMap",new Map),o(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=u(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var d=n(547643),c=n(667677),h=n(213377),_=n(406893),f=n(340523),y=n(5859),x=n(554786),b=n(953565),g=n(84768),w=n(785893);function v({analyticsData:e,children:t,idx:n,isMeasuring:i,masonryV2ExpName:r,masonryV2ExpGroup:o}){let l=(0,x.ZP)(),{isAuthenticated:m}=(0,y.B)(),u=(0,g.MM)();return(0,a.useEffect)(()=>{if(e.current[n]){let{fetchTimestamp:t,measureTimestamp:a,hasRendered:s,pageCount:p}=e.current[n]??{},d={deviceType:l,experimentName:r,experimentGroup:o,handlerId:u,isAuthenticated:m,pageCount:p};i&&!a&&(e.current[n].measureTimestamp=Date.now(),(0,b.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:d})),i||s||((0,b.LY)("webapp.masonry.itemRenderStart",Date.now()-a,{tags:d}),e.current[n].hasRendered=!0)}},[i]),(0,w.jsx)(s.Z,{name:"MasonryItem",children:t})}function M(e){let{align:t,cacheKey:n,id:o,isGridCentered:l=!0,items:u,layout:M,loadItems:C,masonryRef:$,renderItem:S,scrollContainerRef:j,virtualize:E=!0,_getColumnSpanConfig:k,_dynamicHeights:R,useLoadingState:I}=e,W=(0,x.ZP)(),{isAuthenticated:A,isRTL:D}=(0,y.B)(),{logContextEvent:L}=(0,r.v)(),N=(0,f.F)(),Z="desktop"===W,F=(0,g.MM)(),T=(0,a.useRef)(u.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),{_loadingStateItems:O,_renderLoadingStateItems:P}=(0,c.Z)({useLoadingState:I}),B=e.columnWidth??h.yF,z=e.gutterWidth??(Z?h.oX:1),V=e.minCols??h.yc,G=e.serverRender??!!Z,H="flexible"===M||"desktop"!==W,X=G?"serverRenderedFlexible":"flexible",Y=(0,a.useRef)(0),K=B+z,Q=function(e){if(null==e)return;let t=m(e);return t.positionCache||(t.positionCache=new p),t.positionCache}(n),U=function(e){if(null==e)return;let t=m(e);return t.measurementCache||(t.measurementCache=new p),t.measurementCache}(n),q=(0,a.useCallback)(()=>j?.current||window,[j]),J=(0,a.useRef)(!0),{anyEnabled:ee}=N.checkExperiment("web_masonry_ssr_container_query"),et=l&&J.current?"gridCentered":"",{className:en,styles:ea}=function(e){let t=`m_${Object.keys(e).reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:i,itemWidth:r,maxColumns:s,minColumns:o,items:l,_getColumnSpanConfig:m}=e,u=m?l.map((e,t)=>({index:t,columnSpanConfig:m(e)??1})).filter(e=>1!==e.columnSpanConfig):[],p=r+a,d=Array.from({length:s+1-o},(e,t)=>t+o).map(e=>{let l=e===o?0:e*p,m=e===s?null:(e+1)*p-1,{styles:d,numberOfVisibleItems:c}=u.reduce((i,s)=>{let{columnSpanConfig:o}=s,l=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:o}),e),m=null!=s.index&&i.numberOfVisibleItems>=l+s.index,u=n?100/e*l:r*l+a*(l-1),{numberOfVisibleItems:p}=i;return m?p-=l-1:s.index<p&&(p+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:i,flexible:r}){let s="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${s}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${s}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:s.index,columnSpanConfig:o,visible:m,width:u,flexible:n})),numberOfVisibleItems:p}},{styles:"",numberOfVisibleItems:e}),h=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*p}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:l,maxWidth:m,styles:`
      .${t} .static:nth-child(-n+${c}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${h}

      ${d}
    `}}),c=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),h=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),_=e.enableContainerQuery?`
    ${c.join("")}
    @supports not (container-type: inline-size) {
      ${h.join("")}
    }
  `:h.join("");return{className:t,styles:`
    .masonryContainer {
      container-type: inline-size;
    }

    .gridCentered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${_}
  `}}({gutterWidth:z,flexible:H,items:u,isRTL:D,itemWidth:B,maxColumns:e.maxColumns??Math.max(u.length,h.g5),minColumns:V,enableContainerQuery:ee,_getColumnSpanConfig:k}),ei=`${et} ${en}`.trim(),{anyEnabled:er,expName:es,group:eo,isMeasureAllEnabled:el}=(0,d.Z)(),em=(0,a.useMemo)(()=>!U||u.every(e=>!U.has(e)),[]),eu=eo&&em,ep=(0,a.useRef)(),ed=(0,a.useRef)(u.length),ec=(0,a.useRef)(0);(0,a.useEffect)(()=>{eu&&u.forEach((e,t)=>{T.current[t]||(T.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:ec.current})}),ed.current=u.length,ec.current+=1},[u]),(0,a.useEffect)(()=>{J.current&&(J.current=!1)},[]),(0,a.useEffect)(()=>{let e=()=>Y.current+=1;return eu&&(ep.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(eu){let t=T.current;window.removeEventListener("scroll",e);let n=t.filter(e=>!!e.measureTimestamp).length,a=t.filter(e=>e.hasRendered).length,i=ed.current,r={deviceType:W,experimentName:es,experimentGroup:eo,handlerId:F,isAuthenticated:A};(0,b.LY)("webapp.masonry.timeSpent",ep.current?Date.now()-ep.current:0,{tags:r}),(0,b.S0)("webapp.masonry.itemsFetched",i,{tags:r}),(0,b.S0)("webapp.masonry.itemsMeasured",n,{tags:r}),(0,b.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(n/i*100),{tags:r}),(0,b.S0)("webapp.masonry.itemsRendered",a,{tags:r}),(0,b.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(a/i*100),{tags:r}),(0,b.S0)("webapp.masonry.scrollCount",Y.current,{tags:r})}}},[]);let eh=(0,a.useCallback)(e=>eu?(0,w.jsx)(v,{analyticsData:T,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:eo,masonryV2ExpName:es,children:(0,w.jsx)(s.Z,{name:"MasonryItem",children:S(e)})}):(0,w.jsx)(s.Z,{name:"MasonryItem",children:S(e)}),[S]);return(0,w.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:o,children:(0,w.jsxs)("div",{className:ei,children:[G&&J.current?(0,w.jsx)(_.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ea}):null,(0,w.jsx)(i.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?K*e.maxColumns:void 0,children:er?(0,w.jsx)(i.GX,{ref:e=>{$&&($.current=e)},_dynamicHeights:R,_getColumnSpanConfig:k,_logTwoColWhitespace:e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,b.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:B,minCols:V}}),L({event_type:15878,component:14468,aux_data:{total_whitespace_px:t,average_whitespace_px:n,max_whitespace_px:Math.max(...e),min_whitespace_px:Math.min(...e)}})},_measureAll:el,align:t,columnWidth:B,gutterWidth:z,items:u,layout:H?X:M??"basic",loadItems:C,measurementStore:U,minCols:V,positionStore:Q,renderItem:eh,scrollContainer:q,virtualBufferFactor:.3,virtualize:E}):(0,w.jsx)(i.Rk,{ref:e=>{$&&($.current=e)},_dynamicHeights:R,_getColumnSpanConfig:k,_loadingStateItems:O,_logTwoColWhitespace:e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,b.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:B,minCols:V}}),L({event_type:15878,component:14468,aux_data:{total_whitespace_px:t,average_whitespace_px:n,max_whitespace_px:Math.max(...e),min_whitespace_px:Math.min(...e)}})},_renderLoadingStateItems:P,align:t,columnWidth:B,gutterWidth:z,items:u,layout:H?X:M??"basic",loadItems:C,measurementStore:U,minCols:V,positionStore:Q,renderItem:eh,scrollContainer:q,virtualBufferFactor:.3,virtualize:E})})]})})}},547643:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(340523),i=n(5859),r=n(84768);function s(e){let{isAuthenticated:t}=(0,i.B)(),{expName:n,anyEnabled:s,group:o}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:a}){let{checkExperiment:i}=e,r=i(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:a});return r.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...r}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...i("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:a})}:{expName:"web_masonry_v2_unauth_board",...i("web_masonry_v2_unauth_board",{dangerouslySkipActivation:a})}}({experimentsClient:(0,a.F)(),handlerId:(0,r.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:s,group:o,isMeasureAllEnabled:"enabled_measure_all"===o||"enabled_measure_all_impression_fix"===o,isImpressionFixEnabled:"control_impression_fix"===o||"enabled_impression_fix"===o||"enabled_measure_all_impression_fix"===o}}},667677:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(667294),i=n(883119),r=n(876594),s=n(922719),o=n(406893),l=n(785893);let m=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,u={backgroundColor:r._VP,animation:"pulsing 2s ease-out 0.5s infinite",borderRadius:r.Ev2};function p({data:e}){let{height:t}=e;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(o.Z,{unsafeCSS:(0,s.Ll)([m])}),(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:u},"data-test-id":"skeleton-pin",children:(0,l.jsx)(i.xu,{height:t})})]})}function d({useLoadingState:e,numOfPins:t=50}){let n=(0,a.useMemo)(()=>Array.from({length:t}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236}],[]),[t]);return{_loadingStateItems:e?n:void 0,_renderLoadingStateItems:e?({data:e})=>(0,l.jsx)(p,{data:e}):void 0}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/6575-ed736a194747ab44.mjs.map