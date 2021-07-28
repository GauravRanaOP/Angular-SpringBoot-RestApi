import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsListComponent } from './records-list/records-list.component';
import { CreateRecordsComponent } from './create-records/create-records.component';
import { FormsModule } from '@angular/forms';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import { RecordsDetailsComponent } from './records-details/records-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordsListComponent,
    CreateRecordsComponent,
    UpdateRecordsComponent,
    RecordsDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
