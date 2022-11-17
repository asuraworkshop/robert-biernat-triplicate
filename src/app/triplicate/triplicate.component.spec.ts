import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplicateComponent } from './triplicate.component';

describe('TriplicateComponent', () => {
  let component: TriplicateComponent;
  let fixture: ComponentFixture<TriplicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriplicateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
