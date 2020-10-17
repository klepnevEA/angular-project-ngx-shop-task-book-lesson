import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public setSidenavControll: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer1!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
    this.setSidenavControll.emit(this.drawer1);
  }
}
