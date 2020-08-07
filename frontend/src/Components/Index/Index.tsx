import React from "react";
import { handleSet } from "../Logicos/Seteos"
import { request2 } from "../Logicos/Peticiones"
import { Menu } from "./Styled"
import { BotonDefault } from "./Styled"

function logIn(event:any,user:string){
  event.preventDefault()
  request2.post()
}

console.log(process.env.URL)
export const Index = (props:{ setUsuario:any, usuario:string }): JSX.Element => {
  return(
    <Menu>
      <h2>Chat Grupal</h2>
        <form>
          <input 
            type="text" 
            name="name" 
            onChange={( event:any ) => handleSet(event, props.setUsuario)} 
          />
          <BotonDefault
            onClick={ ( event:any ) => logIn(event, props.usuario) } 
          >Iniciar Sesion
          </BotonDefault>
        </form>
      </Menu>
  )
}

