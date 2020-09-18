import React from "react"
import { Chat } from "./Components/Mensajes/Chat"
import { Index } from "./Components/Index/Index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from "react"

const App = (): JSX.Element => {
  const [ usuario, setUsuario ]= useState<string>('') 
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" 
            children={
              <Index 
                setUsuario={setUsuario}
                usuario={usuario}
              />
            }
          />
          <Route
            exact 
            path="/Chat" 
            children={
              <Chat 
                 usuario={usuario}
              />
            }
          />
        </Switch>
      </Router>
    </>
  );
};

export default App
