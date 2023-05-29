import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRollComponent } from './photo-roll.component';

describe('PhotoRollComponent', () => {
  let component: PhotoRollComponent;
  let fixture: ComponentFixture<PhotoRollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoRollComponent]
    });
    fixture = TestBed.createComponent(PhotoRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
