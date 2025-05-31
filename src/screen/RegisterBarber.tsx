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
  FormHelperText,
  useTheme,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { FixedBackButton } from "../components/FixedBackButton";

const RegisterContainer = styled(Box)(() => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: 2,
}));

const BackgroundImage = styled(Box)(() => ({
  backgroundImage: "url(/images/wallpaper-register-barber.jpg)",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(5px)",
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
  maxWidth: "800px", // Aumentado para acomodar duas colunas
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

export const RegisterBarber = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    barberShopName: "",
    ownerName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    barberShopName: "",
    ownerName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: unknown; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));

    // Validação em tempo real
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value) ? "Email inválido" : "",
      }));
    }

    if (name === "password") {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setErrors((prev) => ({
        ...prev,
        password: !passwordRegex.test(value)
          ? "Senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial"
          : "",
      }));

      // Validação de confirmação de senha
      if (formData.confirmPassword) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword:
            value !== formData.confirmPassword ? "As senhas não coincidem" : "",
        }));
      }
    }

    if (name === "confirmPassword") {
      setErrors((prev) => ({
        ...prev,
        confirmPassword:
          value !== formData.password ? "As senhas não coincidem" : "",
      }));
    }

    if (name === "phone") {
      // Aplicar máscara de telefone
      const cleaned = value.replace(/\D/g, "");
      const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
      if (match) {
        const formatted = [
          match[1] ? `(${match[1]}` : "",
          match[2] ? `) ${match[2]}` : "",
          match[3] ? `-${match[3]}` : "",
        ].join("");
        setFormData((prev) => ({
          ...prev,
          phone: formatted,
        }));
      }
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validação final antes de enviar
    let hasErrors = false;
    const newErrors = { ...errors };

    if (!formData.barberShopName.trim()) {
      newErrors.barberShopName = "Nome da barbearia é obrigatório";
      hasErrors = true;
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Nome completo é obrigatório";
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
      hasErrors = true;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
      hasErrors = true;
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
      hasErrors = true;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirmação de senha é obrigatória";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // Lógica para enviar os dados do formulário
      console.log("Formulário enviado:", formData);
    }
  };

  return (
    <RegisterContainer>
      <BackgroundImage />
      <FixedBackButton/>
      <Overlay />

      <Container maxWidth="lg">
        <FormCard>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <img
              src="/images/barber-logo.png"
              alt="Barbearia Logo"
              style={{
                width: isMobile ? "100px" : "150px",
                cursor: "pointer",
                mixBlendMode: "multiply",
              }}
            />
            <Typography
              variant="h3"
              component="h1"
              align="center"
              sx={{ mb: 2, color: theme.palette.secondary.main }}
            >
              Cadastre sua Barbearia
            </Typography>

            <Grid container spacing={3}>
              {/* Coluna 1 - Dados da Barbearia */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Nome da Barbearia"
                  name="barberShopName"
                  value={formData.barberShopName}
                  onChange={handleChange}
                  error={!!errors.barberShopName}
                  helperText={errors.barberShopName}
                  fullWidth
                  required
                  color="secondary"
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.dark",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                  }}
                />

                <TextField
                  label="Nome Completo do Proprietário"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  error={!!errors.ownerName}
                  helperText={errors.ownerName}
                  fullWidth
                  required
                  color="secondary"
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.dark",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                  }}
                />

                <TextField
                  label="Telefone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone || "Formato: (99) 99999-9999"}
                  fullWidth
                  required
                  inputProps={{ maxLength: 15 }}
                  color="secondary"
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.dark",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Coluna 2 - Dados de Acesso */}
              <Grid item xs={12} md={6}>
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
                  color="secondary"
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.dark",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                  }}
                />

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <TextField
                    label="Senha"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    fullWidth
                    required
                    color="secondary"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "secondary.main",
                        },
                        "&:hover fieldset": {
                          borderColor: "secondary.dark",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "secondary.main",
                        },
                      },
                    }}
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
                  {errors.password && (
                    <FormHelperText error>{errors.password}</FormHelperText>
                  )}
                </FormControl>

                <TextField
                  label="Repita a Senha"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  fullWidth
                  required
                  color="secondary"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.dark",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            {/* Botões - Full width abaixo das colunas */}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              sx={{ mt: 2, py: 1.5 }}
            >
              Cadastrar Barbearia
            </Button>

            <Divider
              sx={(theme) => ({
                my: 2,
                width: "100%",
                "&::before, &::after": {
                  borderColor: theme.palette.secondary.main,
                },
              })}
            >
              ou
            </Divider>

            <Button
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
              startIcon={<Google />}
              sx={{ py: 1.5 }}
            >
              Cadastrar com Google
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Já possui uma conta?{" "}
              <Link to="/login-barber" style={{ color: theme.palette.secondary.main }}>
                Faça login
              </Link>
            </Typography>
          </Box>
        </FormCard>
      </Container>
    </RegisterContainer>
  );
};
