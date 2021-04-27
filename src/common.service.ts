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
    return this.carts;
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
        
        this.carts.splice(indexToBeRemoved, 1)
        this.carts.push(this.products[index]);
      }
    });

    //     const indexToBeRemoved = this.carts.findIndex(
    //       (prd) => prd.id === product.id
    //     );
    //     if (indexToBeRemoved) this.carts.splice(indexToBeRemoved, 1);
    //   }
  }
}
