import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsDetailsComponent } from './records-details.component';

describe('RecordsDetailsComponent', () => {
  let component: RecordsDetailsComponent;
  let fixture: ComponentFixture<RecordsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
