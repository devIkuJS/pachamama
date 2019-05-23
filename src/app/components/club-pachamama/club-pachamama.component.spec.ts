import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPachamamaComponent } from './club-pachamama.component';

describe('ClubPachamamaComponent', () => {
  let component: ClubPachamamaComponent;
  let fixture: ComponentFixture<ClubPachamamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubPachamamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubPachamamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
