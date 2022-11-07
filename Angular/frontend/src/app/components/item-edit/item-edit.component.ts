import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent implements OnInit {
  product: Product = { name: '', price: 0, category: '' };
  userForm: FormGroup;
  success: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private prodSrv: ProductService,
    private router: Router
  ) {
    this.getProductDetails();
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
    });
  }
  getProductDetails() {
    const id = this.route.snapshot.params['id'];
    this.prodSrv.getSingleProduct(id).subscribe((data) => {
      const response: any = data;
      this.product = response.result;
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    const id = this.route.snapshot.params['id'];
    this.prodSrv.updateProduct(id, this.userForm.value).subscribe();
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
