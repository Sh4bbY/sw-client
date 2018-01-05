import { Component, HostBinding, OnInit } from '@angular/core';
import { routeAnimation } from '../../animations/route.animation';

@Component({
  animations: [ routeAnimation ],
  templateUrl: './dashboard.page.html',
  styleUrls  : [ './dashboard.page.scss' ],
})
export class DashboardPage implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: any;

  constructor() {
  }

  ngOnInit() {
  }
}
