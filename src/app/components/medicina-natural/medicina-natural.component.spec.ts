import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaNaturalComponent } from './medicina-natural.component';

describe('MedicinaNaturalComponent', () => {
  let component: MedicinaNaturalComponent;
  let fixture: ComponentFixture<MedicinaNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinaNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
