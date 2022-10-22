import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="text-center mt-5">
    {{ pageTitle }}
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = 'Product Management System';
}
