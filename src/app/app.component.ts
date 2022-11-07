import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamCoopelClient';
  value = 'Clear me';

  firstMediaItem ={
    id:1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2022,
    watchedOn: 1294133665652 ,
    isFavorite: false
  }

  onMediaDelete(mediaItem: any){

  }
}
