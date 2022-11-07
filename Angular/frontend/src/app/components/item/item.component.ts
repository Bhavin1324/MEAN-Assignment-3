import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  product: Product = { name: '', price: 0, category: '' };
  success: boolean = false;
  constructor(
    private prodSrv: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getProductDetails();
  }

  ngOnInit(): void {}
  getProductDetails() {
    const id = this.route.snapshot.params['id'];
    this.prodSrv.getSingleProduct(id).subscribe((data) => {
      const response: any = data;
      this.product = response.result;
    });
  }
  onDelete() {
    const id = this.route.snapshot.params['id'];
    this.prodSrv.deleteProduct(id).subscribe();
    this.success = true;
    setTimeout(() => {
      this.success = false;
      this.router.navigate(['/']);
    }, 3000);
  }
  gotoHome() {
    this.router.navigate(['/']);
  }
}
