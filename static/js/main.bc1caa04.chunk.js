(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),s=(a(14),a(2)),o=a(3),c=a(5),m=a(4),u=(a(15),a(8)),h=a(1),d=(a(16),function(e){var t=e.children,a=Object(h.a)(e,["children"]);return l.a.createElement("button",Object.assign({className:"custom-button"},a),t)}),p=(a(17),function(e){var t=e.label,a=e.handelChange,n=e.name,r=Object(h.a)(e,["label","handelChange","name"]);return l.a.createElement("div",{className:"group file-type"},l.a.createElement("label",null,t),l.a.createElement("div",{className:"file-item"},l.a.createElement("input",Object.assign({type:"file",name:n,className:"form-file-upload",onChange:a},r)),l.a.createElement("label",{htmlFor:n}," Browse")))}),f=(a(18),function(e){var t=e.label,a=e.handelChange,n=Object(h.a)(e,["label","handelChange"]);return l.a.createElement("div",{className:"group"},l.a.createElement("input",Object.assign({className:"form-input",onChange:a},n)),t?l.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},t):null)}),b=(a(19),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),fetch("https://ec2-13-234-112-40.ap-south-1.compute.amazonaws.com:3000/insert-data",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:n.state.FirstName,lastName:n.state.LastName,emailId:n.state.emailid,phoneNumber:n.state.contact,imageData:n.state.image})}).then((function(e){return n.setState({response:!0===e.ok?"Your file is successfully inserted":!1===e.ok?"there's some error":null})}))},n.HandleChange=function(e){var t=e.target,a=t.value,l=t.name;n.setState(Object(u.a)({},l,a))},n.handleFile=function(e){e.preventDefault();var t=e.target.files[0],a=new FileReader;0!==e.target.files.length&&(a.onloadend=function(e){n.setState({image:a.result})},a.readAsDataURL(t))},n.state={FirstName:"",LastName:"",emailid:"",contact:"",image:null,response:null},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Form"},l.a.createElement("h2",null,"Submit Your Details here:"),l.a.createElement("form",{action:this.props.action,method:this.props.method,onSubmit:this.handleSubmit},l.a.createElement(f,{name:"FirstName",type:"text",value:this.state.FirstName,onChange:this.HandleChange,required:!0,label:"FirstName"}),l.a.createElement(f,{name:"LastName",type:"text",value:this.state.LastName,onChange:this.HandleChange,required:!0,label:"LastName"}),l.a.createElement(f,{name:"emailid",type:"email",value:this.state.emailid,onChange:this.HandleChange,required:!0,label:"Email-Id"}),l.a.createElement(f,{name:"contact",type:"number",value:this.state.contact,onChange:this.HandleChange,required:!0,label:"Phone Number"}),l.a.createElement(p,{name:"image",type:"file",accept:"image/*",onChange:this.handleFile,required:!0,label:"Image"}),l.a.createElement("div",{className:"buttons"},l.a.createElement(d,{name:"submit",type:"submit"}," Submit ")),l.a.createElement("h2",null,this.state.response)))}}]),a}(n.Component));b.defaultProps={action:"http://192.168.1.4:3002/insert-data",method:"post"};var g=b,v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.bc1caa04.chunk.js.map