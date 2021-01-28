import { Component, OnInit } from '@angular/core';
// import {CountryService} from '../../../../demo/service/countryservice';
import { SelectItem, MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../../../../shared/breadcrumb.service';
// import { NgxSpinnerService } from "ngx-spinner";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import { CecyServiceService } from '../../../../../services/cecy/cecy-service.service';
import {AuthService} from '../../../../../services/auth/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../register.component.css']
})
export class RegistrationComponent implements OnInit {
  checkboxValuesCourseFollow: string[] = [];
  modality: SelectItem[];
  registrationForm: FormGroup;
  phone: string;
  course: any;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private cecyService: CecyServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _authService: AuthService
  ) {
    this.breadcrumbService.setItems([
      { label: 'CEC-Y', routerLink: ['/cecy/dashboard/participants'] },
      { label: 'Cursos Gratuitos' },
    ]);

    this.registrationForm = this.fb.group({
      level_instruction: new FormControl('', Validators.required),
      modality: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      cellphone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      institution_name: new FormControl('', Validators.required),
      institution_address: new FormControl('', Validators.required),
      institution_email: new FormControl('', [Validators.email, Validators.required]),
      institution_phone: new FormControl('', Validators.required),
      institution_sponsored: new FormControl('false', Validators.required),
      institution_contact: new FormControl(''),
      institution_activity: new FormControl('', Validators.required),
      institution_know: new FormControl('', Validators.required),
      institution_other_courses: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getUserData();
    this.route.queryParams.subscribe(
        (params: any) => {
          this.getCourseData(params.id);
        }
    )
    this.modality = [];
    this.modality.push({
      label: 'Seleccione su nivel de intrucción',
      value: 0,
    });
    this.modality.push({
      label: 'Primaria',
      value: 1,
    });
    this.modality.push({
      label: 'Secundaria',
      value: 2,
    });
    this.modality.push({
      label: 'Tercer nivel',
      value: 3,
    });
  }

  getUserData() {
    this._authService.get('users/' + '1').subscribe(response => {console.log('RES: ', response)});
    console.log(this.registrationForm);
  }

  getCourseData(id) {
    this.cecyService
        .get(`planification/${id}`)
        .subscribe((response: any) => {
          this.course = response.data;
        });
  }

  saveRegistrationData() {
    console.log(this.registrationForm.valid, this.registrationForm);
  }
}
