import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatwedoSectionComponent } from './whatwedo-section.component';

describe('WhatwedoSectionComponent', () => {
  let component: WhatwedoSectionComponent;
  let fixture: ComponentFixture<WhatwedoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatwedoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatwedoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
