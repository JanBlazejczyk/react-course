import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import { NavMenu } from "./components/NavMenu";
import { Content } from "./components/Content";
import { Button } from "./components/Button";
import { Home, About, Contact } from "./pages";

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <Router>
      <div className="App">
        <NavMenu active={showNav} handleClose={toggleMenu} />
        <Button handleClick={toggleMenu} label="Show menu" state={showNav} />
        <Content>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;
