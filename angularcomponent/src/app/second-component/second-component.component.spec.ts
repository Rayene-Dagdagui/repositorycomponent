import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentComponent } from './second-component.component';
import { FourthComponentComponent } from '../fourth-component/fourth-component.component';

describe('SecondComponentComponent', () => {
  let component: SecondComponentComponent;
  let fixture: ComponentFixture<SecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComponentComponent, FourthComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
