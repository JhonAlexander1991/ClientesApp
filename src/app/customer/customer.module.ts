import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPageRoutingModule } from './customer-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomerPage } from './customer.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes)
    // CustomerPageRoutingModule
  ],
  declarations: [CustomerPage]
})
export class CustomerPageModule {}
