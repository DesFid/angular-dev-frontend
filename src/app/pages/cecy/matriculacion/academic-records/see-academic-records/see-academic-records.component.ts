import { Component, OnInit } from '@angular/core';
// import {CountryService} from '../../../../demo/service/countryservice';
// import { SelectItem, MenuItem } from "primeng/api";
import { BreadcrumbService } from '../../../../../shared/breadcrumb.service';
import { CarService } from 'src/app/demo/service/carservice';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-see-academic-records',
  templateUrl: './see-academic-records.component.html',
})
export class SeeAcademicRecordsComponent implements OnInit {
  academic_records: Array<any>;

  cols: any[];

  constructor(
    private carService: CarService,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'CEC-Y', routerLink: ['/cecy/dashboard/academic-records']  },
      { label: 'Historial Acádemico' },
    ]);
  }

  ngOnInit() {
    this.carService
      .getCarsLarge()
      .then((cars) => (this.academic_records = cars));
    this.cols = [
      { field: 'number_registration', header: 'N° de Matrícula' },
      { field: 'person_participant_id', header: 'Estudiante' },
      { field: 'planification_id', header: 'Curso' },
      { field: 'approved', header: '¿Aprobado?' },
    ];
  }
}
