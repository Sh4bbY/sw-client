import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemPage } from './project-item.page';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjectItemPage', () => {
  let component: ProjectItemPage;
  let fixture: ComponentFixture<ProjectItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectItemPage ],
      imports     : [ NoopAnimationsModule ],
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
