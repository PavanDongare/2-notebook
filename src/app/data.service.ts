import { dataMock } from './data/data';
import { Data, NotebookEntity, SectionEntity, Selected } from './data/app.data.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

/*
  ways to share data
  1) subject
  2) plane old service with data accessed only useing getter and setter
*/

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data ;
  notebook : NotebookEntity;
  section : SectionEntity;
  page;

  selected : Selected ;

  private noteBook = new Subject<NotebookEntity>();

    sendSelected(S: Selected) {
        this.noteBook.next(S);
    }

    clearNoteBook() {
        this.noteBook.next();  // next notebook is empty
    }

    getNoteBook(): Observable<any> {
        return this.noteBook.asObservable();
    }





  constructor() {
    this.getData();
  }
  getData() {
    this.data = dataMock;

  }
  getNoteBookNames() {
    const noteBookNames: string[] = [];
    this.data.notebook.forEach(element => {
      noteBookNames.push(element.noteBookName);
    });

    return noteBookNames;
  }

  getPages(noteBook: string, section: string ) {
    const pages: string[] = [];
    this.data.notebook.forEach(element => {

    });

  }

  getContent(noteBookName: string, sectionName: string, pageName: string ) {
    const selectNoteBook: NotebookEntity[] = this.data.notebook;
    selectNoteBook.forEach(element => {
      if (element.noteBookName == noteBookName) {
          this.notebook = element;
      }

      if (this.notebook != null ) {
        this.notebook.section.forEach(element => {
          if (element.sectionName == sectionName ) {
              this.section = element;
          }
        });
      }

      if (this.section != null) {
          this.section.page.forEach(element => {
              if (element.pageName == pageName) {
                this.page = element ;
              }
        });
      }

    });

    return this.page;
  }
}
