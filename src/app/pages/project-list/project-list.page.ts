import { Component, HostBinding, OnInit } from '@angular/core';
import { routeAnimation } from '../../animations/route.animation';

@Component({
  animations : [ routeAnimation ],
  templateUrl: './project-list.page.html',
  styleUrls  : [ './project-list.page.scss' ],
})
export class ProjectListPage implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: any;

  projects = [ { title: 'Example Project', type: 'website', createdAt: Date.now(), owner: 'some guy' } ];

  constructor() {
  }

  ngOnInit() {
  }
}
