import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { SharedModule } from 'src/shared/shared.module';
import {PasswordComponent} from "./components/password/password.component";
import {LayoutsComponent} from "./layouts/layouts.component";
import {MyParcelsComponent} from "./components/my-parcels/my-parcels.component";
import {MyAddressesComponent} from "./components/my-addresses/my-addresses.component";
import {MyShipmentsComponent} from "./components/my-shipments/my-shipments.component";
import {MySendersComponent} from "./components/my-senders/my-senders.component";
import {PersonalInfoComponent} from "./components/personal-info/personal-info.component";
import {MyAcceptancesComponent} from "./components/my-acceptances/my-acceptances.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {AntModules} from "../../shared/ant-imports";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    LayoutsComponent,
    MyParcelsComponent,
    MyAddressesComponent,
    MyShipmentsComponent,
    SettingsComponent,
    PasswordComponent,
    PersonalInfoComponent,
    MySendersComponent,
    MyAcceptancesComponent
  ],
  imports: [
    AntModules,
    CommonModule,
    // BrowserModule,
    CommonModule,
    UserRoutingModule,
    NzModalModule,
    ClipboardModule,
    FormsModule,
    NzModalModule,
    ReactiveFormsModule,
    CarouselModule,
    NzCollapseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ]
})
export class UserModule { }
