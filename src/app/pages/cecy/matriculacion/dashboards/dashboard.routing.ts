import { Routes } from "@angular/router";
import { ParticipantsComponent } from "./participants/participants.component";
import { AcademicRecordsComponent } from "./academic-records/academic-records.component";

export const HomeRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "participants",
        component: ParticipantsComponent,
      },
      {
        path: "academic-records",
        component: AcademicRecordsComponent,
      },
    ],
  },
];
