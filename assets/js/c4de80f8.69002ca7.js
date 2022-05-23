"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[943],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return h},metadata:function(){return v},toc:function(){return b}});var a=n(7462),r=n(3366),o=n(7294),l=n(3905),i=n(2389),s=n(5979),u=n(6010),c="tabItem_LplD";function d(e){var t,n,r,l=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,o.useState)(k),T=y[0],O=y[1],x=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=w[m];null!=P&&P!==T&&g.some((function(e){return e.value===P}))&&O(P)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==T&&(E(t),O(a),null!=m&&N(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},f)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:C,onClick:C},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}function m(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}var f=["components"],h={hide_title:!0,title:"How to Install",sidebar_position:2},g=void 0,v={unversionedId:"install",id:"install",title:"How to Install",description:"How to Install gsudo",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/gsudo/docs/install",editUrl:"https://github.com/gerardog/gsudo/blob/docs/docs/docs/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{hide_title:!0,title:"How to Install",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/gsudo/docs/intro"},next:{title:"How to Use",permalink:"/gsudo/docs/usage/"}},k={},b=[{value:"How to Install gsudo",id:"how-to-install-gsudo",level:2},{value:"Configure your Shell",id:"configure-your-shell",level:2}],w={toc:b};function N(e){var t=e.components,n=(0,r.Z)(e,f);return(0,l.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"how-to-install-gsudo"},"How to Install gsudo"),(0,l.kt)(p,{mdxType:"Tabs"},(0,l.kt)(m,{value:"W10",label:"On Windows 10/11",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"If you use any of the following Package Managers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/winget-cli/releases"},"WinGet"),": Run ",(0,l.kt)("inlineCode",{parentName:"li"},"winget install gerardog.gsudo")),(0,l.kt)("li",{parentName:"ul"},"Using ",(0,l.kt)("a",{parentName:"li",href:"https://chocolatey.org/install"},"Chocolatey"),": Run  ",(0,l.kt)("inlineCode",{parentName:"li"},"choco install gsudo")),(0,l.kt)("li",{parentName:"ul"},"Using ",(0,l.kt)("a",{parentName:"li",href:"https://scoop.sh"},"Scoop"),": Run ",(0,l.kt)("inlineCode",{parentName:"li"},"scoop install gsudo"))),(0,l.kt)("p",null,"Or:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download and run the ",(0,l.kt)("inlineCode",{parentName:"li"},"MSI")," file from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gerardog/gsudo/releases/latest"},"latest release"),"."),(0,l.kt)("li",{parentName:"ul"},"Or use the following script to achieve the same:  ",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PowerShell -Command \"Set-ExecutionPolicy RemoteSigned -scope Process; [Net.ServicePointManager]::SecurityProtocol = 'Tls12'; iwr -useb https://raw.githubusercontent.com/gerardog/gsudo/master/installgsudo.ps1 | iex\"\n"))),(0,l.kt)("li",{parentName:"ul"},"Manually: Download the ",(0,l.kt)("inlineCode",{parentName:"li"},"ZIP")," file from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gerardog/gsudo/releases/latest"},"latest release"),". Uncompress and add to ",(0,l.kt)("inlineCode",{parentName:"li"},"PATH"),"."))),(0,l.kt)(m,{value:"W8",label:"Windows 8.1",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet-framework"},".NET Framework 4.8")," (4.6 should work but, since you are there...)"),(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("inlineCode",{parentName:"li"},"gsudoSetup.msi")," from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gerardog/gsudo/releases/latest"},"latest release"),", and run."))),(0,l.kt)(m,{value:"W7",label:"Windows 7 SP1",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enable TLS 1.2 using ",(0,l.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392#bkmk_easy"},'Microsoft "Easy Fix"\n')),(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet-framework"},".NET Framework 4.8")," (4.6 should work but, since you are there...)"),(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("inlineCode",{parentName:"li"},"gsudoSetup.msi")," from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gerardog/gsudo/releases/latest"},"latest release"),", and run."),(0,l.kt)("li",{parentName:"ul"},"You probably want to update PowerShell up to 5.1")))),(0,l.kt)("hr",null),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Please restart your consoles after installing, to refresh the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"gsudo")," is just a portable console app. No Windows service is required or system change is done, except adding gsudo to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),"."))),(0,l.kt)("h2",{id:"configure-your-shell"},"Configure your Shell"),(0,l.kt)("p",null,"On the following shells you get a better experience if you follow some manual configuration:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"usage/powershell#powershell-profile-config"},"PowerShell")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"usage/bash-for-windows#bash-profile-config"},"Bash for Windows (MinGW / MSYS2 / Git-Bash / Cygwin)"))))}N.isMDXComponent=!0}}]);