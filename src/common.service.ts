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

  addItemToTheCart(productId: number) {
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.products[index].inCart = true;
        this.carts.push(this.products[index]);
      }
    });
  }

  removeItemFromTheCart(productId) {
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.products[index].inCart = false;
        this.carts.splice(index, 1);
      }
    });
    // this.products.map((item, index) => {
    //   if (item.id === productId) {
    //     this.products[index].inCart = false;
    //     this.carts.splice(indexToBeRemoved, 1)
    //     this.carts.push(this.products[index]);
    //   }
    // });

    //     const indexToBeRemoved = this.carts.findIndex(
    //       (prd) => prd.id === product.id
    //     );
    //     if (indexToBeRemoved) this.carts.splice(indexToBeRemoved, 1);
    //   }
  }
  // Remove all the items added to the cart
  emptryCart() {
    this.carts.length = 0;
    // this.products.next(this.cartItems);
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
