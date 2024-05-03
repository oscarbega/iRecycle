import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganicPage } from './organic.page';

describe('OrganicPage', () => {
  let component: OrganicPage;
  let fixture: ComponentFixture<OrganicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
