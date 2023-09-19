import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [],
})
export class UiModule {}
