(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{420:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=function(e){var t=e.children,n=e.indent,r=e.className;return a.a.createElement("pre",{className:"stringify ".concat(r||"")},JSON.stringify(t,null,n))};n.d(t,"a",function(){return u})},421:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})},422:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function u(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return u})},423:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return a})},424:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return c});var r={},a=function(e,t){return r[t]=(r[t]||0)+1,"Generated: ".concat(e," - ").concat(t)},u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return function(){return t(e.apply(void 0,arguments))}})},c=function(){}},425:function(e,t,n){"use strict";var r=n(83),a=n(84),u=n(422),c=n(421),o=n(423),l=n(0),i=n.n(l),f=n(420),s=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={value:"Initial Value"},n.onChange=function(e){var t=e.target.value;return n.setState({value:t})},n}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onChange}),i.a.createElement(f.a,null,this.state))}}]),t}(l.Component),m=n(1),b=function(){var e=Object(l.useState)("Initial Value"),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",value:n,onChange:function(e){var t=e.target.value;return r(t)}}),i.a.createElement(f.a,null,{value:n}))},p=n(82),d=function(e,t){var n=t.type,r=t.value;switch(n){case"ADD":return e+r;case"MINUS":return e-r;case"MULTIPLY":return e*r;default:return e}},y=function(){var e=Object(l.useReducer)(d,0),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:function(){return r({type:"ADD",value:15})}},"ADD 15"),i.a.createElement(p.a,{onClick:function(){return r({type:"MINUS",value:23})}},"MINUS 23"),i.a.createElement(p.a,{onClick:function(){return r({type:"MULTIPLY",value:3})}},"MULTIPLY 3"),i.a.createElement(f.a,null,n))},E=n(27),v=n(37),h=function(e){var t=e.id,n=Object(v.f)(),r=Object(m.a)(n,2),a=r[0],u=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:function(){return u(function(e){return Object(E.a)({},t,!e[t])})}},"setState"),i.a.createElement(f.a,null,a))},O=function(e,t){return e.three!==t.three},g=function(e){var t=e.id,n=Object(v.f)({shouldComponentUpdate:O}),r=Object(m.a)(n,2),a=r[0],u=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:function(){return u(function(e){return Object(E.a)({},t,!e[t])})}},"setState"),i.a.createElement(f.a,null,a))},j=function(){var e=Object(l.useState)("medium"),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(v.g)(function(e){return r(e>1400?"large":"medium")}),i.a.createElement("nav",{className:"sidebar-navigation"},i.a.createElement("a",{href:"#front-page",className:"sidebar-navigation-link"},"Company ABC"),"large"===n&&i.a.createElement("a",{href:"#dashboard",className:"sidebar-navigation-link"},"Dashboard"),i.a.createElement("a",{href:"#contact",className:"sidebar-navigation-link"},"Contact us"),i.a.createElement("a",{href:"#about",className:"sidebar-navigation-link"},"About us"))},S=function(){var e=Object(v.b)("Initial value"),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",className:"common-input block",value:n,onChange:r}),i.a.createElement(f.a,null,n))},C=n(424),I=function(e){var t=e.onChange,n=Object(l.useReducer)(function(e){return!e},!1),r=Object(m.a)(n,2),a=r[0],u=r[1];return Object(l.useEffect)(function(){a&&t("Some message from Input")},[a,t]),i.a.createElement(p.a,{onClick:u},"Toggle")},k=Object(l.memo)(function(){var e=Object(l.useReducer)(function(e){return e+1},0),t=Object(m.a)(e,2),n=t[0],r=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Rendered ",n," times"),i.a.createElement(I,{onChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object(C.b)(t),r()},count:n}))}),N=function(e){var t=e.multiplier,n=Object(l.useReducer)(function(e,n){var r=n.type,a=n.value;switch(r){case"ADD":return e+a*t;case"MINUS":return e-a*t;case"RESET":return 0;default:return e}},0),r=Object(m.a)(n,2),a=r[0],u=r[1];return Object(l.useEffect)(function(){a>1e3&&t>10&&u({type:"RESET"})},[t,a]),i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:function(){return u({type:"ADD",value:15})}},"ADD 15"),i.a.createElement(p.a,{onClick:function(){return u({type:"MINUS",value:23})}},"MINUS 23"),i.a.createElement(f.a,null,a))};n.d(t,"a",function(){return s}),n.d(t,"c",function(){return b}),n.d(t,"e",function(){return y}),n.d(t,"h",function(){return h}),n.d(t,"g",function(){return g}),n.d(t,"i",function(){return j}),n.d(t,"b",function(){return S}),n.d(t,"d",function(){return k}),n.d(t,"f",function(){return N})},426:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(425),c=n(52);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Local State"),a.a.createElement("h2",null,"InputWithComponents"),a.a.createElement(u.a,null),a.a.createElement(c.a,{fileName:"components/Input/InputWithComponents.js"}),a.a.createElement("h2",null,"InputWithHooks"),a.a.createElement(u.c,null),a.a.createElement(c.a,{fileName:"components/Input/InputWithHooks.js"}))}}}]);
//# sourceMappingURL=5.a0121eea.chunk.js.map