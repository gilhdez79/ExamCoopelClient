import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-items',
  templateUrl: './media-items.component.html',
  styleUrls: ['./media-items.component.css']
})
export class MediaItemsComponent implements OnInit {

@Input () mediaItem:any;
@Output() delete = new EventEmitter();
  name = 'the Redention'
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(){
    console.log('delete');
     this.delete.emit(this.mediaItem);
  }

}
