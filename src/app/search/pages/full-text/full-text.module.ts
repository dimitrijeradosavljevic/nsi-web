import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullTextPageRoutingModule } from './full-text-routing.module';

import { FullTextPage } from './full-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullTextPageRoutingModule
  ],
  declarations: [FullTextPage]
})
export class FullTextPageModule {}
