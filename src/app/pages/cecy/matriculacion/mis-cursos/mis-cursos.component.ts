import { Component, OnInit } from '@angular/core';
// import {CountryService} from '../../../../demo/service/countryservice';
// import { SelectItem, MenuItem } from "primeng/api";
import {BreadcrumbService} from '../../../../shared/breadcrumb.service';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dashboard-coordinador',
  templateUrl: './mis-cursos.component.html',
})
export class MisCursosComponent implements OnInit {
    constructor(private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
          {label: 'CEC-Y', routerLink: ['/cecy/dashboard/participantes']},
          {label: 'Mis Cursos'},
      ]);
    }

  ngOnInit() {}
}
