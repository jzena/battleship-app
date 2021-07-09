(this["webpackJsonpbattleship-app"]=this["webpackJsonpbattleship-app"]||[]).push([[4],{34:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(33),i=r(9),a=r(0),c=r.n(a),s=r(41),o=(r(1),r(2)),l=r(3),u=r(36),h=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).history=Object(s.a)(t.props),t}return Object(i.a)(t,e),t.prototype.render=function(){return c.a.createElement(n.b,{history:this.history,children:this.props.children})},t}(c.a.Component);c.a.Component;var d=function(e,t){return"function"===typeof e?e(t):e},f=function(e,t){return"string"===typeof e?Object(s.c)(e,null,null,t):e},j=function(e){return e},b=c.a.forwardRef;"undefined"===typeof b&&(b=j);var p=b((function(e,t){var r=e.innerRef,n=e.navigate,i=e.onClick,a=Object(l.a)(e,["innerRef","navigate","onClick"]),s=a.target,u=Object(o.a)({},a,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return u.ref=j!==b&&t||r,c.a.createElement("a",u)}));var O=b((function(e,t){var r=e.component,i=void 0===r?p:r,a=e.replace,s=e.to,h=e.innerRef,O=Object(l.a)(e,["component","replace","to","innerRef"]);return c.a.createElement(n.d.Consumer,null,(function(e){e||Object(u.a)(!1);var r=e.history,n=f(d(s,e.location),e.location),l=n?r.createHref(n):"",p=Object(o.a)({},O,{href:l,navigate:function(){var t=d(s,e.location);(a?r.replace:r.push)(t)}});return j!==b?p.ref=t||h:p.innerRef=h,c.a.createElement(i,p)}))})),m=function(e){return e},v=c.a.forwardRef;"undefined"===typeof v&&(v=m);v((function(e,t){var r=e["aria-current"],i=void 0===r?"page":r,a=e.activeClassName,s=void 0===a?"active":a,h=e.activeStyle,j=e.className,b=e.exact,p=e.isActive,y=e.location,_=e.sensitive,x=e.strict,g=e.style,B=e.to,S=e.innerRef,E=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.a.createElement(n.d.Consumer,null,(function(e){e||Object(u.a)(!1);var r=y||e.location,a=f(d(B,r),r),l=a.pathname,A=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),I=A?Object(n.e)(r.pathname,{path:A,exact:b,sensitive:_,strict:x}):null,T=!!(p?p(I,r):I),k=T?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(j,s):j,G=T?Object(o.a)({},g,{},h):g,L=Object(o.a)({"aria-current":T&&i||null,className:k,style:G,to:a},E);return m!==v?L.ref=t||S:L.innerRef=S,c.a.createElement(O,L)}))}))},37:function(e,t,r){"use strict";var n=r(40),i=r(0),a=r(10),c=r(33),s=r(7),o=r(15),l=r(8),u=r(4);t.a=function(e){var t=e.unautenticated,r=Object(i.useState)(),h=Object(n.a)(r,2),d=h[0],f=h[1],j=Object(c.f)(),b=Object(s.b)(),p=Object(a.c)();return Object(u.jsxs)("div",{className:"FormMain",children:[Object(u.jsx)("div",{className:"FormGroup",children:Object(u.jsx)("label",{"data-testid":"settingsTitle",children:"Settings Game"})}),Object(u.jsxs)("div",{className:"FormGroup",children:[Object(u.jsx)("label",{htmlFor:"ddlLevel",children:"Level"}),Object(u.jsxs)("select",{id:"ddlLevel",onChange:function(e){f(e.target.value)},children:[Object(u.jsx)("option",{value:"",children:"Level"}),Object(u.jsx)("option",{value:"0",children:"Easy"}),Object(u.jsx)("option",{value:"100",children:"Medium"}),Object(u.jsx)("option",{value:"50",children:"Hard"})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(e){d?(e.preventDefault(),b(l.a.login()),b(o.b.updateAttempts(d)),t||j.push("/")):p.error("You must select a level")},children:"Start"})})]})}},38:function(e,t,r){"use strict";var n=r(7),i=r(33),a=r(39),c=r.n(a),s=r(8),o=r(4);t.a=function(){var e=Object(n.b)(),t=Object(i.f)(),r=Object(n.c)((function(e){return e.auth.isAuthenticated}));return Object(o.jsxs)("header",{className:c.a.header,children:[Object(o.jsx)("h1",{children:"BattleShip"}),r&&Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{id:"menuSettings",onClick:function(){t.push("/settings")},children:"Settings"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{id:"menuRecords",onClick:function(){t.push("/records")},children:"Records"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{id:"menuGame",onClick:function(){t.push("/")},children:"Game"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{id:"btnLogout",onClick:function(){e(s.a.logout()),t.push("/")},children:"Logout"})})]})})]})}},39:function(e,t,r){e.exports={header:"Header_header__1VCKf"}},42:function(e,t,r){e.exports={ErrorMessage:"lib_ErrorMessage__fQ38H",FullPageErrorFallback:"lib_FullPageErrorFallback__2mGxG"}},43:function(e,t,r){e.exports={boardItem:"GridItem_boardItem__w7iJK",boardValue:"GridItem_boardValue__13O2D",SB1:"GridItem_SB1__1uefm",SB2:"GridItem_SB2__3SG6d",SB3:"GridItem_SB3__cj_WG",SB4:"GridItem_SB4__2nfxl",PB1:"GridItem_PB1__38Wel",PB2:"GridItem_PB2__2Rczh",PB3:"GridItem_PB3__2KCg3",B1:"GridItem_B1__1hKow",B2:"GridItem_B2__1f1EY",SM1:"GridItem_SM1__28VFy",HIT:"GridItem_HIT__w3N6L",SUNK:"GridItem_SUNK__1afrc",FAIL:"GridItem_FAIL__l_g3e"}},44:function(e,t,r){e.exports={gamePage:"Game_gamePage__Bwh_H",gameActions:"Game_gameActions__2pINH",boardContainer:"Game_boardContainer__21IVh"}},48:function(e,t,r){},49:function(e,t,r){e.exports={NotFound:"NotFound_NotFound__2i7QG"}},50:function(e,t,r){!function(e,t){"use strict";function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var n=r(t);function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)}var c=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.length!==t.length||e.some((function(e,r){return!Object.is(e,t[r])}))},s={error:null},o=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state=s,t.updatedWithError=!1,t.resetErrorBoundary=function(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];null==t.props.onReset||(e=t.props).onReset.apply(e,n),t.reset()},t}a(t,e),t.getDerivedStateFromError=function(e){return{error:e}};var r=t.prototype;return r.reset=function(){this.updatedWithError=!1,this.setState(s)},r.componentDidCatch=function(e,t){var r,n;null==(r=(n=this.props).onError)||r.call(n,e,t)},r.componentDidMount=function(){null!==this.state.error&&(this.updatedWithError=!0)},r.componentDidUpdate=function(e){var t,r,n=this.state.error,i=this.props.resetKeys;null===n||this.updatedWithError?null!==n&&c(e.resetKeys,i)&&(null==(t=(r=this.props).onResetKeysChange)||t.call(r,e.resetKeys,i),this.reset()):this.updatedWithError=!0},r.render=function(){var e=this.state.error,t=this.props,r=t.fallbackRender,i=t.FallbackComponent,a=t.fallback;if(null!==e){var c={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(a))return a;if("function"===typeof r)return r(c);if(i)return n.createElement(i,c);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(n.Component);function l(e,t){var r=function(r){return n.createElement(o,t,n.createElement(e,r))},i=e.displayName||e.name||"Unknown";return r.displayName="withErrorBoundary("+i+")",r}function u(e){var t=n.useState(null),r=t[0],i=t[1];if(null!=e)throw e;if(null!=r)throw r;return i}e.ErrorBoundary=o,e.useErrorHandler=u,e.withErrorBoundary=l,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0))},53:function(e,t,r){"use strict";r.r(t);var n=r(34),i=r(33),a=r(50),c=r(14);function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=r(42),l=r.n(o),u=r(4),h=["error","variant"];function d(e){var t=e.error,r=(e.variant,s(e,h));return Object(u.jsxs)("div",Object(c.a)(Object(c.a)({role:"alert",className:l.a.ErrorMessage},r),{},{children:[Object(u.jsx)("span",{children:"There was an error: "}),Object(u.jsx)("pre",{children:t.message})]}))}function f(e){var t=e.error;return Object(u.jsxs)("div",{role:"alert",className:l.a.FullPageErrorFallback,children:[Object(u.jsx)("p",{children:"Uh oh... There's a problem. Try refreshing the app."}),Object(u.jsx)("pre",{children:t.message})]})}var j=r(40),b=r(0),p=r.n(b),O=r(7),m=r(15),v=r(10),y=r(16);function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,r){return t&&x(e.prototype,t),r&&x(e,r),e}var B=function(){function e(t){_(this,e),this.name=t,this.size=10,this.init()}return g(e,[{key:"init",value:function(){this.cells=this.createGrid(this.size,this.size),this.setDefaultBoard()}},{key:"createGrid",value:function(e){var t=new Array(e||0),r=e;if(arguments.length>1)for(var n=Array.prototype.slice.call(arguments,1);r--;)t[e-1-r]=this.createGrid.apply(this,n);return t}},{key:"setDefaultBoard",value:function(){this.cells.forEach((function(e){e.fill("~")}))}}]),e}(),S=function(){function e(t,r){_(this,e);var n=Math.floor(2*Math.random());this.length=t,this.name=r,this.numHits=0,this.direction=n,this.coordindates={}}return g(e,[{key:"hit",value:function(){this.numHits+=1,this.sunk()&&console.log("You sunk your opponent's ".concat(this.name,"!"))}},{key:"sunk",value:function(){return this.numHits===this.length}}],[{key:"aircraftCarrier",value:function(t){return new e(5,t)}},{key:"submarine",value:function(t){return new e(4,t)}},{key:"battleship",value:function(t){return new e(3,t)}},{key:"patrolBoat",value:function(t){return new e(2,t)}},{key:"singleBoat",value:function(t){return new e(1,t)}}]),e}(),E={AIRCRAFT_CARRIES:"AC",SUB_MARINE1:"SM1",BATTLESHIP1:"B1",BATTLESHIP2:"B2",PATROL_BOAT1:"PB1",PATROL_BOAT2:"PB2",PATROL_BOAT3:"PB3",SINGLE_BOAT1:"SB1",SINGLE_BOAT2:"SB2",SINGLE_BOAT3:"SB3",SINGLE_BOAT4:"SB4",EMPTY:"~"},A={VERTICAL:0,HORIZONTAL:1},I=function(){function e(t){_(this,e),this.name=t,this.board=new B(this.name),this.ships=this.createShips(),this.placeShipsRandomLy()}return g(e,[{key:"createShips",value:function(){var e;return e={},Object(y.a)(e,E.SUB_MARINE1,S.submarine(E.SUB_MARINE1)),Object(y.a)(e,E.BATTLESHIP1,S.battleship(E.BATTLESHIP1)),Object(y.a)(e,E.BATTLESHIP2,S.battleship(E.BATTLESHIP2)),Object(y.a)(e,E.PATROL_BOAT1,S.patrolBoat(E.PATROL_BOAT1)),Object(y.a)(e,E.PATROL_BOAT2,S.patrolBoat(E.PATROL_BOAT2)),Object(y.a)(e,E.PATROL_BOAT3,S.patrolBoat(E.PATROL_BOAT3)),Object(y.a)(e,E.SINGLE_BOAT1,S.singleBoat(E.SINGLE_BOAT1)),Object(y.a)(e,E.SINGLE_BOAT2,S.singleBoat(E.SINGLE_BOAT2)),Object(y.a)(e,E.SINGLE_BOAT3,S.singleBoat(E.SINGLE_BOAT3)),Object(y.a)(e,E.SINGLE_BOAT4,S.singleBoat(E.SINGLE_BOAT4)),e}},{key:"withinLimits",value:function(e,t,r){var n=this.ships[r],i=n.direction,a=n.length;return i===A.VERTICAL?e+a<=this.board.size:t+a<=this.board.size}},{key:"isValidPlace",value:function(e,t,r){var n=this.ships[r],i=n.direction,a=n.length,c=Object.keys(this.ships);if(this.withinLimits(e,t,r)){for(var s=0;s<a;s++)if(i===A.VERTICAL){if(c.includes(this.board.cells[e+s][t]))return!1}else if(c.includes(this.board.cells[e][t+s]))return!1;return!0}return!1}},{key:"placeShipItem",value:function(e,t,r){for(var n=this.ships[r],i=n.direction,a=n.length,c=n.name,s=0;s<a;s++)if(i===A.VERTICAL){var o=e+s;this.board.cells[o][t]=c,this.ships[r].coordindates["".concat(o,"-").concat(t)]=!1}else{var l=t+s;this.board.cells[e][l]=c,this.ships[r].coordindates["".concat(e,"-").concat(l)]=!1}}},{key:"placeShipsRandomLy",value:function(){for(var e in this.ships)for(var t=!0;t;){var r=Math.floor(this.board.size*Math.random()),n=Math.floor(this.board.size*Math.random());this.isValidPlace(r,n,e)&&(this.placeShipItem(r,n,e),t=!1)}}},{key:"lost",value:function(){var e=this;return Object.keys(this.ships).every((function(t){return e.ships[t].sunk()}))}}]),e}(),T={HIT:"HIT",SUNK:"SUNK",FAIL:"FAIL"},k=r(43),G=r.n(k),L=["A","B","C","D","E","F","G","H","I","J"],N=function(e){var t=e.rowIndex,r=e.colIndex,n=e.value,i=e.onHandleClick;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{onClick:function(){i(t,r,n)},className:"".concat(G.a.boardItem," ").concat(G.a[n]),children:[Object(u.jsxs)("span",{children:[L[t],"-",r]}),Object(u.jsx)("div",{className:G.a.boardValue,children:(n===T.FAIL||n===T.HIT)&&"X"})]})})},w=p.a.memo(N),C=r(44),R=r.n(C),P=function(){var e=Object(O.c)((function(e){return e.game})),t=e.cells,r=e.win,n=e.attemps,a=e.hitStatus,c=e.shipsSunk,s=e.totalShips,o=e.finished,l=e.lost,h=Object(O.b)(),d=Object(i.f)(),f=Object(b.useState)(0),p=Object(j.a)(f,2),y=p[0],_=p[1],x=Object(v.c)();Object(b.useEffect)((function(){var e=new I("jzena"),t=Object.keys(e.ships).length;h(m.b.startGame({ships:JSON.stringify(e.ships),cells:e.board.cells,totalShips:t}))}),[h]),Object(b.useEffect)((function(){s===c&&n>0&&h(m.b.finishGame({hits:y,win:!0}))}),[h,s,c,y,n]),Object(b.useEffect)((function(){a===T.FAIL&&x.error("you failed the shot!!"),a===T.HIT&&x.show("you hit the ship!!"),a===T.SUNK&&x.success("ship destroyed!!")}),[a,x,y]);var g=function(){_(0),h(m.b.resetGame());var e=new I("jzena"),t=Object.keys(e.ships).length;h(m.b.startGame({ships:JSON.stringify(e.ships),cells:e.board.cells,totalShips:t}))},B=Object(b.useCallback)((function(e,t,r){var i=y+1;if(i===n&&n>0)return h(m.b.finishGame({hits:i,win:!1,lost:!0})),void console.log("you lose the game..");h(m.b.updateGame({x:e,y:t,shipType:r,SHIP_STATUS:T})),_(i)}),[y,h,n]);return o?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"The game has finished"}),r&&Object(u.jsx)("div",{children:"Congrats you win!!"}),l&&Object(u.jsx)("div",{children:"you lose! do you want to re-try? pls click on Reset button"}),Object(u.jsx)("button",{onClick:g,children:"Reset"})]}):Object(u.jsxs)("div",{"data-testid":"gamePage",className:R.a.gamePage,children:[Object(u.jsxs)("div",{className:R.a.gameActions,children:[Object(u.jsx)("button",{id:"btnReset",onClick:g,children:"Reset Game"}),Object(u.jsx)("button",{id:"btnFinish",onClick:function(){h(m.b.finishGame({hits:y,win:!1,lost:!1})),d.push("/settings")},children:"Finish Game"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"BattleShip"}),n>0&&Object(u.jsxs)("div",{children:["Attemp: ",y," of ",n]}),Object(u.jsx)("div",{"data-testid":"board",className:R.a.boardContainer,children:null===t||void 0===t?void 0:t.map((function(e,t){return e.map((function(e,r){return Object(u.jsx)(w,{rowIndex:t,colIndex:r,value:e,onHandleClick:B},"".concat(t,"-").concat(r))}))}))})]})]})},F=(r(48),function(e){return e.map((function(e,t){var r=e.id,n=e.level,i=e.hits,a=e.completed;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:r}),Object(u.jsx)("td",{children:n}),Object(u.jsx)("td",{children:i}),Object(u.jsx)("td",{children:a?"si":"no"})]},r)}))}),H=function(e){return(e.length>0?Object.keys(e[0]):[]).map((function(e,t){return Object(u.jsx)("th",{children:e.toUpperCase()},t)}))},M=function(){var e=Object(O.c)((function(e){return e.game})).records;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"title",children:"Records"}),Object(u.jsx)("table",{id:"students",children:Object(u.jsxs)("tbody",{children:[Object(u.jsx)("tr",{children:H(e)}),F(e)]})})]})},K=function(){return Object(u.jsx)("div",{"data-testid":"redordsPage",children:Object(u.jsx)(M,{})})},U=r(37),V=r(49),D=r.n(V);function z(){var e=Object(i.f)();return Object(u.jsx)("div",{className:D.a.NotFound,children:Object(u.jsxs)("div",{children:["Sorry... nothing here.",Object(u.jsx)("a",{onClick:function(){e.push("/")},children:"Go Home"})]})})}var W=r(38);function J(e){var t=e.error;return Object(u.jsx)(d,{error:t,className:"ErrorFallback"})}function Y(){return Object(u.jsx)(n.a,{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(W.a,{}),Object(u.jsx)("main",{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",render:function(){return Object(u.jsx)(P,{})}}),Object(u.jsx)(i.a,{exact:!0,path:"/settings",render:function(){return Object(u.jsx)(U.a,{})}}),Object(u.jsx)(i.a,{exact:!0,path:"/records",render:function(){return Object(u.jsx)(K,{})}}),Object(u.jsx)(i.a,{path:"*",render:function(){return Object(u.jsx)(z,{})}})]})})]})})}t.default=function(){return Object(u.jsx)(a.ErrorBoundary,{FallbackComponent:f,children:Object(u.jsx)(a.ErrorBoundary,{FallbackComponent:J,children:Object(u.jsx)(Y,{})})})}}}]);
//# sourceMappingURL=4.368a90e7.chunk.js.map