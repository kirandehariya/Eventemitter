import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentcomponentComponent } from './component/parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './component/childcomponent/childcomponent.component';


const routes: Routes = [
  {
    path: 'parent',
    component: ParentcomponentComponent
  },
  {
    path:'child',
    component:ChildcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
