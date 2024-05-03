import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompostablePage } from './compostable.page';

describe('CompostablePage', () => {
  let component: CompostablePage;
  let fixture: ComponentFixture<CompostablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompostablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
