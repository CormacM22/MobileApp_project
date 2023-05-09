import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacingPage } from './racing.page';

const routes: Routes = [
  {
    path: '',
    component: RacingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacingPageRoutingModule {}
