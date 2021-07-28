import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Records } from '../records';
import { RecordsServiceService } from '../records-service.service';

@Component({
  selector: 'app-create-records',
  templateUrl: './create-records.component.html',
  styleUrls: ['./create-records.component.css'],
})
export class CreateRecordsComponent implements OnInit {
  records: Records = new Records();
  constructor(
    private recordsservice: RecordsServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveRecords() {
    this.recordsservice.createRecords(this.records).subscribe(
      (data) => {
        console.log(data);
        this.gotoRecordsList();
      },
      (error) => console.log(error)
    );
  }

  gotoRecordsList() {
    this.router.navigate(['/records']);
  }

  onSubmit() {
    console.log(this.records);
    this.saveRecords();
  }
}
