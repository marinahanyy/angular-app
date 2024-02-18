import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PriceComponent} from "./landing/modules/layouts/price/price.component";
import {HomeComponent} from "./landing/modules/layouts/home/home.component";
import {AboutUsComponent} from "./landing/modules/layouts/about-us/about-us.component";
import {ContactsComponent} from "./landing/modules/layouts/contacts/contacts.component";
import {HelpsComponent} from "./landing/modules/layouts/helps/helps.component";
import {ServicesComponent} from "./landing/modules/layouts/services/services.component";
import {RestrictionsComponent} from "./landing/components/restrictions/restrictions.component";
import {LoginComponent} from "./account/auth/login/login.component";
import {RegisterComponent} from "./account/auth/register/register.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shops', loadChildren: () => import('./landing/modules/shops/shops.module').then(m => m.ShopsModule)},
  { path: 'admin', loadChildren: () => import('./adminPanel/admin.module').then(m => m.AdminModule)},
  { path: 'cabinet', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'tariffs', component: PriceComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'helps', component: HelpsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register' , component:RegisterComponent },
  { path: 'restrictions' , component: RestrictionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
