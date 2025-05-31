import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  InputAdornment,
  IconButton,
  Divider,
  FormControl,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { FixedBackButton } from "../components/FixedBackButton";

const LoginContainer = styled(Box)(() => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}));

const BackgroundImage = styled(Box)<{ active: boolean }>(({ active }) => ({
  backgroundImage: "url(/images/wallpaper-login-barber.jpg)",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: active ? 1 : 0,
  filter: "blur(7px)",
  transition: "opacity 1s ease-in-out",
  zIndex: 0,
}));

const Overlay = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 1,
}));

const FormCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  boxShadow:
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
  width: "100%",
  maxWidth: "500px",
  zIndex: 2,
  border: "1px solid rgba(73, 69, 69, 0.3)",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "inherit",
    backdropFilter: "blur(10px)",
    zIndex: -1,
  },
}));

export const LoginBarber = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validação em tempo real
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value) ? "Email inválido" : "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação final antes de enviar
    let hasErrors = false;
    const newErrors = { ...errors };

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
      hasErrors = true;
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // Lógica para autenticar o usuário
      console.log("Formulário de login enviado:", formData);
    }
  };

  return (
    <LoginContainer>
      <BackgroundImage active={true} />
      <FixedBackButton />

      <Overlay />

      <Container maxWidth="sm">
        <FormCard>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              align="center"
              sx={{ mb: 2, color: theme.palette.secondary.main }}
            >
              Acesse sua conta
            </Typography>

            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              required
            />

            <FormControl fullWidth>
              <TextField
                label="Senha"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              sx={{ mt: 2, py: 1.5 }}
            >
              Entrar
            </Button>

            <Divider sx={{ my: 2 }}>ou</Divider>

            <Button
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
              startIcon={<Google />}
              sx={{ py: 1.5 }}
            >
              Entrar com Google
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Não possui uma conta?{" "}
              <Link
                to="/register-barber"
                style={{ color: theme.palette.secondary.main }}
              >
                Cadastre-se
              </Link>
            </Typography>
          </Box>
        </FormCard>
      </Container>
    </LoginContainer>
  );
};
