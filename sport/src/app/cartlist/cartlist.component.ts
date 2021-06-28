import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Cart } from '../class/Cart';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  cart!: Observable<Cart[]>;

  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.cart = this.cartService.getCartList();
  }
  deleteCart(id: number) {
    this.cartService.deleteCart(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCart(id: number) {
    this.router.navigate(['update', id]);
  }

  cartDetails(id: number){
    this.router.navigate(['details', id]);
  }


}
