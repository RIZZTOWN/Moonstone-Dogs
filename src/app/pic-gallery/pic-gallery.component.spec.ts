import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicGalleryComponent } from './pic-gallery.component';

describe('PicGalleryComponent', () => {
  let component: PicGalleryComponent;
  let fixture: ComponentFixture<PicGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
