import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlassPage } from './glass.page';

describe('GlassPage', () => {
  let component: GlassPage;
  let fixture: ComponentFixture<GlassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
