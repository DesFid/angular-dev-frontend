import { Component, OnInit } from '@angular/core';
// import {CountryService} from '../../../../demo/service/countryservice';
// import {SelectItem, MenuItem} from 'primeng/api';
import { BreadcrumbService } from '../../../../shared/breadcrumb.service';

import { CecyServiceService } from '../../../../services/cecy/cecy-service.service';

@Component({
  selector: 'app-paid-courses',
  templateUrl: './paid-courses.component.html',
})
export class PaidCoursesComponent implements OnInit {
  coursesList: [];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private cecyService: CecyServiceService
  ) {
    this.breadcrumbService.setItems([
      { label: 'CEC-Y', routerLink: ['/cecy/dashboard/participantes'] },
      { label: 'Cursos De Paga' },
    ]);
  }
  ngOnInit() {
    this.obtenerCursosPagados();
  }

  obtenerCursosPagados() {
    this.cecyService
      .get('courses/filter?for_free=false')
      .subscribe((response: any) => {
        this.coursesList = response.data;
      });
  }
}
