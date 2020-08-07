data = {
  user:'Juan',
  room:'1'
}

metodo = {
  method: 'POST',
  body:JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}
fetch('http://localhost:4000', metodo)
.then(r => r.json())
.then(data => console.log(data))
