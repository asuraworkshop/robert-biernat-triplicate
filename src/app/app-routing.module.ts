import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriplicateComponent } from './triplicate/triplicate.component';

const routes: Routes = [
  { path: '', component: TriplicateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
