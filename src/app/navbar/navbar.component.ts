import { Component, Input, OnInit } from "@angular/core";
import CommonService from "src/common.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
   cartProductCount: number = 0;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
  }
  cartLength(){
    return this.commonService.getCartLength()

  }
}
