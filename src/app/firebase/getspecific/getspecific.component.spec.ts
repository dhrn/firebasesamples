import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetspecificComponent } from './getspecific.component';

describe('GetspecificComponent', () => {
  let component: GetspecificComponent;
  let fixture: ComponentFixture<GetspecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetspecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
