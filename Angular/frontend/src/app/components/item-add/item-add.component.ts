import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
})
export class ItemAddComponent implements OnInit {
  userForm: FormGroup;
  success: boolean = false;
  constructor(private prodSrv: ProductService, private router: Router) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.prodSrv.addProduct(this.userForm.value).subscribe();
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 3000);
    this.userForm.reset();
  }
  gotoHome() {
    this.router.navigate(['/']);
  }
}
