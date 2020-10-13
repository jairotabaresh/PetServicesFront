import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciorecuperaComponent } from './iniciorecupera.component';

describe('IniciorecuperaComponent', () => {
  let component: IniciorecuperaComponent;
  let fixture: ComponentFixture<IniciorecuperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciorecuperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciorecuperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
