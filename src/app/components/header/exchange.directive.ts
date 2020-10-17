import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appExchange]'
})
export class ExchangeDirective implements OnInit {


  @Input('appExchangeFrom')
  public rates!: {price: number, curent: string}[]

  @Input('appExchangeInterval')
  public ms = 1000;

  @Input('appExchangeAutoplay')
  public set playAuto(mode: 'off' | 'on') {
    if (!mode) {
      return;
    }

    this.autoplay = mode;
  }

  public context: any;
  public step = 0;
  public autoplay = 'on';
  private indervalId = null;

  constructor(
    private readonly tpl: TemplateRef<any>,
    private readonly vcr: ViewContainerRef
  ) { }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.step],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);
    this.restInterval();
  }

  public next(): void {
    this.restInterval();
    this.step ++;
    if (this.step >= this.rates.length) {
      this.step = 0;
    }
    this.context.$implicit = this.rates[this.step];
  }

  public prev(): void {
    this.restInterval();
    this.step --;
    if (this.step < 0) {
      this.step = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.step];
  }
  private restInterval(): this {
    if(this.autoplay !== 'on') {
      return;
    }
    this.clarInterval().initInterval();
    return this;
  }
  private initInterval(): this {
    this.indervalId = setInterval(() => {
      this.next();
    }, this.ms);
    return this;
  }
  private clarInterval(): this {
    if(this.indervalId) {
      clearInterval(this.indervalId);
    }
    return this;
  }

}
