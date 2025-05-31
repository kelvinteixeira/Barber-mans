import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const PageNotFound = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 8,
      }}
    >
      <Box
        sx={{
          position: "relative",
          mb: 4,
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 120,
            color: theme.palette.secondary.main,
            opacity: 0.1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: "6rem",
            fontWeight: 700,
            color: theme.palette.secondary.main,
            position: "relative",
            zIndex: 1,
          }}
        >
          404
        </Typography>
      </Box>

      <Typography
        variant="h3"
        component="h2"
        sx={{
          mb: 2,
          fontWeight: 600,
        }}
      >
        Oops! Página não encontrada
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          maxWidth: "600px",
          color: theme.palette.text.secondary,
        }}
      >
        Parece que você tentou acessar uma página que não existe ou foi movida.
        <br />
        Verifique o URL ou navegue usando os links abaixo.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
          mb: 6,
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="secondary"
          size="large"
        >
          Voltar a página inicial
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.disabled,
        }}
      >
        Se você acredita que isso é um erro, por favor entre em contato com
        nosso suporte.
      </Typography>
    </Container>
  );
};
