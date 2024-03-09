import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { SearchComponent } from "./search/search.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CardComponent,
    SearchComponent
  ],
  exports: [
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]

})
export class RickModule{}
