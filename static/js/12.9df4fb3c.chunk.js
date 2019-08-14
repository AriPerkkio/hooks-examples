(window["webpackJsonphooks-examples"]=window["webpackJsonphooks-examples"]||[]).push([[12],{427:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n.n(c),u=n(80),o=function(e){var t=e.initialMounted,n=e.children,o=Object(c.useReducer)(function(e){return!e},!!t),l=Object(a.a)(o,2),s=l[0],i=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{onClick:i},s?"Unmount":"Mount"),s&&n)};n.d(t,"a",function(){return o})},434:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),u=n(28),o=n(427),l=n(10),s=function(e){var t=e.userId,n=Object(c.useState)(),u=Object(a.a)(n,2),o=u[0],s=u[1],i=o||{},m=i.username,f=i.name,E=i.email;return Object(c.useEffect)(function(){return l.b.getUser(t).then(s),s},[t]),o?r.a.createElement("div",null,r.a.createElement("h2",null,t,": ",f," (",m,")"),r.a.createElement("h3",null,"@ ",E)):r.a.createElement("h2",null,"Loading...")},i=function(e){var t=e.userId,n=Object(c.useState)(),u=Object(a.a)(n,2),o=u[0],s=u[1],i=o||{},m=i.username,f=i.name,E=i.email;return Object(c.useEffect)(function(){return l.b.getUser(t).then(s),s},[]),o?r.a.createElement("div",null,r.a.createElement("h2",null,t,": ",f," (",m,")"),r.a.createElement("h3",null,"@ ",E)):r.a.createElement("h2",null,"Loading...")},m=n(25),f=function(e,t){return[].concat(Object(m.a)(e),[t])},E=function(){var e=Object(c.useReducer)(f,[]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)(function(){return l.b.subscribeComments(r),function(){return l.b.unsubscribeComments(r)}},[]),"Comments: ".concat(n.length)},d=function(e){var t=e.id,n=Object(c.useReducer)(function(e,t){return[].concat(Object(m.a)(e),[t])},[]),u=Object(a.a)(n,2),o=u[0],l=u[1];return Object(c.useEffect)(function(){return l("useEffect onMount")},[]),Object(c.useLayoutEffect)(function(){return l("useLayoutEffect onMount")},[]),Object(c.useEffect)(function(){return l("useEffect onIdChange ID:".concat(t)),l("----------------------"),function(){return l("cleanup of useEffect onIdChange #1 ID:".concat(t))}},[t]),Object(c.useLayoutEffect)(function(){return l("useLayoutEffect onIdChange ID:".concat(t)),function(){return l("cleanup of useLayoutEffect onIdChange ID:".concat(t))}},[t]),r.a.createElement("ul",{className:"text-effects-list block"},o.map(function(e,t){return r.a.createElement("li",{key:t},e)}))},h=n(55);t.default=function(){var e=Object(c.useState)(1),t=Object(a.a)(e,2),n=t[0],m=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"useEffect"),r.a.createElement("h2",null,"onMount & onUnmount"),r.a.createElement(h.a,{fileName:"components/Text/TextWithSubscription.js"}),r.a.createElement(o.a,null,r.a.createElement("div",{className:"common-text"},r.a.createElement(E,null))),r.a.createElement(l.a,null),r.a.createElement("h2",{className:"margin-top-l"},"Dependency array"),r.a.createElement("input",{type:"number",className:"common-input block margin-top-m",onChange:function(e){var t=e.target.value;return m(t)},value:n}),r.a.createElement(h.a,{fileName:"components/UserCard/UserCardInvalidDependencies.js",text:"UserCardInvalidDependencies.js"}),r.a.createElement(o.a,null,r.a.createElement(i,{userId:n})),r.a.createElement("div",null,r.a.createElement(h.a,{fileName:"components/UserCard/UserCard.js",text:"UserCard.js"}),r.a.createElement(o.a,null,r.a.createElement(s,{userId:n}),r.a.createElement("pre",{className:"quote"},"If you\u2019re trying to write an effect that behaves differently depending on whether the component renders for the first time or not, you\u2019re swimming against the tide! We\u2019re failing at synchronizing if our result depends on the \u201cjourney\u201d rather than the \u201cdestination\u201d.",r.a.createElement(u.a,{href:"https://overreacted.io/a-complete-guide-to-useeffect/#synchronization-not-lifecycle"},"overreacted.io/a-complete-guide-to-useeffect")))),r.a.createElement("h2",{className:"margin-top-l"},"useEffect, useLayoutEffect"),r.a.createElement("input",{type:"number",className:"common-input block margin-top-m",onChange:function(e){var t=e.target.value;return m(t)},value:n}),r.a.createElement(h.a,{fileName:"components/Text/TextWithEffectsList.js",text:"Code: Order of effects and cleanups"}),r.a.createElement(o.a,null,r.a.createElement(d,{id:n})))}}}]);
//# sourceMappingURL=12.9df4fb3c.chunk.js.map