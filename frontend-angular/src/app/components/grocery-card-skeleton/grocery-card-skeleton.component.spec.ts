import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCardSkeletonComponent } from './grocery-card-skeleton.component';

describe('GroceryCardSkeletonComponent', () => {
  let component: GroceryCardSkeletonComponent;
  let fixture: ComponentFixture<GroceryCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryCardSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroceryCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
