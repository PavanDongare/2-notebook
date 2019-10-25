import { dataMock } from './data/data';
import { Data, NotebookEntity, SectionEntity } from './data/app.data.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data ;
  notebook : NotebookEntity;
  section : SectionEntity;
  page;



  commonArray: string[] = [];
  commonString : string ='start';

  addToCommonArray(ele:string){
    this.commonArray.push(ele);
  }

  addToCommonString(ele:string){
    this.commonString.concat(ele);
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
    // const pages: string[] = [];
    // this.data.notebook.forEach(element => {
    //   if(this.)
    // });

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
