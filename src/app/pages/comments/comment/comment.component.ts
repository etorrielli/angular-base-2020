import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() mensaje: any;
  @Output() clickComment = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickComment.emit( this.mensaje.id );
  }
}
