import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  mode = signal<'light' | 'dark'>('light');

  constructor() {
    const saved = localStorage.getItem('portfolio-mode');
    if (saved === 'dark') {
      this.mode.set('dark');
      document.getElementById('main')?.classList.add('mode-dark');
    }
  }

  toggle(): void {
    const element = document.getElementById('main');
    if (this.mode() === 'dark' && element) {
      this.mode.set('light');
      element.classList.remove('mode-dark');
      localStorage.setItem('portfolio-mode', 'light');
    } else if (this.mode() === 'light' && element) {
      this.mode.set('dark');
      element.classList.add('mode-dark');
      localStorage.setItem('portfolio-mode', 'dark');
    }
  }
}
