import { Component, OnInit } from '@angular/core';

import { SelectItem, MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../../../../shared/breadcrumb.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academic-records',
  templateUrl: './academic-records.component.html',
})
export class AcademicRecordsComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: 'CEC-Y'},
    ]);
  }

  ngOnInit() {}

  onUpload(event) {
    alert('asdasd');
    this.router.navigate(['/cecy/academic-records/see-academic-records']);
    // for (const file of event.files) {
    //   this.uploadedFiles.push(file);
    // }

    // this.msgs = [];
    // this.msgs.push({
    //   severity: "info",
    //   summary: "Success",
    //   detail: "Upload Completed",
    // });
  }
}
