(function(){"use strict";var t={7399:function(t,e,s){var r,a,i=s(7195),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavbarComponent"),e("router-view"),e("CarritoComponent"),e("FooterComponent")],1)},n=[],c=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticClass:"navbar navbar-expand-lg fixed-top navbar-scroll"},[e("div",{staticClass:"container-fluid"},[e("router-link",{attrs:{to:{name:"home"}}},[e("b-navbar-brand",[t._v("App de pedidos")])],1),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"#"}},[t._v("Link")]),e("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[t.storeState.logged?e("b-nav-item-dropdown",{attrs:{"no-caret":"",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("img",{staticClass:"avatar",attrs:{src:t.storeState.user.avatar}})]},proxy:!0}],null,!1,1197785358)},[e("b-dropdown-item",[e("router-link",{attrs:{to:{name:"user"}}},[t._v(" Profile ")])],1),e("b-dropdown-item",{on:{click:t.signOut}},[t._v("Sign Out")])],1):e("b-nav-item",{attrs:{right:""}},[e("router-link",{attrs:{to:{name:"login"}}},[e("b-button",{staticClass:"nav-btn"},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"person-circle"}})],1)],1)],1),e("b-nav-item",{attrs:{right:""}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-cart",modifiers:{"sidebar-cart":!0}}],staticClass:"nav-btn"},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart"}}),t.storeState.user.cart.length>0?e("div",{staticClass:"cart-dot"},[e("p",{staticClass:"cart-total"},[t._v(" "+t._s(t.storeState.user.cart.length)+" ")])]):t._e()],1)],1)],1)],1)],1)])],1)},l=[],d=(s(7658),{name:"NavbarComponent",data(){return{storeState:this.$store.state}},methods:{signOut(){this.$store.dispatch("logoutUser"),this.$router.push({name:"home"})}}}),m=d,u=s(1001),p=(0,u.Z)(m,c,l,!1,null,"ca7a0b5e",null),h=p.exports,v=function(){var t=this,e=t._self._c;return e("div",[e("b-sidebar",{attrs:{id:"sidebar-cart",title:"Carrito",right:"",shadow:""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"d-flex bg-dark text-light align-items-center px-3 py-2"},[e("strong",{staticClass:"mr-auto"},[t._v("Total: ")]),t._v(" "+t._s(t._f("toPrice")(t.getCartPrice))+" "),t.getLogged?e("div",[e("b-button",{attrs:{id:"buy-btn",disabled:0==t.getCartItemsQ},on:{click:t.buy}},[t._v(" Pagar ")])],1):e("div",[e("b-button",{attrs:{id:"buy-btn"},on:{click:t.login}},[t._v("Registrate ✨")])],1)])]},proxy:!0}])},[0==t.getCartItemsQ?e("div",{staticClass:"px-3 py-2"},[e("p",[t._v("No hay items en su carrito")])]):e("div",t._l(t.getUserCart,(function(s,r){return e("b-card",{key:r,staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[e("b-row",{attrs:{"no-gutters":""}},[e("b-col",{attrs:{md:"6"}},[e("b-card-img",{staticClass:"rounded-0",attrs:{src:s.img}})],1),e("b-col",{attrs:{md:"6"}},[e("b-card-body",{attrs:{title:s.name}},[e("b-card-text",[e("b-button-group",{staticClass:"float-center"},[e("b-button",{on:{click:function(e){return t.subtract(s)}}},[t._v("-")]),e("b-button",{attrs:{disabled:""}},[t._v(t._s(s.q))]),e("b-button",{on:{click:function(e){return t.add(s)}}},[t._v("+")]),e("b-button",{on:{click:function(e){return t.deleteItem(s)}}},[e("b-icon",{attrs:{icon:"trash","aria-hidden":"true"}})],1)],1)],1)],1)],1)],1)],1)})),1)])],1)},f=[],g=s(408),b={filters:{toPrice(t){return"$ "+t.toFixed(2)}}},_=b,C=(0,u.Z)(_,r,a,!1,null,null,null),y=C.exports,I={name:"CarritoComponent",components:{},mixins:[y],data(){return{loading:!0}},computed:{...(0,g.Se)(["getUserCart","getCartItemsQ","getCartPrice","getLogged"])},methods:{add(t){this.$store.dispatch("updateItemAdd",t).then((()=>{this.getLogged&&this.$store.dispatch("editUserInfo",this.$store.state.user)}))},subtract(t){this.$store.dispatch("updateItemSubs",t).then((()=>{this.getLogged&&this.$store.dispatch("editUserInfo",this.$store.state.user)}))},deleteItem(t){this.$store.dispatch("deleteItemFromCart",t.id).then((()=>{this.getLogged&&this.$store.dispatch("editUserInfo",this.$store.state.user)}))},buy(){console.log("iniciar compra..."),this.$router.push({name:"order"})},login(){this.$router.push({name:"login"})}}},$=I,k=(0,u.Z)($,v,f,!1,null,"6a781aa0",null),w=k.exports,x=function(){var t=this;t._self._c;return t._m(0)},U=[function(){var t=this,e=t._self._c;return e("div",[e("footer",{staticClass:"footer mt-auto py-3 bg-dark fixed-bottom"},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-label"},[e("a",{attrs:{href:"/#"}},[t._v("Back to top")]),t._v(" · © 2023 Carolina Bottino, Inc. · "),e("a",{attrs:{href:"/#"}},[t._v("Privacy")]),t._v(" · "),e("a",{attrs:{href:"/#"}},[t._v("Terms")])])])])])}],P={name:"FooterComponent"},q=P,S=(0,u.Z)(q,x,U,!1,null,"a6a507ee",null),T=S.exports,O={name:"App",components:{NavbarComponent:h,CarritoComponent:w,FooterComponent:T}},N=O,A=(0,u.Z)(N,o,n,!1,null,null,null),Z=A.exports,E=s(4359),F=s(7244),L=s(2241),B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[t.loading?e("div",{staticClass:"spinner"},[t._m(0)]):e("div",[t.getItems.length>0?e("div",[e("ListadoComponent",{attrs:{items:t.getItems,itemsCart:t.storeState.user.cart},on:{addToCart:t.onAddToCart}})],1):e("div",{staticClass:"spinner"},[e("h1",{staticClass:"no-items"},[t._v("NO ITEMS IN STOCK YET")])])])])},D=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spinner-border text-danger",attrs:{role:"status",id:"spinner"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],j=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"cards"},t._l(t.items,(function(s,r){return e("div",{key:r,staticClass:"card"},[e("img",{staticStyle:{opacity:"1"},attrs:{src:s.img,alt:s.name}}),e("header",[e("h4",[t._v(t._s(s.name))]),e("p",[t._v(t._s(t._f("toPrice")(s.price)))])]),e("footer",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-info",modifiers:{"modal-info":!0}}],attrs:{disabled:s.stock<0},on:{click:function(e){return t.showInfo(s)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"info-lg"}})],1),t.isInCart(s)?e("b-button",{staticClass:"icon-check"},[e("b-icon",{attrs:{icon:"check-lg"}})],1):e("b-button",{on:{click:function(e){return t.addToCart(s)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart-plus"}})],1)],1)])})),0),e("InfoComponent",{attrs:{item:t.item},on:{addToCart:t.addToCart}})],1)},M=[],R=function(){var t=this,e=t._self._c;return e("div",[e("b-modal",{attrs:{id:"modal-info",centered:"",title:t.item.name},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-img",{attrs:{rounded:"top",src:t.item.img}})],1)]},proxy:!0},{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-button-group",{staticClass:"float-left"},[e("b-button",{attrs:{disabled:1==t.quantity},on:{click:t.subtract}},[t._v("-")]),e("b-button",{attrs:{disabled:""}},[t._v(t._s(t.quantity))]),e("b-button",{attrs:{disabled:t.quantity>=t.item.stock},on:{click:t.add}},[t._v("+")])],1),e("b-button",{staticClass:"float-right",on:{click:function(e){return t.addToCart()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart-plus"}})],1)],1)]},proxy:!0}])},[e("h3",[t._v(t._s(t.item.name))]),e("p",{staticClass:"my-4"},[t._v(t._s(t._f("toPrice")(t.item.price)))]),e("p",[t._v(t._s(t.item.desc))])])],1)},Q=[];class V{constructor({id:t="",name:e="",img:s="",price:r=0,q:a=0,stock:i=0}={}){this.id=t,this.name=e,this.img=s,this.price=r,this.q=a,this.stock=i}}var G=V,H={name:"InfoComponent",props:{item:{Object:Object,required:!0}},mixins:[y],data(){return{quantity:1}},methods:{addToCart(){let t=new G({id:this.item.id,name:this.item.name,img:this.item.img,price:this.item.price,q:this.quantity,stock:this.item.stock});this.$emit("addToCart",t),this.$bvModal.hide("modal-info"),this.quantity=1},add(){this.quantity++},subtract(){0==this.quantity?this.quantity=0:this.quantity--}}},X=H,Y=(0,u.Z)(X,R,Q,!1,null,"944e9fe6",null),K=Y.exports;class W{constructor({id:t="",name:e="",img:s="",price:r=0,desc:a="",stock:i=0,user:o=""}={}){this.id=t,this.name=e,this.img=s,this.price=r,this.desc=a,this.stock=i,this.user=o}setUserId(t){this.user=t}}var z=W,J={name:"ListadoComponent",components:{InfoComponent:K},props:{items:{Array:Array,required:!0},itemsCart:{Array:Array,required:!0}},mixins:[y],data(){return{item:new z}},methods:{addToCart(t){let e=new G({id:t.id,name:t.name,img:t.img,price:t.price,q:t.q?t.q:1,stock:t.stock});this.$emit("addToCart",e)},showInfo(t){this.item=t},isInCart(t){return this.$props.itemsCart.find((e=>e.id===t.id))}}},tt=J,et=(0,u.Z)(tt,j,M,!1,null,"2efb46fb",null),st=et.exports,rt={name:"HomePage",components:{ListadoComponent:st},data(){return{loading:!0,storeState:this.$store.state}},computed:{...(0,g.Se)("items",["getItems"])},created(){this.$store.dispatch("items/getItems").then(this.loading=!1).catch((t=>console.log("error getting items: ",t)))},methods:{onAddToCart(t){this.$store.dispatch("addItemToCart",t)}}},at=rt,it=(0,u.Z)(at,B,D,!1,null,"136bec3e",null),ot=it.exports,nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("div",{staticClass:"top"}),t.errors.length>0?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e("p",[t._v("Ups! Algo sucedió al intentar registrarte...")]),e("ul",t._l(t.errors,(function(s,r){return e("li",{key:r},[t._v(t._s(s))])})),0)]):t._e(),e("LoginComponent",{on:{submit:t.onLoginSubmit,register:t.onRegisterSubmit}})],1)},ct=[],lt=function(){var t=this,e=t._self._c;return e("div",[e("b-container",{staticClass:"custom-body",attrs:{fluid:""}},[e("b-row",[t.errors.length>0?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e("p",[t._v("Ups! Algunos campos no son como esperamos...")]),e("ul",t._l(t.errors,(function(s,r){return e("li",{key:r},[t._v(t._s(s))])})),0)]):t._e()]),e("b-row",[e("b-col"),e("b-col",[t.show?e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"input-group-email",label:"Email:","label-for":"inputEmail",description:"Nunca vamos a compartir tu email con otras compañías."}},[e("b-form-input",{attrs:{id:"inputEmail",type:"email",placeholder:"caro@mail.com",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-pass",label:"Password:","label-for":"inputPass"}},[e("b-form-input",{attrs:{id:"inputPass",placeholder:"caro1234",type:"password",required:""},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),e("b-form-group",{attrs:{id:"select-group-3"}},[e("p",[t._v(" ¿Aún no estás registrado? Registrate "),e("a",{attrs:{href:"#"},on:{click:t.changeForm}},[t._v("aquí.")])])]),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Ingresar")])],1):e("b-form",{on:{submit:t.onRegister}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Email:","label-for":"input-1",description:"Nunca vamos a compartir tu email con otras compañías."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Tu email, que será tu user",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Nombre y apellido:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"text",placeholder:"Tu nombre y apellido",required:""},model:{value:t.form.fullname,callback:function(e){t.$set(t.form,"fullname",e)},expression:"form.fullname"}})],1),e("b-form-group",{attrs:{id:"input-group-4",label:"Password:","label-for":"input-4"}},[e("b-form-input",{attrs:{id:"input-4",placeholder:"Ingresar contraseña",type:"password",required:""},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),e("b-form-group",{attrs:{id:"select-group-3"}},[e("p",[t._v(" ¿Ya tenés una cuenta? Ingresá "),e("a",{attrs:{href:"#"},on:{click:t.changeForm}},[t._v("aquí.")])])]),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Registrarse")])],1)],1),e("b-col")],1)],1)],1)},dt=[],mt={name:"LoginComponent",data(){return{form:{fullname:"",email:"",pass:""},show:!0,errors:[]}},methods:{onSubmit(t){t.preventDefault(),this.$emit("submit",this.form)},checkPassword(t){return!(t.length<8||t.length>31||!t.match(/[A-Z]/)||!t.match(/[0-9]/)||!t.match(/[.,:!?]/))},onRegister(t){this.errors=[],t.preventDefault(),this.checkPassword(this.form.pass)?this.$emit("register",this.form):this.errors.push("La contraseña debe tener una cantidad mínica de 8 dígitos, máxima de 31 dígitos, al menos 1 mayúcula, al menos 1 número y al menos 1 caracter especial.")},changeForm(){this.show=!this.show}}},ut=mt,pt=(0,u.Z)(ut,lt,dt,!1,null,"77f2b5e0",null),ht=pt.exports,vt=s(306);const ft="https://649b334abf7c145d023a2086.mockapi.io/v1";var gt={getItems(){return vt.Z.get(`${ft}/items`)},getItemById(t){return vt.Z.get(`${ft}/items/${t}`)},createItem(t){return vt.Z.post(`${ft}/items`,t)},updateItem(t,e){return vt.Z.put(`${ft}/items/${t}`,e)},deleteItem(t){return vt.Z.delete(`${ft}/items/${t}`)},getUsers(){return vt.Z.get(`${ft}/users`)},getUserByMail(t){return vt.Z.get(`${ft}/users/${t}`)},createUser(t){return vt.Z.post(`${ft}/users`,t)},updateUser(t,e){return vt.Z.put(`${ft}/users/${t}`,e)}};class bt{constructor({id:t="",fullname:e="",pass:s="",role:r="",email:a="",cart:i=[],orders:o=[]}={}){this.id=t,this.fullname=e,this.pass=s,this.role=r,this.email=a,this.cart=i,this.orders=o}}var _t=bt,Ct={name:"LoginPage",components:{LoginComponent:ht},data(){return{errors:[]}},methods:{onLoginSubmit(t){this.errors=[],gt.getUsers().then((e=>{let s=e.data.find((e=>e.email===t.email));s?(this.$store.getters["getUserCart"].forEach((t=>{s.cart.find((e=>e.id==t.id))?s.cart.forEach((e=>{e.id==t.id&&(e.q=e.q+t.q)})):s.cart.push(t)})),this.$store.dispatch("loggingUser",s),this.$router.push({name:"user"})):this.errors.push("usuario o contraseña incorrectos... vuelva a intentar")}))},onRegisterSubmit(t){this.errors=[],gt.getUsers().then((e=>{let s=e.data.find((e=>e.email===t.email));s?this.errors.push("el email ya ha sido registrado, pruebe iniciar sesión con el mismo o crear una cuenta con un mail diferente"):this.saveNewUser(t)}))},saveNewUser(t){let e=new _t({fullname:t.fullname,pass:t.pass,email:t.email,role:"buyer",cart:this.$store.getters["getUserCart"]});this.$store.dispatch("createUser",e).then(this.$router.push({name:"user"})).catch((t=>{alert("error creando user: ",t)}))}}},yt=Ct,It=(0,u.Z)(yt,nt,ct,!1,null,"9fc624f4",null),$t=It.exports,kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("h1",{staticClass:"user-header"},[t._v("Información de usuario")]),e("div",{staticClass:"col d-flex justify-content-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid rounded-start",attrs:{src:t.getUser.avatar,alt:"..."}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.getUser.fullname))]),t.edit?e("div",[e("div",[e("label",{attrs:{for:"fullname"}},[t._v("Fullname")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.fullname,expression:"user.fullname"}],attrs:{type:"text",id:"fullname",name:"fullname"},domProps:{value:t.user.fullname},on:{input:function(e){e.target.composing||t.$set(t.user,"fullname",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email",id:"email",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"pass"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.pass,expression:"user.pass"}],attrs:{type:"text",id:"pass",name:"pass"},domProps:{value:t.user.pass},on:{input:function(e){e.target.composing||t.$set(t.user,"pass",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"role"}},[t._v("Role")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.role,expression:"user.role"}],attrs:{id:"role"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"role",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"admin"}},[t._v("admin")]),e("option",{attrs:{value:"buyer"}},[t._v("buyer")])])]),e("div",[e("label",{attrs:{for:"fullname"}},[t._v("Avatar")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.avatar,expression:"user.avatar"}],attrs:{type:"text",id:"avatar",name:"avatar"},domProps:{value:t.user.avatar},on:{input:function(e){e.target.composing||t.$set(t.user,"avatar",e.target.value)}}})]),e("b-button",{on:{click:function(e){return t.editUser()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1)],1):e("div",[e("p",{staticClass:"card-text"},[t._v("email: "+t._s(t.getUser.email))]),e("p",{staticClass:"card-text"},[t._v("Password: "+t._s(t.getUser.pass))]),e("p",{staticClass:"card-text"},[t._v("role: "+t._s(t.getUser.role))]),e("b-button",{on:{click:function(e){return t.showEditMode()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"pencil"}})],1)],1)])])])])]),"admin"===t.getUser.role?e("div",{staticClass:"features-pannel"},[e("h3",[t._v("Tus items en venta")]),e("div",{staticClass:"new-item"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.createItem}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"plus-circle-dotted"}}),t._v(" Nuevo Item ")],1)]),e("TableComponent",{attrs:{headers:t.headersAdmin,items:t.itemsByUser,actions:t.actionsAdmin},on:{editItem:t.onEditItem,deleteItem:t.onDeleteItem}})],1):e("div",{staticClass:"features-pannel"},[e("h3",[t._v("Tu carrito de compras")]),t.getUserCart.length>0?e("div",[e("TableComponent",{attrs:{headers:t.headersBuyer,items:t.getUserCart,actions:t.actionsBuyer},on:{deleteItem:t.onDeleteItemFromCart}})],1):e("div",[e("h6",[t._v("No agregaste items a tu carrito aún")])]),e("h3",[t._v("Tus órdenes")]),t.getUserOrders.length>0?e("div",[e("TableComponent",{attrs:{headers:t.headersOrders,items:t.getUserOrders,actions:t.actionsOrders},on:{deleteItem:t.onDeleteItemFromBought}})],1):e("div",[e("h6",[t._v("No tenés órdenes aún")])])]),e("div",{staticClass:"bottom"})])},wt=[],xt=function(){var t=this,e=t._self._c;return e("div",[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._l(t.headers,(function(s,r){return e("th",{key:r},[t._v(t._s(s))])})),e("th",[t._v("actions")])],2)]),e("tbody",t._l(t.items,(function(s,r){return e("tr",{key:s.id},[e("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),t._l(t.headers,(function(r,a){return e("td",{key:a},["img"===r?[e("img",{staticClass:"img-fluid rounded-start",attrs:{src:s[r],alt:"..."}})]:"items"===r?[e("ol",t._l(s[r],(function(s,r){return e("li",{key:r},[t._v(" "+t._s(s.name)+": "+t._s(s.q)+" unidades ")])})),0)]:[t._v(" "+t._s(s[r])+" ")]],2)})),t.actions?e("td",[t.actions.includes("edit")?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.editItem(s.id)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"pencil"}})],1):t._e(),t.actions.includes("delete")?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteItem(s.id)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"trash"}})],1):t._e()]):t._e()],2)})),0)])])},Ut=[],Pt={name:"TableComponent",props:{headers:{Array:Array,required:!0},items:{Array:Array,required:!0},actions:{Array:Array}},methods:{editItem(t){this.$emit("editItem",t)},deleteItem(t){this.$emit("deleteItem",t)}}},qt=Pt,St=(0,u.Z)(qt,xt,Ut,!1,null,"606f3408",null),Tt=St.exports,Ot={name:"UserPage",data(){return{user:new _t,edit:!1,roles:["admin","buyer"],headersAdmin:["id","name","img","price","desc","stock"],actionsAdmin:["edit","delete"],headersBuyer:["id","name","img","price","q"],actionsBuyer:["delete"],headersOrders:["id","items","finalPrice","address","notes"],actionsOrders:["delete"]}},computed:{itemsByUser(){return this.$store.getters["items/getItemsByUser"](this.getUser.id)},...(0,g.Se)(["getUser","getUserCart","getUserOrders"])},components:{TableComponent:Tt},methods:{showEditMode(){this.user={...this.getUser},this.edit=!0},editUser(){this.$store.dispatch("editUserInfo",this.user).then((()=>{alert("User info edited"),this.edit=!1})).catch((t=>{alert("error editando user: ",t)}))},createItem(){this.$router.push({name:"edit-item"})},onEditItem(t){this.$router.push({name:"edit-item",params:{id:t}})},onDeleteItem(t){this.$store.dispatch("items/deleteItem",t).then((()=>{alert("item deleted"),this.$store.dispatch("items/getItems")})).catch((t=>alert("error when deleting item: ",t)))},onDeleteItemFromCart(t){this.$store.dispatch("deleteItemFromCart",t).then(this.$store.dispatch("editUserInfo",this.$store.state.user)).catch((t=>alert("error deleting item from cart: ",t)))},onDeleteItemFromBought(t){this.$store.dispatch("deleteItemFromBought",t).then(this.$store.dispatch("editUserInfo",this.$store.state.user)).catch((t=>alert("error deleting item from bought: ",t)))}}},Nt=Ot,At=(0,u.Z)(Nt,kt,wt,!1,null,"b1eb52e4",null),Zt=At.exports,Et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},["admin"===t.storeState.user.role?e("div",[t.itemId?e("h1",{staticClass:"edit-header"},[t._v("Editar item "+t._s(t.itemId))]):e("h1",{staticClass:"edit-header"},[t._v("Crear nuevo item")]),e("div",{staticClass:"col d-flex justify-content-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-md-4"},[t.item.img?e("img",{staticClass:"img-fluid rounded-start",attrs:{src:t.item.img,alt:"..."}}):e("img",{staticClass:"img-fluid rounded-start",attrs:{src:"https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png",alt:"..."}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.item.name))]),e("div",[e("div",{staticClass:"row g-0"},[t._m(0),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.id,expression:"item.id"}],attrs:{type:"text",id:"id",name:"id",disabled:""},domProps:{value:t.item.id},on:{input:function(e){e.target.composing||t.$set(t.item,"id",e.target.value)}}})])]),e("div",{staticClass:"row g-0"},[t._m(1),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})])]),e("div",{staticClass:"row g-0"},[t._m(2),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.img,expression:"item.img"}],attrs:{type:"text",id:"img",name:"img"},domProps:{value:t.item.img},on:{input:function(e){e.target.composing||t.$set(t.item,"img",e.target.value)}}})])]),e("div",{staticClass:"row g-0"},[t._m(3),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.item.price,expression:"item.price",modifiers:{number:!0}}],attrs:{type:"number",id:"price",name:"price"},domProps:{value:t.item.price},on:{input:function(e){e.target.composing||t.$set(t.item,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"row g-0"},[t._m(4),e("div",{staticClass:"col"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.desc,expression:"item.desc"}],attrs:{type:"text",id:"desc",name:"desc"},domProps:{value:t.item.desc},on:{input:function(e){e.target.composing||t.$set(t.item,"desc",e.target.value)}}})])]),e("div",{staticClass:"row g-0"},[t._m(5),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.item.stock,expression:"item.stock",modifiers:{number:!0}}],attrs:{type:"number",id:"stok",name:"stock"},domProps:{value:t.item.stock},on:{input:function(e){e.target.composing||t.$set(t.item,"stock",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"row g-0"},[t.itemId?e("b-button",{on:{click:function(e){return t.editItem()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1):e("b-button",{on:{click:function(e){return t.createItem()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1)],1)])])])])])])]):e("div",[e("h1",{staticClass:"edit-header"},[t._v("NOT ALLOWED")])])])},Ft=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"email"}},[t._v("id")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"fullname"}},[t._v("name")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"img"}},[t._v("image")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"price"}},[t._v("price")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"desc"}},[t._v("description")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("label",{attrs:{for:"stock"}},[t._v("stock")])])}],Lt={name:"EditItemPage",data(){return{storeState:this.$store.state,itemId:this.$route.params.id,item:new z}},created(){this.itemId?this.item=this.$store.getters["items/getItemById"](this.itemId):this.item.setUserId(this.$store.state.user.id)},methods:{editItem(){this.$store.dispatch("items/updateItem",this.item).then((()=>{alert("item editado ok"),this.$router.push({name:"user"})})).catch((t=>alert("error updating item: ",t)))},createItem(){this.$store.dispatch("items/createItem",this.item).then((()=>{alert("item creado ok"),this.$store.dispatch("items/getItems"),this.$router.push({name:"user"})})).catch((t=>alert("error creating item: ",t)))}}},Bt=Lt,Dt=(0,u.Z)(Bt,Et,Ft,!1,null,"e16b1518",null),jt=Dt.exports,Mt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[t.orderSuccess||t.orderError?t._e():e("div",[e("h1",[t._v("Nueva orden")]),e("div",[e("h4",[t._v("Estás a punto de comprar los siguientes productos...")]),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.getUserCart,(function(s,r){return e("tr",{key:r},[e("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),e("td",[t._v(t._s(s.name))]),e("td",[e("img",{attrs:{src:s.img}})]),e("td",[t._v(t._s(s.price))]),e("td",[t._v(t._s(s.q))])])})),0)])]),e("div",[e("hr"),e("h4",[t._v("Precio final: $ "+t._s(t.getCartPrice))]),e("hr"),e("h4",[t._v("Te solicitamos los siguientes datos para continuar:")])]),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submitOrderHandler.apply(null,arguments)}}},[e("b-form-group",{attrs:{id:"input-group-email",label:"Dirección:","label-for":"address",description:"Nunca vamos a compartir tu dirección con otras compañías."}},[e("b-form-input",{attrs:{id:"address",type:"text",required:""},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),e("b-form-group",{attrs:{id:"input-group-pass",label:"Notas:","label-for":"notes"}},[e("b-form-input",{attrs:{id:"notes",placeholder:"cualquier info extra que creas podamos necesitar",type:"text"},model:{value:t.form.notes,callback:function(e){t.$set(t.form,"notes",e)},expression:"form.notes"}})],1),e("b-form-group",{attrs:{id:"input-group-pass",label:"Método de pago:","label-for":"payment",description:"Por el momento sólo aceptamos efectivo al momento de la entrega"}},[e("b-form-input",{attrs:{id:"payment",value:"efectivo",type:"text",disabled:""}})],1),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Comprar!")])],1)],1),t.orderSuccess?e("div",[e("div",{staticClass:"space"}),e("h1",[t._v("Gracias por tu orden!")]),e("p",[t._v(" 🧁🍭🧋 Despacharemos en breve para que puedas disfrutarla lo antes posible 🍣🍕🍔 ")]),e("b-button",{staticClass:"btn-orders",attrs:{type:"submit",variant:"primary"},on:{click:t.backToUserView}},[t._v(" Volver a tus ordenes ")])],1):t._e(),t.orderError?e("div",[e("div",{staticClass:"space"}),e("h1",[t._v("Ups! 😬")]),e("p",[t._v("Tuvimos un problema creando tu orden...")]),e("p",[t._v(" Intenta de nuevo... y si el problema persiste, comunícate con nosotros. ")]),e("b-button",{staticClass:"btn-orders",attrs:{type:"submit",variant:"primary"},on:{click:t.backToUserView}},[t._v(" Volver a tus ordenes ")])],1):t._e()])},Rt=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Nombre")]),e("th",{attrs:{scope:"col"}},[t._v("Img")]),e("th",{attrs:{scope:"col"}},[t._v("Precio")]),e("th",{attrs:{scope:"col"}},[t._v("Cantidad")])])])}];class Qt{constructor({id:t="",items:e=[],finalPrice:s=[],address:r="",notes:a=""}={}){this.id=t,this.items=e,this.finalPrice=s,this.address=r,this.notes=a}}var Vt=Qt,Gt={name:"OrderPage",data(){return{errors:[],form:new Vt,orderSuccess:!1,orderError:!1}},computed:{...(0,g.Se)(["getUserCart","getCartPrice"])},methods:{submitOrderHandler(){this.form.finalPrice=this.getCartPrice,this.form.items=this.getUserCart,this.$store.dispatch("createOrder",this.form).then((()=>{this.$store.dispatch("editUserInfo",this.$store.state.user),this.orderSuccess=!0})).catch((t=>{this.errors.push(t),this.orderError=!0}))},backToUserView(){this.$router.push({name:"user"})}}},Ht=Gt,Xt=(0,u.Z)(Ht,Mt,Rt,!1,null,"c61977f4",null),Yt=Xt.exports,Kt=function(){var t=this;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("h1",{staticClass:"header"},[t._v("PAGE NOT FOUND")])])}],zt={name:"NotFoundPage"},Jt=zt,te=(0,u.Z)(Jt,Kt,Wt,!1,null,"690f4639",null),ee=te.exports;i["default"].use(L.ZP);const se=[{path:"/",component:ot,name:"home"},{path:"/login",component:$t,name:"login"},{path:"/user",component:Zt,name:"user"},{path:"/item/:id",component:jt,name:"edit-item"},{path:"/order",component:Yt,name:"order"},{path:"/:pathMatch(.*)*",component:ee,name:"not-found"}],re=new L.ZP({mode:"history",base:"/food_app/",routes:se});var ae=re;const ie={namespaced:!0,state:{items:[]},getters:{getItems:t=>t.items,getItemsByUser:t=>e=>t.items.filter((t=>t.user===e)),getItemById:t=>e=>t.items.find((t=>t.id===e))},mutations:{setItems:(t,e)=>{t.items=e}},actions:{getItems:t=>{gt.getItems().then((e=>{t.commit("setItems",e.data)}))},createItem:(t,e)=>{gt.createItem(e)},updateItem:(t,e)=>{gt.updateItem(e.id,e)},deleteItem:(t,e)=>{gt.deleteItem(e)}}};i["default"].use(g.ZP);var oe=new g.ZP.Store({state:{user:new _t,logged:!1},getters:{getUser:t=>t.user,getLogged:t=>t.logged,getItemFromCart:t=>e=>t.user.cart.filter((t=>e===t.id)),getUserCart:t=>t.user.cart,getCartItemsQ:t=>t.user.cart.length,getCartPrice:t=>{let e=0;return t.user.cart.forEach((t=>{e+=t.price*t.q})),e},getUserItems:t=>t.items,getUserOrders:t=>t.user.orders},mutations:{setUser:(t,e)=>{t.user=e},setLogged:(t,e)=>{t.logged=e},pushItemToCart:(t,e)=>{t.user.cart.push(e)},updateItemAdd:(t,e)=>{t.user.cart.forEach((t=>{t.id===e.id&&(t.q=t.q<t.stock?t.q+1:t.q)}))},updateItemSubs:(t,e)=>{t.user.cart.forEach((t=>{t.id===e.id&&(0==e.q?t.q=0:t.q--)}))},deleteItemFromCart:(t,e)=>{t.user.cart=t.user.cart.filter((t=>t.id!==e))},deleteItemFromBought:(t,e)=>{t.user.orders=t.user.orders.filter((t=>t.id!==e))},registerOrder:(t,e)=>{e.id=(new Date).toString(),t.user.orders.push(e)},emptyCart:t=>{t.user.cart=[]}},actions:{createUser:(t,e)=>{gt.createUser(e).then((e=>{t.commit("setUser",e.data),t.commit("setLogged",!0)}))},loggingUser:(t,e)=>{gt.updateUser(e.id,e).then((e=>{t.commit("setUser",e.data),t.commit("setLogged",!0)}))},logoutUser:t=>{const e={fullname:"",pass:"",role:"",email:"",id:"",cart:[]};t.commit("setUser",e),t.commit("setLogged",!1)},editUserInfo:(t,e)=>{gt.updateUser(e.id,e).then((e=>{t.commit("setUser",e.data)}))},addItemToCart:(t,e)=>{0!==t.getters.getItemFromCart(e.id).length?t.commit("updateItemQ",e):t.commit("pushItemToCart",e)},deleteItemFromCart:(t,e)=>{t.commit("deleteItemFromCart",e)},updateItemAdd:(t,e)=>{t.commit("updateItemAdd",e)},updateItemSubs:(t,e)=>{t.commit("updateItemSubs",e)},createOrder:(t,e)=>{t.commit("registerOrder",e),t.commit("emptyCart")},deleteItemFromBought:(t,e)=>{t.commit("deleteItemFromBought",e)}},modules:{items:ie}});s(7024);i["default"].config.productionTip=!1,i["default"].use(E.XG7),i["default"].use(F.X),new i["default"]({router:ae,store:oe,render:t=>t(Z)}).$mount("#app")}},e={};function s(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,r,a,i){if(!r){var o=1/0;for(d=0;d<t.length;d++){r=t[d][0],a=t[d][1],i=t[d][2];for(var n=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](r[c])}))?r.splice(c--,1):(n=!1,i<o&&(o=i));if(n){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],n=r[1],c=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(c)var d=c(s)}for(e&&e(r);l<o.length;l++)i=o[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},r=self["webpackChunkfood_app"]=self["webpackChunkfood_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7399)}));r=s.O(r)})();
//# sourceMappingURL=app.42c61cdd.js.map