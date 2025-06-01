import { IconButton, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { theme } from "../theme/Theme";

const BackButtonContainer = styled("div")({
  position: "fixed",
  top: "16px",
  left: "16px",
  zIndex: 1000,
});

export const FixedBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Volta para a página anterior no histórico
  };

  return (
    <BackButtonContainer>
      <Tooltip title="Página Principal" arrow>
        <IconButton
          onClick={handleGoBack}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
            boxShadow: theme.palette.secondary.contrastText,
          }}
          size="large"
        >
          <ArrowBackIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </BackButtonContainer>
  );
};
