import { APP_INITIALIZER, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeRu from "@angular/common/locales/ru";
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import {HowIsItWorkComponent} from "./landing/components/home/how-is-it-work/how-is-it-work.component";
import {AppInitService} from "./landing/local-services/appInitService/app-init-service.service";
import {NavbarComponent} from "./landing/modules/navbar/navbar.component";
import {FooterComponent} from "./landing/modules/footer/footer.component";
import {HomeComponent} from "./landing/modules/layouts/home/home.component";
import {LanguageComponent} from "./landing/language/language.component";
import {FindLanguageFromKeyPipe} from "./landing/language/find-language-from-key.pipe";
import {CaruselComponent} from "./landing/components/home/carusel/carusel.component";
import {StoresComponent} from "./landing/components/home/stores/stores.component";
import {ChooseUsComponent} from "./landing/components/home/choose-us/choose-us.component";
import {ReviewsComponent} from "./landing/components/home/reviews/reviews.component";
import {FaqComponent} from "./landing/components/home/faq/faq.component";
import {AboutUsComponent} from "./landing/modules/layouts/about-us/about-us.component";
import {PricesComponent} from "./landing/components/home/prices/prices.component";
import {ContactsComponent} from "./landing/modules/layouts/contacts/contacts.component";
import {PriceComponent} from "./landing/modules/layouts/price/price.component";
import {ServicesComponent} from "./landing/modules/layouts/services/services.component";
import {HelpsComponent} from "./landing/modules/layouts/helps/helps.component";
import {RestrictionsComponent} from "./landing/components/restrictions/restrictions.component";
import {MapComponent} from "./landing/components/home/map/map.component";
import {FileComponent} from "./landing/components/Setting/file/file.component";
import {NoticeComponent} from "./landing/components/Setting/notice/notice.component";
import {LoginComponent} from "./account/auth/login/login.component";
import {RegisterComponent} from "./account/auth/register/register.component";

registerLocaleData(localeRu);
export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      appInitService.init();
      resolve(true);
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LanguageComponent,
    FindLanguageFromKeyPipe,
    CaruselComponent,
    HowIsItWorkComponent,
    StoresComponent,
    ChooseUsComponent,
    ReviewsComponent,
    FaqComponent,
    AboutUsComponent,
    PricesComponent,
    ContactsComponent,
    PriceComponent,
    ServicesComponent,
    HelpsComponent,
    RestrictionsComponent,
    MapComponent,
    NoticeComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule

  ], schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: NZ_I18N, useValue: ru_RU },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
