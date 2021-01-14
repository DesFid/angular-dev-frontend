import { Participants } from './../../../../models/cecy/participants';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CecyServiceService } from 'src/app/services/cecy/cecy-service.service';

@Component({
  selector: 'app-participantscrud',
  templateUrl: './participantscrud.component.html',
  styleUrls: ['./participantscrud.component.css']
})
export class ParticipantscrudComponent implements OnInit {
  persons:any=[];
  participant: Participants;
  participants: any = [];
  displayFormParticipants: boolean;

  constructor(private _spinnerService: NgxSpinnerService,
    private _cecyService: CecyServiceService,) { }

  ngOnInit(): void {
    this.persons = [
      {label: '', value: ''},
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
  ];

    this.participants = new Participants();
    this.getParticipants();
  }


  getParticipants() {
    this._spinnerService.show();
    this._cecyService.get('participants').subscribe(response => {
      this._spinnerService.hide();
      this.participants = response// ['data']['classroom'];
      console.log(this.participants);
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
    this.displayFormParticipants = true;
  }

}
