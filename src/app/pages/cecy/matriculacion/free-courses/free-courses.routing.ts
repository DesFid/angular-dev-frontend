import { Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { DetailsCourseComponent } from "./details-course/details-course.component";
import { RegistrationComponent } from "./registration/registration.component";

export const HomeRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "courses",
        component: CoursesComponent,
      },
      {
        path: "details",
        component: DetailsCourseComponent,
      },
      {
        path: "registration",
        component: RegistrationComponent,
      },
    ],
  },
];
