// testo iniziale
const randomNumbers = [];
document.getElementById('text').innerHTML='Hai 30 secondi per memorizzare i seguenti numeri:';
document.querySelector('.box').innerHTML = `<span>${generateNumbers(5)}</span>`;

setTimeout(fineTimeout, 3000);   //cambiarlo in 30000


// funzione che gestisce eventi dopo 30 sec
function fineTimeout(){
  document.querySelector('.box').innerHTML = '';
  const numeriUtente = [];

  for(let i = 0; i < 5; i++ ){
    const numeroUtente = parseInt(prompt('Indovina i numeri'));
    numeriUtente.push(numeroUtente);
  }

  console.log(randomNumbers);
  console.log(numeriUtente);
}

// funzione che genera una stringa di cinque numeri diversi tra loro
function generateNumbers(n) { 
  
  while(randomNumbers.length < n){
    const number = getRndInteger(1, 99);
    if(!randomNumbers.includes(number)){
      randomNumbers.push(number);  
    };
  };
  
  const stringRandomNumbers = randomNumbers.join(', ');
  return stringRandomNumbers;
};

// funzione che genera numeri random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};