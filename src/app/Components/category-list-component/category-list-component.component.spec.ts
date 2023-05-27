import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListComponentComponent } from './category-list-component.component';

describe('CategoryListComponentComponent', () => {
  let component: CategoryListComponentComponent;
  let fixture: ComponentFixture<CategoryListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
