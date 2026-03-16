import { Component, computed, input, output, signal } from '@angular/core';

export interface CarouselImage {
  src: string;
  alt: string;
  link?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
})
export class CarouselComponent {
  images = input<CarouselImage[]>([]);
  loaded = output<void>();

  currentIndex = signal(0);
  imageLoaded = signal(false);
  hasMultiple = computed(() => this.images().length > 1);

  onImageLoad(): void {
    if (!this.imageLoaded()) {
      requestAnimationFrame(() => {
        this.imageLoaded.set(true);
        this.loaded.emit();
      });
    }
  }

  prev(): void {
    const len = this.images().length;
    this.currentIndex.update((i) => (i === 0 ? len - 1 : i - 1));
  }

  next(): void {
    const len = this.images().length;
    this.currentIndex.update((i) => (i === len - 1 ? 0 : i + 1));
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
