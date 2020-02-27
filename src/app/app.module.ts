import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ExampleModule } from "example";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExampleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
