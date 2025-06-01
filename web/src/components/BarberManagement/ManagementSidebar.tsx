import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import {
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  DesignServices as ServicesIcon,
  CardGiftcard as PackagesIcon,
  Notifications as RemindersIcon,
  History as HistoryIcon,
  AccountBalanceWallet as CashHistoryIcon,
  Inventory as InventoryIcon,
  TrendingUp as CashFlowIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  School as TutorialsIcon,
  MenuBook as CoursesIcon,
  MonetizationOn as ServicesValueIcon,
} from "@mui/icons-material";

const drawerWidth = 280;

interface ManagementSidebarProps {
  open: boolean;
  onClose: () => void;
}

export const ManagementSidebar = ({ open }: ManagementSidebarProps) => {
  const categories = [
    {
      title: "Atendimento",
      items: [
        { text: "Agendamento", icon: <CalendarIcon /> },
        { text: "Clientes", icon: <PeopleIcon /> },
        { text: "Profissionais", icon: <WorkIcon /> },
        { text: "Serviços", icon: <ServicesIcon /> },
        { text: "Pacotes", icon: <PackagesIcon /> },
        { text: "Lembretes", icon: <RemindersIcon /> },
        { text: "Histórico de Atendimentos", icon: <HistoryIcon /> },
      ],
    },
    {
      title: "Financeiro",
      items: [
        { text: "Fluxo de Caixa", icon: <CashFlowIcon /> },
        { text: "Valores dos Serviços", icon: <ServicesValueIcon /> },
        { text: "Histórico de Caixa", icon: <CashHistoryIcon /> },
      ],
    },
    {
      title: "Gestão",
      items: [
        { text: "Estoque", icon: <InventoryIcon /> },
        { text: "Relatórios", icon: <ReportsIcon /> },
      ],
    },
  ];

  const bottomItems = [
    { text: "Tutoriais", icon: <TutorialsIcon /> },
    { text: "Cursos", icon: <CoursesIcon /> },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box>
        {categories.map((category) => (
          <Box key={category.title}>
            <Typography
              variant="subtitle2"
              sx={{
                px: 3,
                py: 1,
                mt: 2,
                color: "#D7B76C",
                fontWeight: "bold",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {category.title}
            </Typography>
            <Divider sx={{ borderColor: "rgba(215, 183, 108, 0.3)", mb: 1 }} />
            <List>
              {category.items.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#D7B76C", minWidth: "36px" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text} 
                      primaryTypographyProps={{ 
                        fontSize: "0.875rem",
                        fontWeight: "medium"
                      }} 
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}

        <Divider sx={{ 
          borderColor: "#D7B76C", 
          my: 2,
          opacity: 0.5 
        }} />

        <List>
          {bottomItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#D7B76C", minWidth: "36px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ 
                    fontSize: "0.875rem",
                    fontWeight: "medium"
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Divider sx={{ borderColor: "rgba(215, 183, 108, 0.3)" }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#D7B76C", minWidth: "36px" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Configurações" 
                primaryTypographyProps={{ 
                  fontSize: "0.875rem",
                  fontWeight: "medium"
                }} 
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};