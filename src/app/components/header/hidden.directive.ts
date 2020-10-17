import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHidden]',
  exportAs: 'hiddenControll'
})
export class HiddenDirective {

  constructor() {
  }

  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'hidden';

  // @HostListener('window:click', ['$event'])
  // public onClick(event: MouseEvent): void {
  //   this.visibility = 'hidden'
  // }

  public show(): void {
    this.visibility = 'visible';
  }

  public hide(): void {
    this.visibility = 'hidden';
  }

}
