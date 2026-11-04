import { Component } from '@angular/core';
import { TestValueComponent } from './test-value/test-value.component';

@Component({
  selector: 'app-root',
  imports: [TestValueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee-app';
}
