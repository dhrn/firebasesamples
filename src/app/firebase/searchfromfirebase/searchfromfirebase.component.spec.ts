import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfromfirebaseComponent } from './searchfromfirebase.component';

describe('SearchfromfirebaseComponent', () => {
  let component: SearchfromfirebaseComponent;
  let fixture: ComponentFixture<SearchfromfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfromfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfromfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
