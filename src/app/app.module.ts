import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './components/loader/loader.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HttpClientModule,
    LoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
