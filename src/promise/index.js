const promise = new Promise(function(resolve, reject){
    resolve('hey')
});

const cows = 15;

const countCows = new Promise((resolve, reject)=>{
    if (cows >10){
        resolve(`we have ${cows} cows on the farm`)
    }else {
        reject('There is no cows on the farm')
    }
});

countCows.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('finally')
})

const myPromise = new Promise((resolve, reject) => {
    // Operación asíncrona (por ejemplo, una llamada a una API)
    let success = true;
  
    if (success) {
      resolve("Operación completada con éxito");
    } else {
      reject("Hubo un error en la operación");
    }
  });

  myPromise.then(
    (successMessage) => {
      console.log(successMessage); // "Operación completada con éxito"
    },
    (errorMessage) => {
      console.log(errorMessage); // En caso de error
    }
  ).catch((errorMessage) => {
    console.log(errorMessage);
  }).finally(() => {
    console.log("Operación terminada"); // Esto se ejecuta siempre
  });

  function delay(time, message) {
    // Tu código aquí 👈
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (resolve) {
          resolve(message)
        } else {
          reject('no rosolve')
        }
      }, time)
    })  
  }

delay(2000, "Hello after 2s").then((message) => console.log(message))