class Book {
  private title: string;
  private author: string;
  private description: string;
  private pages: number;

  constructor(title: string, author: string, desc: string, pages: number) {
    this.title = title;
    this.author = author;
    this.description = desc;
    this.pages = pages;
  }

  public getTitle(): string {
    return this.title;
  }
  public setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  public getAuthor(): string {
    return this.author;
  }
  public setAuthor(authorName: string): void {
    this.author = authorName;
  }

  public getDescription(): string {
    return this.description;
  }
  public setDescription(desc: string): void {
    this.description = desc;
  }

  public getPages(): number {
    return this.pages;
  }
  public setPages(pageNum: number): void {
    this.pages = pageNum;
  }
}

export default Book;