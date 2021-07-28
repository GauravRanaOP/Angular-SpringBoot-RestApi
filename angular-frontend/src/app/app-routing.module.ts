import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecordsComponent } from './create-records/create-records.component';
import { RecordsDetailsComponent } from './records-details/records-details.component';
import { RecordsListComponent } from './records-list/records-list.component';
import { UpdateRecordsComponent } from './update-records/update-records.component';

const routes: Routes = [
  { path: 'Records', component: RecordsListComponent },
  { path: 'create-records', component: CreateRecordsComponent },
  { path: '', redirectTo: 'Records', pathMatch: 'full' },
  { path: 'update-records/:aid', component: UpdateRecordsComponent },
  { path: 'records-details/:aid', component: RecordsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
