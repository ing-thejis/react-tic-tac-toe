(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),i=t(5),a=t.n(i),r=(t(10),t(4)),u=t(2),l=t(0);function o(e){return Object(l.jsx)("button",{className:e.value?"btn disabled":"btn",onClick:e.onClick,children:e.value})}function j(e){return Object(l.jsxs)("div",{className:"board",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{value:e.squares[0],onClick:function(){e.onClick(0)}}),Object(l.jsx)(o,{value:e.squares[1],onClick:function(){e.onClick(1)}}),Object(l.jsx)(o,{value:e.squares[2],onClick:function(){e.onClick(2)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{value:e.squares[3],onClick:function(){e.onClick(3)}}),Object(l.jsx)(o,{value:e.squares[4],onClick:function(){e.onClick(4)}}),Object(l.jsx)(o,{value:e.squares[5],onClick:function(){e.onClick(5)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{value:e.squares[6],onClick:function(){e.onClick(6)}}),Object(l.jsx)(o,{value:e.squares[7],onClick:function(){e.onClick(7)}}),Object(l.jsx)(o,{value:e.squares[8],onClick:function(){e.onClick(8)}})]})]})}var b=function(e,n){switch(n.type){case"JUMP":return Object(u.a)(Object(u.a)({},e),{},{xIsNext:n.payload.step%2===0,history:e.history.slice(0,n.payload.step+1)});case"MOVE":return Object(u.a)(Object(u.a)({},e),{},{history:e.history.concat({squares:n.payload.squares}),xIsNext:!e.xIsNext});default:return e}};function d(){var e=Object(c.useReducer)(b,{xIsNext:!0,history:[{squares:Array(9).fill(null)}]}),n=Object(r.a)(e,2),t=n[0],s=n[1],i=t.xIsNext,a=t.history,u=a[a.length-1],o=x(u.squares),d=o?"D"===o?"Draw":" winner is "+o:"Next player is "+(i?"X":"0"),O=a.map((function(e,n){var t=n?"Go to #"+n:"Start the Game";return Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return function(e){s({type:"JUMP",payload:{step:e}})}(n)},children:t})},n)}));return Object(l.jsxs)("div",{className:o?"game disabled":"game",children:[Object(l.jsx)("div",{className:"game-board",children:Object(l.jsx)(j,{onClick:function(e){return function(e){var n=a[a.length-1].squares.slice();x(n)||n[e]||(n[e]=i?"X":"0",s({type:"MOVE",payload:{squares:n}}))}(e)},squares:u.squares})}),Object(l.jsxs)("div",{className:"game-info",children:[Object(l.jsx)("div",{children:d}),Object(l.jsx)("ul",{children:O})]})]})}var x=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=!0,c=0;c<n.length;c++){var s=Object(r.a)(n[c],3),i=s[0],a=s[1],u=s[2];if(e[i]&&e[i]===e[a]&&e[a]===e[u])return e[i];e[i]&&e[a]&&e[u]||(t=!1)}return t?"D":null};var O=function(){return Object(l.jsx)(d,{})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[12,1,2]]]);
//# sourceMappingURL=main.c8ad965c.chunk.js.map