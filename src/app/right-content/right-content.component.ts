import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.scss']
})
export class RightContentComponent implements OnInit {
  pages: string[] = [];
  selectedPage;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    // this.pages = this.dataservice.getPages();
    for (let index = 0; index < 50; index++) {
          this.pages.push('page'+index);

    }
  }

}
