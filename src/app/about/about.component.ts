import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
})
export class AboutComponent implements OnInit {
  mode: string = 'light';

  ngOnInit() {
    const saved = localStorage.getItem('portfolio-mode');
    const element = document.getElementById('main');
    if (saved === 'dark') {
      this.mode = 'dark';
      element?.classList.add('mode-dark');
    }
  }

  toggleMode() {
    const element = document.getElementById('main');
    if (this.mode === 'dark' && element) {
      this.mode = 'light';
      element.classList.remove('mode-dark');
      localStorage.setItem('portfolio-mode', 'light');
    } else if (this.mode === 'light' && element) {
      this.mode = 'dark';
      element.classList.add('mode-dark');
      localStorage.setItem('portfolio-mode', 'dark');
    }
  }
}
