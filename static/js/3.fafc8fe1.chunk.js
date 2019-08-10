(window["webpackJsonphooks-examples"]=window["webpackJsonphooks-examples"]||[]).push([[3],{422:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=function(e){var t=e.children,n=e.indent,r=e.className;return a.a.createElement("pre",{className:"stringify ".concat(r||"")},JSON.stringify(t,null,n))};n.d(t,"a",function(){return u})},423:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})},424:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function u(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return u})},425:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return a})},426:function(e,t,n){"use strict";var r=n(81),a=n(82),u=n(424),c=n(423),o=n(425),l=n(0),i=n.n(l),s=n(422),f=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={value:"Initial Value"},n.onChange=function(e){var t=e.target.value;return n.setState({value:t})},n}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onChange}),i.a.createElement(s.a,null,this.state))}}]),t}(l.Component),m=n(1),p=function(){var e=Object(l.useState)("Initial Value"),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",value:n,onChange:function(e){var t=e.target.value;return r(t)}}),i.a.createElement(s.a,null,{value:n}))},b=n(80),O=function(e,t){var n=t.type,r=t.value;switch(n){case"ADD":return e+r;case"MINUS":return e-r;case"MULTIPLY":return e*r;default:return e}},d=function(){var e=Object(l.useReducer)(O,0),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{onClick:function(){return r({type:"ADD",value:15})}},"ADD 15"),i.a.createElement(b.a,{onClick:function(){return r({type:"MINUS",value:23})}},"MINUS 23"),i.a.createElement(b.a,{onClick:function(){return r({type:"MULTIPLY",value:3})}},"MULTIPLY 3"),i.a.createElement(s.a,null,n))},E=n(9),h=n(39),y=Object(l.memo)(function(e){var t=e.id,n=Object(h.f)(),r=Object(m.a)(n,2),a=r[0],u=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{onClick:function(){return u(function(e){return Object(E.a)({},t,!e[t])})}},"setState"),i.a.createElement(s.a,null,a))}),j=function(e,t){return e.three!==t.three},g=Object(l.memo)(function(e){var t=e.id,n=Object(h.f)({shouldComponentUpdate:j}),r=Object(m.a)(n,2),a=r[0],u=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{onClick:function(){return u(function(e){return Object(E.a)({},t,!e[t])})}},"setState"),i.a.createElement(s.a,null,a))}),v=function(){var e=Object(l.useState)("medium"),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(h.g)(function(e){return r(e>1400?"large":"medium")}),i.a.createElement("nav",{className:"sidebar-navigation"},i.a.createElement("a",{href:"#front-page",className:"sidebar-navigation-link"},"Company ABC"),"large"===n&&i.a.createElement("a",{href:"#dashboard",className:"sidebar-navigation-link"},"Dashboard"),i.a.createElement("a",{href:"#contact",className:"sidebar-navigation-link"},"Contact us"),i.a.createElement("a",{href:"#about",className:"sidebar-navigation-link"},"About us"))},k=function(){var e=Object(h.b)("Initial value"),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",className:"common-input block",value:n,onChange:r}),i.a.createElement(s.a,null,n))},S=n(18),w=function(e){var t=e.onChange,n=Object(l.useReducer)(function(e){return!e},!1),r=Object(m.a)(n,2),a=r[0],u=r[1];return Object(l.useEffect)(function(){a&&t("Some message from Input")},[a,t]),i.a.createElement(b.a,{onClick:u},"Toggle")},C=Object(l.memo)(function(){var e=Object(l.useReducer)(function(e){return e+1},0),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Rendered ",n," times"),i.a.createElement(w,{onChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object(S.c)(t),r()},count:n}))}),N=n(2),I=n.n(N),T=n(13),P=n(10);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(E.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R=function(e){var t=e.userId,n=Object(l.useReducer)(function(e,n){var r=n||{},a=r.type,u=r.payload;switch(a){case"GET_POSTS":return M({},e,Object(E.a)({loading:!1},t,M({},e[t],{posts:"Post count: ".concat(u.length)})));case"GET_COMMENTS":return M({},e,Object(E.a)({loading:!1},t,M({},e[t],{comments:"Comment count: ".concat(u.length)})));case"LOADING":return M({},e,{loading:!0});default:return e}},{}),r=Object(m.a)(n,2),a=r[0],u=r[1];var c=function(){var e=Object(T.a)(I.a.mark(function e(t){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof t){e.next=3;break}return t().then(function(e){return u(e)}),e.abrupt("return",u({type:"LOADING"}));case 3:return e.abrupt("return",u(t));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{onClick:function(){return c(function(){return P.b.getUsersPosts(t).then(function(e){return{payload:e,type:"GET_POSTS"}})})}},"GET /users/",t,"/posts"),i.a.createElement(b.a,{onClick:function(){return c(function(){return P.b.getUsersComments(t).then(function(e){return{payload:e,type:"GET_COMMENTS"}})})}},"GET /users/",t,"/comments"),i.a.createElement(s.a,{indent:2,className:"block"},a))};n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p}),n.d(t,"e",function(){return d}),n.d(t,"h",function(){return y}),n.d(t,"g",function(){return g}),n.d(t,"i",function(){return v}),n.d(t,"b",function(){return k}),n.d(t,"d",function(){return C}),n.d(t,"f",function(){return R})},431:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(426),c=n(55),o=n(38);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Extra: Custom hook examples"),a.a.createElement("h2",null,"useWindowResize"),a.a.createElement(c.a,{fileName:"hooks/useWindowResize.js",text:"useWindowResize.js"}),a.a.createElement(c.a,{fileName:"components/Input/InputsWithResizer.js",text:"InputsWithResizer.js"}),a.a.createElement(u.i,null),a.a.createElement("h2",null,"useEventTargetValue"),a.a.createElement(c.a,{fileName:"hooks/useEventTargetValue.js",text:"useEventTargetValue.js"}),a.a.createElement(c.a,{fileName:"components/Input/InputWithEventTarget.js",text:"InputWithEventTarget.js"}),a.a.createElement(u.b,null),a.a.createElement("h2",{className:"margin-top-m"},"isMounted, useRedcerOnMounted"),a.a.createElement(c.a,{fileName:"hooks/useIsMounted.js",text:"useIsMounted.js"}),a.a.createElement(c.a,{fileName:"hooks/useReducerOnMounted.js",text:"useReducerOnMounted.js"}),a.a.createElement("h3",null,"More examples"),a.a.createElement(o.a,{href:"https://usehooks.com/"},"useHooks.com"))}}}]);
//# sourceMappingURL=3.fafc8fe1.chunk.js.map