import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Institucion } from 'src/app/models/cecy/institution';
import { CecyServiceService } from 'src/app/services/cecy/cecy-service.service';

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.css']
})
export class InstitucionComponent implements OnInit {
  institucion: Institucion;
  institucions: any = [];
  displayFormInstitucion: boolean;
  formClassroom: FormGroup;
  constructor(private _spinnerService: NgxSpinnerService,
    private _cecyService: CecyServiceService,) { }

  ngOnInit(): void {
    this.institucions = new Institucion();
    this.getInstitucions();
  }


  getInstitucions() {
    this._spinnerService.show();
    this._cecyService.get('cecy_institucion').subscribe(response => {
      this._spinnerService.hide();
      this.institucions = response//['data']['classroom'];
      console.log(this.institucions);
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
    this.displayFormInstitucion = true;
  }

}
