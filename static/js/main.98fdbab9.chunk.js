(this["webpackJsonpproject-3"]=this["webpackJsonpproject-3"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"deck":[{"name":"The Artifact","imageUrl":"./assets/card_artifact.png","key":0},{"name":"The Beast","imageUrl":"./assets/card_beast.png","key":1},{"name":"The Broken One","imageUrl":"./assets/card_broken_one.png","key":2},{"name":"The Darklord","imageUrl":"./assets/card_darklord.png","key":3},{"name":"The Donjon","imageUrl":"./assets/card_donjon.png","key":4},{"name":"The Executioner","imageUrl":"./assets/card_executioner.jpg","key":5},{"name":"The Ghost","imageUrl":"./assets/card_ghost.png","key":6},{"name":"The Horseman","imageUrl":"./assets/card_horseman.png","key":7},{"name":"The Innocent","imageUrl":"./assets/card_innocent.png","key":8},{"name":"The Marionette","imageUrl":"./assets/card_marionette.png","key":9},{"name":"The Mists","imageUrl":"./assets/card_mists.png","key":10},{"name":"The Raven","imageUrl":"./assets/card_raven.png","key":11},{"name":"The Seer","imageUrl":"./assets/card_seer.png","key":12},{"name":"The Tempter","imageUrl":"./assets/card_tempter.png","key":13}]}')},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(7),c=t.n(s),i=(t(13),t(2)),d=t(3),o=t(5),m=t(4),l=(t(14),t(15),t(0)),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.cardData;return Object(l.jsx)("div",{className:"card",carddata:e,style:{backgroundImage:"url(".concat(e.imageUrl,")")}})}}]),t}(n.Component),p=t(8),u=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={numOfCards:0,cards:[]},e.makeCard=function(){var a=e.state.deck[Math.floor(Math.random()*e.state.deck.length)];a.flipped=Math.random()<.5,e.setState({numOfCards:e.state.numOfCards+1,cards:e.state.cards.concat(a),deck:e.state.deck.filter((function(e){return e!=a}))})},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(JSON.stringify(p)).deck;this.setState({deck:e})}},{key:"render",value:function(){var e=this,a=this.state.cards.map((function(a,t){return Object(l.jsx)(h,{cardData:e.state.cards[t]},t)}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"Tarokka Reading"})}),Object(l.jsxs)("main",{className:"App-main",children:[Object(l.jsx)("button",{className:"make-cards",onClick:function(){return e.makeCard(e.state.deck)},children:"Make a Card!"}),Object(l.jsx)("div",{className:"cards-box",children:a})]})]})}}]),t}(n.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.98fdbab9.chunk.js.map