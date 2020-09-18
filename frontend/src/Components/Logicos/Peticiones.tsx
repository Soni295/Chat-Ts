import {URL} from "../Variables/Variables"

class Peticion {
  get = async(endpoint: string) => {
    fetch(URL + endpoint)
    .then(response => response.json())
    .then(data => console.log(data))
  }
  post = async(endpoint:string, data:object) => {
    const parameters:object = {
      method:"POST",
      credentials:"include",
      body:JSON.stringify(data),
      headers:{"Content-Type": "application/json"}
    }

    const res = await fetch((URL + endpoint) ,parameters)
    return res.json()
  }
  update = ():void => console.log('request update')
  delete =():void => console.log('request delete')
}

class Peticion2 {
  get    = ():void => console.log('request get')
  post   = ():void => console.log('request post')
  update = ():void => console.log('request update')
  delete = ():void => console.log('request delete')
}

export const request  = new Peticion()
export const request2 = new Peticion2()
