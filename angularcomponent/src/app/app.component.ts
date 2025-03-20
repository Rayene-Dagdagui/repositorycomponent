import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondComponentComponent, ThirdComponentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularcomponent';
  name = "primo"
}
