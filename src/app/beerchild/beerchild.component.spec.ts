import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerchildComponent } from './beerchild.component';

describe('BeerchildComponent', () => {
  let component: BeerchildComponent;
  let fixture: ComponentFixture<BeerchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
