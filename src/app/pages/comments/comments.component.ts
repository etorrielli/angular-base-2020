import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  mensajes: any[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    // DE MANERA TRADICIONAL
    this.dataService.getComments().subscribe((comments: any[]) => {
      console.log(comments);
      this.mensajes = comments;
    });
  }

  escuchaClick(id: number) {
    console.log('Click en:', id);
  }
}
