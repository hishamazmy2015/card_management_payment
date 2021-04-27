import { Component, Input, OnInit } from "@angular/core";
import CommonService from "src/common.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {

  
  constructor(private commonService: CommonService) {}
  @Input() products

  ngOnInit() {
  this.products = this.commonService.products;

  }
  addToCart(prd) {
    this.commonService.addItemToTheCart(prd);
  }
}
