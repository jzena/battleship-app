(this["webpackJsonpbattleship-app"]=this["webpackJsonpbattleship-app"]||[]).push([[1],{15:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var i=n(6),a={"":"Level",0:"Easy",100:"Medium",50:"Hard"},s={ships:{},cells:[],attemps:0,lost:!1,win:!1,levels:a,totalShips:0,shipsSunk:void 0,hitStatus:void 0,records:[],finished:!1},c=Object(i.b)({name:"game",initialState:s,reducers:{startGame:function(t,e){var n=e.payload,i=n.ships,a=n.cells,s=n.totalShips;t.ships=JSON.parse(i),t.cells=a,t.totalShips=s,t.hitStatus=void 0,t.win=!1,t.lost=!1,t.finished=!1},updateGame:function(t,e){var n=e.payload,i=n.x,a=n.y,s=n.shipType,c=n.SHIP_STATUS,o=t.ships[s],r=t.cells,u=t.shipsSunk||0,l="".concat(i,"-").concat(a);o&&l in o.coordindates?(o.numHits+=1,o.coordindates[l]=!0,r[i][a]=c.HIT,o.numHits===o.length&&(Object.keys(o.coordindates).forEach((function(t){var e=t.split("-")[0],n=t.split("-")[1];r[e][n]=c.SUNK})),u+=1)):r[i][a]=c.FAIL,t.cells=r,t.ships[s]=o,t.shipsSunk=u,t.hitStatus=r[i][a]},finishGame:function(t,e){t.records.push({id:t.records.length+1,level:"".concat(a[t.attemps]," - ").concat(t.attemps),hits:e.payload.hits,completed:!0}),t.win=e.payload.win,t.finished=!0},resetGame:function(t,e){t.ships={},t.cells=[],t.shipsSunk=void 0,t.hitStatus=void 0,t.finished=!1},updateAttempts:function(t,e){t.attemps=Number(e.payload)}}}),o=c.actions;e.a=c.reducer},27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(5),s=n.n(a),c=n(7),o=(n(27),n(14)),r=(n(28),n(10)),u=n(17),l=n(8),d=n(4),h={timeout:5e3,position:r.b.BOTTOM_LEFT},p=i.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,53))})),b=i.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,51))}));var f=function(){var t=Object(c.b)();Object(l.c)()&&t(l.a.login());var e=Object(c.c)((function(t){return t.auth.isAuthenticated}));return Object(d.jsx)(i.Suspense,{fallback:Object(d.jsx)("div",{children:"loading..."}),children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(r.a,Object(o.a)(Object(o.a)({template:u.a},h),{},{children:e?Object(d.jsx)(p,{}):Object(d.jsx)(b,{})}))})})},m=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,52)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))},j=n(6),v=n(18),S=n.n(v),O=n(15),g=Object(j.a)({reducer:{game:O.a,auth:l.b},middleware:[S.a],devTools:!1});s.a.render(Object(d.jsx)(c.a,{store:g,children:Object(d.jsx)(f,{})}),document.getElementById("root")),m()},8:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var i=n(6),a="__auth_provider_token__",s=Object(i.b)({name:"authentication",initialState:{isAuthenticated:!1},reducers:{login:function(t){window.localStorage.setItem(a,!0),t.isAuthenticated=!0},logout:function(t){window.localStorage.removeItem(a),t.isAuthenticated=!1}}});function c(){return window.localStorage.getItem(a)}var o=s.actions;e.b=s.reducer}},[[30,2,3]]]);
//# sourceMappingURL=main.04ab7587.chunk.js.map