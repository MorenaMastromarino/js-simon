// testo iniziale
document.getElementById('text').innerHTML='Hai 30 secondi per memorizzare i seguenti numeri:'
document.querySelector('.box').innerHTML = generateNumbers(5);





// funzione che genera una stringa di cinque numeri diversi tra loro
function generateNumbers(n) {
  const randomNumbers = [];
  
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