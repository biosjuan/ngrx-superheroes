import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroPowerDialogComponent } from './superhero-power-dialog.component';

describe('SuperheroDialogComponent', () => {
  let component: SuperheroPowerDialogComponent;
  let fixture: ComponentFixture<SuperheroPowerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroPowerDialogComponent],
    });
    fixture = TestBed.createComponent(SuperheroPowerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
