import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MixtedPage } from './mixted.page';

describe('MixtedPage', () => {
  let component: MixtedPage;
  let fixture: ComponentFixture<MixtedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MixtedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
