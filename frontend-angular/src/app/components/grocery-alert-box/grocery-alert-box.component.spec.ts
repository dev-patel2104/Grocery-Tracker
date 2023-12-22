import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryAlertBoxComponent } from './grocery-alert-box.component';

describe('GroceryAlertBoxComponent', () => {
  let component: GroceryAlertBoxComponent;
  let fixture: ComponentFixture<GroceryAlertBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryAlertBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroceryAlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
