import {Component, OnInit} from '@angular/core';
import {EinsteinservicecallService} from '../Service/einsteinservicecall.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  showUpload: boolean;
  file2: any;
  x: any;
  private base64textString: string = '';

  customStyle = {
    selectButton: {
      'background-color': '#4942B7',
      'color': '#fff',
      'position': 'absolute',
      'top': '80%',
      'left': '20%'
    },
    clearButton: {
      'background-color': '#FFF',
      'color': '#000',
      'position': 'absolute',
      'top': '20%',
      'left': '20%',
      'visibility': 'hidden'
    },
    layout: {
      'background-color': 'black',
      'color': '#FFF',
      'font-size': '15px',
      'margin': '10px',
      'padding-top': '5px',
      'width': '80%',
      'position': 'absolute',
      'height': '66%',
      'top': '10%',
      'left': '9%'
    },
    previewPanel: {
      'background-color': 'black',
      'border-radius': '0 0 25px 25px',
    }
  };

  constructor(private einstienService: EinsteinservicecallService, private route: Router) {
  }

  ngOnInit() {
    this.showUpload = false;
  }

  onUploadFinished(event) {
    this.showUpload = true;
    const file = event.file;
    if (file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  onRemoved() {
    this.showUpload = false;
  }

  sendRequest() {
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
}


