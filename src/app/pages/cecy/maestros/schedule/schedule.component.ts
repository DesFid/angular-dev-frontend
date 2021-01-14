import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Schedule } from 'src/app/models/cecy/schedule';
import { CecyServiceService } from 'src/app/services/cecy/cecy-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule: Schedule;
  schedules: any = [];
  displayFormSchedule: boolean;
  formClassroom: FormGroup;
  constructor(private _spinnerService: NgxSpinnerService,
    private _cecyService: CecyServiceService,) { }

  ngOnInit(): void {
    this.schedules = new Schedule();
    this.getSchedules();
    console.log(this.schedules);
  }

  getSchedules() {
    this._spinnerService.show();
    this._cecyService.get('schedule').subscribe(response => {
      this._spinnerService.hide();
      this.schedules = response// ['data']['schedule'];
      console.log(this.schedules);
      // this.parentCodeCatalogues = [];
      /*this.catalogues.forEach(catalogue => {
           this.parentCodeCatalogues.push({'label': catalogue.name, 'value': catalogue.id});
       });*/
    }, error => {
      this._spinnerService.hide();
      /*this._messageService.add({
          key: 'tst',
          severity: 'error',
          summary: 'Oops! Problemas con el servidor',
          detail: 'Vuelve a intentar más tarde',
          life: 5000
      });*/
    });
  }
  showDialog() {
    this.displayFormSchedule = true;
  }


}
