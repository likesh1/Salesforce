import {Component, OnInit} from '@angular/core';
import {EinsteinservicecallService} from '../Service/einsteinservicecall.service';
import {Router} from '@angular/router';
import {JsonConstructService} from '../json-construct.service';
import {ProbabilitiesModel} from "../probabilities.model";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  showUpload: boolean;
  file2: any;
  probability: ProbabilitiesModel;
  getStyleBox = '';
  private base64textString = '';
  showWanderLoading: boolean;
  showLoader: boolean;
  customStyle = {
    clearButton: {
      'display': 'none'
    },
    layout: {
      'background-color': 'white',
      'color': '#000',
      'font-size': '15px',
      'margin': '10px',
      'padding-top': '5px',
      'width': '80%',
      'position': 'absolute',
      'height': '66%',
      'top': '10%',
      'left': '9%',
      'border-style': 'dashed',
      'border-width': 'medium',
      'border-color': 'black`'
    },
    previewPanel: {
      'background-color': 'white',
      'border-radius': '0 0 25px 25px',
    }
  };

  constructor(private einstienService: EinsteinservicecallService,
              private jsonConstruct: JsonConstructService,
              private route: Router) {
  }

  ngOnInit() {
    this.showUpload = false;
    this.showLoader = false;
    this.showWanderLoading = false;
  }

  onUploadFinished(event) {
    this.getStyleBox = 'none';
    this.showWanderLoading = true;
    this.showUpload = true;
    const file = event.file;
    if (file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
    this.showWanderLoading = false;
    this.getStyleBox = 'block';
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  onRemoved() {
    this.getStyleBox = 'none';
    this.showWanderLoading = true;
    this.showUpload = false;
    this.showWanderLoading = false;
    this.getStyleBox = 'block';
  }

  sendRequest() {
    this.getStyleBox = 'none';
    this.showLoader = true;
    this.einstienService.getDataJson(this.base64textString)
      .subscribe(
        (reponse: ProbabilitiesModel) => {
          this.probability = reponse;
          this.jsonConstruct.setResponse(this.probability.probabilities[0].label);
          this.showLoader = true;
          this.route.navigate(['/carList']);
        },
        error => {
          console.log(error);
        }
      );
  }
}


