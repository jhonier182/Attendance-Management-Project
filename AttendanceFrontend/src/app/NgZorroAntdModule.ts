import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = Object.values(AllIcons);

@NgModule({
    imports:[
        NzIconModule.forChild(antDesignIcons),
    ],
  exports: [
    NzButtonModule,
    NzTableModule,
    NzInputModule,
    NzFormModule,
    NzIconModule,
    NzSelectModule,
    NzDatePickerModule,
    NzModalModule,
    NzMessageModule,
    NzNotificationModule,
    NzCardModule,
    NzGridModule,
    NzMenuModule,
    NzDropDownModule,
    NzPaginationModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSwitchModule,
    NzSpinModule,
    NzToolTipModule,
    NzAlertModule,
    NzTabsModule,
    NzCollapseModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzBadgeModule,
    NzLayoutModule,
    NzDrawerModule,
    NzStepsModule,
    NzProgressModule,
    NzUploadModule,
    NzTreeModule,
    NzPopoverModule
  ]
})
export class NgZorroAntdModule { }