import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css', '.././theme/theme.scss']
})
export class StartupComponent implements AfterContentInit {

  constructor(private route: Router) {
  }


  ngAfterContentInit() {
    this.next();
  }

  next() {
    setTimeout(() => {
      this.route.navigate(['/home']);
    }, 2000);

  }


}
