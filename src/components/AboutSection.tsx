import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';

const FeaturePaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.8s ease, transform 0.8s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 10px 20px rgba(215, 183, 108, 0.2)`
  }
}));

export const AboutSection = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <Box 
      id="about"
      ref={aboutRef}
      sx={{
        py: 10,
        borderBottom: `5px solid ${theme.palette.secondary.main}`,
        borderTop: `5px solid ${theme.palette.secondary.main}`,
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
          Sobre o Barber & Mans
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            maxWidth: '800px', 
            mx: 'auto', 
            mb: 6,
            fontSize: '1.1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          O Barber & Man é um sistema de gestão completo para barbearias que revoluciona a forma como você gerencia seu negócio, 
          desde agendamentos até o controle financeiro, tudo em uma plataforma integrada e fácil de usar.
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FeaturePaper 
              elevation={3}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
              }}
            >
              <Typography 
                variant="h3" 
                component="h3" 
                gutterBottom 
                sx={{ color: theme.palette.secondary.main }}
              >
                BarberControl
              </Typography>
              <Typography variant="body1" paragraph>
                Controle total do seu estabelecimento na palma da sua mão. Gerencie profissionais, clientes, estoque e 
                acompanhe relatórios financeiros detalhados.
              </Typography>
              <Typography variant="body1" paragraph>
                Com armazenamento em nuvem, você tem acesso seguro a qualquer momento e de qualquer lugar, garantindo que 
                seu negócio esteja sempre sob controle.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 500, color: theme.palette.secondary.main }}>
                  Recursos principais:
                </Typography>
                <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                  <li><Typography variant="body1">Gestão completa de profissionais</Typography></li>
                  <li><Typography variant="body1">Histórico detalhado de clientes</Typography></li>
                  <li><Typography variant="body1">Controle de estoque integrado</Typography></li>
                  <li><Typography variant="body1">Relatórios financeiros avançados</Typography></li>
                </ul>
              </Box>
            </FeaturePaper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FeaturePaper 
              elevation={3}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s'
              }}
            >
              <Typography 
                variant="h3" 
                component="h3" 
                gutterBottom 
                sx={{ color: theme.palette.secondary.main }}
              >
                BarberApp
              </Typography>
              <Typography variant="body1" paragraph>
                Conecte-se com seus clientes de forma direta e eficiente. Eles podem agendar serviços, receber notificações 
                e promoções, tudo pelo aplicativo.
              </Typography>
              <Typography variant="body1" paragraph>
                Seus profissionais também têm acesso exclusivo para acompanhar sua agenda, comissões e desempenho, tudo 
                otimizado para melhorar a produtividade.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 500, color: theme.palette.secondary.main }}>
                  Benefícios:
                </Typography>
                <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                  <li><Typography variant="body1">Agendamentos online 24/7</Typography></li>
                  <li><Typography variant="body1">Lembretes automáticos</Typography></li>
                  <li><Typography variant="body1">Acompanhamento de comissões</Typography></li>
                  <li><Typography variant="body1">Promoções diretas para clientes</Typography></li>
                </ul>
              </Box>
            </FeaturePaper>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            mt: 8, 
            textAlign: 'center',
            backgroundColor: 'rgba(215, 183, 108, 0.1)',
            borderLeft: `4px solid ${theme.palette.secondary.main}`,
            p: 3,
            borderRadius: '0 8px 8px 0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s'
          }}
        >
          <Typography variant="h4" component="h3" sx={{ mb: 2, color: theme.palette.secondary.main }}>
            Por que escolher o Barber & Mans?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Nosso sistema foi desenvolvido especificamente para barbearias, entendendo as necessidades únicas do seu negócio. 
            Combinamos tecnologia avançada com simplicidade de uso para que você possa focar no que realmente importa: 
            proporcionar a melhor experiência para seus clientes.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};