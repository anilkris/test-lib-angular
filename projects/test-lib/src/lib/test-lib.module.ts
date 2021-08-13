import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    TestLibComponent
  ],
  imports: [
    MatCheckboxModule

  ],
  exports: [
    TestLibComponent
  ]
})
export class TestLibModule { }
