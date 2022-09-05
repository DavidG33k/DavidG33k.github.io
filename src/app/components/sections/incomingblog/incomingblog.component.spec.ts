import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingblogComponent } from './incomingblog.component';

describe('IncomingblogComponent', () => {
  let component: IncomingblogComponent;
  let fixture: ComponentFixture<IncomingblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
