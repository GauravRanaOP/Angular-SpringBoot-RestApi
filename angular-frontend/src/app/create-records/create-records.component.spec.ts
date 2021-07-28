import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecordsComponent } from './create-records.component';

describe('CreateRecordsComponent', () => {
  let component: CreateRecordsComponent;
  let fixture: ComponentFixture<CreateRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
