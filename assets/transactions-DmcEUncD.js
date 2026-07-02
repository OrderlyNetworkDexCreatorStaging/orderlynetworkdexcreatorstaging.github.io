import{a_ as c,aZ as f,aB as p,aJ as d}from"./components-CtdW5jmC.js";import"./index-B2hnoGx2.js";import"./preload-helper-ckwbz45p.js";import"./dijkstra-CC84MiP5.js";import"./browser-ponyfill-DAxy1DEd.js";const m=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(n,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(n,t,i,o);else for(var a=n.length-1;a>=0;a--)(l=n[a])&&(e=(r<3?l(e):r>3?l(t,i,e):l(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e};let s=class extends f{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=m;s=u([d("w3m-transactions-view")],s);export{s as W3mTransactionsView};
//# sourceMappingURL=transactions-DmcEUncD.js.map
