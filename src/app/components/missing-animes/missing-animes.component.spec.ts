import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingAnimesComponent } from './missing-animes.component';

describe('MissingAnimesComponent', () => {
  let component: MissingAnimesComponent;
  let fixture: ComponentFixture<MissingAnimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissingAnimesComponent]
    });
    fixture = TestBed.createComponent(MissingAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
