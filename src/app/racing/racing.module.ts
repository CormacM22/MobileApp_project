import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RacingPageRoutingModule } from './racing-routing.module';

import { RacingPage } from './racing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RacingPageRoutingModule
  ],
  declarations: [RacingPage]
})
export class RacingPageModule {}
