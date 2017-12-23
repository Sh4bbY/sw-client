import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListPage } from './project-list.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectListPage', () => {
  let component: ProjectListPage;
  let fixture: ComponentFixture<ProjectListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListPage ],
      imports     : [ RouterTestingModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ProjectListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
