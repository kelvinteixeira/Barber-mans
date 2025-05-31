import { Box, Typography, Button, Container, styled } from "@mui/material";
import { useEffect, useState } from "react";

const HeroContainer = styled(Box)(() => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
}));

const BackgroundImage = styled(Box)<{ active: boolean }>(({ active }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(5px)",
  transform: "scale(1.02)",
  opacity: active ? 1 : 0,
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

const HeroContent = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  color: theme.palette.common.white,
  textAlign: "left",
  padding: theme.spacing(4),
  maxWidth: "800px",
  marginLeft: "10%",
  marginTop: "60px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
    textAlign: "center",
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: "1.1rem",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: `0 4px 12px ${theme.palette.secondary.main}`,
  },
}));

const slides = [
  {
    id: 1,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
    title: "A Excelência em Cuidados Masculinos",
    subtitle:
      "Sua barbearia na palma da mão: controle total de agendamentos e serviços.",
    description:
      "Na Barberia, cada corte é uma arte — e por trás dela, precisa haver organização. Pensando nos barbeiros que levam o ofício a sério, criamos uma plataforma completa para gerenciar agendamentos, clientes e serviços com eficiência e praticidade. Seu talento merece um sistema à altura.",
  },
  {
    id: 2,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)",
    title: "Gestão Completa para sua Barbearia",
    subtitle:
      "Tudo o que você precisa para administrar seu negócio com excelência.",
    description:
      "De agendamentos a relatórios financeiros, nossa plataforma oferece todas as ferramentas para você focar no que realmente importa: proporcionar a melhor experiência para seus clientes.",
  },
  {
    id: 3,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1520338661084-680395057c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
    title: "Tecnologia a Serviço da Beleza Masculina",
    subtitle: "Inovação e tradição trabalhando juntas para o seu sucesso.",
    description:
      "Combinamos tecnologia de ponta com o conhecimento tradicional de barbearia para criar a ferramenta definitiva para profissionais que buscam excelência no atendimento e na gestão do seu espaço.",
  },
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

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      {slides.map((slide, index) => (
        <BackgroundImage
          key={slide.id}
          active={index === currentSlide && fade}
          sx={{ backgroundImage: slide.backgroundImage }}
        />
      ))}

      <Overlay />

      <HeroContent>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: "bold",
            lineHeight: 1.2,
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}
        >
          {slides[currentSlide].title}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: (theme) => theme.palette.secondary.dark,
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            mb: 3,
            fontWeight: "500",
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          {slides[currentSlide].subtitle}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            maxWidth: "600px",
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.4s",
          }}
        >
          {slides[currentSlide].description}
        </Typography>

        <HeroButton
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => smoothScroll("servicepresentation")}
          sx={{
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.6s",
          }}
        >
          Vamos começar!
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};