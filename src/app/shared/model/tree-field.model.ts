export class TreeField {
  title: string;
  type: TreeType;

  constructor(options: {
    title?: string;
    type?: TreeType;
  } = {}) {
    this.title = options.title ? options.title : "";
    this.type = options.type ? options.type : TreeType.FIELD;
  }

  isField(): boolean {
    return this.type === TreeType.FIELD;
  }

  isFolder(): boolean {
    return this.type === TreeType.FOLDER;
  }

}

enum TreeType {
  FOLDER, FIELD
}
