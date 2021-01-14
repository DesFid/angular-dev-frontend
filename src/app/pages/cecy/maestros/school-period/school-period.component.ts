import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { SchoolPeriod } from 'src/app/models/cecy/schoolPeriod';
import { CecyServiceService } from 'src/app/services/cecy/cecy-service.service';

@Component({
  selector: 'app-school-period',
  templateUrl: './school-period.component.html',
  styleUrls: ['./school-period.component.css']
})
export class SchoolPeriodComponent implements OnInit {

  schoolPeriod: SchoolPeriod;
  schoolPeriods: any = [];
  displayFormSchoolp: boolean;
  formClassroom: FormGroup;
  constructor(private _spinnerService: NgxSpinnerService,
    private _cecyService: CecyServiceService,) { }

  ngOnInit(): void {
    this.schoolPeriods = new SchoolPeriod();
    this.getschoolPeriods();
  }

  getschoolPeriods() {
    this._spinnerService.show();
    this._cecyService.get('school_period').subscribe(response => {
      this._spinnerService.hide();
      this.schoolPeriods = response//['data']['classroom'];
      console.log(this.schoolPeriods);
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
    this.displayFormSchoolp = true;
  }


}
