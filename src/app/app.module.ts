import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import {StoreService} from './services/store.service'
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
