import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologyPage } from './technology.page';

describe('TechnologyPage', () => {
  let component: TechnologyPage;
  let fixture: ComponentFixture<TechnologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TechnologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
