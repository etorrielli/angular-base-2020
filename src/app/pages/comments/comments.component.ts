import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  mensajes: any[] = [];
  // mensajes: MensajeDTO[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    // DE MANERA TRADICIONAL
    this.dataService.getComments().subscribe((comments: any[]) => {
      // this.dataService.getComments().subscribe((comments: MensajeDTO[]) => {
      // this.dataService.getComments().subscribe((response: ResponseDTO) => {
      console.log(comments);
      this.mensajes = comments;
      // console.log(response.data);
      // this.mensajes = response.data;
    });
  }

  escuchaClick(id: number) {
    console.log('Click en:', id);
  }
}
