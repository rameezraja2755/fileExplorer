export interface IFile {
    title: string;
    type: 'folder' | "file";
    children?: IFile[];
}