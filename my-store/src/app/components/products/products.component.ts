import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = []

  total:number = 0

  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      image: './assets/images/toy.jpg',
      price: 565
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      image: './assets/images/bike.jpg',
      price: 356
    },
    {
      id: '3',
      name: 'Collecion de albumes',
      image: './assets/images/album.jpg',
      price: 134
    },
    {
      id: '4',
      name: 'Mis libros',
      image: './assets/images/books.jpg',
      price: 23
    },
    {
      id: '5',
      name: 'Casa para perro',
      image: './assets/images/house.jpg',
      price: 34
    },
    {
      id: '6',
      name: 'Gafas',
      image: './assets/images/glasses.jpg',
      price: 3434
    },
  ]

  constructor(
    private storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product:Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal();
  }

}
