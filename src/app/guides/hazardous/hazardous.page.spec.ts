import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HazardousPage } from './hazardous.page';

describe('HazardousPage', () => {
  let component: HazardousPage;
  let fixture: ComponentFixture<HazardousPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
