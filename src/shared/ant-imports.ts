import {DashboardOutline, FormOutline, MenuFoldOutline, MenuUnfoldOutline} from "@ant-design/icons-angular/icons";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { NzIconModule } from 'ng-zorro-antd/icon';

export const AntModules = [
  NzLayoutModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzIconModule
]

export const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline
]
