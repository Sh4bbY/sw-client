import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './project-list.page.html',
  styleUrls  : [ './project-list.page.scss' ],
})
export class ProjectListPage implements OnInit {

  projects = [ { title: 'Example Project', type: 'website', createdAt: Date.now(), owner: 'some guy' } ];

  constructor() {
  }

  ngOnInit() {
  }
}
