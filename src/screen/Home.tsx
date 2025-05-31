import { Box } from "@mui/material";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { Footer } from "../components/Footer";
import { PricingPlans } from "../components/PricingPlans";
import { FAQSection } from "../components/FAQ";
import { Header } from "../components/Header";
import { ServicePresentation } from "../components/ServicePresentation";

export const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingPlans />
      <FAQSection />
      <ServicePresentation />
      <Footer />
    </Box>
  );
};
