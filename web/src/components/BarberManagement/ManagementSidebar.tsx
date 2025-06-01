import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  DesignServices as ServicesIcon,
  CardGiftcard as PackagesIcon,
  Notifications as RemindersIcon,
  History as HistoryIcon,
  PointOfSale as CashIcon,
  AccountBalanceWallet as CashHistoryIcon,
  Inventory as InventoryIcon,
  TrendingUp as CashFlowIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  School as TutorialsIcon,
  MenuBook as CoursesIcon,
} from "@mui/icons-material";

const drawerWidth = 300;



interface ManagementSidebarProps {
  open: boolean;
  onClose: () => void;
}

export const ManagementSidebar = ({ open }: ManagementSidebarProps) => {
  const menuItems = [
    { text: "Agenda", icon: <CalendarIcon /> },
    { text: "Clientes", icon: <PeopleIcon /> },
    { text: "Profissionais", icon: <WorkIcon /> },
    { text: "Serviços", icon: <ServicesIcon /> },
    { text: "Pacotes", icon: <PackagesIcon /> },
    { text: "Lembretes", icon: <RemindersIcon /> },
    { text: "Histórico de Atendimentos", icon: <HistoryIcon /> },
    { divider: true },
    { text: "Caixa", icon: <CashIcon /> },
    { text: "Histórico de Caixa", icon: <CashHistoryIcon /> },
    { text: "Estoque", icon: <InventoryIcon /> },
    { text: "Fluxo de Caixa", icon: <CashFlowIcon /> },
    { text: "Relatórios", icon: <ReportsIcon /> },
    { divider: true },
    { text: "Configurações", icon: <SettingsIcon /> },
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
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Divider />

      <List>
        {menuItems.map((item, index) =>
          item.divider ? (
            <Divider key={`divider-${index}`} sx={{ my: 1 }} />
          ) : (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#D7B76C" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};
