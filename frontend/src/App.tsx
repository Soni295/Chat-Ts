
import React from "react"
import { Chat } from "./Components/Mensajes/Chat"
import { Index } from "./Components/Index/Index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from "react"

require('dotenv').config()
console.log(process.env.URL)
const App = (): JSX.Element => {
  const [ usuario, setUsuario ]= useState<string>('Juan') 
  return (
    <>
      <Router>
        <Switch>
          <Route 
            children={<Index 
              setUsuario={setUsuario}
              usuario={usuario}
              />} />
            <Route 
              path="/Chat" 
              children={
                <Chat usuario={usuario}/>
              }
            />
        </Switch>
      </Router>
    </>
  );
};

export default App
