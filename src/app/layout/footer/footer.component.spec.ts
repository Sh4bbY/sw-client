import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should should contain "I am the footer" in footer text', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.footer-nav').textContent).toContain('I am the footer');
  }));
});
