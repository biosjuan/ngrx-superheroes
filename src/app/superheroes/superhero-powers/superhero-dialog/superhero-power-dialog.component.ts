import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperheroPower } from '../../models';
import { SuperheroPowerEntityService } from '../../services/superhero-power-entity.service';

@Component({
  selector: 'app-superhero-dialog',
  templateUrl: './superhero-power-dialog.component.html',
  styleUrls: ['./superhero-power-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperheroPowerDialogComponent {
  powerForm: FormGroup;

  mode: 'create' | 'update';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SuperheroPowerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private superheroPowerEntityService: SuperheroPowerEntityService
  ) {
    this.mode = this.data.mode;
    this.powerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    console.log(JSON.stringify(this.mode));
    if (this.mode === 'update') {
      this.powerForm.patchValue({ ...data.superheroPower });
    }
  }

  onSubmit(): void {
    if (this.powerForm.valid) {
      const formData = this.powerForm.value;

      if (this.mode === 'update') {
        const superPower: SuperheroPower = {
          ...this.data.superheroPower,
          ...formData,
        };

        try {
          this.superheroPowerEntityService.update(superPower);
        } catch (error) {
          console.log(error);
        }
      } else if (this.mode === 'create') {
        try {
          this.superheroPowerEntityService
            .add(this.powerForm.value)
            .subscribe((res) => console.log(res));
        } catch (error) {
          console.log(error);
        }
      }

      this.dialogRef.close(formData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
