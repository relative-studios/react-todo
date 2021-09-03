(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),s=a.n(r),c=(a(60),a(15)),l=a(5),i=a(32),d=a.n(i),m=a(26),u=a.n(m),p=function(e){e?u.a.defaults.headers.common.Authorization=e:delete u.a.defaults.headers.common.Authorization},h=function(e){return{type:"SET_CURRENT_USER",payload:e}},f=function(){return function(e){localStorage.removeItem("jwtToken"),p(!1),window.location.replace("/")}},v=a(4),E=a(18),b=a(52),g=a(10),N=a(83),y={isAuthenticated:!1,user:{},loading:!1},w={},k=a(23),O={todos:[]},x=Object(E.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(g.a)(Object(g.a)({},e),{},{isAuthenticated:!N(t.payload),user:t.payload});case"USER_LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a={};switch(t.type){case"SET_TODOS":return Object(g.a)(Object(g.a)({},e),{},{todos:t.payload});case"UPDATE_STATUS":return(a=Object(g.a)({},e.todos[t.payload.index])).todoItem.status.title=t.payload.title,a.todoItem.status.background=t.payload.background,Object(g.a)(Object(g.a)({},e),{},{todos:[].concat(Object(k.a)(e.todos.slice(0,t.payload.index)),[a],Object(k.a)(e.todos.slice(t.payload.index+1)))});case"UPDATE_DUEDATE":return(a=Object(g.a)({},e.todos[t.payload.index])).todoItem.duedate=t.payload.duedate,Object(g.a)(Object(g.a)({},e),{},{todos:[].concat(Object(k.a)(e.todos.slice(0,t.payload.index)),[a],Object(k.a)(e.todos.slice(t.payload.index+1)))});case"DELETE_TODO":var n=Object(k.a)(e.todos);return Object(g.a)(Object(g.a)({},e),{},{todos:n.filter((function(e){return e._id!==t.payload.id}))});case"ADD_TODO":return Object(g.a)(Object(g.a)({},e),{},{todos:[t.payload.todo].concat(Object(k.a)(e.todos))});default:return e}}}),j=[b.a],T=Object(E.e)(x,{},Object(E.d)(E.a.apply(void 0,j))),D=a(6),S=a(7),I=a(9),C=a(8),U=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(){return Object(D.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row h-100"},o.a.createElement("div",{className:"col-6 offset-3"},o.a.createElement("div",{className:"d-flex h-100"},o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"card w-100"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h2",{className:"text-center"},"Welcome!")),o.a.createElement("div",{className:"card-body text-center"},o.a.createElement(c.b,{to:"/register",className:"btn btn-large btn-primary m-2"},"Register"),o.a.createElement(c.b,{to:"/login",className:"btn btn-large btn-info m-2"},"Log In"))))))))}}]),a}(n.Component),A=a(25),P=a(17),R=a.n(P),_=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(A.a)({},e.target.id,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t={username:n.state.username,name:n.state.name,email:n.state.email,password:n.state.password,password2:n.state.password2};n.props.registerUser(t,n.props.history)},n.state={username:"",name:"",email:"",password:"",password2:"",errors:{}},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentDidUpdate",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.state.errors;return o.a.createElement("div",{className:"row h-100"},o.a.createElement("div",{className:"col-10 offset-1 col-md-6 offset-md-3 col-xl-4 offset-xl-4 text-center"},o.a.createElement("div",{className:"d-flex h-100"},o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"card w-100"},o.a.createElement("div",{className:"card-body"},o.a.createElement(c.b,{to:"/",className:"btn-flat waves-effect"},"Back to home"),o.a.createElement("div",{className:"col-12"},o.a.createElement("h4",null,"Register below"),o.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",o.a.createElement(c.b,{to:"/login"},"Log in"))),o.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:R()("form-control","mb-2",{invalid:e.username}),onChange:this.onChange,value:this.state.username,error:e.username,id:"username",type:"text",placeholder:"Username"}),o.a.createElement("input",{className:R()("form-control","mb-2",{invalid:e.name}),onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",placeholder:"Name"}),o.a.createElement("input",{className:R()("form-control","mb-2",{invalid:e.email}),onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",placeholder:"Email"}),o.a.createElement("input",{className:R()("form-control","mb-2",{invalid:e.password}),onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",placeholder:"Password"}),o.a.createElement("input",{className:R()("form-control","mb-2",{invalid:e.password2}),onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",placeholder:"Confirm Password"}),o.a.createElement("span",{className:"text-danger"},e.password2)),o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{type:"submit",className:"btn btn-large btn-info"},"Sign up")))))))))}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(n.Component),L=Object(v.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){u.a.post("https://simpletaskerapp.herokuapp.com/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(l.g)(_)),z=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(A.a)({},e.target.id,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password};n.props.loginUser(t)},n.state={username:"",password:"",errors:{}},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentDidUpdate",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.state.errors;return o.a.createElement("div",{className:"row h-100"},o.a.createElement("div",{className:"col-10 offset-1 col-md-6 offset-md-3 col-xl-4 offset-xl-4 text-center"},o.a.createElement("div",{className:"d-flex h-100"},o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"card w-100"},o.a.createElement("div",{className:"card-body"},o.a.createElement(c.b,{to:"/",className:"btn-flat waves-effect"},"Back to home"),o.a.createElement("div",{className:"col-12"},o.a.createElement("h4",null,"Login below"),o.a.createElement("p",{className:"text-secondary text-darken-1"},"Don't have an account? ",o.a.createElement(c.b,{to:"/register"},"Register"))),o.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:R()("form-control","mb-2",{invalid:e.usernameNotfound}),onChange:this.onChange,value:this.state.username,error:e.username,id:"username",type:"text",placeholder:"Username"}),o.a.createElement("span",{className:"red-text"},e.usernameNotfound),o.a.createElement("input",{className:R()("form-control",{invalid:e.password||e.passwordincorrect}),onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",placeholder:"Password"}),o.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),o.a.createElement("div",{className:"form-group text-center"},o.a.createElement("button",{type:"submit",className:"btn btn-large btn-info"},"Login")))))))))}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(n.Component),B=Object(v.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){u.a.post("https://simpletaskerapp.herokuapp.com/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),p(a);var n=d()(a);t(h(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(z),W=a(19),G=a(20);var M=function(){return o.a.createElement("div",{className:"heading h-100 w-100 text-center d-flex"},o.a.createElement("nav",{className:"w-100 bg-secondary flex-container"},o.a.createElement("a",{href:"profile",className:"profile-nav custom-nav-link hide-mobile my-2"},o.a.createElement(W.a,{icon:G.e,size:"2x",color:"white",className:"pointer"})),o.a.createElement("div",{className:"text-white right-0"},o.a.createElement("a",{href:"profile",className:"profile-nav hide-desktop custom-nav-link my-2"},o.a.createElement(W.a,{icon:G.e,size:"2x",color:"white",className:"pointer"})),o.a.createElement("a",{href:"/dashboard",className:"custom-nav-link m-2"},o.a.createElement(W.a,{icon:G.b,size:"2x",color:"white",className:"pointer"})),o.a.createElement("a",{href:"/todos",className:"custom-nav-link my-2"},o.a.createElement(W.a,{icon:G.a,size:"2x",color:"white",className:"pointer"})))))},J=function(){return o.a.createElement("footer",{id:"sticky-footer",className:"page-footer font-small bg-dark py-3"},o.a.createElement("div",{className:"footer-copyright text-center text-white"},o.a.createElement("strong",null,"\xa9 2020 Copyright: RS")))},F=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).handleClickOutside=function(e){n.node.contains(e.target)||n.toggleOptions(!1)},n.updateTodoStatus=function(e,t){var a=n.props.todos.findIndex((function(e){return e._id===n.state.id}));T.dispatch(function(e,t,a){return{type:"UPDATE_STATUS",payload:{index:e,title:t,background:a}}}(a,e,t));var o=new URL("https://simpletaskerapp.herokuapp.com/api/todos/edit-status");o.searchParams.append("id",n.state.id),o.searchParams.append("title",e),o.searchParams.append("background",t),fetch(o,{method:"PUT"}).then((function(e){return e})).catch((function(e){console.log(e)}))},n.toggleOptions=function(e){n.setState({optionsActive:e})},n.setOption=function(e){n.setState({status:e.title}),n.setState({optionsBackground:e.background}),n.setState({optionsActive:!1}),n.updateTodoStatus(e.title,e.background)},n.renderOptions=function(){var e=[];return n.state.options.forEach((function(t){e.push(o.a.createElement("div",{className:"overlay status-option bg-".concat(t.background),key:t.title,onClick:function(){return n.setOption(t)}},t.title))})),e},n.state={status:e.status.title||"-",options:e.options,optionsActive:!1,optionsBackground:e.status.background,id:e.id},n}return Object(S.a)(a,[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside,!1)}},{key:"componentWillUnmount",value:function(){document.addEventListener("mousedown",this.handleClickOutside,!1)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"position-relative h-100 status",ref:function(t){return e.node=t}},o.a.createElement("div",{onClick:function(t){return e.toggleOptions(!0)},className:"w-100 h-100 text-center status-overlay bg-".concat(this.state.optionsBackground," ").concat(this.state.optionsActive?"hidden":"")},this.state.status),o.a.createElement("div",{className:"status-options ".concat(this.state.optionsActive?"":"hidden")},this.renderOptions()))}}]),a}(n.Component),H=Object(v.b)((function(e){return{todos:e.todos.todos}}),{})(F),V=a(53),K=a.n(V),Y=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).updateTodoDuedate=function(e){var t=n.props.todos.findIndex((function(e){return e._id===n.state.id}));T.dispatch(function(e,t){return{type:"UPDATE_DUEDATE",payload:{index:e,duedate:t}}}(t,e));var a=new URL("https://simpletaskerapp.herokuapp.com/api/todos/edit-duedate");a.searchParams.append("id",n.state.id),a.searchParams.append("duedate",e),fetch(a,{method:"PUT"}).then((function(e){return e})).catch((function(e){console.log(e)}))},n.handleUpdateDuedate=function(e){n.setState({duedate:e})},n.state={duedate:e.duedate,id:e.id},n}return Object(S.a)(a,[{key:"render",value:function(){var e,t=this;return e=""===this.state.duedate?"":new Date(this.state.duedate),o.a.createElement(K.a,{value:e,clearIcon:null,calendarIcon:null,className:"date-picker",onChange:function(e){t.handleUpdateDuedate(e),t.updateTodoDuedate(e)}})}}]),a}(n.Component),$=Object(v.b)((function(e){return{todos:e.todos.todos}}),{})(Y),q=(a(100),[{title:"-",background:"light"},{title:"in progress",background:"primary"},{title:"complete",background:"success"}]),Q=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).handleDeleteTodoItem=function(e){var t=new URL("https://simpletaskerapp.herokuapp.com/api/todos/delete");t.searchParams.append("id",e),fetch(t,{method:"PUT"}).then((function(e){return e.json()})).then((function(){T.dispatch(function(e){return{type:"DELETE_TODO",payload:{id:e}}}(n.props.todo._id))})).catch((function(e){console.log(e)}))},n.updateTodoTitle=function(){var e=new URL("https://simpletaskerapp.herokuapp.com/api/todos/edit-title");e.searchParams.append("id",n.props.todo._id),e.searchParams.append("todoTitle",n.state.todoTitle),fetch(e,{method:"PUT"}).then((function(e){return e})).catch((function(e){console.log(e)}))},n.updateTodoDuedate=function(){var e=new URL("https://simpletaskerapp.herokuapp.com/api/todos/edit-duedate");e.searchParams.append("id",n.props.todo._id),e.searchParams.append("duedate",n.state.duedate),fetch(e,{method:"PUT"}).then((function(e){return e})).catch((function(e){console.log(e)}))},n.handleToggleInput=function(){var e=n.state.isInput;n.setState({isInput:!n.state.isInput}),(e=!e)||n.updateTodoTitle()},n.state={todoTitle:e.todo.todoItem.title,isInput:!1,duedate:e.todo.todoItem.duedate,status:e.todo.todoItem.status||"-"},n}return Object(S.a)(a,[{key:"onTodoTitleChange",value:function(e){this.setState({todoTitle:e})}},{key:"render",value:function(){var e,t=this,a=this.props.todo;return e=this.state.isInput?o.a.createElement("input",{className:"w-100 todo-item .text-truncate d-block form-control border-0",value:this.state.todoTitle,onChange:function(e){return t.onTodoTitleChange(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),t.handleToggleInput())},onMouseOut:function(e){return t.handleToggleInput()}}):o.a.createElement("p",{className:"w-100 todo-item .text-truncate d-block form-control border-0"},this.state.todoTitle),o.a.createElement("div",{className:"clearfix todo"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-5 col-lg-7"},o.a.createElement("div",{className:"has-overlay w-100"},o.a.createElement("div",{className:"overlay h-100 ".concat(this.state.isInput?"d-none":"d-block")},o.a.createElement(W.a,{icon:G.c,size:"sm",color:"secondary",className:"pointer position-absolute img-fluid hover-icon",onClick:this.handleToggleInput})),e)),o.a.createElement("div",{className:"col-3 col-lg-2 h-100 my-auto"},o.a.createElement(H,{status:this.state.status,options:q,id:a._id})),o.a.createElement("div",{className:"col-3 col-lg-2 px-0 my-auto d-flex"},o.a.createElement("div",{className:"flex-center w-100"},o.a.createElement($,{duedate:this.state.duedate,id:a._id}))),o.a.createElement("div",{className:"col-1 ml-auto d-block"},o.a.createElement(W.a,{icon:G.d,size:"lg",color:"danger",className:"float-right text-danger pointer m-2 pr-1",onClick:function(){return t.handleDeleteTodoItem(a._id)}}))))}}]),a}(n.Component),X=Object(v.b)((function(e){return{todos:e.todos.todos}}),{})(Q),Z=(a(101),function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).handleAddTodoItem=function(e){var t=new URL("https://simpletaskerapp.herokuapp.com/api/todos/add"),a={task:e,userId:n.props.userId};fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){T.dispatch(function(e){return{type:"ADD_TODO",payload:{todo:e}}}(e))})).catch((function(e){console.log(e)}))},n.state={isDisabled:!0},n}return Object(S.a)(a,[{key:"render",value:function(){var e=this,t=o.a.createRef(),a=function(){var a=t.current.value;a.length<=3?e.setState({isDisabled:!0}):a.length>3&&e.setState({isDisabled:!1})};return o.a.createElement("form",{className:"w-100",onSubmit:function(n){n.preventDefault(),e.handleAddTodoItem(t.current.value),n.currentTarget.reset(),a()},onChange:a},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-10 mb-2"},o.a.createElement("div",{className:"mx-3 mx-sm-0"},o.a.createElement("input",{type:"text",className:"form-control",ref:t,placeholder:"Enter a new task"}))),o.a.createElement("div",{className:"col-12 col-md-2 mb-2"},o.a.createElement("div",{className:"mx-3 mx-sm-0"},o.a.createElement("button",{className:"w-100 btn btn-info ".concat(this.state.isDisabled?"disabled":""),type:"submit",value:"Add task",disabled:this.state.isDisabled},"Add Task")))))}}]),a}(n.Component)),ee=Object(v.b)((function(e){return{userId:e.auth.user.username}}))(Z),te=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(D.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={userId:"",todos:[]},e.renderTodoBuckets=function(){var t=q.map((function(e){return e.title})),a=[],n=[];return t.forEach((function(t){a.push(e.props.todos.filter((function(e){return e.todoItem.status.title===t})))})),a.forEach((function(e){if(e.length){var t=[];e.forEach((function(e){t.push(o.a.createElement(X,{key:e.todoItem.id,todo:e}))})),n.push(o.a.createElement("div",{className:"row",key:e[0].todoItem.id},o.a.createElement("div",{className:"mx-3 mx-sm-0 w-100"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"mx-3 mx-sm-0 w-100"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-5 col-lg-7"},o.a.createElement("p",{className:"todo-header capitalize"},"-"===e[0].todoItem.status.title?"Todo":e[0].todoItem.status.title)),o.a.createElement("div",{className:"col-3 col-lg-2 px-0 h-100 my-auto"},o.a.createElement("p",{className:"todo-header rounded-header left"},"Status")),o.a.createElement("div",{className:"col-3 col-lg-2 px-0 my-auto d-block"},o.a.createElement("p",{className:"todo-header rounded-header right"},"Due Date")),o.a.createElement("div",{className:"col-1 ml-auto d-block"})))),t))),t=[]}})),n},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e;T.dispatch((e=this.props.userId,function(t){var a=new URL("https://simpletaskerapp.herokuapp.com/api/todos");a.searchParams.append("userId",e),fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){t({type:"SET_TODOS",payload:e})})).catch((function(e){console.log(e)}))}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"py-3 text-center"},o.a.createElement("h1",{className:"mb-0 pb-0"},"TODOS")),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(ee,{addTodoItem:this.handleAddTodoItem,user:this.state.userId})),this.renderTodoBuckets()))}}]),a}(n.Component),ae=Object(v.b)((function(e){return{userId:e.auth.user.username,todos:e.todos.todos}}),{})(te),ne=a(54),oe=Object(v.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(ne.a)(e,["component","auth"]);return o.a.createElement(l.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?o.a.createElement(t,e):o.a.createElement(l.a,{to:"/login"})}}))})),re=(a(102),function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(D.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:{}},e.onLogoutClick=function(e){e.preventDefault(),f()},e.getLastWeeksTodos=function(t){var a=new URLSearchParams;a.set("userId",t),fetch("https://simpletaskerapp.herokuapp.com/api/todos/last-week",{method:"GET",searchParams:a}).then((function(e){return e.json()})).then((function(t){e.setState({todos:t})})).catch((function(e){console.log(e)}))},e.renderList=function(t){var a=[];return e.state.todos[t]&&e.state.todos[t].forEach((function(e){a.push(o.a.createElement("li",{className:"list-group-item",key:e.todoItem.id},e.todoItem.title))})),a},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.getLastWeeksTodos(this.props.auth.user.username)}},{key:"render",value:function(){var e=this.props.auth.user,t=this.state.todos.pastDue,a=this.state.todos.completed;return t&&(t=t.length),a&&(a=a.length),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"row mb-4"},o.a.createElement("h3",{className:"text-center w-100"},"Hello ",e.name,", Here's last week at a glance:")),o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-12 col-md-6 d-flex align-items-stretch"},o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img-top",src:"completed.jpg",alt:"image"}),o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("h5",{className:"card-title"},"".concat(a," ").concat(a>1?"Tasks":"Task")," completed"),o.a.createElement("p",{className:"card-text"},"Nice going! You were able to complete 7 out of the 8 tasks you created."),o.a.createElement("ul",{className:"list-group"},this.renderList("completed"))))),o.a.createElement("div",{className:"col-12 col-md-6 d-flex align-items-stretch"},o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img-top",src:"past-due.jpg",alt:"image"}),o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("h5",{className:"card-title"},"".concat(t," ").concat(t>1?"Tasks":"Task")," Overdue"),o.a.createElement("p",{className:"card-text"},"We can't always get to things on time, that's okay! Time to reschedule."),o.a.createElement("ul",{className:"list-group"},this.renderList("pastDue")))))),o.a.createElement("div",{className:"row d-flex justify-content-center mt-3"},o.a.createElement("a",{href:"/todos",className:"btn btn-info text-center mx-2"},"Go to Tasks"),o.a.createElement("button",{className:"btn btn-warning text-center mx-2",onClick:f()},"Logout")))))}}]),a}(n.Component)),se=Object(v.b)((function(e){return{auth:e.auth}}),{logoutUser:f})(re);a(103);function ce(){var e=Object(v.c)((function(e){return e.auth.user})),t=(e.name,e.username),a=t.slice(0,1);return console.log(a),o.a.createElement("div",{className:"h-100"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row h-100"},o.a.createElement("div",{className:"col-lg-4 offset-lg-4 col-md-6 offset-md-3"},o.a.createElement("div",{className:"d-flex justify-content-center align-items-center h-100"},o.a.createElement("div",{className:"card p-3 shadow-lg"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"profile-round d-flex justify-content-center align-items-center"},a),o.a.createElement("div",{className:"card-title text-center"},o.a.createElement("h5",null,t)))))))))}var le=function(){if(localStorage.jwtToken){var e=localStorage.jwtToken;p(e);var t=d()(e);T.dispatch(h(t));var a=Date.now()/1e3;t.exp<a&&(T.dispatch(f()),window.location.href="./login")}return o.a.createElement(v.a,{store:T},o.a.createElement(c.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"row h-100"},o.a.createElement("div",{className:"nav-container pr-0 position-relative"},o.a.createElement(M,{className:"header h-100 position-fixed"})),o.a.createElement("div",{className:"body-container pl-0 h-100 display-flex p-3"},o.a.createElement("div",{className:"h-100 w-100 mobile-layout-fix"},o.a.createElement(l.b,{exact:!0,path:"/",component:U}),o.a.createElement(l.b,{exact:!0,path:"/register",component:L}),o.a.createElement(l.b,{exact:!0,path:"/login",component:B}),o.a.createElement(l.d,null,o.a.createElement(oe,{exact:!0,path:"/dashboard",component:se}),o.a.createElement(oe,{exact:!0,path:"/todos",component:ae}),o.a.createElement(oe,{exact:!0,path:"/profile",component:ce}))))),o.a.createElement(J,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(104);s.a.render(o.a.createElement(v.a,{store:T},o.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports=a(105)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.d81dbbc3.chunk.js.map