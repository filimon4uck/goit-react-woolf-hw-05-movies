"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[42],{496:function(e,t,n){n.d(t,{Y:function(){return r}});var r="https://sesupport.edumall.jp/hc/article_attachments/900009570963/noImage.jpg"},42:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(496),u=n(791),o=n(689),p=n(87),l=n(390),f="MovieDetailsPage_section__yOGhJ",h="MovieDetailsPage_back_link__2ooh+",d="MovieDetailsPage_add_info__gVtIh",v=n(184),_=function(){var e,t=(0,o.UO)().movieId,n=(0,u.useState)(null),c=(0,a.Z)(n,2),_=c[0],x=c[1],m=(0,o.TH)();return(0,u.useEffect)((function(){if(t){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.jC)(t);case 2:n=e.sent,x(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{e()}catch(n){console.log(n)}}}),[t]),(0,v.jsxs)("div",{children:[(0,v.jsx)(p.OL,{className:h,to:(null===(e=m.state)||void 0===e?void 0:e.from)||"/",children:"\u2190Go back"}),_&&(0,v.jsxs)("section",{className:f,children:[(0,v.jsx)("img",{src:_.poster_path?"https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+_.poster_path:i.Y,alt:_.title,width:200,height:300}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:_.title}),(0,v.jsxs)("p",{children:["User score: ",Math.round(_.vote_average/10*100),"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:_.overview}),(0,v.jsx)("h2",{children:"Genres:"}),(0,v.jsx)("p",{children:_.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(p.OL,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(p.OL,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(o.j3,{})]})]})}},390:function(e,t,n){n.d(t,{jC:function(){return p},rT:function(){return o},uV:function(){return l},vS:function(){return f},wr:function(){return u}});var r=n(861),a=n(757),c=n.n(a),s=n(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="debf88dce832779bb7355a403cec0327",u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?&api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?language=en-US'&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?language=en-US'&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.e4d7a07c.chunk.js.map