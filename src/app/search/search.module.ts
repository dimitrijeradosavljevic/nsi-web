import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HttpClientModule,

    SearchRoutingModule
  ]
})
export class SearchModule { }
