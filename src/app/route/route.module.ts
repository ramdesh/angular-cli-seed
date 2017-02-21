import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CarListModule } from "../car-list/car-list.module";
import { CarServiceModule } from "../car-service/car-service.module";
import {CarSearchModule} from "../car-search/car-search.module";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: ListingComponent },
  { path: 'search', component: SearchResultComponent },
];

@NgModule({
  exports: [
    ListingComponent,
    SearchResultComponent,
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
    CarListModule,
    CarServiceModule,
    CarSearchModule,
    CommonModule
  ], declarations: [ListingComponent, SearchResultComponent]
})
export class RouteModule { }

export const routingComponents = [ListingComponent, SearchResultComponent];
