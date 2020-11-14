import { Component, Input ,Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {


@Input() value: string;
@Output('playerClick') click = new EventEmitter<string>();
@HostListener('click')
clickHandler() {
  this.click.emit('');
}

}
