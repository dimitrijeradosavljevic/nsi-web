import { NgModule } from '@angular/core';
import { SharedModule } from '../../../_shared/shared.module';

import { FullTextPageRoutingModule } from './full-text-routing.module';

import { FullTextPage } from './full-text.page';

@NgModule({
  imports: [
    SharedModule,

    FullTextPageRoutingModule
  ],
  declarations: [FullTextPage]
})
export class FullTextPageModule {}
