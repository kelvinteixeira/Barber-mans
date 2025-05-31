import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
  borderTop: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <img
        src="/images/barber-logo.png"
        alt="Barberia Logo"
        style={{
          width: "150px",
          cursor: "pointer",
          transition: "filter 1s ease",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <Typography variant="body2" sx={{ mb: 2 }} align="center">
        O sistema completo para gestão de barbearias, trazendo tecnologia e
        praticidade para o seu negócio.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <IconButton
          aria-label="Facebook"
          sx={{ color: theme.palette.common.white }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          sx={{ color: theme.palette.common.white, mx: 1 }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          sx={{ color: theme.palette.common.white }}
        >
          <TwitterIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.secondary.main}`,
          paddingTop: theme.spacing(3),
          marginTop: theme.spacing(4),
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Barber & Mans. Todos os direitos
          reservados.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Desenvolvido com ❤️ para barbearias que fazem a diferença
        </Typography>
      </Box>
    </FooterContainer>
  );
};
