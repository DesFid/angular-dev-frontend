import { Component, OnInit } from "@angular/core";
//import {CountryService} from '../../../../demo/service/countryservice';
import { SelectItem, MenuItem } from "primeng/api";
import { BreadcrumbService } from "../../../../../shared/breadcrumb.service";
//import { NgxSpinnerService } from "ngx-spinner";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from "@angular/forms";

import { CecyServiceService } from "../../../../../services/cecy/cecy-service.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
})
export class RegistrationComponent implements OnInit {
  checkboxValuesCourseFollow: string[] = [];
  levelInstruction: SelectItem[];
  registrationForm: FormGroup;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private cecyService: CecyServiceService,
    private fb: FormBuilder
  ) {
    this.breadcrumbService.setItems([
      { label: "CEC-Y", routerLink: ["/cecy/dashboard/participants"] },
      { label: "Cursos Gratuitos" },
    ]);

    this.registrationForm = this.fb.group({
      level_instruction: new FormControl("", Validators.required),
      work: new FormControl("", Validators.required),
      company_name: new FormControl("", Validators.required),
      company_address: new FormControl("", Validators.required),
      company_phone: new FormControl("", Validators.required),
      company_activity: new FormControl("", Validators.required),
      company_sponsor: new FormControl("", Validators.required),
      name_contact: new FormControl("", Validators.required),
      modality: new FormControl("", Validators.required),
      know_course: new FormControl(""),
      course_follow: new FormControl(""),
    });
  }

  ngOnInit() {
    this.levelInstruction = [];

    this.levelInstruction.push({
      label: "Seleccione su nivel de intrucción",
      value: 0,
    });
    this.levelInstruction.push({
      label: "Primaria",
      value: { id: 1, name: "primary" },
    });
    this.levelInstruction.push({
      label: "Secundaria",
      value: { id: 2, name: "high-school" },
    });
    this.levelInstruction.push({
      label: "Tercer nivel",
      value: { id: 3, name: "degree" },
    });
  }

  saveRegistrationData() {
    console.log(this.registrationForm.value);
  }
}
