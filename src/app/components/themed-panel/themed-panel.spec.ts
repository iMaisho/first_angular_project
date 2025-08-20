import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedPanel } from './themed-panel';

describe('ThemedPanel', () => {
  let component: ThemedPanel;
  let fixture: ComponentFixture<ThemedPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemedPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemedPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
