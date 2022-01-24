import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Home from "./components/Home/Home";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Mitr", "cursive"].join(","),
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    caption: {
      fontSize: 10,
    },
    h1: {
      fontSize: 36,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
    button: {
      fontSize: 14,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
