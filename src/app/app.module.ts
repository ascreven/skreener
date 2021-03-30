import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RequestCache } from './http-interceptors/request-cache.service';
import { CachingInterceptor } from './http-interceptors/CacheInterceptor.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
