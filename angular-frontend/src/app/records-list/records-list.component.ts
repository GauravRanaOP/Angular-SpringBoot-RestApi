import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Records } from '../records';
import { RecordsServiceService } from '../records-service.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css'],
})
export class RecordsListComponent implements OnInit {
  records!: Records[];
  constructor(
    private RecordsService: RecordsServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //   this.records=[{
    //     "aid": 1,
    //     "fname":"Gaurav",
    //     "lname": "Rana",
    //     "pincode": "110085",
    //     "DOB" : "22-05-1998",
    //     "DateOfJoining" : "24-06-2021"
    //   },
    // {
    //   "aid": 2,
    //   "fname":"Achin",
    //   "lname": "Joshi",
    //   "pincode": "110089",
    //   "DOB" : "02-10-1998",
    //   "DateOfJoining" : "20-05-2021"
    // }]
    this.getrecords();
  }
  private getrecords() {
    this.RecordsService.getRecordsList().subscribe((data) => {
      this.records = data;
    });
  }

  recordsDetails(aid: number) {
    this.router.navigate(['records-details', aid]);
  }

  updateRecords(aid: number) {
    this.router.navigate(['update-records', aid]);
  }

  deleteRecords(aid: number) {
    this.RecordsService.deleteRecords(aid).subscribe((data) => {
      console.log(data);
      this.getrecords();
    });
  }
}
