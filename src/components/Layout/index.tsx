import { Box } from "@mui/material";
import React from "react";
import FileExplorer from "../FileExplorer";

const Layout = () => {
  return (
      <Box display="grid" height="100vh" gridTemplateColumns="1fr 4fr">
          <Box sx={{ background: "#1e1e1e", display: "flex" }} >
      <FileExplorer />        
          </Box>
       <Box sx={{ background: "#252526", display: "flex" }}></Box>
    </Box>
  );
};

export default Layout;
