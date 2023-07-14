(function(){"use strict";var t={6418:function(t,e,s){var a,r,i=s(7195),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavbarComponent"),e("router-view"),e("CarritoComponent"),e("FooterComponent")],1)},n=[],l=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticClass:"navbar navbar-expand-lg fixed-top navbar-scroll"},[e("div",{staticClass:"container-fluid"},[e("router-link",{attrs:{to:{name:"home"}}},[e("b-navbar-brand",[t._v("App de pedidos")])],1),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"#"}},[t._v("Link")]),e("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[t.storeState.logged?e("b-nav-item-dropdown",{attrs:{"no-caret":"",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("img",{staticClass:"avatar",attrs:{src:t.storeState.user.avatar}})]},proxy:!0}],null,!1,1197785358)},[e("b-dropdown-item",[e("router-link",{attrs:{to:{name:"user"}}},[t._v(" Profile ")])],1),e("b-dropdown-item",{on:{click:t.signOut}},[t._v("Sign Out")])],1):e("b-nav-item",{attrs:{right:""}},[e("router-link",{attrs:{to:{name:"login"}}},[e("b-button",{staticClass:"nav-btn"},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"person-circle"}})],1)],1)],1),e("b-nav-item",{attrs:{right:""}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-cart",modifiers:{"sidebar-cart":!0}}],staticClass:"nav-btn"},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart"}}),t.storeState.user.cart.length>0?e("div",{staticClass:"cart-dot"},[e("p",{staticClass:"cart-total"},[t._v(" "+t._s(t.storeState.user.cart.length)+" ")])]):t._e()],1)],1)],1)],1)],1)])],1)},c=[],d=(s(7658),{name:"NavbarComponent",data(){return{storeState:this.$store.state}},methods:{signOut(){this.$store.dispatch("logoutUser"),this.$router.push({name:"home"})}}}),m=d,u=s(1001),p=(0,u.Z)(m,l,c,!1,null,"ca7a0b5e",null),v=p.exports,f=function(){var t=this,e=t._self._c;return e("div",[e("b-sidebar",{attrs:{id:"sidebar-cart",title:"Carrito",right:"",shadow:""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"d-flex bg-dark text-light align-items-center px-3 py-2"},[e("strong",{staticClass:"mr-auto"},[t._v("Total: ")]),t._v(" "+t._s(t._f("toPrice")(t.getCartPrice))+" "),e("b-button",{attrs:{id:"buy-btn"},on:{click:t.buy}},[t._v("Pagar")])],1)]},proxy:!0}])},[0==t.getCartItemsQ?e("div",{staticClass:"px-3 py-2"},[e("p",[t._v("No hay items en su carrito")])]):e("div",t._l(t.getUserCart,(function(s,a){return e("b-card",{key:a,staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[e("b-row",{attrs:{"no-gutters":""}},[e("b-col",{attrs:{md:"6"}},[e("b-card-img",{staticClass:"rounded-0",attrs:{src:s.img}})],1),e("b-col",{attrs:{md:"6"}},[e("b-card-body",{attrs:{title:s.name}},[e("b-card-text",[e("b-button-group",{staticClass:"float-center"},[e("b-button",{on:{click:function(e){return t.subtract(s)}}},[t._v("-")]),e("b-button",{attrs:{disabled:""}},[t._v(t._s(s.q))]),e("b-button",{on:{click:function(e){return t.add(s)}}},[t._v("+")]),e("b-button",{on:{click:function(e){return t.deleteItem(s)}}},[e("b-icon",{attrs:{icon:"trash","aria-hidden":"true"}})],1)],1)],1)],1)],1)],1)],1)})),1)])],1)},h=[],g=s(408),b={filters:{toPrice(t){return"$ "+t.toFixed(2)}}},C=b,_=(0,u.Z)(C,a,r,!1,null,null,null),y=_.exports,I={name:"CarritoComponent",components:{},mixins:[y],data(){return{loading:!0}},computed:{...(0,g.Se)(["getUserCart","getCartItemsQ","getCartPrice","getLogged"])},methods:{add(t){this.$store.dispatch("updateItemAdd",t).then((()=>{this.getLogged&&this.$store.dispatch("editUserInfo",this.$store.state.user)}))},subtract(t){this.$store.dispatch("updateItemSubs",t).then((()=>{this.getLogged&&this.$store.dispatch("editUserInfo",this.$store.state.user)}))},deleteItem(t){this.$store.dispatch("deleteItemFromCart",t.id).then((()=>{this.getLogged&&this.$store.dispatch("editUserInfo",this.$store.state.user)}))},buy(){console.log("iniciar compra...")}}},$=I,k=(0,u.Z)($,f,h,!1,null,"7f4a917c",null),x=k.exports,w=function(){var t=this;t._self._c;return t._m(0)},U=[function(){var t=this,e=t._self._c;return e("div",[e("footer",{staticClass:"footer mt-auto py-3 bg-dark"},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-label"},[e("a",{attrs:{href:"/#"}},[t._v("Back to top")]),t._v(" · © 2023 Carolina Bottino, Inc. · "),e("a",{attrs:{href:"/#"}},[t._v("Privacy")]),t._v(" · "),e("a",{attrs:{href:"/#"}},[t._v("Terms")])])])])])}],P={name:"FooterComponent"},q=P,S=(0,u.Z)(q,w,U,!1,null,"1173d1e6",null),T=S.exports,A={name:"App",components:{NavbarComponent:v,CarritoComponent:x,FooterComponent:T}},N=A,Z=(0,u.Z)(N,o,n,!1,null,null,null),O=Z.exports,L=s(4359),E=s(7244),F=s(2241),B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[t.loading?e("div",{staticClass:"spinner"},[t._m(0)]):e("div",[t.getItems.length>0?e("div",[e("ListadoComponent",{attrs:{items:t.getItems,itemsCart:t.storeState.user.cart},on:{addToCart:t.onAddToCart}})],1):e("div",{staticClass:"spinner"},[e("h1",{staticClass:"no-items"},[t._v("NO ITEMS IN STOCK YET")])])])])},j=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spinner-border text-danger",attrs:{role:"status",id:"spinner"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],D=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"cards"},t._l(t.items,(function(s,a){return e("div",{key:a,staticClass:"card"},[e("img",{staticStyle:{opacity:"1"},attrs:{src:s.img,alt:s.name}}),e("header",[e("h4",[t._v(t._s(s.name))]),e("p",[t._v(t._s(t._f("toPrice")(s.price)))])]),e("footer",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-info",modifiers:{"modal-info":!0}}],attrs:{disabled:s.stock<0},on:{click:function(e){return t.showInfo(s)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"info-lg"}})],1),t.isInCart(s)?e("b-button",{staticClass:"icon-check"},[e("b-icon",{attrs:{icon:"check-lg"}})],1):e("b-button",{on:{click:function(e){return t.addToCart(s)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart-plus"}})],1)],1)])})),0),e("InfoComponent",{attrs:{item:t.item},on:{addToCart:t.addToCart}})],1)},M=[],R=function(){var t=this,e=t._self._c;return e("div",[e("b-modal",{attrs:{id:"modal-info",centered:"",title:t.item.name},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-img",{attrs:{rounded:"top",src:t.item.img}})],1)]},proxy:!0},{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-button-group",{staticClass:"float-left"},[e("b-button",{attrs:{disabled:1==t.quantity},on:{click:t.subtract}},[t._v("-")]),e("b-button",{attrs:{disabled:""}},[t._v(t._s(t.quantity))]),e("b-button",{attrs:{disabled:t.quantity>=t.item.stock},on:{click:t.add}},[t._v("+")])],1),e("b-button",{staticClass:"float-right",on:{click:function(e){return t.addToCart()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart-plus"}})],1)],1)]},proxy:!0}])},[e("h3",[t._v(t._s(t.item.name))]),e("p",{staticClass:"my-4"},[t._v(t._s(t._f("toPrice")(t.item.price)))]),e("p",[t._v(t._s(t.item.desc))])])],1)},Q=[],G={name:"InfoComponent",props:{item:{Object:Object,required:!0}},mixins:[y],data(){return{quantity:1}},methods:{addToCart(){let t={id:this.item.id,name:this.item.name,img:this.item.img,price:this.item.price,q:this.quantity};this.$emit("addToCart",t),this.$bvModal.hide("modal-info"),this.quantity=1},add(){this.quantity++},subtract(){0==this.quantity?this.quantity=0:this.quantity--}}},X=G,Y=(0,u.Z)(X,R,Q,!1,null,"6e81a98e",null),H=Y.exports,K={name:"ListadoComponent",components:{InfoComponent:H},props:{items:{Array:Array,required:!0},itemsCart:{Array:Array,required:!0}},mixins:[y],data(){return{item:{id:"",name:"",img:"",price:0,desc:""}}},methods:{addToCart(t){let e={id:t.id,name:t.name,img:t.img,price:t.price,q:t.q?t.q:1};this.$emit("addToCart",e)},showInfo(t){this.item=t},isInCart(t){return this.$props.itemsCart.find((e=>e.id===t.id))}}},W=K,z=(0,u.Z)(W,D,M,!1,null,"730cfaa6",null),J=z.exports,V={name:"HomePage",components:{ListadoComponent:J},data(){return{loading:!0,storeState:this.$store.state}},computed:{...(0,g.Se)("items",["getItems"])},created(){this.$store.dispatch("items/getItems").then(this.loading=!1).catch((t=>console.log("error getting items: ",t)))},methods:{onAddToCart(t){this.$store.dispatch("addItemToCart",t)}}},tt=V,et=(0,u.Z)(tt,B,j,!1,null,"d53f7bda",null),st=et.exports,at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("div",{staticClass:"top"}),t.errors.length>0?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e("p",[t._v("Ups! Algo sucedió al intentar registrarte...")]),e("ul",t._l(t.errors,(function(s,a){return e("li",{key:a},[t._v(t._s(s))])})),0)]):t._e(),e("LoginComponent",{on:{submit:t.onLoginSubmit,register:t.onRegisterSubmit}})],1)},rt=[],it=function(){var t=this,e=t._self._c;return e("div",[e("b-container",{attrs:{fluid:""}},[e("b-row",[t.errors.length>0?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e("p",[t._v("Ups! Algunos campos no son como esperamos...")]),e("ul",t._l(t.errors,(function(s,a){return e("li",{key:a},[t._v(t._s(s))])})),0)]):t._e()]),e("b-row",[e("b-col"),e("b-col",[t.show?e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"input-group-email",label:"Email:","label-for":"inputEmail",description:"Nunca vamos a compartir tu email con otras compañías."}},[e("b-form-input",{attrs:{id:"inputEmail",type:"email",placeholder:"caro@mail.com",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-pass",label:"Password:","label-for":"inputPass"}},[e("b-form-input",{attrs:{id:"inputPass",placeholder:"caro1234",type:"password",required:""},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),e("b-form-group",{attrs:{id:"select-group-3"}},[e("p",[t._v(" ¿Aún no estás registrado? Registrate "),e("a",{attrs:{href:"#"},on:{click:t.changeForm}},[t._v("aquí.")])])]),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Ingresar")])],1):e("b-form",{on:{submit:t.onRegister}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Email:","label-for":"input-1",description:"Nunca vamos a compartir tu email con otras compañías."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Tu email, que será tu user",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Nombre y apellido:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"text",placeholder:"Tu nombre y apellido",required:""},model:{value:t.form.fullname,callback:function(e){t.$set(t.form,"fullname",e)},expression:"form.fullname"}})],1),e("b-form-group",{attrs:{id:"input-group-4",label:"Password:","label-for":"input-4"}},[e("b-form-input",{attrs:{id:"input-4",placeholder:"Ingresar contraseña",type:"password",required:""},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),e("b-form-group",{attrs:{id:"select-group-3"}},[e("p",[t._v(" ¿Ya tenés una cuenta? Ingresá "),e("a",{attrs:{href:"#"},on:{click:t.changeForm}},[t._v("aquí.")])])]),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Registrarse")])],1)],1),e("b-col")],1)],1)],1)},ot=[],nt={name:"LoginComponent",data(){return{form:{fullname:"",email:"",pass:""},show:!0,errors:[]}},methods:{onSubmit(t){t.preventDefault(),this.$emit("submit",this.form)},checkPassword(t){return!(t.length<8||t.length>31||!t.match(/[A-Z]/)||!t.match(/[0-9]/)||!t.match(/[.,:!?]/))},onRegister(t){this.errors=[],t.preventDefault(),this.checkPassword(this.form.pass)?this.$emit("register",this.form):this.errors.push("La contraseña debe tener una cantidad mínica de 8 dígitos, máxima de 31 dígitos, al menos 1 mayúcula, al menos 1 número y al menos 1 caracter especial.")},changeForm(){this.show=!this.show}}},lt=nt,ct=(0,u.Z)(lt,it,ot,!1,null,"50ed4905",null),dt=ct.exports,mt=s(306);const ut="https://649b334abf7c145d023a2086.mockapi.io/v1";var pt={getItems(){return mt.Z.get(`${ut}/items`)},getItemById(t){return mt.Z.get(`${ut}/items/${t}`)},createItem(t){return mt.Z.post(`${ut}/items`,t)},updateItem(t,e){return mt.Z.put(`${ut}/items/${t}`,e)},deleteItem(t){return mt.Z.delete(`${ut}/items/${t}`)},getUsers(){return mt.Z.get(`${ut}/users`)},getUserByMail(t){return mt.Z.get(`${ut}/users/${t}`)},createUser(t){return mt.Z.post(`${ut}/users`,t)},updateUser(t,e){return mt.Z.put(`${ut}/users/${t}`,e)}},vt={name:"LoginPage",components:{LoginComponent:dt},data(){return{errors:[]}},methods:{onLoginSubmit(t){this.errors=[],pt.getUsers().then((e=>{let s=e.data.find((e=>e.email===t.email));s?(this.$store.getters["getUserCart"].forEach((t=>{s.cart.find((e=>e.id==t.id))?s.cart.forEach((e=>{e.id==t.id&&(e.q=e.q+t.q)})):s.cart.push(t)})),this.$store.dispatch("loggingUser",s),this.$router.push({name:"user"})):this.errors.push("usuario o contraseña incorrectos... vuelva a intentar")}))},onRegisterSubmit(t){this.errors=[],pt.getUsers().then((e=>{let s=e.data.find((e=>e.email===t.email));s?this.errors.push("el email ya ha sido registrado, pruebe iniciar sesión con el mismo o crear una cuenta con un mail diferente"):this.saveNewUser(t)}))},saveNewUser(t){let e={fullname:t.fullname,pass:t.pass,email:t.email,role:"buyer",cart:this.$store.getters["getUserCart"]};this.$store.dispatch("createUser",e).then(this.$router.push({name:"user"})).catch((t=>{alert("error creando user: ",t)}))}}},ft=vt,ht=(0,u.Z)(ft,at,rt,!1,null,"aa64fe16",null),gt=ht.exports,bt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("h1",{staticClass:"user-header"},[t._v("Información de usuario")]),e("div",{staticClass:"col d-flex justify-content-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid rounded-start",attrs:{src:t.getUser.avatar,alt:"..."}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.getUser.fullname))]),t.edit?e("div",[e("div",[e("label",{attrs:{for:"fullname"}},[t._v("Fullname")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.fullname,expression:"user.fullname"}],attrs:{type:"text",id:"fullname",name:"fullname"},domProps:{value:t.user.fullname},on:{input:function(e){e.target.composing||t.$set(t.user,"fullname",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email",id:"email",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"pass"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.pass,expression:"user.pass"}],attrs:{type:"text",id:"pass",name:"pass"},domProps:{value:t.user.pass},on:{input:function(e){e.target.composing||t.$set(t.user,"pass",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"role"}},[t._v("Role")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.role,expression:"user.role"}],attrs:{id:"role"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"role",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"admin"}},[t._v("admin")]),e("option",{attrs:{value:"buyer"}},[t._v("buyer")])])]),e("div",[e("label",{attrs:{for:"fullname"}},[t._v("Avatar")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.avatar,expression:"user.avatar"}],attrs:{type:"text",id:"avatar",name:"avatar"},domProps:{value:t.user.avatar},on:{input:function(e){e.target.composing||t.$set(t.user,"avatar",e.target.value)}}})]),e("b-button",{on:{click:function(e){return t.editUser()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1)],1):e("div",[e("p",{staticClass:"card-text"},[t._v("email: "+t._s(t.getUser.email))]),e("p",{staticClass:"card-text"},[t._v("Password: "+t._s(t.getUser.pass))]),e("p",{staticClass:"card-text"},[t._v("role: "+t._s(t.getUser.role))]),e("b-button",{on:{click:function(e){return t.showEditMode()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"pencil"}})],1)],1)])])])])]),"admin"===t.getUser.role?e("div",{staticClass:"features-pannel"},[e("h3",[t._v("Tus items en venta")]),e("div",{staticClass:"new-item"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.createItem}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"plus-circle-dotted"}}),t._v(" Nuevo Item ")],1)]),e("TableComponent",{attrs:{headers:t.headersAdmin,items:t.itemsByUser,actions:t.actionsAdmin},on:{editItem:t.onEditItem,deleteItem:t.onDeleteItem}})],1):e("div",{staticClass:"features-pannel"},[e("h3",[t._v("Tu carrito de compras")]),t.getUserCart.length>0?e("div",[e("TableComponent",{attrs:{headers:t.headersBuyer,items:t.getUserCart,actions:t.actionsBuyer},on:{deleteItem:t.onDeleteItemFromCart}})],1):e("div",[e("h6",[t._v("No agregaste items a tu carrito aún")])])])])},Ct=[],_t=function(){var t=this,e=t._self._c;return e("div",[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._l(t.headers,(function(s,a){return e("th",{key:a},[t._v(t._s(s))])})),e("th",[t._v("actions")])],2)]),e("tbody",t._l(t.items,(function(s,a){return e("tr",{key:s.id},[e("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._l(t.headers,(function(a,r){return e("td",{key:r},["img"===a?[e("img",{staticClass:"img-fluid rounded-start",attrs:{src:s[a],alt:"..."}})]:[t._v(" "+t._s(s[a])+" ")]],2)})),t.actions?e("td",[t.actions.includes("edit")?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.editItem(s.id)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"pencil"}})],1):t._e(),t.actions.includes("delete")?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteItem(s.id)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"trash"}})],1):t._e()]):t._e()],2)})),0)])])},yt=[],It={name:"TableComponent",props:{headers:{Array:Array,required:!0},items:{Array:Array,required:!0},actions:{Array:Array}},methods:{editItem(t){this.$emit("editItem",t)},deleteItem(t){this.$emit("deleteItem",t)}}},$t=It,kt=(0,u.Z)($t,_t,yt,!1,null,"211922b8",null),xt=kt.exports,wt={name:"UserPage",data(){return{user:{fullname:"",pass:"",role:"",email:"",id:"",cart:[]},edit:!1,roles:["admin","buyer"],headersAdmin:["id","name","img","price","desc","stock"],actionsAdmin:["edit","delete"],headersBuyer:["id","name","img","price","q"],actionsBuyer:["delete"],editItem:{id:"",name:"",img:"",price:0,desc:"",stock:0}}},computed:{itemsByUser(){return this.$store.getters["items/getItemsByUser"](this.getUser.id)},...(0,g.Se)(["getUser","getUserCart"])},components:{TableComponent:xt},methods:{showEditMode(){this.user=this.getUser,this.edit=!0},editUser(){this.$store.dispatch("editUserInfo",this.user).then((()=>{alert("User info edited"),this.edit=!1})).catch((t=>{alert("error editando user: ",t)}))},createItem(){this.$router.push({name:"edit-item"})},onEditItem(t){this.$router.push({name:"edit-item",params:{id:t}})},onDeleteItem(t){this.$store.dispatch("items/deleteItem",t).then((()=>{alert("item deleted"),this.$store.dispatch("items/getItems")})).catch((t=>alert("error when deleting item: ",t)))},onDeleteItemFromCart(t){this.$store.dispatch("deleteItemFromCart",t).then(this.$store.dispatch("editUserInfo",this.$store.state.user)).catch((t=>alert("error deleting item from cart: ",t)))}}},Ut=wt,Pt=(0,u.Z)(Ut,bt,Ct,!1,null,"18127570",null),qt=Pt.exports,St=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},["admin"===t.storeState.user.role?e("div",[t.itemId?e("h1",{staticClass:"edit-header"},[t._v("Editar item "+t._s(t.itemId))]):e("h1",{staticClass:"edit-header"},[t._v("Crear nuevo item")]),e("div",{staticClass:"col d-flex justify-content-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-md-4"},[t.item.img?e("img",{staticClass:"img-fluid rounded-start",attrs:{src:t.item.img,alt:"..."}}):e("img",{staticClass:"img-fluid rounded-start",attrs:{src:"https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png",alt:"..."}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.item.name))]),e("div",[e("div",{staticClass:"row g-0"},[t._m(0),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.id,expression:"item.id"}],attrs:{type:"text",id:"id",name:"id",disabled:""},domProps:{value:t.item.id},on:{input:function(e){e.target.composing||t.$set(t.item,"id",e.target.value)}}})])]),e("div",{staticClass:"row g-0"},[t._m(1),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})])]),e("div",{staticClass:"row g-0"},[t._m(2),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.img,expression:"item.img"}],attrs:{type:"text",id:"img",name:"img"},domProps:{value:t.item.img},on:{input:function(e){e.target.composing||t.$set(t.item,"img",e.target.value)}}})])]),e("div",{staticClass:"row g-0"},[t._m(3),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.item.price,expression:"item.price",modifiers:{number:!0}}],attrs:{type:"number",id:"price",name:"price"},domProps:{value:t.item.price},on:{input:function(e){e.target.composing||t.$set(t.item,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"row g-0"},[t._m(4),e("div",{staticClass:"col"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.desc,expression:"item.desc"}],attrs:{type:"text",id:"desc",name:"desc"},domProps:{value:t.item.desc},on:{input:function(e){e.target.composing||t.$set(t.item,"desc",e.target.value)}}})])]),e("div",{staticClass:"row g-0"},[t._m(5),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.item.stock,expression:"item.stock",modifiers:{number:!0}}],attrs:{type:"number",id:"stok",name:"stock"},domProps:{value:t.item.stock},on:{input:function(e){e.target.composing||t.$set(t.item,"stock",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"row g-0"},[t.itemId?e("b-button",{on:{click:function(e){return t.editItem()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1):e("b-button",{on:{click:function(e){return t.createItem()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1)],1)])])])])])])]):e("div",[e("h1",{staticClass:"edit-header"},[t._v("NOT ALLOWED")])])])},Tt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"email"}},[t._v("id")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"fullname"}},[t._v("name")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"img"}},[t._v("image")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"price"}},[t._v("price")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"desc"}},[t._v("description")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"stock"}},[t._v("stock")])])}],At={name:"EditItemPage",data(){return{storeState:this.$store.state,itemId:this.$route.params.id,item:{id:"",name:"",img:"",price:0,desc:"",stock:0,user:this.$store.state.user.id}}},created(){this.itemId&&(this.item=this.$store.getters["items/getItemById"](this.itemId))},methods:{editItem(){this.$store.dispatch("items/updateItem",this.item).then(alert("item editado ok")).catch((t=>alert("error updating item: ",t)))},createItem(){this.$store.dispatch("items/createItem",this.item).then(alert("item creado ok")).catch((t=>alert("error creating item: ",t)))}}},Nt=At,Zt=(0,u.Z)(Nt,St,Tt,!1,null,"314ffe37",null),Ot=Zt.exports,Lt=function(){var t=this;t._self._c;return t._m(0)},Et=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("h1",{staticClass:"header"},[t._v("PAGE NOT FOUND")])])}],Ft={name:"NotFoundPage"},Bt=Ft,jt=(0,u.Z)(Bt,Lt,Et,!1,null,"690f4639",null),Dt=jt.exports;i["default"].use(F.ZP);const Mt=[{path:"/",component:st,name:"home"},{path:"/login",component:gt,name:"login"},{path:"/user",component:qt,name:"user"},{path:"/item/:id",component:Ot,name:"edit-item"},{path:"/:pathMatch(.*)*",component:Dt,name:"not-found"}],Rt=new F.ZP({mode:"history",base:"/food_app/",routes:Mt});var Qt=Rt;const Gt={namespaced:!0,state:{items:[]},getters:{getItems:t=>t.items,getItemsByUser:t=>e=>t.items.filter((t=>t.user===e)),getItemById:t=>e=>t.items.find((t=>t.id===e))},mutations:{setItems:(t,e)=>{t.items=e}},actions:{getItems:t=>{pt.getItems().then((e=>{t.commit("setItems",e.data)}))},createItem:(t,e)=>{pt.createItem(e)},updateItem:(t,e)=>{pt.updateItem(e.id,e)},deleteItem:(t,e)=>{pt.deleteItem(e)}}};i["default"].use(g.ZP);var Xt=new g.ZP.Store({state:{user:{fullname:"",pass:"",role:"",email:"",id:"",cart:[]},logged:!1},getters:{getUser:t=>t.user,getLogged:t=>t.logged,getItemFromCart:t=>e=>t.user.cart.filter((t=>e===t.id)),getUserCart:t=>t.user.cart,getCartItemsQ:t=>t.user.cart.length,getCartPrice:t=>{let e=0;return t.user.cart.forEach((t=>{e+=t.price*t.q})),e},getUserItems:t=>t.items},mutations:{setUser:(t,e)=>{t.user=e},setLogged:(t,e)=>{t.logged=e},pushItemToCart:(t,e)=>{t.user.cart.push(e)},updateItemAdd:(t,e)=>{t.user.cart.forEach((t=>{t.id===e.id&&t.q++}))},updateItemSubs:(t,e)=>{t.user.cart.forEach((t=>{t.id===e.id&&(0==e.q?t.q=0:t.q--)}))},deleteItemFromCart:(t,e)=>{t.user.cart=t.user.cart.filter((t=>t.id!==e))}},actions:{createUser:(t,e)=>{pt.createUser(e).then((e=>{t.commit("setUser",e.data),t.commit("setLogged",!0)}))},loggingUser:(t,e)=>{pt.updateUser(e.id,e).then((e=>{t.commit("setUser",e.data),t.commit("setLogged",!0)}))},logoutUser:t=>{const e={fullname:"",pass:"",role:"",email:"",id:"",cart:[]};t.commit("setUser",e),t.commit("setLogged",!1)},editUserInfo:(t,e)=>{pt.updateUser(e.id,e).then((e=>{t.commit("setUser",e.data)}))},addItemToCart:(t,e)=>{0!==t.getters.getItemFromCart(e.id).length?t.commit("updateItemQ",e):t.commit("pushItemToCart",e)},deleteItemFromCart:(t,e)=>{t.commit("deleteItemFromCart",e)},updateItemAdd:(t,e)=>{t.commit("updateItemAdd",e)},updateItemSubs:(t,e)=>{t.commit("updateItemSubs",e)}},modules:{items:Gt}});s(7024);i["default"].config.productionTip=!1,i["default"].use(L.XG7),i["default"].use(E.X),new i["default"]({router:Qt,store:Xt,render:t=>t(O)}).$mount("#app")}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,i){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],i=t[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(n=!1,i<o&&(o=i));if(n){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,r,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,o=a[0],n=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(l)var d=l(s)}for(e&&e(a);c<o.length;c++)i=o[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},a=self["webpackChunkfood_app"]=self["webpackChunkfood_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(6418)}));a=s.O(a)})();
//# sourceMappingURL=app.48b4cd1a.js.map