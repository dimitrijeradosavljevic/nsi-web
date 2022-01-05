import { NgModule } from '@angular/core';
import { SharedModule } from '../../../_shared/shared.module';

import { DatePageRoutingModule } from './date-routing.module';

import { DatePage } from './date.page';

@NgModule({
  imports: [
    SharedModule,

    DatePageRoutingModule
  ],
  declarations: [DatePage]
})
export class DatePageModule {}
