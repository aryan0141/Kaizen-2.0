import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { Layout } from "./Components/Layout";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { blue, purple } from "@material-ui/core/colors";
import { TimeTable } from "./pages/TimeTable";

const theme = createTheme({
  palette: {
    // primary: {
    //   // main: "#fefefe",
    // },
    secondary: blue
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/timeTable">
              <TimeTable />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
