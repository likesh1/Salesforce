import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private title = 'Electron with Angular2';
  private subTitle = 'This app was made for Electron Angular Example';

  @ViewChild('camera') video;
  @ViewChild('myCanvas') canvas;
  private ctx;

  ngAfterViewInit() {
    const _video = this.video.nativeElement;
    const _canvas = this.canvas.nativeElement;
    this.ctx = _canvas.getContext('2d');
    this.ctx.translate(_canvas.width, 0);
    this.ctx.scale(-1, 1);

    navigator.getUserMedia({video: true, audio: false},
      (stream) => {
        _video.srcObject = stream;
      },
      (error) => {
        console.log('Error' + error);
      }
    );
  }

  takePhoto = () => {
    const _video = this.video.nativeElement;
    const _canvas = this.canvas.nativeElement;
    this.ctx.drawImage(_video, 0, 0, _canvas.width, _canvas.height);
  }
}
