import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroPowerListComponent } from './superhero-power-list.component';

describe('SuperheroPowerListComponent', () => {
  let component: SuperheroPowerListComponent;
  let fixture: ComponentFixture<SuperheroPowerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroPowerListComponent]
    });
    fixture = TestBed.createComponent(SuperheroPowerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
