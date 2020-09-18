import React from "react";
import { handleSet } from "../Logicos/Seteos"
import { request } from "../Logicos/Peticiones"
import { Menu } from "./Styled"
import { BotonDefault } from "./Styled"
import { useState } from "react" 
import { Redirect } from "react-router-dom";

async function logIn(event:any, user:string, set:any){
  event.preventDefault()
  const res = await request.post('User', {user:user})
  if(res.msg === 'Ok') {
    set(user)
    console.log(res)
    return <Redirect to="/Hola" />
  } 
  else console.log(res.msg)
}

export const Index = (props:{ setUsuario:any, usuario:string }): JSX.Element => {
  const [form, setForm] = useState<string>('')
  if(props.usuario) return <Redirect to="/Chat" />
  return(
    <Menu>
      <h2>Chat Grupal</h2>
        <form>
          <input 
            type="text" 
            name="name" 
            onChange={( event:any ) => handleSet(event, setForm)} 
          />
          <BotonDefault
            onClick={ ( event:any ) => logIn(event, form, props.setUsuario) } 
          >Iniciar Sesion
          </BotonDefault>
        </form>
      </Menu>
  )
}

