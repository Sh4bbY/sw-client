import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemPage } from './project-item.page';

describe('ProjectItemPage', () => {
  let component: ProjectItemPage;
  let fixture: ComponentFixture<ProjectItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectItemPage ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ProjectItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
