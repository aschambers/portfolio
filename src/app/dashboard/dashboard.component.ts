import { Component, OnInit } from '@angular/core';
import { CarouselImage } from '../carousel/carousel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  mode: string = 'light';

  zygardenImages: CarouselImage[] = [
    { src: 'assets/images/zygarden.png', alt: 'Zygarden homepage', link: 'https://zygarden.gg' },
    {
      src: 'assets/images/zygardenstandings.png',
      alt: 'Zygarden standings',
      link: 'https://zygarden.gg/tournaments/player/0194c8b7-1a2d-4c27-b085-ea70db59edb7/tournament/019b70ab-a9ed-490d-8443-1b90e57c7a91',
    },
    {
      src: 'assets/images/zygardenbracket.png',
      alt: 'Zygarden Arbor League bracket',
      link: 'https://zygarden.gg/tournaments/player/01994393-6c31-43d7-8e16-ca5c0bc991a0/tournament/019ccda7-3f4d-4ed9-968e-373cc279a6e2?isPublic=true',
    },
    {
      src: 'assets/images/zygardenpreciouspaths.png',
      alt: 'Zygarden Precious Paths tournament',
      link: 'https://zygarden.gg/tournaments/player/0194c8b7-1a2d-4c27-b085-ea70db59edb7/tournament/019b70ab-a9ed-490d-8443-1b90e57c7a91',
    },
    {
      src: 'assets/images/zygardenpreciouspathsbracket.png',
      alt: 'Zygarden Precious Paths bracket',
      link: 'https://zygarden.gg/tournaments/player/0194c8b7-1a2d-4c27-b085-ea70db59edb7/tournament/019b70ab-a9ed-490d-8443-1b90e57c7a91',
    },
  ];

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
