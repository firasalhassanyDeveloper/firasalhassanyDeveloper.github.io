import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehandlingComponent } from './behandling.component';

describe('BehandlingComponent', () => {
  let component: BehandlingComponent;
  let fixture: ComponentFixture<BehandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
