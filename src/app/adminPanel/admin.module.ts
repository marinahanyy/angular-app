import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
@NgModule({
  declarations: [
    AdminComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule
  ]
})
export class AdminModule {}
