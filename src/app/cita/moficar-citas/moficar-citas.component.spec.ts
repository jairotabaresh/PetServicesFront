import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoficarCitasComponent } from './moficar-citas.component';

describe('MoficarCitasComponent', () => {
  let component: MoficarCitasComponent;
  let fixture: ComponentFixture<MoficarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoficarCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoficarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
