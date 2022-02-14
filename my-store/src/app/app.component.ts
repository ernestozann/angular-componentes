import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/200';

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

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
