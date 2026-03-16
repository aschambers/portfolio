import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../windowresize.service';
import { debounceTime, fromEvent } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  mode: string = 'light';

  constructor(private windowResizeService: WindowResizeService) {}

  ngOnInit() {
    const saved = localStorage.getItem('portfolio-mode');
    const element = document.getElementById('main');
    if (saved === 'dark') {
      this.mode = 'dark';
      element?.classList.add('mode-dark');
    }
  }

  ngAfterViewInit() {
    this.handleWindowResize();
    fromEvent(window, 'resize')
      .pipe(debounceTime(200), untilDestroyed(this))
      .subscribe(() => {
        this.handleWindowResize();
      });
  }

  handleWindowResize() {
    this.windowResizeService.handleWindowResize('project-one-img');
    this.windowResizeService.handleWindowResize('project-two-img');
    this.windowResizeService.handleWindowResize('project-three-img');
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
