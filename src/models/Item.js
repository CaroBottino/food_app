class Item {
  constructor({
    id = "",
    name = "",
    img = "",
    price = 0,
    desc = "",
    stock = 0,
    user = "",
  } = {}) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.desc = desc;
    this.stock = stock;
    this.user = user;
  }

  setUserId(userId) {
    this.user = userId;
  }
}

export default Item;
