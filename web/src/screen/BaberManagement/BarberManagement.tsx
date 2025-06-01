import { useState } from "react";
import { Box, CssBaseline, styled } from "@mui/material";
import { ManagementHeader } from "../../components/BarberManagement/ManagementHeader";
import { ManagementSidebar } from "../../components/BarberManagement/ManagementSidebar";

const MainContent = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-240px`,
  [theme.breakpoints.up("sm")]: {
    marginLeft: 0,
  },
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const BarberManagement = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ManagementHeader
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <ManagementSidebar open={sidebarOpen} onClose={toggleSidebar} />
      <MainContent>
        <DrawerHeader />
        {children}
      </MainContent>
    </Box>
  );
};
