import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { ExchangeComponent } from './components/header/exchange/exchange.component';
import { ExchangeDirective } from './components/header/exchange.directive';
import { HiddenDirective } from './components/header/hidden.directive';
import { ProductsServise } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { baseUrl, BASE_URL_TOKEN } from './config';
import { ModalModule } from './components/modal/modal/modal.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FormFieldComponent,
    TextFieldComponent,
    InputFieldComponent,
    ProductCardComponent,
    FilterPipePipe,
    ExchangeComponent,
    ExchangeDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [
    {
      provide: ProductsServise,
      useClass: ProductsServise
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: baseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
