import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsrecipeComponent } from './detailsrecipe.component';

describe('DetailsrecipeComponent', () => {
  let component: DetailsrecipeComponent;
  let fixture: ComponentFixture<DetailsrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsrecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
