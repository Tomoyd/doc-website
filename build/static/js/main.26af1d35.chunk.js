(this["webpackJsonpmanage-app"]=this["webpackJsonpmanage-app"]||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},183:function(e,t,a){e.exports=a(368)},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},367:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);for(var n=a(0),l=a.n(n),r=a(3),c=a.n(r),s=(a(188),a(181)),o=(a(189),a(114)),i=a(45),m=a(177),u=a(147),d=a.n(u),p=(a(190),a(369)),h=a(25),E=a(374),f=a(119),g=a(148),y=a(149),b=a(176),v=a(180),I=a(21),S=a(370),w=a(372),k=a(371),C=a(373),O=[],x=0;x<10;x++)O.push({key:x,name:"\u5c0f ".concat(x," \u54e5"),age:32,address:"\u5317\u4eac \u6d77\u6dc0. ".concat(x,"\u53f7")});var j=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedRowKeys:[],data:O.slice(),visible:!1,formInfo:{name:"",age:"",address:""}},e.form=null,e.onSelectChange=function(t){e.setState({selectedRowKeys:t})},e.columns=[{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u5e74\u9f84",dataIndex:"age"},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u64cd\u4f5c",dataIndex:"",key:"x",render:function(t,a,n){return l.a.createElement(I.a,{onClick:function(){e.deleteItem(n)}},"\u5220\u9664")}}],e}return Object(y.a)(a,[{key:"deleteItem",value:function(e){var t=this.state.data.slice();t.splice(e,1),this.setState({data:t})}},{key:"handleCancel",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var e=this,t={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange,hideDefaultSelections:!0,selections:[S.a.SELECTION_ALL,S.a.SELECTION_INVERT,{key:"odd",text:"Select Odd Row",onSelect:function(t){var a;a=t.filter((function(e,t){return t%2===0})),e.setState({selectedRowKeys:a})}},{key:"even",text:"Select Even Row",onSelect:function(t){var a;a=t.filter((function(e,t){return t%2!==0})),e.setState({selectedRowKeys:a})}}]};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(I.a,{style:{marginBottom:"10px"},onClick:function(){e.setState({visible:!0})}},"\u6dfb\u52a0")),l.a.createElement(S.a,{rowSelection:t,columns:this.columns,dataSource:this.state.data}),l.a.createElement(w.a,{title:"\u6dfb\u52a0",visible:this.state.visible,onOk:function(){var t=e.state.data.slice(),a=Object(f.a)({},e.state.formInfo,{key:t.length});t.unshift(a),e.setState({data:t,visible:!1})},onCancel:this.handleCancel.bind(this)},l.a.createElement(k.a,{onValuesChange:function(t,a){e.setState({formInfo:Object(f.a)({},e.state.formInfo,{},a)})},name:"basic"},l.a.createElement(k.a.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"Please input your username!"}]},l.a.createElement(C.a,null)),l.a.createElement(k.a.Item,{label:"\u5e74\u9f84",name:"age",rules:[{required:!0,message:"Please input your username!"}]},l.a.createElement(C.a,null)),l.a.createElement(k.a.Item,{label:"\u5730\u5740",name:"address",rules:[{required:!0,message:"Please input your username!"}]},l.a.createElement(C.a,null)))))}}]),a}(n.Component),R=p.a.Header,N=p.a.Content,P=p.a.Footer;var A=function(e){var t=["\u8868\u683c","\u56fe\u8868","ThreeJS"],a=Object(n.useState)(t[0]),r=Object(m.a)(a,2),c=r[0],s=r[1];return l.a.createElement("div",null,l.a.createElement(p.a,{className:"layout"},l.a.createElement(R,{className:"header"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"})),l.a.createElement(h.a,{theme:"dark",mode:"horizontal",onSelect:function(t){e.history.push(t.key),s(t.key.substring(1))},defaultSelectedKeys:["/"+t[0]],style:{lineHeight:"64px"}},t.map((function(e){return l.a.createElement(h.a.Item,{key:"/"+e},e)})))),l.a.createElement(N,{style:{padding:"0 50px"}},l.a.createElement(E.a,{style:{margin:"16px 0"}},l.a.createElement(E.a.Item,null,"\u4e3b\u9875"),l.a.createElement(E.a.Item,null,c)),l.a.createElement("div",{className:"site-layout-content"},l.a.createElement(i.b,{path:"".concat("","/"),exact:!0,component:j}),l.a.createElement(i.b,{path:"".concat("","/\u8868\u683c"),component:j}))),l.a.createElement(P,{style:{textAlign:"center"}},"React Manage App By Tomoyd ")))},K=a(74),T=(a(367),{labelCol:{span:6},wrapperCol:{span:16}}),q={wrapperCol:{offset:8,span:16}},F=function(e){var t=e.history;return l.a.createElement("div",null,l.a.createElement("div",{className:"login-container"},l.a.createElement(k.a,Object.assign({},T,{name:"basic",initialValues:{remember:!0},onFinish:function(e){localStorage.setItem("isAuth",!0),t.push("/react-manage-app/build/")},onFinishFailed:function(e){console.log("Failed:",e)}}),l.a.createElement(k.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},l.a.createElement(C.a,null)),l.a.createElement(k.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},l.a.createElement(C.a.Password,null)),l.a.createElement(k.a.Item,Object.assign({},q,{name:"remember",valuePropName:"checked"}),l.a.createElement(K.a,null,"Remember me")),l.a.createElement(k.a.Item,q,l.a.createElement(I.a,{type:"primary",htmlType:"submit"},"Submit")))))};function B(e){var t=e.children,a=Object(s.a)(e,["children"]);return l.a.createElement(i.b,Object.assign({},a,{render:function(){return localStorage.getItem("isAuth")?t:l.a.createElement(i.a,{to:"/login"})}}))}var L=function(){return l.a.createElement(o.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"login",component:F}),l.a.createElement(B,{path:"/",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[183,1,2]]]);