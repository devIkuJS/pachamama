import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranquiciaComponent } from './franquicia.component';

describe('FranquiciaComponent', () => {
  let component: FranquiciaComponent;
  let fixture: ComponentFixture<FranquiciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranquiciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranquiciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
