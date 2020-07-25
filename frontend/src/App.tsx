import React from "react";
import { Chat } from "./Components/Mensajes/Chat";
import { Index } from "./Components/Index/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
const Botonsito = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
const App = (): JSX.Element => {
  const usuario = "Juan";
  return (
    <>
      <Router>
        <Switch>
          <Botonsito>aaaa</Botonsito>
          <Route exact path="/" children={<Index />} />
          <Route path="/Chat" children={<Chat usuario={usuario} />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
