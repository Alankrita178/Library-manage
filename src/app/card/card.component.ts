import { Component, EventEmitter, Input , Output} from '@angular/core';

interface price{currency:string; value:number;displayValue:string}
interface books{
  ISBN:number;
  title:string;
  author:string;
  summary:string;
  image:string;
  price:price;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() books: books | undefined;
@Output() addBook: EventEmitter<books> = new EventEmitter();


addToCart(books:books){
  // console.log(books);
  this.addBook.emit(books)
}
}
