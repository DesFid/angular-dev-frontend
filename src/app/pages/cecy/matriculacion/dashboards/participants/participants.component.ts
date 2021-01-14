import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../../../../shared/breadcrumb.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {CecyServiceService} from '../../../../../services/cecy/cecy-service.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
})
export class ParticipantsComponent implements OnInit {
  coursesList: number;
  coursesListPaid: number;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private spinner: NgxSpinnerService,
    private cecyService: CecyServiceService
  ) {
    this.breadcrumbService.setItems([
      { label: 'CEC-Y' },
    ]);
  }

  obtenerCursosGratuitos() {
    this.cecyService
        .get('planification?free=true')
        .subscribe((response: any) => {
          this.coursesList = response.data.length;
        });
    this.cecyService
        .get('courses/filter?for_free=false')
        .subscribe((response: any) => {
          this.coursesListPaid = response.data.length;
        });
  }

  ngOnInit() {
    this.obtenerCursosGratuitos()
  }
}
