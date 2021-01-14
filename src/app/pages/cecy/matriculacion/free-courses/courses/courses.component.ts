import { Component, OnInit } from '@angular/core';
// import {CountryService} from '../../../../demo/service/countryservice';
import { SelectItem, MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../../../../shared/breadcrumb.service';
// import { NgxSpinnerService } from "ngx-spinner";

import { CecyServiceService } from '../../../../../services/cecy/cecy-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  coursesList: [];

  selectedFilter: any;
  coursesTypes: any[];
  coursesListFilter: any[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private cecyService: CecyServiceService
  ) {
    this.breadcrumbService.setItems([
      { label: 'CEC-Y', routerLink: ['/cecy/dashboard/participants'] },
      { label: 'Cursos Gratuitos' },
    ]);
  }

  ngOnInit() {
    this.obtenerCursosGratuitos();
    this.obtenerTipoCursosFiltrar();
    this.coursesTypes = [];
    this.coursesTypes.push({ label: 'Filtrar por...', value: null });
  }

  obtenerCursosGratuitos() {
    this.cecyService
        .get('planification/courses?for_free=true')
        .subscribe((response: any) => {
          const {data} = response;
          this.coursesList = data;
          this.coursesListFilter = data;
        });
  }

  changeFilter(event){
      const {value} = event;
      if (!value){
          this.coursesListFilter = this.coursesList;
          return
      }
      const course = this.coursesList;
      this.coursesListFilter = course.filter((course: any) => value.id === course.course_type_id)
  }

  obtenerTipoCursosFiltrar() {
    this.cecyService
      .get('catalogues/filter?type=course_type')
        .subscribe((response: any) => {
          const {data} = response;
            data.map(attribute => {
            this.coursesTypes.push({
              label: attribute.name,
              value: { id: attribute.id, name: attribute.code }
            });
          })
        });
  }

  // guardar() {
  //   this.cecyService
  //     .post("courses", {
  //       name: "test2",
  //     })
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  // actualizar() {
  //   let id = prompt("Ingrese ID"),
  //     text = prompt("TEXTO");

  //   this.cecyService
  //     .update("courses/" + id, {
  //       name: text,
  //     })
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  // eliminar() {
  //   let id = prompt("Ingrese ID");

  //   this.cecyService.delete("courses/" + id).subscribe((response) => {
  //     console.log(response);
  //   });
  // }
}
