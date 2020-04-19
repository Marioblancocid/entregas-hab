'use strict';
const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];


class CartItem {
  constructor(item) {
    let itemkeys = Object.values(item);
    this.name = itemkeys[0];
    this.price = itemkeys[1];
    this.units = 1;
  }
  increase() {
    ++this.units;
    return;
  }
}

class User {
  #cart = [];
  constructor(name) {
    this.name = name;
  }
  addToCart(item) {
    let itemKeys = Object.keys(item);
    if (this.#cart[0]) {
      for (let i = 0; i < this.#cart.length; i++) {
        if (this.#cart[i][itemKeys[0]] === item[itemKeys[0]]) {
          this.#cart[i].increase();
          return this.#cart;
        }
      }
      return this.#cart.push(new CartItem(item));
    } else {
      return this.#cart.push(new CartItem(item));
    }
  }
  pay() {
    Shop.checkout(this.#cart);
  }
}

class Shop {
  constructor(name, price) {
    this.inventory = this.createInventory(name, price);
  }
  createInventory(name, price) {
    let inventory = name.map((name, index) => {
      return { name: name, price: price[index] }
    });
    return inventory;
  }
  static checkout(cart) {
    let precioTicket = 0;
    console.log('Ticket:');
    for (let i = 0; i < cart.length; i++) {
      precioTicket = precioTicket + (cart[i].price * cart[i].units);
      console.log(`${cart[i].name}: PVP: ${cart[i].price}€ Cantidad: ${cart[i].units}`);
    }
    console.log(`Precio total a pagar: ${precioTicket}€`);
  }
}

function userAndShopGenerator(items) {
  let tienda = new Shop(itemNames, itemPrices);
  console.log(tienda);
  let user1 = new User('Mario');
  console.log(user1);
  for (let i = 0; i <= items; i++) {
    user1.addToCart(tienda.inventory[(Math.round(Math.random() * 2))]);
  }
  user1.pay();
}

userAndShopGenerator(20);