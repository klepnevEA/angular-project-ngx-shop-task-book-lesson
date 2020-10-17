import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  @Input() inputVal: string;
  @Output() public inputValue: EventEmitter<string> = new EventEmitter<string>();
  public inputVal2 = '1111';

  constructor() { }

  ngOnInit(): void {

  }

  changeInput(event) {
    this.inputVal = event.target.value;
    this.inputVal2 = this.inputVal;
    console.log(this.inputVal2);
    this.inputValue.emit('!!!!!');
  }

}
