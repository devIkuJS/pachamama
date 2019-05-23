import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosGeneralComponent } from './lista-productos-general.component';

describe('ListaProductosGeneralComponent', () => {
  let component: ListaProductosGeneralComponent;
  let fixture: ComponentFixture<ListaProductosGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProductosGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
