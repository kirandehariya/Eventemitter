import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentcomponentComponent } from './component/parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './component/childcomponent/childcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentcomponentComponent,
    ChildcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
