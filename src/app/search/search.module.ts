import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,

    SearchRoutingModule
  ]
})
export class SearchModule { }
