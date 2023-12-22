import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCardComponent } from './grocery-card.component';

describe('GroceryCardComponent', () => {
  let component: GroceryCardComponent;
  let fixture: ComponentFixture<GroceryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroceryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
