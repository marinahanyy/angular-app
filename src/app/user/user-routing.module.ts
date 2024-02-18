import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./components/shipmenta-pages/add/add.component";
import {LayoutsComponent} from "./layouts/layouts.component";
import {MyParcelsComponent} from "./components/my-parcels/my-parcels.component";
import {MyAddressesComponent} from "./components/my-addresses/my-addresses.component";
import {MyAcceptancesComponent} from "./components/my-acceptances/my-acceptances.component";
import {MySendersComponent} from "./components/my-senders/my-senders.component";
import {MyShipmentsComponent} from "./components/my-shipments/my-shipments.component";
import {WarehouseComponent} from "./components/shipmenta-pages/warehouse/warehouse.component";
import {OnWayComponent} from "./components/shipmenta-pages/on-way/on-way.component";
import {InCountryComponent} from "./components/shipmenta-pages/in-country/in-country.component";
import {RecivedComponent} from "./components/shipmenta-pages/recived/recived.component";
import {PasswordComponent} from "./components/password/password.component";
import {PersonalInfoComponent} from "./components/personal-info/personal-info.component";
import {SettingsComponent} from "./components/settings/settings.component";



const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'parcels', pathMatch: 'full' },
      { path: 'parcels', component: MyParcelsComponent},
      {
        path: 'myAddress',
        component: MyAddressesComponent,
        children: [
          { path: '', redirectTo: 'myAcceptance', pathMatch: 'full' },
          { path: 'myAcceptance', component: MyAcceptancesComponent},
          { path: 'mySenders', component: MySendersComponent},
        ],
      },
      {
        path: 'shipments',
        component: MyShipmentsComponent,
        children: [
          { path: '', redirectTo: 'order', pathMatch: 'full' },
          { path: 'order', component: AddComponent},
          { path: 'in-warehouse', component: WarehouseComponent},
          { path: 'onway', component: OnWayComponent},
          { path: 'in-country', component: InCountryComponent},
          { path: 'recived', component: RecivedComponent},

        ],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
          { path: 'personal-info', component: PersonalInfoComponent},
          { path: 'password', component: PasswordComponent},
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
