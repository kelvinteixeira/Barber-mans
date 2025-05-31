import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
  Divider,
  useMediaQuery,
  IconButton
} from "@mui/material";
import { theme } from "../theme/Theme";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useRef, useState } from "react";

export const PricingPlans = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const plans = [
    {
      title: "Plano Mensal",
      price: "R$ 54,90",
      period: "/mês",
      description: "Ideal para quem quer experimentar nossos serviços",
      popular: false,
      buttonText: "Assinar Mensal",
      discount: null
    },
    {
      title: "Plano Semestral",
      price: "R$ 279,90",
      period: "/semestre",
      description:
        "Garanta 6 meses de acesso com um desconto exclusivo e pague menos por mês. Uma escolha inteligente para quem quer continuar evoluindo sem pesar no bolso.",
      popular: false,
      buttonText: "Assinar Semestral",
      discount: "15% OFF"
    },
    {
      title: "Plano Anual",
      price: "R$ 494,90",
      period: "/ano",
      description:
        "Ideal para quem valoriza constância e quer investir no próprio bem-estar a longo prazo",
      popular: true,
      buttonText: "Assinar Anual",
      discount: "25% OFF"
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev: number) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev: number) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  const renderDesktopGrid = () => (
    <Grid container spacing={4} justifyContent="center">
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <PlanCard plan={plan} />
        </Grid>
      ))}
    </Grid>
  );

  const renderMobileCarousel = () => (
    <Box id="plans" sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentSlide * 100}%)`,
          width: '100%'
        }}
      >
        {plans.map((plan, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '100%',
              px: 2,
            }}
          >
            <PlanCard plan={plan} />
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
        {plans.map((_, index) => (
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

  const PlanCard = ({ plan }: { plan: { 
    popular: boolean;
    title: string;
    price: string;
    period: string;
    description: string;
    buttonText: string;
    discount: string | null;
  } }) => (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: plan.popular
          ? `2px solid ${theme.palette.secondary.main}`
          : `1px solid ${theme.palette.primary.dark}`,
        boxShadow: plan.popular
          ? `0 0 20px ${theme.palette.secondary.light}`
          : "none",
        position: "relative",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      {plan.popular && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            px: 2,
            py: 0.5,
            fontSize: "0.875rem",
            fontWeight: 600,
            borderBottomLeftRadius: 8,
          }}
        >
          MELHOR CUSTO BENEFÍCIO
        </Box>
      )}

      {plan.discount && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
            px: 2,
            py: 0.5,
            fontSize: "0.875rem",
            fontWeight: 600,
            borderBottomRightRadius: 8,
            zIndex: 1,
          }}
        >
          {plan.discount}
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          {plan.title}
        </Typography>

        <Box textAlign="center" sx={{ mb: 3 }}>
          <Typography
            variant="h2"
            component="span"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: 700,
            }}
          >
            {plan.price}
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{ color: theme.palette.text.secondary }}
          >
            {plan.period}
          </Typography>
        </Box>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          {plan.description}
        </Typography>

        <Divider sx={{ my: 2, bgcolor: theme.palette.primary.light }} />
      </CardContent>

      <Box sx={{ p: 3, pt: 0 }}>
        <Button
          fullWidth
          variant={plan.popular ? "contained" : "outlined"}
          color={plan.popular ? "secondary" : "primary"}
          size="large"
          sx={{
            fontWeight: 600,
            py: 1.5,
          }}
        >
          {plan.buttonText}
        </Button>
      </Box>
    </Card>
  );
  return (
    <Container  id="plans" maxWidth="xl" sx={{ py: 8 }}>
      <Typography 
        variant="h1" 
        component="h1" 
        gutterBottom 
        sx={{ 
          textAlign: 'center',
          mb: 6,
          position: 'relative',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          '&:after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: theme.palette.secondary.main,
            margin: '20px auto 0',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s'
          }
        }}
      >
        Nossos Planos de Assinatura
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          maxWidth: 600,
          mx: "auto",
          mb: 8,
        }}
      >
        Escolha o plano que melhor se adapta às suas necessidades e aproveite
        benefícios exclusivos em nossa barbearia.
      </Typography>

      {isMobile ? renderMobileCarousel() : renderDesktopGrid()}
    </Container>
  );
};