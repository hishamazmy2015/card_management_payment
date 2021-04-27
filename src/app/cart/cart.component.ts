import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import CommonService from "src/common.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  carts = [];

  constructor(private commonService: CommonService,private route:Router) {}

  ngOnInit() {
    this.carts = this.commonService.getCart();
    console.log("object carts ", this.carts);
  }

  removeFromTheCart(productId) {
    this.commonService.removeItemFromTheCart(productId)
    const indexToBeRemoved = this.carts.findIndex(
      (prd) => prd.id === product.id
    );
    if (indexToBeRemoved) this.carts.splice(indexToBeRemoved, 1);
  }


  checkoutPage(){
    this.route.navigate()

  }

}
