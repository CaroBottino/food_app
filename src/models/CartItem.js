class CartItem {
  constructor({ id = "", name = "", img = "", price = 0, q = 0 } = {}) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.q = q;
  }
}

export default CartItem;
