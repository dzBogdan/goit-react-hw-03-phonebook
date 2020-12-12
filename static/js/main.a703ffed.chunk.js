(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(9),i=n.n(r),s=(n(17),n(11)),u=n(2),l=n(3),h=n(5),d=n(4),b=n(10),j=n.n(b),m=(n(8),function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputNameChenge=function(e){t.setState({name:e.currentTarget.value})},t.handleInputNumberChenge=function(e){t.setState({number:e.currentTarget.value})},t.handleButtonAdd=function(e){var n={id:j.a.generate(),name:t.state.name,number:t.state.number};t.props.handleButtonAdd(n)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{className:"phoneBook__name",children:["\u0418\u043c\u044f",Object(a.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleInputNameChenge,className:"name__input"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{className:"phoneBook__number",children:[" \u041d\u043e\u043c\u0435\u0440",Object(a.jsx)("input",{type:"text",value:this.state.number,onChange:this.handleInputNumberChenge,className:"number__input"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"button",onClick:this.handleButtonAdd,className:"phoneBook__button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(a.jsx)("br",{})]})}}]),n}(o.a.Component)),p=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(a.jsx)("ul",{className:"contact__list",children:this.props.contacts.map((function(e){return Object(a.jsxs)("li",{className:"list__item",children:[Object(a.jsx)("p",{children:"".concat(e.name," : ").concat(e.number)}),Object(a.jsx)("button",{className:"list__button",onClick:function(){return t.props.onDeleteContact(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))})]})}}]),n}(o.a.Component),f=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleInputFilterChenge=function(e){t.setState({filter:e.currentTarget.value})},t.handleButtonAdd=function(e){var n,a;(n=t.state.contacts,a=e.name,n.find((function(t){return t.name===a})))?window.alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e.name," \u0443\u0436\u0435 e\u0441\u0442\u044c \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("phoneBook"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("phoneBook",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"}),Object(a.jsx)(m,{handleButtonAdd:this.handleButtonAdd}),Object(a.jsx)("label",{children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",onChange:this.handleInputFilterChenge,className:"filter__input"}),Object(a.jsx)(p,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(o.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),O()},8:function(t,e,n){}},[[26,1,2]]]);
//# sourceMappingURL=main.a703ffed.chunk.js.map