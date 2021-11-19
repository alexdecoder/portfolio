import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor(private router: Router) { }

  @Input() href!: string;
  @Output() onClick = new EventEmitter();
  @Input() isOutline!: boolean;

  clickEvent(e: any): void {
    this.onClick.emit(e);
  }
}
