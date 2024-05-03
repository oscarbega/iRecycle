import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WastePage } from './waste.page';

describe('WastePage', () => {
  let component: WastePage;
  let fixture: ComponentFixture<WastePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
