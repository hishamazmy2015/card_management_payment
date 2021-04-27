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

  constructor(private commonService: CommonService, private route: Router) {}

  ngOnInit() {
    this.carts = this.commonService.getCart();
    console.log("object carts ", this.carts);
  }

  removeFromTheCart(index) {
    this.commonService.removeItemFromTheCart(this.carts[index].id);
    this.carts=this.commonService.getCart();

  }

  checkoutPage() {
    this.route.navigate(["/payment"]);
  }

  increaseCountPerProduct(index:number,productCount: number){
    this.commonService.increaseCountPerProductSer(this.carts[index].id);

  }

  decreaseCountPerProduct(index:number,productCount){
    if(productCount <= 1){
      this.commonService.removeItemFromTheCart(this.carts[index].id)
    }
    this.commonService.decreaseCountPerProductSer(this.carts[index].id);
    this.carts = this.commonService.getCart();
    

  }
  calculateTotalPrice(){
    return this.commonService.calculateTotalPrice()
  }
  
}
