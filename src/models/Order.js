class Order {
  constructor({
    id = "",
    items = [],
    finalPrice = [],
    address = "",
    notes = "",
  } = {}) {
    this.id = id;
    this.items = items;
    this.finalPrice = finalPrice;
    this.address = address;
    this.notes = notes;
  }
}

export default Order;
