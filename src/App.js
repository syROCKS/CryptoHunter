import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

const useStyles = makeStyles(() => ({
  App: { backgroundColor: "#14161a", color: "white", minHeight: "100vh" },
}));

const App = () => {
  const classes = useStyles();
  
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/coins/:id" component={Coin} />
      </div>
    </BrowserRouter>
  );
};

export default App;
