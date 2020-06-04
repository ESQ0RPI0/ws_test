import { Component } from '@angular/core';

import {Hero} from './interface_folder/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'testcli';

  hero: Hero =
    {
      id: 1, name: 'Allah'
    };
}
