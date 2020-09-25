const paramString = window.location.search
const params = new URLSearchParams(paramString)


const output = []

if(params.get('tas1')){
  output.push({
    name: 'tas1',
    value: params.get('tas1')
  })
}
if(params.get('tas2')){
  output.push({
    name: 'tas2',
    value: params.get('tas2')
  })
}
if(params.get('tas3')){
  output.push({
    name: 'tas3',
    value: params.get('tas3')
  })
}

function fungsi(){
  let name = document.getElementById('name').value
  let phone = document.getElementById('phone').value
  let email = document.getElementById('email').value
  let address = document.getElementById('address').value

  let url = 'submit.html?name=' + name + '&phone=' + phone + '&email=' + email +'&address=' + address
  for (let i = 0 ; i < output.length ; i++){
    url = url + '&' + output[i].name + '=' + output[i].value
  }
  window.location = url
  return false
}

