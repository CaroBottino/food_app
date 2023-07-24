class CartItem {
  constructor({
    id = "",
    name = "",
    img = "",
    price = 0,
    q = 0,
    stock = 0,
  } = {}) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.q = q;
    this.stock = stock;
  }
}

export default CartItem;
