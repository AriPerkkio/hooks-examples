(window["webpackJsonphooks-examples"]=window["webpackJsonphooks-examples"]||[]).push([[0],{10:function(e,t,n){"use strict";var r=n(2),c=n.n(r),a=n(13),o=n(81),u=n(82),i=n(18),s=new(function(){function e(){Object(o.a)(this,e),this.baseUrl="https://jsonplaceholder.typicode.com",this.subscribers=[],this._startPollingComments()}return Object(u.a)(e,[{key:"getComment",value:function(){var e=Object(a.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(2e3);case 2:return e.abrupt("return",fetch("".concat(this.baseUrl,"/comments/").concat(t)).then(function(e){return e.json()}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var e=Object(a.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(2e3);case 2:return e.abrupt("return",fetch("".concat(this.baseUrl,"/users")).then(function(e){return e.json()}));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(a.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(2e3);case 2:return e.abrupt("return",fetch("".concat(this.baseUrl,"/users/").concat(t)).then(function(e){return e.json()}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getUsersPosts",value:function(){var e=Object(a.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(2e3);case 2:return e.abrupt("return",fetch("".concat(this.baseUrl,"/users/").concat(t,"/posts")).then(function(e){return e.json()}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getUsersComments",value:function(){var e=Object(a.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(2e3);case 2:return e.abrupt("return",fetch("".concat(this.baseUrl,"/users/").concat(t,"/comments")).then(function(e){return e.json()}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPosts",value:function(){var e=Object(a.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(2e3);case 2:return e.abrupt("return",fetch("".concat(this.baseUrl,"/posts")).then(function(e){return e.json()}));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPost",value:function(){var e=Object(a.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(2e3);case 2:return e.abrupt("return",fetch("".concat(this.baseUrl,"/posts/").concat(t)).then(function(e){return e.json()}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"postForm",value:function(){var e=Object(a.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.b)(2e3));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"subscribeComments",value:function(e){this.subscribers.push(e)}},{key:"unsubscribeComments",value:function(e){this.subscribers=this.subscribers.filter(function(t){return t!==e})}},{key:"_startPollingComments",value:function(){var e=this,t=1;setInterval(Object(a.a)(c.a.mark(function n(){var r;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.subscribers.length){n.next=5;break}return n.next=3,e.getComment(t++);case 3:r=n.sent,e.subscribers.forEach(function(e){return e(r)});case 5:case"end":return n.stop()}},n)})),2e3)}}]),e}()),l=n(0),f=n.n(l),b=n(39),p=function(){return Object(b.c)(500),f.a.createElement("h3",null,"Api subscribers count: ",s.subscribers.length)};n.d(t,"b",function(){return s}),n.d(t,"a",function(){return p})},132:function(e,t,n){e.exports=n(417)},18:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return o});var r={},c=function(e,t){return r[t]=(r[t]||0)+1,"Generated: ".concat(e," - ").concat(t)},a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return function(){return t(e.apply(void 0,arguments))}})},o=function(){},u=function(e){return new Promise(function(t){return setTimeout(t,e)})}},38:function(e,t,n){"use strict";var r=n(52),c=n(0),a=n.n(c),o=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement("a",Object.assign({},n,{className:"link",target:"_blank",rel:"noopener noreferrer"}),t)};n.d(t,"a",function(){return o})},39:function(e,t,n){"use strict";var r=n(1),c=n(9),a=n(0),o=n(10);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var i={posts:[],loading:!1,error:!1},s=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t)},l=function(){var e=Object(a.useReducer)(s,i),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){c({loading:!0}),o.b.getPosts().then(function(e){return c({posts:e,loading:!1})}).catch(function(){return c({error:!0,loading:!1})})},[]),n},f=n(25),b=function(e,t){return[].concat(Object(f.a)(e),[t])},p=function(){var e=Object(a.useReducer)(b,[]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){return o.b.subscribeComments(c),function(){return o.b.unsubscribeComments(c)}},[]),n},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=Object(a.useReducer)(function(e){return e+1},0),n=Object(r.a)(t,2),c=n[1];Object(a.useEffect)(function(){var t=setInterval(c,e);return function(){return clearTimeout(t)}},[e])};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={comment:null,error:null},O={selectedUser:null,selectedPost:null,comment:null,error:null,users:[],posts:[],comments:[],isLoading:!1,isSending:!1},v=function(e,t){return h({},e,{},"function"===typeof t?t(e):t)},j=function(){var e=Object(a.useReducer)(v,O),t=Object(r.a)(e,2),n=t[0],c=t[1],u=n.selectedUser,i=n.selectedPost,s=n.comment,l=Object(a.useCallback)(function(e){return c(function(t){var n=t.comments;return{comments:[].concat(Object(f.a)(n),[e])}})},[]);return Object(a.useEffect)(function(){return o.b.subscribeComments(l),c({isLoading:!0}),Promise.all([o.b.getUsers(),o.b.getPosts()]).then(function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return c({isLoading:!1,users:n,posts:a})}),function(){return o.b.unsubscribeComments(l)}},[l]),h({},n,{onUserChange:function(e){var t=e.target.value;return c(h({selectedUser:t},g))},onPostChange:function(e){var t=e.target.value;return c(function(e){return h({selectedPost:t===e.selectedPost?null:t},g)})},onCommentChange:function(e){var t=e.target.value;return c({comment:t,error:null})},onSubmit:function(e){if(e.preventDefault(),s){var t={user:u,post:i,comment:s};c({isSending:!0}),o.b.postForm(t).then(function(){return c({isSending:!1})}).then(function(){return alert("Form sent")})}else c({error:"Comment missing"})}})},y=function(){return window.innerWidth},k=function(e){var t=Object(a.useReducer)(y,window.innerWidth),n=Object(r.a)(t,2),c=n[0],o=n[1],u=Object(a.useRef)(e);Object(a.useEffect)(function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}},[]),Object(a.useEffect)(function(){u.current=e},[e]),Object(a.useEffect)(function(){u&&u.current(c)},[c])},E=function(e){var t=Object(a.useState)(e),n=Object(r.a)(t,2),c=n[0],o=n[1];return[c,Object(a.useCallback)(function(e){var t=((e||{}).target||{}).value;o(t)},[])]},w=n(83);n.d(t,"e",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return j}),n.d(t,"g",function(){return k}),n.d(t,"b",function(){return E}),n.d(t,"f",function(){return w.b})},416:function(e,t,n){},417:function(e,t,n){"use strict";n.r(t);n(133),n(158);var r=n(0),c=n.n(r),a=n(126),o=n.n(a),u=n(53),i=n(21),s=n(38),l=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Hooks examples"),c.a.createElement("h2",null,c.a.createElement(s.a,{href:"https://github.com/AriPerkkio/hooks-examples"},"Source codes")),c.a.createElement("h3",null,"Reading / Watching list"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.a,{href:"https://youtu.be/KJP1E-Y-xyo"},"Getting Closure on React Hooks by Shawn Wang | JSConf.Asia 2019")),c.a.createElement("li",null,c.a.createElement(s.a,{href:"https://overreacted.io/a-complete-guide-to-useeffect"},"overreacted.io/a-complete-guide-to-useeffect")),c.a.createElement("li",null,c.a.createElement(s.a,{href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks-testing-library"))))},f=[{navigationName:"useState",path:"/local-state",component:Object(r.lazy)(function(){return n.e(5).then(n.bind(null,427))})},{navigationName:"useReducer",path:"/use-reducer",component:Object(r.lazy)(function(){return n.e(7).then(n.bind(null,428))})},{navigationName:"setState: Merge vs replace",path:"/merge-vs-replace",component:Object(r.lazy)(function(){return n.e(9).then(n.bind(null,437))})},{navigationName:"useEffect",path:"/use-effect",component:Object(r.lazy)(function(){return n.e(12).then(n.bind(null,433))})},{navigationName:"Performance: useMemo, useCallback",path:"/performance",component:Object(r.lazy)(function(){return n.e(6).then(n.bind(null,434))})},{navigationName:"Context View",path:"/context-view",component:Object(r.lazy)(function(){return n.e(10).then(n.bind(null,435))})},{navigationName:"Custom Hooks: reusable state logic vs HOC/renderProp",path:"/reusable-state-logic",component:Object(r.lazy)(function(){return n.e(11).then(n.bind(null,432))})},{navigationName:"Custom Hooks: Isolated state management",path:"/isolated-state-management",component:Object(r.lazy)(function(){return n.e(8).then(n.bind(null,436))})},{navigationName:"Custom Hooks: Unit testing",path:"/testing",component:Object(r.lazy)(function(){return n.e(13).then(n.bind(null,429))})},{navigationName:"Custom Hooks: global state",path:"/global-state",component:Object(r.lazy)(function(){return n.e(4).then(n.bind(null,430))})},{navigationName:"Extra: Custom hook examples",path:"/custom-hook-examples",component:Object(r.lazy)(function(){return n.e(3).then(n.bind(null,431))})},{navigationName:"Main View",path:"/*",component:l}],b=n(1),p=function(){var e=Object(r.useReducer)(function(e){return!e},!0),t=Object(b.a)(e,2),n=t[0],a=t[1];return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("input",{checked:n,type:"checkbox",onChange:a,id:"".concat("sidebar","-toggle"),className:"".concat("sidebar","-toggle")}),c.a.createElement("label",{htmlFor:"".concat("sidebar","-toggle")},"\xa0"),c.a.createElement("nav",{className:"".concat("sidebar","-navigation")},f.map(function(e){var t=e.path,n=e.navigationName;return c.a.createElement(u.b,{key:t,to:t,onClick:a,className:"".concat("sidebar","-navigation-link")},n)})))},m=n(55),d=function(){return c.a.createElement(u.a,null,c.a.createElement(p,null),c.a.createElement(m.b,null,c.a.createElement("main",{className:"content"},c.a.createElement("article",{className:"content-main"},c.a.createElement(r.Suspense,{fallback:"Loading..."},c.a.createElement(i.c,null,f.map(function(e){return c.a.createElement(i.a,Object.assign({key:e.path},e))})))),c.a.createElement(m.c,null))))};n(416);o.a.render(c.a.createElement(d,null),document.getElementById("app-root"))},55:function(e,t,n){"use strict";var r=n(1),c=n(9),a=n(0),o=n.n(a),u=n(421),i=n(420),s=n(28),l=n.n(s),f=n(25),b=Object(a.createContext)(),p=function(e,t){return"RESET"===t?[]:-1===e.indexOf(t)?[].concat(Object(f.a)(e),[t]):e.filter(function(e){return e!==t})},m=function(e){var t=e.children,n=Object(a.useReducer)(p,[]),c=Object(r.a)(n,2),u=c[0],i=c[1],s=Object(a.useCallback)(function(){return i("RESET")},[]);return o.a.createElement(b.Provider,{value:{codes:u,toggleCodes:i,resetCodes:s}},t)},d=/\nimport Stringify from 'components\/Stringify';/g,h=/\nimport { CodeBlockButton } from 'components\/CodeBlock';/g,g=/\n\s*<Stringify(\s|\S)*>(\s|\S)*<\/Stringify>/g,O=/\n\s*<CodeBlockButton(\s|\w|[='\/.])*>/g,v=/(\s*) (<>|<\/>)/g,j=/\n\s*<div>\s*<\/div>/g,y=/<>([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF])*<\/>/g,k=/( ){4}/g,E=/\n( ){4}/g,w=/\);/g,C=/\n\s*\/\/ prettier-ignore/g,P=/\n\s*\/\/ eslint-disable-next-line/g,x=/\n\n\n/g,S=/\n( |\S)*\/\/ hide-line/,F=function(e){return e.replace(C,"\n").replace(P,"")},N=function(e){return e.replace(E,"\n").replace(w,"    );")},U=function(e){return e.replace(g,"").replace(d,"")},z=function(e){return e.replace(y,N).replace(v,"")},R=function(e){return e.replace(O,"").replace(h,"")},D=function(e){return e.replace(j,"")},B=function(e){return e.replace(x,"\n\n")},H=function(e){return e.replace(S,"")},A={hideFragment:!1,hideStringify:!1,hideCodeBlockBtn:!1,fullScreen:!1,indent:4,fontSize:16},L=[{name:"hideStringify",label:"Hide Stringify",type:"checkbox"},{name:"hideFragment",label:"Hide Fragment",type:"checkbox"},{name:"hideCodeBlockBtn",label:"Hide CodeblockButton",type:"checkbox"},{name:"fullScreen",label:"Full Screen",type:"checkbox"},{name:"indent",label:"Indent",type:"number"},{name:"fontSize",label:"Font Size",type:"number"}],I=function(e){return"checkbox"===e?"checked":"value"},J=function(e){var t=e.name,n=e.label,r=e.type,a=e.onChange,u=e.value,i=Object(c.a)({id:t,type:r,onChange:function(e){return a(Object(c.a)({},t,e.target[I(r)]))}},I(r),u);return o.a.createElement("span",null,o.a.createElement("label",{htmlFor:t},n),o.a.createElement("input",i))},T=function(e){var t=e.values,n=e.onChange,r=e.onReset;return o.a.createElement("div",{className:"code-block-options"},o.a.createElement("button",{onClick:r},"Close all"),L.map(function(e){return o.a.createElement(J,Object.assign({},e,{key:e.name,value:t[e.name],onChange:n}))}))},W=n(39);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var _=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t)},G=function(){var e=Object(a.useContext)(b),t=e.codes,n=e.toggleCodes,c=e.resetCodes,s=Object(a.useReducer)(_,A),f=Object(r.a)(s,2),p=f[0],m=f[1];if(Object(W.g)(function(e){var t;m({fontSize:(t=e)<700?12:t<1e3?14:16}),p.fullScreen&&e<1200&&m({fullScreen:!1})}),!t.length)return null;var d=function(e,t){var n,r=[t.hideStringify&&U,t.hideFragment&&z,t.hideCodeBlockBtn&&R,(n=t.indent,function(e){return e.replace(k," ".repeat(n))}),F,D,B,H].filter(Boolean);return e.map(function(e){return r.reduce(function(e,t){return t(e)},e)})}(t,p),h=l()("".concat("code-block","-wrapper"),p.fullScreen&&"".concat("code-block","-wrapper-full-screen")),g=l()("".concat("code-block","-container"),p.fullScreen&&"".concat("code-block","-container-full-screen")),O=l()("".concat("code-block","-content"),p.fullScreen&&"".concat("code-block","-content-full-screen"));return o.a.createElement("article",{className:h},o.a.createElement(T,{values:p,onChange:m,onReset:function(){c(),m(A)}}),o.a.createElement("div",{className:g},d.map(function(e,r){return o.a.createElement("div",{key:r,className:O},o.a.createElement(u.a,{showLineNumbers:!0,key:r,language:"jsx",style:i.a,className:"code-block",customStyle:{fontSize:parseInt(p.fontSize)}},e),o.a.createElement("button",{className:"".concat("code-block","-close"),onClick:function(){return n(t[r])}},"X"))})))},V=n(80),K=function(e){var t=e.fileName,n=e.text,c=e.className,u=Object(a.useState)(),i=Object(r.a)(u,2),s=i[0],l=i[1],f=Object(a.useContext)(b),p=f.toggleCodes,m=f.resetCodes;return Object(a.useEffect)(function(){return m},[m]),o.a.createElement(V.a,{className:"code-display-btn ".concat(c||""),onClick:function(){s?p(s):fetch("".concat("https://raw.githubusercontent.com/AriPerkkio/hooks-examples/master/src","/").concat(t)).then(function(e){return e.text()}).then(function(e){l(e),p(e)})}},n||"Code")};n.d(t,"c",function(){return G}),n.d(t,"b",function(){return m}),n.d(t,"a",function(){return K})},80:function(e,t,n){"use strict";var r=n(1),c=n(52),a=n(0),o=n.n(a),u=n(28),i=n.n(u);t.a=function(e){var t=e.className,n=e.onClick,u=Object(c.a)(e,["className","onClick"]),s=Object(a.useReducer)(function(e){return!e},!1),l=Object(r.a)(s,2),f=l[0],b=l[1];return o.a.createElement("button",Object.assign({},u,{className:i()("common-button",t,f&&"toggled"),onClick:function(){b(),n&&n.apply(void 0,arguments)}}),u.children)}},83:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f});var r=n(1),c=n(9),a=n(0);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i=function(e,t){return function(n){var r=n.render;(n.shouldComponentUpdate||function(){return!0})(e,t)&&r()}},s=function(){var e={},t=[],n=function(n){var r="function"===typeof n?n(e):n,c=u({},e);e=u({},e,{},r),t.forEach(i(c,e))};return{useStore:function(c){var o=Object(a.useReducer)(function(e){return!e},!0),u=Object(r.a)(o,2)[1];return Object(a.useEffect)(function(){var e=(c||{}).shouldComponentUpdate,n={render:u,shouldComponentUpdate:e};return t.push(n),function(){return t.splice(t.indexOf(n),1)}},[c]),[e,n]},listeners:t}}(),l=s.useStore,f=s.listeners}},[[132,1,2]]]);
//# sourceMappingURL=main.21346630.chunk.js.map