import { Component, Input } from '@angular/core';

export interface CarouselImage {
  src: string;
  alt: string;
  link?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: false,
})
export class CarouselComponent {
  @Input() images: CarouselImage[] = [];
  currentIndex = 0;

  get hasMultiple(): boolean {
    return this.images.length > 1;
  }

  prev(): void {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  next(): void {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}
