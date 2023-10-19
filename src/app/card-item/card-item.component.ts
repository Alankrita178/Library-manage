  import { Component , EventEmitter, Input , Output} from '@angular/core';

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
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css']
  })
  export class CardItemComponent {
  @Input() item : books | undefined;
  @Input() quantity: number | undefined; 
  @Output() removeFromCart : EventEmitter<number> = new EventEmitter();
  @Output() increaseQuantityEvent = new EventEmitter<books>();
  @Output() decreaseQuantityEvent = new EventEmitter<books>();

  cartQuantities: {[key: number]: number} = {};

  removeBook(ISBN:number){
    this.removeFromCart.emit(ISBN);
  }

  increaseQuantity(): void {
    this.increaseQuantityEvent.emit(this.item);
  }
  
  decreaseQuantity(): void {
    this.decreaseQuantityEvent.emit(this.item);
  }
  }
