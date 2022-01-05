import { NgModule } from '@angular/core';

import { GeoPageRoutingModule } from './geo-routing.module';

import { GeoPage } from './geo.page';
import { SharedModule } from '../../../_shared/shared.module';

@NgModule({
  imports: [
    SharedModule,

    GeoPageRoutingModule
  ],
  declarations: [GeoPage]
})
export class GeoPageModule {}
