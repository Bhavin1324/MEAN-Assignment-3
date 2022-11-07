import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, DataComponent, ListComponent, FormComponent, NotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
