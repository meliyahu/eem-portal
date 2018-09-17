import { Component, AfterViewChecked } from '@angular/core';
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  // To enable boostrap tooltips
  ngAfterViewChecked() {
    $('[data-toggle="tooltip"]').tooltip();
  }
}
