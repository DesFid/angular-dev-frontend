import { State } from 'src/app/models/ignug/state';
import { Classroom } from '../../../../models/ignug/classroom';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { IgnugService } from '../../../../services/ignug/ignug.service'
import { FormGroup } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  icons: any[];
  types: any[];
  classroom: Classroom;
  classrooms: any = [];
  stateSelect: State;
  classroomSelect: Classroom = { code: null, name: null, icon: null, type: null  };
  displayFormClassroom: boolean;
  formClassroom: FormGroup;





  constructor(private _spinnerService: NgxSpinnerService,
    private _ignugService: IgnugService,
    

  ) { }

  ngOnInit(): void {
    this.types = [
      { label: '', value: '' },
      { label: 'Classroom', value:{id:1} },
      
    ];
    this.icons = [
      { label: '', value: '' },
      { label: 'New York', value: 'NY' },
      { label: 'Rome', value: 'RM' },
      { label: 'London', value: 'LDN' },
      { label: 'Istanbul', value: 'IST' },
      { label: 'Paris', value: 'PRS' }
    ];
    this.classroom = new Classroom();
    this.getAulas();


  }



  showDialog() {
    this.displayFormClassroom = true;
  }


  getAulas() {
    this._spinnerService.show();
    this._ignugService.get('classroom').subscribe(response => {
      this._spinnerService.hide();
      this.classrooms = response// ['data']['classroom'];
      console.log(this.classrooms);
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



  postclassroom() {
    this.classroomSelect.icon;
    this.classroomSelect.type ;
    console.log(this.classroomSelect);
    this._spinnerService.show();
    this._ignugService.post('classroom/' + this.classroomSelect.id, {
      classroom: this.classroomSelect,
      type: this.classroomSelect.type
  }).subscribe(
    response=>{
      this._spinnerService.hide();
               /* this._messageService.add({
                    key: 'tst',
                    severity: 'success',
                    summary: 'Se creó correctamente',
                    detail: this.classroomSelect.name,
                    life: 5000
                });*/
    }
  )

  }

}
