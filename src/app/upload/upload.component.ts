import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  showUpload: boolean;
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

  constructor() {
  }

  ngOnInit() {
    this.showUpload = false;
  }

  onUploadFinished(event) {
    const file = event.file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    this.showUpload = true;
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onRemoved() {
    this.showUpload = false;
  }
}
