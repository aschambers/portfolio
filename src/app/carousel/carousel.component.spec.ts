import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent, CarouselImage } from './carousel.component';

const testImages: CarouselImage[] = [
  { src: 'a.png', alt: 'Image A' },
  { src: 'b.png', alt: 'Image B' },
  { src: 'c.png', alt: 'Image C' },
];

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    spyOn(window, 'requestAnimationFrame').and.callFake((cb) => {
      cb(0);
      return 0;
    });

    await TestBed.configureTestingModule({
      imports: [CarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('images', testImages);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hasMultiple', () => {
    it('is true with multiple images', () => {
      expect(component.hasMultiple()).toBeTrue();
    });

    it('is false with a single image', () => {
      fixture.componentRef.setInput('images', [testImages[0]]);
      expect(component.hasMultiple()).toBeFalse();
    });
  });

  describe('next()', () => {
    it('advances the index', () => {
      component.next();
      expect(component.currentIndex()).toBe(1);
    });

    it('wraps from last to first', () => {
      component.goTo(2);
      component.next();
      expect(component.currentIndex()).toBe(0);
    });
  });

  describe('prev()', () => {
    it('goes back one', () => {
      component.goTo(2);
      component.prev();
      expect(component.currentIndex()).toBe(1);
    });

    it('wraps from first to last', () => {
      component.prev();
      expect(component.currentIndex()).toBe(2);
    });
  });

  describe('goTo()', () => {
    it('sets the index directly', () => {
      component.goTo(2);
      expect(component.currentIndex()).toBe(2);
    });
  });

  describe('onImageLoad()', () => {
    it('sets imageLoaded to true', () => {
      component.onImageLoad();
      expect(component.imageLoaded()).toBeTrue();
    });

    it('emits loaded once', () => {
      const spy = jasmine.createSpy('loaded');
      component.loaded.subscribe(spy);
      component.onImageLoad();
      component.onImageLoad();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
