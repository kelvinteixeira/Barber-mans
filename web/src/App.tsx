import { CssBaseline } from "@mui/material";
import { Routes } from "./Routes";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
