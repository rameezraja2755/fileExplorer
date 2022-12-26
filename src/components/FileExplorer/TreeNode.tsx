
import { Box } from "@mui/material";
import { useState } from "react";
import { IFile } from "../../types";
import {
    Typography,
    NodeContainer,
    CloseIcon,
    OpenIcon,
    FileIcon,
    FolderIcons,
} from "./styles";
import { tree } from "../../mocks/data";

const TreeNode = ({ title, type, children }: IFile) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => {
        type === "folder" && setIsExpanded(!isExpanded)
    }
    return (
        <div>
            <NodeContainer
                onClick={handleExpand}>
                {type === "folder" && (
                    <Box>
                        {isExpanded ? <OpenIcon /> : <CloseIcon />}
                    </Box>
                )}
                {type === "folder" ? (
                    <FolderIcons fontSize="small" />
                ) : type === "file" ? (
                    <FileIcon fontSize="small" />
                ) : (
                    <></>
                )}
                <Typography>{title ? title : tree.title}</Typography>
            </NodeContainer>

            {isExpanded && (
                <div>
                    {children?.length &&
                        children?.map((child: IFile) => (
                            <ul style={{ margin: 0 }}>
                                <TreeNode {...child} />
                            </ul>
                        ))}
                </div>
            )}
        </div>
    );
}
export default TreeNode