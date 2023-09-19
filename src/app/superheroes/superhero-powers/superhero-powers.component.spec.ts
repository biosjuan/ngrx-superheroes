import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroPowersComponent } from './superhero-powers.component';

describe('SuperheroPowersComponent', () => {
  let component: SuperheroPowersComponent;
  let fixture: ComponentFixture<SuperheroPowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroPowersComponent]
    });
    fixture = TestBed.createComponent(SuperheroPowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
