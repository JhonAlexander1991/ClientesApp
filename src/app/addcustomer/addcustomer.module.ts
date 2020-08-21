import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerPageRoutingModule } from './addcustomer-routing.module';

import { AddcustomerPage } from './addcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: AddcustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcustomerPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddcustomerPage]
})
export class AddcustomerPageModule {}
