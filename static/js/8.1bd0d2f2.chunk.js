(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{420:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=function(e){var t=e.children,n=e.indent,r=e.className;return o.a.createElement("pre",{className:"stringify ".concat(r||"")},JSON.stringify(t,null,n))};n.d(t,"a",function(){return a})},421:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})},422:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return a})},423:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return o})},435:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),s=n.n(a),c=n(1),i=n(19),m=n(24),l=n(7),u=n(83),f=n(84),p=n(422),d=n(421),g=n(423),b=n(420),h=n(26),y=n.n(h),E=function(e){var t=e.onChange,n=e.selectedUser,r=e.users;return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:"user",className:"".concat("form","-select-label")},"User"),o.a.createElement("select",{id:"user",className:"".concat("form","-select"),onChange:t},!n&&o.a.createElement("option",null,"-- SELECT USER --"),r.map(function(e){var t=e.name,n=e.id;return o.a.createElement("option",{key:n,value:n},t)})))},S=function(e){var t=e.id,n=e.title,r=e.body,a=e.isOpen,s=e.comments,c=e.onChange,i=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"".concat("form","-list")},o.a.createElement("li",{key:t,className:y()("".concat("form","-list-item"),a&&"open")},o.a.createElement("h2",{className:"".concat("form","-list-item-header"),onClick:function(){return c({target:{value:t}})}},n),o.a.createElement("legend",null,"Comments: ",s.length),o.a.createElement("section",{className:"".concat("form","-list-item-body")},r),s.map(function(e){var t=e.id,n=e.email,r=e.body;return o.a.createElement("section",{key:t,className:"".concat("form","-list-item-comment")},n,": ",r,"}")}))),i)},v=function(e){var t=e.onSubmit,n=e.isOpen,r=e.onChange,a=e.isSending,s=e.error;return o.a.createElement("section",{className:y()("".concat("form","-comment-input-wrapper"),n&&"open")},o.a.createElement("input",{type:"text",className:"".concat("form","-comment-input"),invalid:s?"true":"false",onChange:r}),s,o.a.createElement("button",{type:"submit",onClick:t,disabled:a,className:"".concat("form","-btn--submit")},a?"Sending...":"Submit"))},C=function(e){var t=e.onUserChange,n=e.selectedUser,r=e.users,a=e.children;return o.a.createElement("div",{className:"".concat("form","-wrapper")},o.a.createElement("form",{className:"form"},o.a.createElement(E,{onChange:t,selectedUser:n,users:r}),n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:"posts",className:"".concat("form","-select-label")},"Posts"),a)))},j=function(e){var t=e.onUserChange,n=e.onPostChange,r=e.onCommentChange,a=e.onSubmit,s=e.selectedUser,c=e.selectedPost,i=e.comment,m=e.error,l=e.users,u=e.posts,f=e.comments,p=e.isLoading,d=e.isSending;return p?o.a.createElement("div",{className:"form--loading"},"Loading..."):o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{onUserChange:t,selectedUser:s,users:l},u.filter(function(e){return e.userId.toString()===s}).map(function(e){return o.a.createElement(S,Object.assign({},e,{key:e.id,isOpen:e.id===c,onChange:n,comments:f.filter(function(t){return t.postId===e.id})}),o.a.createElement(v,{onSubmit:a,error:m,onChange:r,isOpen:e.id===c,isSending:d}))})),o.a.createElement(b.a,{indent:2},{selectedUser:s,selectedPost:c,comment:i,error:m,users:"Array[".concat(l.length,"]"),posts:"Array[".concat(u.length,"]"),comments:"Array[".concat(f.length,"]"),isLoading:p,isSending:d}))},O=n(8),U={comment:null,error:null},N=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={selectedUser:null,selectedPost:null,comment:null,error:null,users:[],posts:[],comments:[],isLoading:!1,isSending:!1},n.onUserChange=function(e){var t=e.target.value;return n.setState(Object(l.a)({selectedUser:t},U))},n.onPostChange=function(e){var t=e.target.value;return n.setState(function(e){return Object(l.a)({selectedPost:t===e.selectedPost?null:t},U)})},n.onCommentsUpdate=function(e){return n.setState(function(t){var n=t.comments;return{comments:[].concat(Object(m.a)(n),[e])}})},n.onCommentChange=function(e){var t=e.target.value;return n.setState({comment:t,error:null})},n.onSubmit=function(e){e.preventDefault();var t=n.state,r=t.selectedUser,o=t.selectedPost,a=t.comment;if(a){var s={user:r,post:o,comment:a};n.setState({isSending:!0}),O.b.postForm(s).then(function(){return n.setState({isSending:!1})}).then(function(){return alert("Form sent")})}else n.setState({error:"Comment missing"})},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t,n,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O.b.subscribeComments(this.onCommentsUpdate),this.setState({isLoading:!0}),e.next=4,Promise.all([O.b.getUsers(),O.b.getPosts()]);case 4:t=e.sent,n=Object(c.a)(t,2),r=n[0],o=n[1],this.setState({isLoading:!1,users:r,posts:o});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){O.b.unsubscribeComments(this.onCommentsUpdate)}},{key:"render",value:function(){var e=this.onUserChange,t=this.onPostChange,n=this.onCommentChange,r=this.onSubmit,a=this.state,s=a.selectedUser,c=a.selectedPost,i=a.comment,m=a.error,l=a.users,u=a.posts,f=a.comments,p=a.isLoading,d=a.isSending;return o.a.createElement(j,{onUserChange:e,onPostChange:t,onCommentChange:n,onSubmit:r,selectedUser:s,selectedPost:c,comment:i,error:m,users:l,posts:u,comments:f,isSending:d,isLoading:p})}}]),t}(r.Component),P=(n(37),n(52));t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"form-view"},o.a.createElement("h1",null,"Isolated state management"),o.a.createElement(P.a,{fileName:"api/Api.js",text:"Api.js"}),o.a.createElement(N,null)),o.a.createElement("div",null,o.a.createElement(P.a,{fileName:"components/Form/FormContainer.js",text:"FormContainer.js"}),o.a.createElement(P.a,{fileName:"components/Form/FormPresentational.js",text:"FormPresentational.js"})),o.a.createElement(P.a,{fileName:"components/Form/FormWithHooks.js",text:"FormWithHooks.js"}),o.a.createElement(P.a,{fileName:"hooks/useForm.js",text:"useForm.js"}))}}}]);
//# sourceMappingURL=8.1bd0d2f2.chunk.js.map