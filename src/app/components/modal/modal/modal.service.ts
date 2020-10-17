import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService {

  public control$ = new Subject();

  constructor() { }
}
