import { tree } from "../../mocks/data";
import TreeView from "./TreeView";

const FileExplorer = () => {
    return <TreeView rootNode={tree} />;
};

export default FileExplorer;



