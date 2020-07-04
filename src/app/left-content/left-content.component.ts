import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.scss']
})
export class LeftContentComponent implements OnInit {
  noteBooks: string[] = null ;

  constructor(private dataservice: DataService) { }


  ngOnInit() {
    //this.dataservice.getData();
    this.noteBooks = this.dataservice.getNoteBookNames();
  }

  onClick(index : number){
      console.log("number="+index);
  }

}
