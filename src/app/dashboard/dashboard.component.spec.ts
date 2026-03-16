import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initial signal states', () => {
    it('zygardenLoaded starts false', () => {
      expect(component.zygardenLoaded()).toBeFalse();
    });

    it('sleepLoaded starts false', () => {
      expect(component.sleepLoaded()).toBeFalse();
    });

    it('replayLoaded starts false', () => {
      expect(component.replayLoaded()).toBeFalse();
    });
  });

  describe('zygardenImages', () => {
    it('has 5 images', () => {
      expect(component.zygardenImages.length).toBe(5);
    });

    it('first image links to zygarden.gg', () => {
      expect(component.zygardenImages[0].link).toContain('zygarden.gg');
    });

    it('every image has a src and alt', () => {
      component.zygardenImages.forEach((img) => {
        expect(img.src).toBeTruthy();
        expect(img.alt).toBeTruthy();
      });
    });
  });
});
