import { Data, NotebookEntity } from './app.data.interface';

// tslint:disable-next-line: one-variable-per-declaration
export const dataMock: Data = {
  notebook:
  [
    {
      noteBookName: 'n1',
      section: [
        {
          sectionName:'s1',
          page: [
            {
              pageName:'p1',
              content: 'page1'
            }
          ]
        },
        {
          sectionName:'s2',
          page: [
            {
              pageName:'p1',
              content: 'page1'
            }
          ]
        },
        {
          sectionName:'s3',
          page: [
            {
              pageName:'p1',
              content: 'page1'
            }
          ]
        }
      ]
    },

    {
      noteBookName: 'n2',
      section: [
        {
          sectionName:'s2',
          page: [
            {
              pageName:'p1',
              content: 'page2'
            }
          ]
        }
      ]
    },

    {
      noteBookName: 'n3',
      section: [
        {
          sectionName:'s1',
          page: [
            {
              pageName:'p1',
              content: 'page3'
            }
          ]
        }
      ]
    },

    {
      noteBookName: 'n4',
      section: [
        {
          sectionName:'s1',
          page: [
            {
              pageName:'p1',
              content: 'page4'
            }
          ]
        }
      ]
    },


    {
      noteBookName: 'n5',
      section: [
        {
          sectionName:'s1',
          page: [
            {
              pageName:'p1',
              content: 'page5'
            }
          ]
        }
      ]
    },

    {
      noteBookName: 'n6',
      section: [
        {
          sectionName:'s1',
          page: [
            {
              pageName:'p1',
              content: 'page5'
            }
          ]
        }
      ]
    },


  ]
};

