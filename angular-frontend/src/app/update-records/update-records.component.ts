import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Records } from '../records';
import { RecordsServiceService } from '../records-service.service';

@Component({
  selector: 'app-update-records',
  templateUrl: './update-records.component.html',
  styleUrls: ['./update-records.component.css']
})
export class UpdateRecordsComponent implements OnInit {

  aid !: number;
  records: Records = new Records();
  constructor(private recordsService: RecordsServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.aid = this.route.snapshot.params['aid'];

    this.recordsService.getRecordsById(this.aid).subscribe(data => {
      this.records = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.recordsService.updateRecords(this.aid, this.records).subscribe( data =>{
      this.goToRecordsList();
    }
    , error => console.log(error));
  }

  goToRecordsList(){
    this.router.navigate(['/records']);
  }

}
