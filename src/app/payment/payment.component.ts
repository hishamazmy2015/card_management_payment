import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import CommonService from "src/common.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  CardInfoForm: FormGroup;

  constructor(private fb: FormBuilder, private commonService: CommonService) {}

  ngOnInit() {
    this.CardInfoForm = this.fb.group({
      title: [null],
      cardHolderFirstName: [null, Validators.required],
      cardHolderLastName: [null, Validators.required],
      cardHolderType: [null, Validators.required],
      cardType: [null, Validators.required],
      cardnumber: [null, [Validators.required]],
      cardExpMonth: [null, Validators.required],
      cardExpYear: [null, Validators.required],
      cardcvv: [null, Validators.required],
    });
  }

  saveCardInfo() {}
  calculateTotalPrice() {
    const price = this.commonService.calculateTotalPrice();
    console.log(price);
    return price;
  }
}
