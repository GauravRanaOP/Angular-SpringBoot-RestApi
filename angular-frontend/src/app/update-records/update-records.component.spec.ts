import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordsComponent } from './update-records.component';

describe('UpdateRecordsComponent', () => {
  let component: UpdateRecordsComponent;
  let fixture: ComponentFixture<UpdateRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
