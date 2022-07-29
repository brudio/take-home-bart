import { ThemeProvider } from "styled-components";

import AppRoutes from "routes/AppRoutes";
import GlobalStyle from "./utils/globalStyle";
import theme from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
