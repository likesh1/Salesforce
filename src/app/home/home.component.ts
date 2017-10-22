import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('camera') video;
  @ViewChild('myCanvas') canvas;
  private title = 'Electron with Angular2';
  private subTitle = 'This app was made for Electron Angular Example';
  showPicture: boolean;
  private ctx;

  ngOnInit() {
    this.showPicture = true;
    const _video = this.video.nativeElement;

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
    const _canvas = this.canvas.nativeElement;
    this.ctx = _canvas.getContext('2d');
    this.ctx.translate(_canvas.width, 0);
    this.ctx.scale(-1, 1);
    const _video = this.video.nativeElement;
    const dataURL = _canvas.toDataURL('image/png');
    dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
    this.showPicture = false;
  }

}
