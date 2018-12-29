import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasureComponent } from './measure/measure.component'
import { AuthenicatedGuard  } from './authenicated.guard';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  {
    path: 'workout',
    component: WorkoutComponent,
    canActivate: [AuthenicatedGuard ]
  },
  {
    path: 'measurement',
    component: MeasureComponent,
    canActivate: [AuthenicatedGuard ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenicatedGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenicatedRoutingModule { }