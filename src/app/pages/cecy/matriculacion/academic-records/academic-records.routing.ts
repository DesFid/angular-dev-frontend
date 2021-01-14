import { Routes } from "@angular/router";
import { SeeAcademicRecordsComponent } from "./see-academic-records/see-academic-records.component";
import { DetailAcademicRecordComponent } from "./detail-academic-record/detail-academic-record.component";

export const HomeRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "see-academic-records",
        component: SeeAcademicRecordsComponent,
      },
      {
        path: "detail-academic-record",
        component: DetailAcademicRecordComponent,
      },
    ],
  },
];
