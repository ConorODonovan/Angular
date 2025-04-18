import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  imports: [CommonModule],
  template: `
    <button>{{ value }}</button>
  `,
  styles: ``
})
export class SquareComponent {

  @Input()
  value: 'X' | 'O' = "X";
}
