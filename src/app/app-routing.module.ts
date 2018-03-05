import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { CatDetailComponent }  from './cat-detail/cat-detail.component';
import { CreateCatComponent } from './create-cat/create-cat.component';

const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch: 'full' },
  { path: 'cats', component: CatsComponent },
  { path: 'cat/:id', component: CatDetailComponent },
  { path: 'create', component: CreateCatComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
