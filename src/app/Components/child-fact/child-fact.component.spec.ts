import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFactComponent } from './child-fact.component';

describe('ChildFactComponent', () => {
  let component: ChildFactComponent;
  let fixture: ComponentFixture<ChildFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
