const randomNumbers = [];
const text = document.getElementById('text');
const box = document.querySelector('.box');

// testo iniziale
text.innerHTML='Hai 30 secondi per memorizzare i seguenti numeri:';
box.innerHTML = `<span>${generateNumbers(5)}</span>`;

// timer
setTimeout(fineTimeout, 30000);  


// funzione che gestisce eventi dopo timer
function fineTimeout(){
  box.innerHTML = '';
  const numeriUtente = [];

  for(let i = 0; i < 5; i++ ){
    const numeroUtente = parseInt(prompt('Indovina i numeri'));
    numeriUtente.push(numeroUtente);
  };

  console.log('numeri da indovinare', randomNumbers);
  console.log('numeri inseriti', numeriUtente);

  const numeriIndovinati = numeriUtente.filter( numero => randomNumbers.includes(numero));

  console.log('numeri indovinati', numeriIndovinati);

  if(numeriIndovinati.length === 0){
    text.innerHTML=`Non hai indovinato nessun numero`;
  }else{
    text.innerHTML=`Hai indovinato ${numeriIndovinati.length} numeri e sono:`;
    box.innerHTML = `<span>${numeriIndovinati.join(', ')}</span>`;
  };
};

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