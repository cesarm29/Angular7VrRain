//generic libs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { PhotoComponent } from './photo/photo.component';

//const routes
const routes: Routes = [
  {
    //route to init
    path: '',
    component: PhotoComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
