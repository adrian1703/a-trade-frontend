import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-buttons-page',
  imports : [
    MatButton
  ],
  template: `
    <div class="mat-typography m-5">
      <h1 class="text-3xl font-bold underline">Buttons!</h1>
      <button matButton="outlined" class="button-primary">aoueaoeuaoeu</button>
      <br>
      <button matButton="outlined" class="small-primary">Hello</button>
      <div class="grid-container grid grid-cols-2 gap-3 mt-5">
        @for (i of [].constructor(10); track i; let index = $index) {
          <div class="shadow mat-bg-surface-container">
            <h1>{{ index }}</h1>
            <span>helloww</span>
          </div>

        }
      </div>
      <p>
        buttons-page works!
      </p>
    </div>
  `,
  styleUrl: 'buttons-page.scss'
})
export class ButtonsPage {

}
