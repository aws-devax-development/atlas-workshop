"use strict";(self.webpackChunkatlas_docs_workshop=self.webpackChunkatlas_docs_workshop||[]).push([[878],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),i=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=i(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(k,l(l({ref:e},u),{},{components:a})):r.createElement(k,l({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[c]="string"==typeof t?t:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1482:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),o=a(4996);const l={sidebar_position:2},s="2.\u52a0\u8f7d\u6837\u4f8b\u6570\u636e\u5230 MyCluster",p={unversionedId:"setting-up-atlas/create-your-first-datasets",id:"setting-up-atlas/create-your-first-datasets",title:"2.\u52a0\u8f7d\u6837\u4f8b\u6570\u636e\u5230 MyCluster",description:"\u4e0e MongoDB \u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u5b8c\u6210\uff0c\u5305\u62ec  \u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f:",source:"@site/docs/setting-up-atlas/create-your-first-datasets.md",sourceDirName:"setting-up-atlas",slug:"/setting-up-atlas/create-your-first-datasets",permalink:"/atlas-workshop/docs/setting-up-atlas/create-your-first-datasets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setting-up-atlas/create-your-first-datasets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1.\u5f00\u59cb\u4f7f\u7528 MongoDB Atlas",permalink:"/atlas-workshop/docs/setting-up-atlas/get-started-atlas"},next:{title:"\u7ec3\u4e60B: \u8bbf\u95ee\u60a8\u7684Atlas\u96c6\u7fa4",permalink:"/atlas-workshop/docs/category/\u7ec3\u4e60b-\u8bbf\u95ee\u60a8\u7684atlas\u96c6\u7fa4"}},i={},u=[{value:"\u5c06\u793a\u4f8b\u6570\u636e\u96c6\u52a0\u8f7d\u5230\u60a8\u7684\u96c6\u7fa4\u4e2d",id:"\u5c06\u793a\u4f8b\u6570\u636e\u96c6\u52a0\u8f7d\u5230\u60a8\u7684\u96c6\u7fa4\u4e2d",level:3},{value:"\u901a\u8fc7Atlas UI\u64cd\u4f5c",id:"\u901a\u8fc7atlas-ui\u64cd\u4f5c",level:3}],c={toc:u},m="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2\u52a0\u8f7d\u6837\u4f8b\u6570\u636e\u5230-mycluster"},"2.\u52a0\u8f7d\u6837\u4f8b\u6570\u636e\u5230 MyCluster"),(0,n.kt)("p",null,"\u4e0e MongoDB \u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u5b8c\u6210\uff0c\u5305\u62ec  ",(0,n.kt)("strong",{parentName:"p"},"\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u67d0\u4e00\u79cd\u5f00\u53d1\u8bed\u8a00\u7684 ",(0,n.kt)("strong",{parentName:"li"},"\u9a71\u52a8")),(0,n.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5de5\u5177 ",(0,n.kt)("strong",{parentName:"li"},"MongoDB Shell")),(0,n.kt)("li",{parentName:"ul"},"GUI \u5de5\u5177 ",(0,n.kt)("strong",{parentName:"li"},"MongoDB Compass")),(0,n.kt)("li",{parentName:"ul"},"Atlas ",(0,n.kt)("strong",{parentName:"li"},"Data Explorer"))),(0,n.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u5730\u4e86\u89e3 MongoDB \u6570\u636e\u7ed3\u6784\u548c\u53ef\u80fd\u7684\u4ea4\u4e92\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06",(0,n.kt)("strong",{parentName:"p"},"Sample Data")," \u52a0\u8f7d\u5230\u6211\u4eec\u7684\u96c6\u7fa4\u4e2d."),(0,n.kt)("h3",{id:"\u5c06\u793a\u4f8b\u6570\u636e\u96c6\u52a0\u8f7d\u5230\u60a8\u7684\u96c6\u7fa4\u4e2d"},"\u5c06\u793a\u4f8b\u6570\u636e\u96c6\u52a0\u8f7d\u5230\u60a8\u7684\u96c6\u7fa4\u4e2d"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u9884\u8ba1\u5b8c\u6210\u65f6\u95f4\uff1a5\u5206\u949f")),(0,n.kt)("p",null,"Atlas \u63d0\u4f9b\u4e86\u53ef\u52a0\u8f7d\u5230 Atlas \u6570\u636e\u5e93\u90e8\u7f72\u4e2d\u7684\u793a\u4f8b\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u6709\u5173\u793a\u4f8b\u6570\u636e\u96c6\u5217\u8868\u53ca\u5176\u5404\u81ea\u7684\u63cf\u8ff0\uff0c\u8bf7\u53c2\u89c1\u53ef\u7528\u7684",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/sample-data/#std-label-available-sample-datasets"},"\u793a\u4f8b\u6570\u636e\u96c6"),"\u3002\u6bcf\u4e2a\u6570\u636e\u96c6\u9875\u9762\u90fd\u5305\u542b\u6570\u636e\u96c6\u4e2d\u7684\u6570\u636e\u5e93\u3001\u96c6\u5408\u548c\u7d22\u5f15\u7684\u4fe1\u606f\u3002"),(0,n.kt)("h3",{id:"\u901a\u8fc7atlas-ui\u64cd\u4f5c"},"\u901a\u8fc7Atlas UI\u64cd\u4f5c"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u5230",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u90e8\u7f72"),"\u89c6\u56fe\u3002\n\u5728 Atlas \u4e2d\u7684\u5de6\u4fa7\u5bfc\u822a\u7a97\u683c\u4e2d\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Database"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00",(0,n.kt)("strong",{parentName:"p"},"\u52a0\u8f7d\u793a\u4f8b\u6570\u636e\u96c6"),"\u5bf9\u8bdd\u6846\u3002\n\u627e\u5230\u60a8\u8981\u52a0\u8f7d\u793a\u4f8b\u6570\u636e\u7684\u6570\u636e\u5e93\u90e8\u7f72\u4f4d\u7f6e\u3002\n\u5355\u51fb\u6570\u636e\u5e93\u90e8\u7f72\u7684\u7701\u7565\u53f7 ",(0,n.kt)("strong",{parentName:"p"},"(...)")," \u6309\u94ae\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Load Sample Dataset"),"\u3002"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u63d0\u793a\uff0c\u9009\u62e9\u6240\u6709\u53ef\u7528\u6570\u636e\u96c6\u3002")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5bf9\u8bdd\u6846\u4e2d\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Load Sample Dataset"),"\n\u5bf9\u8bdd\u6846\u5173\u95ed\u540e\uff0cAtlas \u5f00\u59cb\u5c06\u793a\u4f8b\u6570\u636e\u96c6\u52a0\u8f7d\u5230\u60a8\u7684\u6570\u636e\u5e93\u90e8\u7f72\u4e2d\u3002"),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-1-atlas/load-sampledata.png"),border:"1px",width:"700"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u67e5\u770b\u60a8\u7684\u793a\u4f8b\u6570\u636e\u3002\u8981\u901a\u8fc7\u5355\u51fb\u6570\u636e\u5e93\u90e8\u7f72\u7684\u6d4f\u89c8\u96c6\u5408\u6309\u94ae\u67e5\u770b\u60a8\u7684\u793a\u4f8b\u6570\u636e\u3002\u60a8\u5e94\u8be5\u5728\u60a8\u7684\u6570\u636e\u5e93\u90e8\u7f72\u4e2d\u770b\u5230\u4ee5\u4e0b\u6570\u636e\u5e93\uff1a"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sample_airbnb\nsample_geospatial\nsample_guides\nsample_mflix\nsample_supplies\nsample_training\nsample_weatherdata\n")),(0,n.kt)("p",null,"\u6709\u5173\u5305\u542b\u5728\u8fd9\u4e9b\u6570\u636e\u96c6\u4e2d\u7684\u96c6\u5408\u548c\u6587\u6863\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u53ef\u7528\u7684\u793a\u4f8b\u6570\u636e\u96c6\u3002"))}d.isMDXComponent=!0}}]);