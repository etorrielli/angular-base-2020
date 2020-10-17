import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MensajeDTO} from '../../../models/mensajeDTO';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() mensaje: any;
  // @Input() mensaje: MensajeDTO;
  @Output() clickComment = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickComment.emit( this.mensaje.id );
  }
}
