"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[680],{639:function(t,e,n){n.d(e,{Z:function(){return i}});var r="Loader_loaderContainer__UDDYf",a=n(154),c=n(184),i=function(){return(0,c.jsx)("span",{className:r,children:(0,c.jsx)(a.gy,{visible:!0,height:"60",width:"60",color:"black",ariaLabel:"tail-spin-loading",radius:"1"})})}},155:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(496),a=n(689),c=n(87),i="MoviesList_movies_list__EAcLe",u="MoviesList_list_card__moLVH",s=n(184),o=function(t){var e=t.movies,n=(0,a.TH)();return(0,s.jsx)(s.Fragment,{children:e?(0,s.jsx)("ul",{className:i,children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,a=t.title,i=t.poster_path;return(0,s.jsx)("li",{children:(0,s.jsxs)(c.rU,{className:u,to:"/movies/".concat(e),state:{from:n},children:[(0,s.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500".concat(i):r.Y,alt:a,width:250,height:400}),a]})},e)}))}):(0,s.jsx)("div",{children:"There are no movies with this request. Please, try again..."})})}},496:function(t,e,n){n.d(e,{Y:function(){return r}});var r="https://sesupport.edumall.jp/hc/article_attachments/900009570963/noImage.jpg"},680:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(155),s=n(791),o=n(390),f=n(639),p=n(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],l=(0,s.useState)(!1),d=(0,a.Z)(l,2),v=d[0],h=d[1],m=(0,s.useState)(""),_=(0,a.Z)(m,2),w=_[0],g=_[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.wr)();case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{t(),h(!0)}catch(w){console.log(w),g(w)}finally{h(!1)}}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending today"}),v&&(0,p.jsx)(f.Z,{}),n&&(0,p.jsx)(u.Z,{movies:n}),w&&(0,p.jsx)("h3",{children:"Problem with download"})]})}},390:function(t,e,n){n.d(e,{jC:function(){return f},rT:function(){return o},uV:function(){return p},vS:function(){return l},wr:function(){return s}});var r=n(861),a=n(757),c=n.n(a),i=n(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="debf88dce832779bb7355a403cec0327",s=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/movie/day?&api_key=".concat(u));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/credits?language=en-US'&api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/reviews?language=en-US'&api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.9fb9d9f3.chunk.js.map