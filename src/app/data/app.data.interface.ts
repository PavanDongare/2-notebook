export interface Data {
  notebook?: (NotebookEntity)[] | null;
}
export interface NotebookEntity {
  noteBookName: string;
  section?: (SectionEntity)[] | null;
}
export interface SectionEntity {
  sectionName: string;
  page?: (PageEntity)[] | null;
}
export interface PageEntity {
  pageName: string;
  content: string;
}
