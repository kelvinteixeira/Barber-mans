/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import {
  Schedule as ScheduleIcon,
  AttachMoney as AttachMoneyIcon,
  Payment as PaymentIcon,
  Assessment as AssessmentIcon,
  Style as StyleIcon,
  Inventory as InventoryIcon,
  LocalBar as LocalBarIcon,
  People as PeopleIcon,
  Loyalty as LoyaltyIcon,
  CalendarToday as CalendarTodayIcon,
  PhotoCamera as PhotoCameraIcon,
  Chat as ChatIcon
} from '@mui/icons-material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const FeatureCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.5s ease, transform 0.8s ease, opacity 0.8s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 16px rgba(215, 183, 108, 0.3)`,
    borderColor: theme.palette.secondary.main
  }
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  fontSize: '2rem',
  transition: 'transform 0.8s ease, opacity 0.8s ease'
}));

export const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuresRef = useRef(null);
  const carouselRef = useRef(null);

  const features = [
    {
      icon: <ScheduleIcon fontSize="large" />,
      title: "Lembrete de Horários",
      description: "Envio automático de lembretes por SMS ou e-mail para reduzir faltas e melhorar o atendimento."
    },
    {
      icon: <AttachMoneyIcon fontSize="large" />,
      title: "Gestão Financeira",
      description: "Controle completo de entradas, saídas e comissões com relatórios detalhados."
    },
    {
      icon: <PaymentIcon fontSize="large" />,
      title: "Pagamento Online",
      description: "Aceite pagamentos digitais de forma segura e integrada diretamente pelo sistema."
    },
    {
      icon: <AssessmentIcon fontSize="large" />,
      title: "Relatórios Avançados",
      description: "Gere relatórios personalizados de desempenho, financeiro e produtividade."
    },
    {
      icon: <StyleIcon fontSize="large" />,
      title: "Pacote de Serviços",
      description: "Crie combos de serviços promocionais para aumentar o ticket médio."
    },
    {
      icon: <InventoryIcon fontSize="large" />,
      title: "Gestão de Estoque",
      description: "Controle de produtos, alertas de reposição e histórico de consumo."
    },
    {
      icon: <LocalBarIcon fontSize="large" />,
      title: "Controle de Consumo",
      description: "Registro de produtos utilizados em cada atendimento para cálculo preciso de custos."
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      title: "Lista de Espera",
      description: "Gerencie clientes em espera e preencha horários vagos automaticamente."
    },
    {
      icon: <LoyaltyIcon fontSize="large" />,
      title: "Programa de Fidelidade",
      description: "Sistema de pontos e recompensas para aumentar a retenção de clientes."
    },
    {
      icon: <CalendarTodayIcon fontSize="large" />,
      title: "Agenda Inteligente",
      description: "Visualização por profissional, serviços e otimização de horários."
    },
    {
      icon: <PhotoCameraIcon fontSize="large" />,
      title: "Portfólio Digital",
      description: "Galeria de trabalhos realizados para mostrar o talento dos profissionais."
    },
    {
      icon: <ChatIcon fontSize="large" />,
      title: "Feedback Automático",
      description: "Coleta de avaliações pós-atendimento para melhoria contínua."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const renderDesktopGrid = () => (
    <Grid container spacing={4}>
      {features.map((feature, index) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          key={index}
          sx={{
            '& > .MuiPaper-root': {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: `opacity 0.8s ease ${0.3 + (index * 0.1)}s, transform 0.8s ease ${0.3 + (index * 0.1)}s`
            }
          }}
        >
          <FeatureCard elevation={3}>
            <FeatureIcon sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0)',
              transition: `opacity 0.8s ease ${0.4 + (index * 0.1)}s, transform 0.8s ease ${0.4 + (index * 0.1)}s`
            }}>
              {feature.icon}
            </FeatureIcon>
            <Typography 
              variant="h5" 
              component="h5" 
              gutterBottom 
              sx={{ 
                color: theme.palette.secondary.main,
                fontWeight: 600,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ease ${0.5 + (index * 0.1)}s, transform 0.8s ease ${0.5 + (index * 0.1)}s`
              }}
            >
              {feature.title}
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ease ${0.6 + (index * 0.1)}s, transform 0.8s ease ${0.6 + (index * 0.1)}s`
              }}
            >
              {feature.description}
            </Typography>
          </FeatureCard>
        </Grid>
      ))}
    </Grid>
  );

  const renderMobileCarousel = () => (
    <Box id="features" sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentSlide * 100}%)`,
          width: '100%'
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '100%',
              px: 2,
              '& > .MuiPaper-root': {
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: `opacity 0.8s ease ${0.3 + (index * 0.1)}s, transform 0.8s ease ${0.3 + (index * 0.1)}s`
              }
            }}
          >
            <FeatureCard elevation={3}>
              <FeatureIcon sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transition: `opacity 0.8s ease ${0.4 + (index * 0.1)}s, transform 0.8s ease ${0.4 + (index * 0.1)}s`
              }}>
                {feature.icon}
              </FeatureIcon>
              <Typography 
                variant="h5" 
                component="h5" 
                gutterBottom 
                sx={{ 
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.8s ease ${0.5 + (index * 0.1)}s, transform 0.8s ease ${0.5 + (index * 0.1)}s`
                }}
              >
                {feature.title}
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.8s ease ${0.6 + (index * 0.1)}s, transform 0.8s ease ${0.6 + (index * 0.1)}s`
                }}
              >
                {feature.description}
              </Typography>
            </FeatureCard>
          </Box>
        ))}
      </Box>
      
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.secondary.main,
          zIndex: 1,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main
          }
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.secondary.main,
          zIndex: 1,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main
          }
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {features.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? theme.palette.secondary.main : theme.palette.grey[400],
              mx: 0.5,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <Box 
      id="features"
      ref={featuresRef}
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: 6,
            position: 'relative',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              backgroundColor: theme.palette.secondary.main,
              margin: '20px auto 0',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s'
            }
          }}
        >
          Funcionalidades do Barber & Mans
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            maxWidth: '800px', 
            mx: 'auto', 
            mb: 8,
            fontSize: '1.1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          Tudo o que você precisa para gerenciar sua barbearia com eficiência e oferecer a melhor experiência para seus clientes.
        </Typography>
        
        {isMobile ? renderMobileCarousel() : renderDesktopGrid()}
      </Container>
    </Box>
  );
};