import { styled, Box, Typography as typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
export const Container = styled(Box)(() => ({
  padding: "1rem",
}));
export const Typography = styled(typography)(() => ({
  fontSize: "14px",
  color: "white",
  paddingLeft: "5px",
}));

export const NodeContainer = styled(Box)(() => ({
  cursor: "pointer",
  flexDirection: "row",
  alignItems: "center",
  display: "flex",
  paddingBottom: "0.1rem",
}));
export const TitleWrapper = styled(Box)(() => ({
  display: 'flex',
  padding: "2rem 0rem",
}));
export const CloseIcon = styled(KeyboardArrowLeftIcon)(() => ({
  color: "white",
  fontSize: "large",
}));
export const OpenIcon = styled(KeyboardArrowDownIcon)(() => ({
  color: "white",
  fontSize: "large",
}));

export const FolderIcons = styled(FolderIcon)(() => ({
  color: "white",
  fontSize: "large",
}));

export const FileIcon = styled(InsertDriveFileIcon)(() => ({
  color: "white",
  fontSize: "large",
}));
