(window["webpackJsonphooks-examples"]=window["webpackJsonphooks-examples"]||[]).push([[7],{422:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=function(e){var t=e.children,n=e.indent,r=e.className;return a.a.createElement("pre",{className:"stringify ".concat(r||"")},JSON.stringify(t,null,n))};n.d(t,"a",function(){return c})},423:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})},424:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return c})},425:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return a})},426:function(e,t,n){"use strict";var r=n(81),a=n(82),c=n(424),u=n(423),o=n(425),l=n(0),i=n.n(l),s=n(422),f=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:"Initial Value"},n.onChange=function(e){var t=e.target.value;return n.setState({value:t})},n}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onChange}),i.a.createElement(s.a,null,this.state))}}]),t}(l.Component),m=n(1),b=function(){var e=Object(l.useState)("Initial Value"),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",value:n,onChange:function(e){var t=e.target.value;return r(t)}}),i.a.createElement(s.a,null,{value:n}))},p=n(80),y=function(e,t){var n=t.type,r=t.value;switch(n){case"ADD":return e+r;case"MINUS":return e-r;case"MULTIPLY":return e*r;default:return e}},O=function(){var e=Object(l.useReducer)(y,0),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:function(){return r({type:"ADD",value:15})}},"ADD 15"),i.a.createElement(p.a,{onClick:function(){return r({type:"MINUS",value:23})}},"MINUS 23"),i.a.createElement(p.a,{onClick:function(){return r({type:"MULTIPLY",value:3})}},"MULTIPLY 3"),i.a.createElement(s.a,null,n))},d=n(9),h=n(39),E=Object(l.memo)(function(e){var t=e.id,n=Object(h.f)(),r=Object(m.a)(n,2),a=r[0],c=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:function(){return c(function(e){return Object(d.a)({},t,!e[t])})}},"setState"),i.a.createElement(s.a,null,a))}),g=function(e,t){return e.three!==t.three},j=Object(l.memo)(function(e){var t=e.id,n=Object(h.f)({shouldComponentUpdate:g}),r=Object(m.a)(n,2),a=r[0],c=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:function(){return c(function(e){return Object(d.a)({},t,!e[t])})}},"setState"),i.a.createElement(s.a,null,a))}),v=function(){var e=Object(l.useState)("medium"),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(h.g)(function(e){return r(e>1400?"large":"medium")}),i.a.createElement("nav",{className:"sidebar-navigation"},i.a.createElement("a",{href:"#front-page",className:"sidebar-navigation-link"},"Company ABC"),"large"===n&&i.a.createElement("a",{href:"#dashboard",className:"sidebar-navigation-link"},"Dashboard"),i.a.createElement("a",{href:"#contact",className:"sidebar-navigation-link"},"Contact us"),i.a.createElement("a",{href:"#about",className:"sidebar-navigation-link"},"About us"))},S=function(){var e=Object(h.b)("Initial value"),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",className:"common-input block",value:n,onChange:r}),i.a.createElement(s.a,null,n))},k=n(18),C=function(e){var t=e.onChange,n=Object(l.useReducer)(function(e){return!e},!1),r=Object(m.a)(n,2),a=r[0],c=r[1];return Object(l.useEffect)(function(){a&&t("Some message from Input")},[a,t]),i.a.createElement(p.a,{onClick:c},"Toggle")},w=Object(l.memo)(function(){var e=Object(l.useReducer)(function(e){return e+1},0),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Rendered ",n," times"),i.a.createElement(C,{onChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object(k.c)(t),r()},count:n}))}),N=n(2),P=n.n(N),I=n(13),T=n(10);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R=function(e){var t=e.userId,n=Object(l.useReducer)(function(e,n){var r=n||{},a=r.type,c=r.payload;switch(a){case"GET_POSTS":return _({},e,Object(d.a)({loading:!1},t,_({},e[t],{posts:"Post count: ".concat(c.length)})));case"GET_COMMENTS":return _({},e,Object(d.a)({loading:!1},t,_({},e[t],{comments:"Comment count: ".concat(c.length)})));case"LOADING":return _({},e,{loading:!0});default:return e}},{}),r=Object(m.a)(n,2),a=r[0],c=r[1];var u=function(){var e=Object(I.a)(P.a.mark(function e(t){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof t){e.next=3;break}return t().then(function(e){return c(e)}),e.abrupt("return",c({type:"LOADING"}));case 3:return e.abrupt("return",c(t));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:function(){return u(function(){return T.b.getUsersPosts(t).then(function(e){return{payload:e,type:"GET_POSTS"}})})}},"GET /users/",t,"/posts"),i.a.createElement(p.a,{onClick:function(){return u(function(){return T.b.getUsersComments(t).then(function(e){return{payload:e,type:"GET_COMMENTS"}})})}},"GET /users/",t,"/comments"),i.a.createElement(s.a,{indent:2,className:"block"},a))};n.d(t,"a",function(){return f}),n.d(t,"c",function(){return b}),n.d(t,"e",function(){return O}),n.d(t,"h",function(){return E}),n.d(t,"g",function(){return j}),n.d(t,"i",function(){return v}),n.d(t,"b",function(){return S}),n.d(t,"d",function(){return w}),n.d(t,"f",function(){return R})},428:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),u=n(426),o=n(39),l=n(55);t.default=function(){var e=Object(o.b)(1),t=Object(r.a)(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"useReducer"),c.a.createElement(u.e,null),c.a.createElement(l.a,{className:"block",fileName:"components/Input/InputWithReducer.js",text:"useReducer"}),c.a.createElement("h2",null,"useReducer accessing props easily"),c.a.createElement("input",{className:"common-input block",type:"number",value:n,onChange:a}),c.a.createElement(u.f,{userId:n}),c.a.createElement(l.a,{className:"block",fileName:"components/Input/InputWithReducerAndProps.js",text:"New reducer on each render"}))}}}]);
//# sourceMappingURL=7.a23ebd97.chunk.js.map