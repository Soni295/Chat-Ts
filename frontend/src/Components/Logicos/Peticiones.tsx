class Peticion {
  get = (url: string) => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
  }
  post = ():void => console.log('request post')
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
