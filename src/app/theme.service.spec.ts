import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let mockElement: HTMLElement;

  function setup(savedMode: string | null = null) {
    mockElement = document.createElement('div');
    spyOn(document, 'getElementById').and.returnValue(mockElement);
    spyOn(localStorage, 'getItem').and.returnValue(savedMode);
    spyOn(localStorage, 'setItem');

    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(ThemeService);
  }

  afterEach(() => TestBed.resetTestingModule());

  describe('initialization', () => {
    it('defaults to light mode when nothing is saved', () => {
      setup();
      expect(service.mode()).toBe('light');
    });

    it('restores dark mode from localStorage', () => {
      setup('dark');
      expect(service.mode()).toBe('dark');
    });

    it('adds mode-dark class to element when restoring dark mode', () => {
      setup('dark');
      expect(mockElement.classList.contains('mode-dark')).toBeTrue();
    });

    it('does not add mode-dark class in light mode', () => {
      setup();
      expect(mockElement.classList.contains('mode-dark')).toBeFalse();
    });
  });

  describe('toggle()', () => {
    beforeEach(() => setup());

    it('switches from light to dark', () => {
      service.toggle();
      expect(service.mode()).toBe('dark');
    });

    it('switches from dark back to light', () => {
      service.toggle();
      service.toggle();
      expect(service.mode()).toBe('light');
    });

    it('adds mode-dark class when switching to dark', () => {
      service.toggle();
      expect(mockElement.classList.contains('mode-dark')).toBeTrue();
    });

    it('removes mode-dark class when switching to light', () => {
      service.toggle();
      service.toggle();
      expect(mockElement.classList.contains('mode-dark')).toBeFalse();
    });

    it('saves dark to localStorage', () => {
      service.toggle();
      expect(localStorage.setItem).toHaveBeenCalledWith('portfolio-mode', 'dark');
    });

    it('saves light to localStorage', () => {
      service.toggle();
      service.toggle();
      expect(localStorage.setItem).toHaveBeenCalledWith('portfolio-mode', 'light');
    });
  });
});
