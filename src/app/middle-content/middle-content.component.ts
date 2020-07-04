import { PageEntity } from './../data/app.data.interface';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss']
})
export class MiddleContentComponent implements OnInit {

  constructor(private dataService: DataService) { }
  content: PageEntity;

  ngOnInit() {
    this.dataService.getData();
    this.getContent();
  }

  getContent() {
    this.content = this.dataService.getContent('n1','s1','p1');
    console.log(this.content)
  }

}
