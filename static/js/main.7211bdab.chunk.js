(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{10:function(e,t,a){},21:function(e,t,a){e.exports=a(44)},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(9),a(2)),i=a(3),s=a(4),u=a(6),m=a(5);a(10);var d=function(){return r.a.createElement("div",{id:"offcanvas-slide","uk-offcanvas":"mode: slide; overlay: true"},r.a.createElement("div",{class:"uk-offcanvas-bar"},r.a.createElement("button",{class:"uk-offcanvas-close",type:"button","uk-close":"true"}),r.a.createElement("h3",null,"About"),r.a.createElement("p",{className:"about-section"},"This application was built with React and was a practice in breaking up an application's UI into components, managing component state, and responding to user events. It pulls 200 employees from the Random User API and allows the user to filter employees by name, or sort them by category.",r.a.createElement("br",null),r.a.createElement("br",null),"In order to filter employees by name simply type in a name into the search bar. In order to sort the employee list by name, email, phone number, or DOB, click on that category. Click on the category again to switch the sorting order.")))};var h=function(){return r.a.createElement("div",{className:"uk-container header-container"},r.a.createElement("h1",{className:"subtitle"},"Employee Directory"),r.a.createElement("button",{type:"button",className:"about-btn","uk-toggle":"target: #offcanvas-slide"},"About"),r.a.createElement(d,null))};a(26);var p=function(e){return r.a.createElement("div",{className:"uk-container form-container"},r.a.createElement("form",null,r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",null,"Filter Employee by Name:"),r.a.createElement("br",null),r.a.createElement("input",{onChange:e.handleInputChange,className:"input-box uk-input uk-form-width-medium",type:"text",placeholder:"Search"}))))};a(7);var f=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.img,alt:"employee thumbnail"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob))};var E=function(e){var t,a,n,l,c;switch(t="ascending"===e.order.direction?"chevron-down":"chevron-up",e.order.category){case"name":a=t;break;case"email":l=t;break;case"phone":n=t;break;case"dob":c=t;break;default:a=t}return r.a.createElement("thead",{className:"table-head"},r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{onClick:function(){return e.handleArrowClick("name","first")}},r.a.createElement("a",null,"Name"),r.a.createElement("span",{className:"icon","uk-icon":a})),r.a.createElement("th",{onClick:function(){return e.handleArrowClick("phone")}},r.a.createElement("a",null,"Phone"),r.a.createElement("span",{className:"icon","uk-icon":n})),r.a.createElement("th",{onClick:function(){return e.handleArrowClick("email")}},r.a.createElement("a",null,"Email"),r.a.createElement("span",{className:"icon","uk-icon":l})),r.a.createElement("th",{onClick:function(){return e.handleArrowClick("dob","date")}},r.a.createElement("a",null,"DOB"),r.a.createElement("span",{className:"icon","uk-icon":c}))))},b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"formatPhoneNumber",value:function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return t?"("+t[1]+") "+t[2]+"-"+t[3]:e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"uk-container table-container"},r.a.createElement("table",{className:"uk-table uk-table-striped table"},r.a.createElement(E,{handleArrowClick:this.props.handleArrowClick,order:this.props.order}),r.a.createElement("tbody",null,this.props.employees.map((function(t){var a=new Date(t.dob.date).toLocaleDateString();return r.a.createElement(f,{key:e.props.employees.indexOf(t),img:t.picture.thumbnail,name:"".concat(t.name.first," ").concat(t.name.last),phone:e.formatPhoneNumber(t.phone),email:t.email,dob:a})})))))}}]),a}(r.a.Component),k=a(20),v=a.n(k),y=function(){return v.a.get("https://randomuser.me/api/?results=200&nat=u")},g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getEmployees=function(){y().then((function(e){n.setState({resultsAll:n.sortAsc(e.data.results,"name","first")}),n.setState({resultsFiltered:n.state.resultsAll})})).catch((function(e){return console.log(e)}))},n.handleInputChange=function(e){e.preventDefault();var t=n.state.resultsAll.filter((function(t){return"".concat(t.name.first," ").concat(t.name.last).toLowerCase().startsWith(e.target.value)}));n.setState({resultsFiltered:t})},n.state={resultsAll:[],resultsFiltered:[],order:{direction:"ascending",category:"name"}},n.handleArrowClick=n.handleArrowClick.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"sortAsc",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.sort((function(e,n){return e[t][a]>n[t][a]?1:-1}))}},{key:"sortDesc",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.sort((function(e,n){return e[t][a]>n[t][a]?-1:1}))}},{key:"handleArrowClick",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;"ascending"===this.state.order.direction?this.setState({resultsFiltered:this.sortDesc(this.state.resultsFiltered,e,t),order:{direction:"descending",category:e}}):this.setState({resultsFiltered:this.sortAsc(this.state.resultsFiltered,e,t),order:{direction:"ascending",category:e}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("div",{className:"uk-container"},r.a.createElement(p,{handleInputChange:this.handleInputChange}),r.a.createElement(b,{employees:this.state.resultsFiltered,handleArrowClick:this.handleArrowClick,order:this.state.order})))}}]),a}(r.a.Component);var C=function(){return r.a.createElement(g,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))},7:function(e,t,a){},9:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.7211bdab.chunk.js.map