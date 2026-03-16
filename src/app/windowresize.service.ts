import { Injectable } from '@angular/core';
import { ScreenSizes } from './screensizes.model';

@Injectable({
  providedIn: 'root',
})
export class WindowResizeService {
  handleWindowResize(element: string) {
    const pageElement = document.getElementById(element);
    if (pageElement && element === 'project-one-img') {
      (<HTMLImageElement>pageElement).src =
        window.innerWidth < ScreenSizes.small
          ? 'assets/images/homepagemobile.png'
          : 'assets/images/zygarden.png';
    } else if (pageElement && element === 'project-two-img') {
      (<HTMLImageElement>pageElement).src =
        window.innerWidth < ScreenSizes.small
          ? 'assets/images/sleepvisualizermobile.png'
          : 'assets/images/sleepvisualizer.png';
    } else if (pageElement && element === 'project-three-img') {
      (<HTMLImageElement>pageElement).src =
        window.innerWidth < ScreenSizes.small
          ? 'assets/images/replayvisualizermobile.png'
          : 'assets/images/replayvisualizer.png';
    }
  }
}
