import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsrecipeComponent } from './detailsrecipe/detailsrecipe.component';

const routes: Routes = [{ path: 'detailsrecipe', component: DetailsrecipeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
