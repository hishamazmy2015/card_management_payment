import { Component, Input, OnInit } from "@angular/core";
import CommonService from "src/common.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  products = this.commonService.products;

  ngOnInit() {}
  addToCart(prd) {

    this.commonService.addItemToTheCart(prd);
  }
}
