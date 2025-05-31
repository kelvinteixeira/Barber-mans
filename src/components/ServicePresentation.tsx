import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ServicePresentation = () => {
  const theme = useTheme();

  return (
    <Box
      id="servicepresentation"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            mb: 6,
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: theme.palette.secondary.main,
              margin: "20px auto 0",
            },
          }}
        >
          Inicie sua experiência
        </Typography>

        <Grid container spacing={6}>
          {/* Perspectiva do Cliente */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderTop: `4px solid ${theme.palette.secondary.main}`,
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  mb: 3,
                  color: theme.palette.secondary.main,
                }}
              >
                Quero ser cliente
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h4" sx={{ mb: 1 }}>
                  <Box
                    component="span"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    ✓
                  </Box>{" "}
                  Agendamento Fácil
                </Typography>
                <Typography variant="body1">
                  Marque seu horário em poucos cliques, a qualquer hora do dia.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h4" sx={{ mb: 1 }}>
                  <Box
                    component="span"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    ✓
                  </Box>{" "}
                  Lembretes Automáticos
                </Typography>
                <Typography variant="body1">
                  Receba notificações para não esquecer seu horário.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h4" sx={{ mb: 1 }}>
                  <Box
                    component="span"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    ✓
                  </Box>{" "}
                  Avalie seu Barbeiro
                </Typography>
                <Typography variant="body1">
                  Deixe sua opinião e ajude a melhorar o serviço.
                </Typography>
              </Box>

              <Box sx={{ mt: "auto", textAlign: "center" }}>
                <Button
                  component={Link}
                  to="/register-customer"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  Quero ser Cliente
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Perspectiva do Barbeiro */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderTop: `4px solid ${theme.palette.secondary.main}`,
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  mb: 3,
                  color: theme.palette.secondary.main,
                }}
              >
                Quero ser parceiro
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h4" sx={{ mb: 1 }}>
                  <Box
                    component="span"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    ✓
                  </Box>{" "}
                  Gestão Completa
                </Typography>
                <Typography variant="body1">
                  Controle agendamentos, finanças e clientes em um só lugar.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h4" sx={{ mb: 1 }}>
                  <Box
                    component="span"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    ✓
                  </Box>{" "}
                  Aplicativo Integrado
                </Typography>
                <Typography variant="body1">
                  Acesse sua agenda de qualquer lugar pelo celular.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h4" sx={{ mb: 1 }}>
                  <Box
                    component="span"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    ✓
                  </Box>{" "}
                  Aumente sua Renda
                </Typography>
                <Typography variant="body1">
                  Reduza faltas e organize melhor seu tempo de trabalho.
                </Typography>
              </Box>

              <Box sx={{ mt: "auto", textAlign: "center" }}>
                <Button
                  component={Link}
                  to="/register-barber"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  Quero ser Parceiro
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
