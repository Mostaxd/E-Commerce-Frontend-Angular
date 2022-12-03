import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartItems: Product[] = []
  total: number = 0;

  name: string = ''
  address: string = ''
  creditCard: string = ''

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems()
    this.total = this.cartService.getTotal()
  }

  clearCart(){
    this.cartService.clearCart()
    this.ngOnInit()
  }

  removeItem(title: string){
    this.cartService.removeItem(title)
    this.ngOnInit()
  }


  submitForm(){
    if(this.cartItems.length === 0){
      window.alert('please add products to the cart!')
    }
    else{
      window.alert('success!')
    }

  }


}