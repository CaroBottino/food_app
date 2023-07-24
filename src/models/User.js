class User {
  constructor({
    id = "",
    fullname = "",
    pass = "",
    role = "",
    email = "",
    cart = [],
    orders = [],
  } = {}) {
    this.id = id;
    this.fullname = fullname;
    this.pass = pass;
    this.role = role;
    this.email = email;
    this.cart = cart;
    this.orders = orders;
  }
}

export default User;
