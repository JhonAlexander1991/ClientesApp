import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },

  {
    path: 'addcustomer/:id/:name/:email/:nit/:created/:birth',
    loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  },

  {
    path: 'addcustomer',
    loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
