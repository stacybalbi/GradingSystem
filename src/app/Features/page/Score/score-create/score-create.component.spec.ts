import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCreateComponent } from './score-create.component';

describe('ScoreCreateComponent', () => {
  let component: ScoreCreateComponent;
  let fixture: ComponentFixture<ScoreCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
