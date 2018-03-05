import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { CatService } from './services/cat.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatDetailComponent,
    CreateCatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    CatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
