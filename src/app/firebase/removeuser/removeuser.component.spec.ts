import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveuserComponent } from './removeuser.component';

describe('RemoveuserComponent', () => {
  let component: RemoveuserComponent;
  let fixture: ComponentFixture<RemoveuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
