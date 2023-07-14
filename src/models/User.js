class User {
  constructor({
    id = "",
    fullname = "",
    pass = "",
    role = "",
    email = "",
    cart = [],
  } = {}) {
    this.id = id;
    this.fullname = fullname;
    this.pass = pass;
    this.role = role;
    this.email = email;
    this.cart = cart;
  }
}

export default User;
