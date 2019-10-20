import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss']
})
export class TopContentComponent implements OnInit {

  sections: string[] = [];
  selectedSection;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    // this.pages = this.dataservice.getPages();
    for (let index = 0; index < 50; index++) {
          this.sections.push('sec'+index);

    }
  }
}
