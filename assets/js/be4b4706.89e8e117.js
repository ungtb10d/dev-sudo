"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[318],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1601:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={id:"bash-for-windows",sidebar_position:4,hide_title:!0,title:"Usage from Bash for Windows"},c=void 0,l={unversionedId:"usage/bash-for-windows",id:"usage/bash-for-windows",title:"Usage from Bash for Windows",description:"Usage from Bash for Windows (MinGW / MSYS2 / Git-Bash / Cygwin)",source:"@site/docs/usage/mingw-msys2.md",sourceDirName:"usage",slug:"/usage/bash-for-windows",permalink:"/gsudo/docs/usage/bash-for-windows",editUrl:"https://github.com/gerardog/gsudo/blob/docs/docs/docs/usage/mingw-msys2.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"bash-for-windows",sidebar_position:4,hide_title:!0,title:"Usage from Bash for Windows"},sidebar:"tutorialSidebar",previous:{title:"Usage from WSL",permalink:"/gsudo/docs/usage/wsl"},next:{title:"Credentials Cache",permalink:"/gsudo/docs/credentials-cache"}},u={},d=[{value:"Usage from Bash for Windows (MinGW / MSYS2 / Git-Bash / Cygwin)",id:"usage-from-bash-for-windows-mingw--msys2--git-bash--cygwin",level:2},{value:"Bash Profile Config",id:"bash-profile-config",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage-from-bash-for-windows-mingw--msys2--git-bash--cygwin"},"Usage from Bash for Windows (MinGW / MSYS2 / Git-Bash / Cygwin)"),(0,i.kt)("p",null,"Prepend ",(0,i.kt)("inlineCode",{parentName:"p"},"gsudo")," to elevate ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," commands (unless ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," is used to elevate CMD commands). "),(0,i.kt)("h2",{id:"bash-profile-config"},"Bash Profile Config"),(0,i.kt)("p",null,"There is an issue with ",(0,i.kt)("inlineCode",{parentName:"p"},"bash for windows")," shells: The process tree is splitted when invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," scripts such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"gsudo")," wrapper, that invalidates the Credentials Cache.\nYou need to add this function to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc")," profile (to skip the wrapper):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'gsudo() { WSLENV=WSL_DISTRO_NAME:USER:$WSLENV MSYS_NO_PATHCONV=1 gsudo.exe "$@"; }\n')),(0,i.kt)("p",null,"It looks like I missed a semi-colon ",(0,i.kt)("inlineCode",{parentName:"p"},";")," but I didn't."))}f.isMDXComponent=!0}}]);