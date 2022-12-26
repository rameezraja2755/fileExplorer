import { IFile } from "../../types";
import {
    Typography,
    TitleWrapper, Container
} from "./styles";
import TreeNode from "./TreeNode";

interface IProps {
    rootNode: IFile
}

const TreeView = ({ rootNode }: IProps) => {
    return (
        <Container>
            <TitleWrapper>
                <Typography>File Explorer</Typography>
            </TitleWrapper>
            <TreeNode {...rootNode} />
        </Container>
    );
}
export default TreeView