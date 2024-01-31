import { Component } from '@angular/core';
import {environment} from '../config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User';
  apiurl = environment.apiUrl;
}
