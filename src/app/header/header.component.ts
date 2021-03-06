import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  showCamera() {
    this.route.navigate(['/home']);
  }

  showUpload() {
    this.route.navigate(['/upload']);
  }
}
