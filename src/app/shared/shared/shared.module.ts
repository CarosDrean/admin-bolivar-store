import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [BreadcumbComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: [BreadcumbComponent, TableComponent],
})
export class SharedModule { }
