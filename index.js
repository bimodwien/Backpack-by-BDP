const paramString = window.location.search
const params = new URLSearchParams(paramString)


document.getElementById('name').innerText = params.get('name')
document.getElementById('phone').innerText = params.get('phone')
document.getElementById('email').innerText = params.get('email')
document.getElementById('address').innerText = params.get('address')


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

let elementTas = document.getElementById('tas')
for (let i = 0 ; i < output.length ; i++){
  const tas = document.createElement('tbody')
  const txt = output[i].value.split(',')
  tas.innerHTML = '<tr> <td>' + txt[0] + '</td> <td>' + txt[1] + '</td> </tr>'
  tas.classList.add('txt-tas')
  elementTas.appendChild(tas)
}

function thankyou(){
  window.location = 'thankyou.html'
}

