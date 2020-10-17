import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  constructor() { }

  @Output() public clickButton: EventEmitter<any> = new EventEmitter<any>(true);

  ngOnInit(): void {
  }

  toggleBlock(): void {
    this.clickButton.emit();
  }
}
