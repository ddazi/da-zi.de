(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{114:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus(),l};e.exports=n,e.exports.default=n},115:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(85),l=a(22),c=a(25),i=a(86),s=a(3),u=a(7),p=a(77),d=a(76),m=a(90),b=a(94),h=a(95),y=a(93),f=a(79),g=a(83),v=a(96),k=a(63),j=a.n(k);var O=function e(t,a){return"link"===t.type?Object(d.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function E(e){var t,a,o,l=e.item,c=e.onItemClick,i=e.collapsible,d=e.activePath,m=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=l.items,h=l.label,y=O(l,d),f=(a=y,o=Object(n.useRef)(a),Object(n.useEffect)((function(){o.current=a}),[a]),o.current),g=Object(n.useState)((function(){return!!i&&(!y&&l.collapsed)})),v=g[0],k=g[1],E=Object(n.useRef)(null),C=Object(n.useState)(void 0),x=C[0],S=C[1],T=function(e){var t;void 0===e&&(e=!0),S(e?(null===(t=E.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){y&&!f&&v&&k(!1)}),[y,f,v]);var _=Object(n.useCallback)((function(e){e.preventDefault(),x||T(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[x]);return 0===b.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:h},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&y},t[j.a.menuLinkText]=!i,t)),onClick:i?_:void 0,href:i?"#!":void 0},m),h),r.a.createElement("ul",{className:"menu__list",ref:E,style:{height:x},onTransitionEnd:function(){v||T(!1)}},b.map((function(e){return r.a.createElement(N,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:d})}))))}function C(e){var t=e.item,a=e.onItemClick,n=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,c=t.label,i=O(t,n);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(f.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function N(e){switch(e.item.type){case"category":return r.a.createElement(E,e);case"link":default:return r.a.createElement(C,e)}}var x=function(e){var t,a,o=e.path,l=e.sidebar,c=e.sidebarCollapsible,i=void 0===c||c,s=e.onCollapse,u=e.isHidden,f=Object(n.useState)(!1),g=f[0],k=f[1],O=Object(d.useThemeConfig)(),E=O.navbar.hideOnScroll,C=O.hideableSidebar,x=Object(m.a)().isAnnouncementBarClosed,S=Object(y.a)().scrollY;Object(b.a)(g);var T=Object(h.a)();return Object(n.useEffect)((function(){T===h.b.desktop&&k(!1)}),[T]),r.a.createElement("div",{className:Object(p.a)(j.a.sidebar,(t={},t[j.a.sidebarWithHideableNavbar]=E,t[j.a.sidebarHidden]=u,t))},E&&r.a.createElement(v.a,{tabIndex:-1,className:j.a.sidebarLogo}),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",j.a.menu,(a={"menu--show":g},a[j.a.menuWithAnnouncementBar]=!x&&0===S,a))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!g)}},g?r.a.createElement("span",{className:Object(p.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:j.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(N,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:i,activePath:o})})))),C&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(p.a)("button button--secondary button--outline",j.a.collapseSidebarButton),onClick:s}))},S={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},T={Prism:a(23).a,theme:S};function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var P=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},B=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},D=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=w({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=w({},a,{backgroundColor:null}),r};function L(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var M=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?D(e.theme,e.language):void 0;return t.themeDict=a})),_(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=w({},L(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?w({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),_(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},c=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),_(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=w({},L(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?w({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=n[l]++)<r[l];){var s=void 0,u=t[l],p=a[l][o];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=B(u,p.type),p.alias&&(u=B(u,p.alias)),s=p.content),"string"==typeof s){var d=s.split(P),m=d.length;c.push({types:u,content:d[0]});for(var b=1;b<m;b++)I(c),i.push(c=[]),c.push({types:u,content:d[b]})}else l++,t.push(u),a.push(s),n.push(0),r.push(s.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return I(c),i}(void 0!==l?t.tokenize(n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),R=a(114),A=a.n(R),W=a(115),H=a.n(W),$={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},F=a(84),z=function(){var e=Object(d.useThemeConfig)().prism,t=Object(F.a)().isDarkTheme,a=e.theme||$,n=e.darkTheme||a;return t?n:a},J=a(64),K=a.n(J),V=/{([\d,-]+)}/,Y=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},q=/(?:title=")(.*)(?:")/,G=function(e){var t=e.children,a=e.className,o=e.metastring,l=Object(d.useThemeConfig)().prism,c=Object(n.useState)(!1),i=c[0],u=c[1],m=Object(n.useState)(!1),b=m[0],h=m[1];Object(n.useEffect)((function(){h(!0)}),[]);var y=Object(n.useRef)(null),f=[],g="",v=z();if(Array.isArray(t)&&(t=t.join("")),o&&V.test(o)){var k=o.match(V)[1];f=H()(k).filter((function(e){return e>0}))}o&&q.test(o)&&(g=o.match(q)[1]);var j=a&&a.replace(/language-/,"");!j&&l.defaultLanguage&&(j=l.defaultLanguage);var O=t.replace(/\n$/,"");if(0===f.length&&void 0!==j){for(var E,C="",N=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return Y(["js","jsBlock"]);case"jsx":case"tsx":return Y(["js","jsBlock","jsx"]);case"html":return Y(["js","jsBlock","html"]);case"python":case"py":return Y(["python"]);default:return Y()}}(j),x=t.replace(/\n$/,"").split("\n"),S=0;S<x.length;){var _=S+1,w=x[S].match(N);if(null!==w){switch(w.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":C+=_+",";break;case"highlight-start":E=_;break;case"highlight-end":C+=E+"-"+(_-1)+","}x.splice(S,1)}else S+=1}f=H()(C),O=x.join("\n")}var P=function(){A()(O),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.a.createElement(M,Object(s.a)({},T,{key:String(b),theme:v,code:O,language:j}),(function(e){var t,a=e.className,n=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:n,className:K.a.codeBlockTitle},g),r.a.createElement("div",{className:K.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(p.a)(a,K.a.codeBlock,"thin-scrollbar",(t={},t[K.a.codeBlockWithTitle]=g,t))},r.a.createElement("div",{className:K.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=l({line:e,key:t});return f.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},c({token:e,key:t})))})))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(K.a.copyButton),onClick:P},i?"Copied":"Copy")))}))},Q=(a(65),a(66)),U=a.n(Q),X=function(e){return function(t){var a,n=t.id,o=Object(u.a)(t,["id"]),l=Object(d.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(a={},a[U.a.enhancedAnchor]=!l,a)),id:n}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},Z=a(67),ee=a.n(Z),te={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(G,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(f.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:ee.a.mdxCodeBlock},e))},h1:X("h1"),h2:X("h2"),h3:X("h3"),h4:X("h4"),h5:X("h5"),h6:X("h6")},ae=a(97),ne=a(81),re=a(68),oe=a.n(re);function le(e){var t,a,c,s,u=e.currentDocRoute,m=e.versionMetadata,b=e.children,h=Object(l.default)(),y=h.siteConfig,f=h.isClient,g=m.pluginId,v=m.permalinkToSidebar,k=m.docsSidebars,j=m.version,O=v[u.path],E=k[O],C=Object(n.useState)(!1),N=C[0],S=C[1],T=Object(n.useState)(!1),_=T[0],w=T[1],P=Object(n.useCallback)((function(){_&&w(!1),S(!N)}),[_]);return r.a.createElement(i.a,{key:f,searchMetadatas:{version:j,tag:Object(d.docVersionSearchTag)(g,j)}},r.a.createElement("div",{className:oe.a.docPage},E&&r.a.createElement("div",{className:Object(p.a)(oe.a.docSidebarContainer,(t={},t[oe.a.docSidebarContainerHidden]=N,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(oe.a.docSidebarContainer)&&N&&w(!0)},role:"complementary"},r.a.createElement(x,{key:O,sidebar:E,path:u.path,sidebarCollapsible:null===(a=null===(c=y.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===a||a,onCollapse:P,isHidden:_}),_&&r.a.createElement("div",{className:oe.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:P,onClick:P})),r.a.createElement("main",{className:oe.a.docMainContainer},r.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",oe.a.docItemWrapper,(s={},s[oe.a.docItemWrapperEnhanced]=N,s))},r.a.createElement(o.a,{components:te},b)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,o=t.find((function(e){return Object(ne.matchPath)(n.pathname,e)}));return o?r.a.createElement(le,{currentDocRoute:o,versionMetadata:a},Object(c.a)(t)):r.a.createElement(ae.default,e)}}}]);