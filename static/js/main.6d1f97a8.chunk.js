(this.webpackJsonpbeausreact=this.webpackJsonpbeausreact||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),s=(a(14),a(1)),u=a(2),o=a(5),i=a(4),m=a(3),d=(a(15),function(){return r.a.createElement("form",{style:{margin:"40px"}},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),r.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleTextarea"},"Enter text here"),r.a.createElement("textarea",{class:"form-control",id:"exampleTextarea",rows:"3"})),r.a.createElement("div",{class:"form-check"},r.a.createElement("label",{class:"form-check-label"},r.a.createElement("input",{type:"checkbox",class:"form-check-input"}),"Check me out")),r.a.createElement("button",{type:"submit",class:"btn btn-primary",style:{margin:"10px"}},"Submit"))}),p=function(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"../index.html"},r.a.createElement("span",{className:"badge badge-pill badge-secondary",style:{margin:"20px"}},"Home")),r.a.createElement("a",{href:"#",onClick:function(){return e.updateHandler("#")}},r.a.createElement("span",{className:"badge badge-pill badge-secondary",style:{margin:"20px"}},"My List")),r.a.createElement("a",{href:"#contact",onClick:function(){return e.updateHandler("#contact")}},r.a.createElement("span",{className:"badge badge-pill badge-secondary",style:{margin:"20px"}},"Contact us")))},b=a(8),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this;return console.log(this.props.data),r.a.createElement("div",null,this.props.data.map((function(t,a){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,t.value),r.a.createElement("button",{style:{margin:"5px"},onClick:e.delete.bind(e,a)},"delete"))})))}}]),a}(r.a.Component),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.setState((function(e){var t={value:e.value,id:e.nextId};return{myArray:[].concat(Object(b.a)(e.myArray),[t]),nextId:e.nextId+1,value:""}}))},n.delete=function(e){n.setState((function(t){return{myArray:t.myArray.filter((function(t,a){return a!=e}))}}))},n.state={nextId:0,value:"",myArray:[]},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"myForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("input",{className:"form-control",type:"text",value:this.state.value,onChange:this.handleChange,style:{margin:"20px"},placeholder:"My list of blessings"})),r.a.createElement("input",{className:"btn btn-secondary btn-sm",type:"submit",value:"Submit",style:{margin:"40px"}}),r.a.createElement("ul",null,r.a.createElement(f,{delete:this.delete,data:this.state.myArray}))))}}]),a}(r.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return"#contact"===this.props.route?r.a.createElement(d,null):r.a.createElement(h,null)}}]),a}(r.a.Component),E=(a(16),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={route:"#"},n.updateRoute=n.updateRoute.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"updateRoute",value:function(e){this.setState({route:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{updateHandler:this.updateRoute}),r.a.createElement(y,{route:this.state.route}))}}]),a}(r.a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6d1f97a8.chunk.js.map