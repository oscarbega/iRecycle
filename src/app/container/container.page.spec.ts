import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerPage } from './container.page';

describe('ContainerPage', () => {
  let component: ContainerPage;
  let fixture: ComponentFixture<ContainerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
