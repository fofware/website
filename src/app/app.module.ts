import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageFallBackDirective } from './directives/image-fall-back.directive';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { HomeComponent } from './components/home/home.component';
import { ProdListPublicComponent } from './components/prod-list-public/prod-list-public.component';
import { ArticuloCardSelectComponent } from './components/articulo-card-select/articulo-card-select.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloCardSelectHeaderComponent } from './components/articulo-card-select-header/articulo-card-select-header.component';
import { ArticuloCardSelectBoxListComponent } from './components/articulo-card-select-box-list/articulo-card-select-box-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageFallBackDirective,
    MenuTopComponent,
    HomeComponent,
    ProdListPublicComponent,
    ArticuloCardSelectComponent,
    ArticuloCardSelectHeaderComponent,
    ArticuloCardSelectBoxListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
