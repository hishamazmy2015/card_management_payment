import { storeProducts } from "./../data";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export default class CommonService {
  carts = [];
  products = storeProducts;

  getProducts() {
    return this.products;
  }
  getCart() {
    // return this.carts;
    return this.products.filter((product) => {
      return product.inCart === true;
    });
  }

  getCartLength() {
    return this.products.filter((product) => {
      return product.inCart === true;
    }).length;
  }

  addItemToTheCart(productId: number) {
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.products[index].inCart = true;
        this.products[index].count = 1;
        this.carts.push(this.products[index]);
      }
    });
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.products.forEach((data) => {
      if (data.inCart) totalPrice += data.price * data.count;
    });
    return totalPrice;
  }

  removeItemFromTheCart(productId) {
    console.log("After delete");
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.products[index].inCart = false;
        this.carts.splice(index, 1);
      }
      console.log("After delete", this.products[index].inCart);
    });
  }
  emptryCart() {
    this.carts.length = 0;
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;
    this.carts.map((item) => {
      total += item.price;
    });
    return total;
  }

  decreaseCountPerProductSer(ProductId: number) {
    this.products.map((item, index) => {
      if (item.id === ProductId) {
        this.products[index].count--;
      }
    });
  }

  increaseCountPerProductSer(ProductId: number) {
    this.products.map((item, index) => {
      if (item.id === ProductId) {
        this.products[index].count++;
      }
    });
  }
}
