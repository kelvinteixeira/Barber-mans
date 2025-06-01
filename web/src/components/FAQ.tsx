import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAQSection = () => {
  const theme = useTheme();

  const faqItems = [
    {
      question: "Não possuo CNPJ. Posso utilizar o Barber & Mans?",
      answer: "Sim. Não há necessidade de CNPJ para utilizar o sistema.",
    },

    {
      question: "Posso alterar meu plano futuramente?",
      answer:
        "No plano mensal, você pode fazer a alteração do seu plano a cada vencimento da fatura.",
    },
    {
      question:
        "O cliente da barbearia precisa pagar para baixar o aplicativo?",
      answer:
        "Não. O download do aplicativo é gratuito e está disponível para iOS e Android.",
    },
  ];

  return (
    <Box
      id="faq"
      sx={{
        py: 8,
        backgroundColor: "#3f3d3d",
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      <Container maxWidth="xl">
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
          Perguntas Frequentes
        </Typography>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: "8px !important",
                boxShadow: "none",
                border: `1px solid ${theme.palette.divider}`,
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" />}
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderRadius: "8px",
                  "&.Mui-expanded": {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600 }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
