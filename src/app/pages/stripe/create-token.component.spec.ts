import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTokenComponent } from './stripe.component';

describe('CreateTokenComponent', () => {
  let component: CreateTokenComponent;
  let fixture: ComponentFixture<CreateTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTokenComponent]
    });
    fixture = TestBed.createComponent(CreateTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
