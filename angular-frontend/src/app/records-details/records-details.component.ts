import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Records } from '../records';
import { RecordsServiceService } from '../records-service.service';

@Component({
  selector: 'app-records-details',
  templateUrl: './records-details.component.html',
  styleUrls: ['./records-details.component.css'],
})
export class RecordsDetailsComponent implements OnInit {
  aid!: number;
  records!: Records;

  constructor(
    private route: ActivatedRoute,
    private recordsService: RecordsServiceService
  ) {}

  ngOnInit(): void {
    this.aid = this.route.snapshot.params['aid'];
    this.records = new Records();
    this.recordsService.getRecordsById(this.aid).subscribe((data) => {
      this.records = data;
    });
  }
}
