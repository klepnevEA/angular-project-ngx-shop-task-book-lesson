import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {

  public rates: {price: number, curent: string}[] = [
    {price: 5, curent: 'EUR'},
    {price: 10, curent: 'USD'},
    {price: 50, curent: 'RUB'}
  ];

  public mode: 'off' | 'on' = 'off';

  constructor() { }

}
