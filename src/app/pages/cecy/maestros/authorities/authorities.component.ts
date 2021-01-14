import { Authorities } from './../../../../models/cecy/authorities';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CecyServiceService } from 'src/app/services/cecy/cecy-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authorities',
  templateUrl: './authorities.component.html',
  styleUrls: ['./authorities.component.css']
})
export class AuthoritiesComponent implements OnInit {

  user:any[];
  authority:Authorities;
  authorities: any = [] ;
  displayFormAuthorities: boolean;
  formAuthorities: FormGroup;

  constructor(private _spinnerService: NgxSpinnerService,
    private _cecyService: CecyServiceService,) { }

  ngOnInit(): void {
    this.user = [
      {label: '', value: ''},
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
  ];
    this.authorities = new Authorities();
    this.getAuthorities();
  }


  getAuthorities(){
    this._spinnerService.show();
    this._cecyService.get('cecy_authorities').subscribe(response => {
      this._spinnerService.hide();
      this.authorities = response//['data']['classroom'];
      console.log(this.authorities);
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
    this.displayFormAuthorities = true;
  }

}
