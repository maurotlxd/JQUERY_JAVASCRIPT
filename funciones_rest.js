

//FUNCION PARA REALIZAR PETICION GET
function get(url){
  var api_key = 'd38cb5626c20f626d99c39bcbcd21126'
  fetch(url, {
    method: 'GET',
    headers:{
      'access_token' : api_key,
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
  }
}).then(res => res.json())
.then(response => console.log('Success:', response));

}


//FUNCION PARA REALIZAR PETICION POST
function post(url,data){
  var api_key = 'd38cb5626c20f626d99c39bcbcd21126'
  fetch(url, {
    method: 'POST',
    headers:{
      'access_token' : api_key,
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
  },
  body : JSON.stringify(data)
}).then(res => res.json())
.then(response => console.log('Success:', response));

}


