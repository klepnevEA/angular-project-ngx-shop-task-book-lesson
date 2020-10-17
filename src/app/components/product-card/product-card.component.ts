import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/products.service';
import { ModalService } from '../modal/modal/modal.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  constructor(
    private readonly modalService: ModalService
  ) {}

  @Input()
  public product: IProduct;

  @Input()
  public isOdd: boolean;

  public addToCart(): void {
    this.modalService.control$.next(this.product);
  }

}
