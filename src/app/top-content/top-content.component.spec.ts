import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContentComponent } from './top-content.component';

describe('TopContentComponent', () => {
  let component: TopContentComponent;
  let fixture: ComponentFixture<TopContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
