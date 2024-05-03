import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperPage } from './paper.page';

describe('PaperPage', () => {
  let component: PaperPage;
  let fixture: ComponentFixture<PaperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
