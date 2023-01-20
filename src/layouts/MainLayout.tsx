import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import sizeConfigs from "../configs/sizeConfigs";
import Sidebar from "../components/nav-section/Sidebar";
const MainLayout = () => {
  return (
      <>
      <Box
        component="nav"
        sx={{
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          width:'fix-layout'
        }}
        
      >
        <Toolbar />
        <Outlet />
      </Box>
    </>
  )
}

export default MainLayout