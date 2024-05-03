import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlasticPage } from './plastic.page';

describe('PlasticPage', () => {
  let component: PlasticPage;
  let fixture: ComponentFixture<PlasticPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
