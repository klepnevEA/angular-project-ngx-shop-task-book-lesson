import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products.service';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(products: IProduct[], text: string): IProduct[] {
    if(!text) {
      return products;
    }
    return products.filter((product: IProduct) =>
      `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase()));
  }
}
