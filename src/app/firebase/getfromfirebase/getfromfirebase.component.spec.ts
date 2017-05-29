import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfromfirebaseComponent } from './getfromfirebase.component';

describe('GetfromfirebaseComponent', () => {
  let component: GetfromfirebaseComponent;
  let fixture: ComponentFixture<GetfromfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetfromfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfromfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
