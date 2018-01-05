import { Component, HostBinding, OnInit } from '@angular/core';
import { routeAnimation } from '../../animations/route.animation';

@Component({
  animations: [ routeAnimation ],
  templateUrl: './project-item.page.html',
  styleUrls  : [ './project-item.page.scss' ],
})
export class ProjectItemPage implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: any;

  constructor() {
  }

  ngOnInit() {
  }
}
