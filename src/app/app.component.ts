import { Component, Inject, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { IProduct, ProductsServise } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'lesson1';
  public drawer!: MatDrawer;
  public toogleState = false;
  public inputVal!: string;
  public searchText = '';
  public products$!: Observable<IProduct[]>;

  public constructor(
    // @Inject(ProductsServise) private productsServise: any
    private productsServise: ProductsServise
  ) {

  }
  // tslint:disable-next-line: align
  public ngOnInit(): void {
    this.products$ = this.productsServise.getProducts();
    this.productsServise.getProducts().subscribe((v)=> {
      console.log(v);
    })
  }

  public setSadenav(draver: MatDrawer): void {
    this.drawer = draver;
  }



  chengeStateParent(): void {
    this.toogleState = !this.toogleState;
  }

  inputValueCange(_, inputVal): void {
    console.log('inputValueCange ' + inputVal);
  }

  public search(text: string): void {
    this.searchText = text;
  }

  // public productsList(products: IProduct[]): IProduct[]{
  //   return products.filter((product: IProduct) =>
  //     `${product.title} ${product.price}`.toLowerCase().includes(this.searchText.toLowerCase()));
  // }
}
