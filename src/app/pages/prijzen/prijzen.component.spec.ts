import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijzenComponent } from './prijzen.component';

describe('PrijzenComponent', () => {
  let component: PrijzenComponent;
  let fixture: ComponentFixture<PrijzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijzenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
