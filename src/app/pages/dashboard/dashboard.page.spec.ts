import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage } from './dashboard.page';
import { MatCardModule } from '@angular/material';
import { FavoritesComponent } from '../../components/favorites/favorites.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPage, FavoritesComponent ],
      imports     : [ MatCardModule, NoopAnimationsModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
