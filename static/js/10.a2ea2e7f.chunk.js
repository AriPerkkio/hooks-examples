(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{421:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return o})},422:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function s(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",function(){return s})},423:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",function(){return r})},424:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return c});var o={},r=function(t,e){return o[e]=(o[e]||0)+1,"Generated: ".concat(t," - ").concat(e)},s=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return function(){return e(t.apply(void 0,arguments))}})},c=function(){}},431:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),s=n(1),c=function(t,e){return t===e?null:e},a=function(t){var e=t.id,n=t.title,o=t.body,s=t.isOpen,c=t.comments,a=t.onChange;return r.a.createElement("li",{key:e,className:"".concat("post-list","-item ").concat(s?"open":"")},r.a.createElement("h2",{className:"".concat("post-list","-item-header"),onClick:function(){return a(e)}},n),r.a.createElement("legend",{className:"".concat("post-list","-item-legend")},"Comments: ",c.length),r.a.createElement("section",{className:"".concat("post-list","-item-body")},o),c.map(function(t){var e=t.id,n=t.email,o=t.body;return r.a.createElement("section",{key:e,className:"".concat("post-list","-item-comment")},n,": ",o,"}")}))},i=function(t){var e=t.posts,n=t.comments,i=Object(o.useReducer)(c),u=Object(s.a)(i,2),l=u[0],m=u[1];return r.a.createElement("div",{className:"".concat("post-list","-wrapper")},r.a.createElement("ul",{className:"post-list"},(e||[]).map(function(t){return r.a.createElement(a,Object.assign({},t,{key:t.id,isOpen:t.id===l,onChange:m,comments:n.filter(function(e){return e.postId===t.id})}))})))},u=n(37),l=function(){var t=Object(u.e)(),e=t.posts,n=t.loading,o=t.error,s=Object(u.a)();return n?r.a.createElement("h1",null,"Loading"):o?r.a.createElement("h1",null,"Error"):r.a.createElement(i,{posts:e,comments:s})},m=n(83),f=n(84),p=n(422),b=n(421),d=n(423),h=n(8),y=function(t){return function(e){function n(){var t,e;Object(m.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=Object(p.a)(this,(t=Object(b.a)(n)).call.apply(t,[this].concat(r)))).state={posts:[],loading:!1,error:!1},e}return Object(d.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),h.b.getPosts().then(function(e){return t.setState({posts:e,loading:!1})}).catch(function(){return t.setState({error:!0})})}},{key:"render",value:function(){return r.a.createElement(t,Object.assign({},this.state,this.props))}}]),n}(o.Component)},j=n(24),E=function(t){return function(e){function n(){var t,e;Object(m.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=Object(p.a)(this,(t=Object(b.a)(n)).call.apply(t,[this].concat(r)))).state={comments:[]},e.addComment=function(t){return e.setState(function(e){var n=e.comments;return{comments:[].concat(Object(j.a)(n),[t])}})},e}return Object(d.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){h.b.subscribeComments(this.addComment)}},{key:"componentWillUnmount",value:function(){h.b.unsubscribeComments(this.addComment)}},{key:"render",value:function(){return r.a.createElement(t,Object.assign({},this.state,this.props))}}]),n}(o.Component)},O=n(424),P=(Object(O.a)(y,E)(function(t){var e=t.posts,n=t.loading,o=t.error,s=t.comments;return n?r.a.createElement("h1",null,"Loading"):o?r.a.createElement("h1",null,"Error"):r.a.createElement(i,{posts:e,comments:s})}),n(7)),v=(o.Component,o.Component,n(52));e.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement("h2",null,"Render Props"),r.a.createElement(v.a,{fileName:"components/PostList/PostsFetcher.js",text:"PostsFetcher.js"}),r.a.createElement(v.a,{fileName:"components/PostList/CommentSubscriber.js",text:"CommentSubscriber.js"}),r.a.createElement(v.a,{fileName:"components/PostList/PostsListWithRenderProps.js",text:"PostsListWithRenderProps.js"}),r.a.createElement("h2",null,"HOC"),r.a.createElement(v.a,{fileName:"components/PostList/WithPosts.js",text:"WithPosts.js"}),r.a.createElement(v.a,{fileName:"components/PostList/WithComments.js",text:"WithComments.js"}),r.a.createElement(v.a,{fileName:"components/PostList/PostListWithHOC.js",text:"PostListWithHOC.js"}),r.a.createElement("h2",null,"Hooks"),r.a.createElement(v.a,{fileName:"hooks/usePosts.js",text:"usePosts.js"}),r.a.createElement(v.a,{fileName:"hooks/useComments.js",text:"useComments.js"}),r.a.createElement(v.a,{fileName:"components/PostList/PostListWithHooks.js",text:"PostListWithHooks.js"}),r.a.createElement("div",null,r.a.createElement(v.a,{fileName:"api/Api.js",text:"Api.js"})))}}}]);
//# sourceMappingURL=10.a2ea2e7f.chunk.js.map