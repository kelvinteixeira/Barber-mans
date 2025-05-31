import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react"; // Adicionei o useEffect
import { theme } from "../theme/Theme";

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: "1rem",
  minWidth: "auto",
  px: 2,
  whiteSpace: "nowrap",
  "&:hover": {
    color: theme.palette.secondary.main,
    backgroundColor: "transparent",
  },
}));

export const Header = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Novo estado para controlar o scroll

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const navItems = [
    { text: "Barber & Mans", href: "#about" },
    { text: "Serviços", href: "#features" },
    { text: "Planos", href: "#plans" },
    { text: "Sou cliente", href: "#custumer" },
    { text: "Sou Barbeiro", href: "#barber", variant: "outlined" },
  ];

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Ajuste conforme a altura do seu header
      const yOffset = -headerHeight - 122; // Offset adicional de 20px
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        border: "none",
        background: scrolled
          ? alpha("#000000", 0.2) // Fundo com transparência quando scrolled
          : "transparent", // Transparente no topo
        boxShadow: scrolled ? 1 : "none", // Sombra quando scrolled
        transition: "all 0.5s ease", // Transição suave
        backdropFilter: scrolled ? "blur(10px)" : "none", // Efeito de blur
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Menu Hamburguer (apenas mobile) */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: theme.palette.secondary.main }} />
          </IconButton>
        )}

        {/* Logo - Centralizada em mobile */}
        {isMobile && (
          <Box
            sx={{
              flexGrow: isMobile ? 1 : 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/barber-logo.png"
              alt="Barberia Logo"
              style={{
                display: "flex",
                justifyContent: "center",
                width: isMobile ? "150px" : "200px",
                cursor: "pointer",
                mixBlendMode: "multiply",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Box>
        )}

        {/* Links do lado direito (apenas desktop) */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavButton onClick={() => smoothScroll("about")}>Sobre</NavButton>
            <NavButton onClick={() => smoothScroll("features")}>
              Serviços
            </NavButton>
            <NavButton onClick={() => smoothScroll("plans")}>Planos</NavButton>

            <img
              src="/images/barber-logo.png"
              alt="Barberia Logo"
              style={{
                width: isMobile ? "100px" : "150px",
                cursor: "pointer",
                mixBlendMode: "multiply",
                transition: "filter 1s ease",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />

            <Box sx={{ ml: 4, display: "flex" }}>
              <NavButton href="login-customer">Sou cliente</NavButton>
              <NavButton
                variant="outlined"
                color="secondary"
                sx={{
                  borderWidth: "2px",
                  ml: 2,
                  "&:hover": {
                    borderWidth: "2px",
                    backgroundColor: "rgba(215, 183, 108, 0.1)",
                  },
                }}
                href="login-barber"
              >
                Sou Barbeiro
              </NavButton>
            </Box>
          </Box>
        )}

        {/* Drawer para mobile */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: theme.palette.background.default,
              width: 250,
            },
          }}
        >
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ justifyContent: "center", py: 3 }}
                  onClick={(event) => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    toggleDrawer(false)(event);
                  }}
                >
                  <img
                    src="/images/barber-logo.png"
                    alt="Barberia Logo"
                    style={{
                      width: "150px",
                      cursor: "pointer",
                      mixBlendMode: "multiply",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ borderColor: theme.palette.secondary.main }} />

              {navItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={(event) => {
                      smoothScroll(item.href.substring(1)); // Remove o #
                      toggleDrawer(false)(event);
                    }}
                    sx={{
                      color: theme.palette.common.white,
                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    {item.variant === "outlined" ? (
                      <Box
                        sx={{
                          border: `2px solid ${theme.palette.secondary.main}`,
                          borderRadius: "8px",
                          px: 2,
                          py: 1,
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        <ListItemText primary={item.text} />
                      </Box>
                    ) : (
                      <ListItemText primary={item.text} />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
      {scrolled && (
        <Divider
          sx={{
            display: "flex",
            justifyContent: "center",
            borderColor: theme.palette.secondary.main,
          }}
        />
      )}
    </AppBar>
  );
};
