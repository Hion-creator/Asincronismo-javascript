function sum (num1, num2){
    return num1 + num2;
}

function calc(num1,num2, callback){
    return callback(num1,num2)
}

console.log(calc(2,2,sum))

setTimeout(function () {
    console.log('hola javascript')
}, 2000)

function gretting(name){
    console.log(`hola ${name}`)
}

setTimeout(gretting, 2000, 'andres')

function solicitudServidor(consulta, callback){
    setTimeout(function(){
      var respuesta = consulta + "lleno!";
      callback(respuesta);
    },5000);
  }
  
  function obtenerResultados(resultados){
    console.log("Respuesta del servidor: " + resultados);
  }
  
  solicitudServidor("El vaso está medio  ", obtenerResultados);
  
  //Resultado en la consola luego de 5 segundos:
  // El vaso está medio lleno!

function execCallback(callback) {
    // Tu código aquí 👈
    setTimeout(() => {
      callback()
    },2000)
  }
  
  const myFunc = () => console.log('Log after 2s')
  execCallback(myFunc);