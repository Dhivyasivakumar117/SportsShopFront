import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../class/Cart';
import { Product } from '../class/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 
  id: number = 0;
  product: Product = new Product();
  cart : Cart = new Cart();
  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService, private cartService : CartService) { }

  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];
    
    this.productService.getProductById(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }
  view(){
    this.router.navigate(['viewProduct']);
  }

  addCart(id: number) {
    this.router.navigate(['createCart'])
  }
}
