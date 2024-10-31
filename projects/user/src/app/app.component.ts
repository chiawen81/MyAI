import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    //  './../../../../node_modules/@angular/material/prebuilt-themes/cyan-orange.css'
  ]
})
export class AppComponent {

}
