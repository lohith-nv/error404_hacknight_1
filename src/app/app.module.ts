import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AnalyticsComponent,
    ActivitiesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatListModule, MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
