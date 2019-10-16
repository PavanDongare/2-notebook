import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss']
})
export class MiddleContentComponent implements OnInit {

  constructor(private dataService: DataService) { }
  content: string;

  ngOnInit() {
    this.dataService.getData();
  }

  getContent() {
    return this.dataService.getContent('n1','s1','p1');
  }

}
