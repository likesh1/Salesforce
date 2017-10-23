import {Component, OnInit, ViewChild} from '@angular/core';
import {EinsteinservicecallService} from '../Service/einsteinservicecall.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('camera') video;
  @ViewChild('myCanvas') canvas;
  private title = 'Buy Me';
  private subTitle = 'Click to Buy';
  showPicture: boolean;
  private ctx;
  getCameraStyle = '';
  getStyle = 'none';
  getWidthStyle = '';
  getHeightStyle = '';
  showCamera: boolean;
  private base64textString = '';
  x: any;

  constructor(private einstienService: EinsteinservicecallService, private route: Router) {
  }

  ngOnInit() {
    this.showCamera = true;
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
    this.getCameraStyle = 'none';
    this.getStyle = 'block';
    this.getWidthStyle = '10%';
    this.getHeightStyle = '450px';
    const _canvas = this.canvas.nativeElement;
    this.ctx = _canvas.getContext('2d');
    this.ctx.translate(_canvas.width, 0);
    this.ctx.scale(-1, 1);
    const _video = this.video.nativeElement;
    this.ctx.drawImage(_video, 0, 0, _canvas.width, _canvas.height);
    const dataURL = _canvas.toDataURL('image/png');
    const x = dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
    console.log(x);
    this.base64textString = x;
    this.showPicture = false;

  }

  nextPage() {
    this.einstienService.getDataJson(this.base64textString)
      .subscribe(
        reponse => {
          console.log(reponse);
          this.x = reponse;
          console.log(JSON.stringify(this.x));
          this.route.navigate(['/carList']);
        },
        error => {
          console.log(error);

        }
      );
  }

  backToCamera() {
    this.showPicture = true;
    this.getStyle = 'none';
    this.getCameraStyle = 'block';
  }

}
