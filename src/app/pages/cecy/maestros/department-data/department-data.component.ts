import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DepartmentData } from 'src/app/models/cecy/department';
import { CecyServiceService } from 'src/app/services/cecy/cecy-service.service';

@Component({
  selector: 'app-department-data',
  templateUrl: './department-data.component.html',
  styleUrls: ['./department-data.component.css']
})
export class DepartmentDataComponent implements OnInit {
  types: any[];
  department: DepartmentData;
  departments: any = [];
  displayFormDepartment: boolean;
  formClassroom: FormGroup;
  constructor(private _spinnerService: NgxSpinnerService,
    private _cecyService: CecyServiceService) { }

  ngOnInit(): void {
    this.departments = new DepartmentData();
    this.getDepartments();
    this.types = [
      {label: '', value: ''},
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
  ];
  }

  getDepartments() {
    this._spinnerService.show();
    this._cecyService.get('department_data').subscribe(response => {
      this._spinnerService.hide();
      this.departments = response//['data']['classroom'];
      console.log(this.departments);
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
    this.displayFormDepartment = true;
  }

}
