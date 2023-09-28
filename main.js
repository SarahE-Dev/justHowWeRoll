/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

let sixesMean = document.querySelector('#d6-rolls-mean');
let sixesMedian = document.querySelector('#d6-rolls-median');
let sixesMode = document.querySelector('#d6-rolls-mode');

let doublesMean = document.querySelector('#double-d6-rolls-mean');
let doublesMedian = document.querySelector('#double-d6-rolls-median');
let doublesMode = document.querySelector('#double-d6-rolls-mode');

let twelveMean = document.querySelector('#d12-rolls-mean');
let twelveMedian = document.querySelector('#d12-rolls-median');
let twelvesMode = document.querySelector('#d12-rolls-mode');

let twentiesMean = document.querySelector('#d20-rolls-mean');
let twentiesMedian = document.querySelector('#d20-rolls-median');
let twentiesMode = document.querySelector('#d20-rolls-mode');

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(min, max) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

let sixImage = document.querySelector('#d6-roll');
let firstDoubleSixImage = document.querySelector('#double-d6-roll-1');
let secondDoubleSixImage = document.querySelector('#double-d6-roll-2');
let twelveImage = document.querySelector('#d12-roll');
let twentyImage = document.querySelector('#d20-roll');

/*******************
 * EVENT LISTENERS *
 *******************/

window.onload = resetEverything



sixImage.addEventListener('click', function(){
  let count = 0;
  let intervalID = setInterval(animFunc, 200)
  function animFunc(){
    let thisNum = getRandomNumber(1, 6);
    setImage(thisNum)
    count++
    if(count === 10){
      clearInterval(intervalID)
      sixes.push(thisNum)
      sixesMean.innerText = mean(sixes)
      sixesMedian.innerText = median(sixes)
      sixesMode.innerText = mode(sixes)
    }
  }
  function setImage(num){ 
    if(num === 1){
    sixImage.src = './images/d6/1.png';
    }
    if(num === 2){
    sixImage.src = './images/d6/2.png';
    }
    if(num === 3){
    sixImage.src = './images/d6/3.png';
    }
    if(num === 4){
    sixImage.src = './images/d6/4.png';
    }
    if(num === 5){
    sixImage.src = './images/d6/5.png';
    }
    if(num === 6){
    sixImage.src = './images/d6/6.png';
    }
  }
  
  

})
let doubles = document.querySelector('main');
doubles.addEventListener('click', function(){
  let count = 0;
  let intervalID = setInterval(animFunc, 200)
  function animFunc(){
    let thisNum = getRandomNumber(1, 6)
    let thisNum2 = getRandomNumber(1, 6)
    setImage(thisNum)
    setImage2(thisNum2)
    count++
    if(count === 10){
      clearInterval(intervalID)
      setImage(thisNum)
      setImage2(thisNum2)
      doubleSixes.push(thisNum);
      doubleSixes.push(thisNum2);
      doublesMean.innerText = mean(doubleSixes)
      doublesMedian.innerText = median(doubleSixes)
      doublesMode.innerText = mode(doubleSixes)
    }
  }
  function setImage(result1){
  if(result1 === 1){
    firstDoubleSixImage.src = './images/d6/1.png';
  }
  if(result1 === 2){
    firstDoubleSixImage.src = './images/d6/2.png';
  }
  if(result1 === 3){
    firstDoubleSixImage.src = './images/d6/3.png';
  }
  if(result1 === 4){
    firstDoubleSixImage.src = './images/d6/4.png';
  }
  if(result1 === 5){
    firstDoubleSixImage.src = './images/d6/5.png';
  }
  if(result1 === 6){
    secondDoubleSixImage.src = './images/d6/6.png';
  }
  }
  function setImage2(result2){
  if(result2 === 1){
    secondDoubleSixImage.src = './images/d6/1.png';
  }
  if(result2 === 2){
    secondDoubleSixImage.src = './images/d6/2.png';
  }
  if(result2 === 3){
    secondDoubleSixImage.src = './images/d6/3.png';
  }
  if(result2 === 4){
    secondDoubleSixImage.src = './images/d6/4.png';
  }
  if(result2 === 5){
    secondDoubleSixImage.src = './images/d6/5.png';
  }
  if(result2 === 6){
    secondDoubleSixImage.src = './images/d6/6.png';
  }
  }
})

twelveImage.addEventListener('click', function(){
  let count = 0;
  let intervalID = setInterval(animFunc, 200);
  function animFunc(){
    let number = getRandomNumber(1, 12);
    setImage(number)
    count++
    if(count === 10){
      clearInterval(intervalID);
      twelves.push(number);
      twelveMean.innerText = mean(twelves);
      twelveMedian.innerText = median(twelves)
      twelvesMode.innerText = mode(twelves);
    }
  }
  function setImage(result){
  if(result === 1){
    twelveImage.src = './images/numbers/1.png';
  }
  if(result === 2){
    twelveImage.src = './images/numbers/2.png';
  }
  if(result === 3){
    twelveImage.src = './images/numbers/3.png';
  }
  if(result === 4){
    twelveImage.src = './images/numbers/4.png';
  }
  if(result === 5){
    twelveImage.src = './images/numbers/5.png';
  }
  if(result === 6){
    twelveImage.src = './images/numbers/6.png';
  }
  if(result === 7){
    twelveImage.src = './images/numbers/7.png';
  }
  if(result === 8){
    twelveImage.src = './images/numbers/8.png';
  }
  if(result === 9){
    twelveImage.src = './images/numbers/9.png';
  }
  if(result === 10){
    twelveImage.src = './images/numbers/10.png';
  }
  if(result === 11){
    twelveImage.src = './images/numbers/11.png';
  }
  if(result === 12){
    twelveImage.src = './images/numbers/12.png';
  }
}
  
})

twentyImage.addEventListener('click', function(){
  let count = 0;
  let intervalID = setInterval(animFunc, 200)
  function animFunc(){
    let number = getRandomNumber(1, 20);
    setImage(number);
    count++
    if(count === 10){
      clearInterval(intervalID);
      twenties.push(number);
      twentiesMean.innerText = mean(twenties)
      twentiesMedian.innerText = median(twenties)
      twentiesMode.innerText = mode(twenties)
    }
  }
  function setImage(result){
  if(result === 1){
    twentyImage.src = './images/numbers/1.png';
  }
  if(result === 2){
    twentyImage.src = './images/numbers/2.png';
  }
  if(result === 3){
    twentyImage.src = './images/numbers/3.png';
  }
  if(result === 4){
    twentyImage.src = './images/numbers/4.png';
  }
  if(result === 5){
    twentyImage.src = './images/numbers/5.png';
  }
  if(result === 6){
    twentyImage.src = './images/numbers/6.png';
  }
  if(result === 7){
    twentyImage.src = './images/numbers/7.png';
  }
  if(result === 8){
    twentyImage.src = './images/numbers/8.png';
  }
  if(result === 9){
    twentyImage.src = './images/numbers/9.png';
  }
  if(result === 10){
    twentyImage.src = './images/numbers/10.png';
  }
  if(result === 11){
    twentyImage.src = './images/numbers/11.png';
  }
  if(result === 12){
    twentyImage.src = './images/numbers/12.png';
  }
  if(result === 13){
    twentyImage.src = './images/numbers/13.png';
  }
  if(result === 14){
    twentyImage.src = './images/numbers/14.png';
  }
  if(result === 15){
    twentyImage.src = './images/numbers/15.png';
  }
  if(result === 16){
    twentyImage.src = './images/numbers/16.png';
  }
  if(result === 17){
    twentyImage.src = './images/numbers/17.png';
  }
  if(result === 18){
    twentyImage.src = './images/numbers/18.png';
  }
  if(result === 19){
    twentyImage.src = './images/numbers/19.png';
  }
  if(result === 20){
    twentyImage.src = './images/numbers/20.png';
  }}
})

/******************
 * RESET FUNCTION *
 ******************/

let reset = document.querySelector('#reset-button')
function resetEverything(){
  naText = 'NA';
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;
  sixesMean.innerText = naText
  sixesMedian.innerText = naText
  sixesMode.innerText = naText
  doublesMean.innerText = naText
  doublesMedian.innerText = naText
  doublesMode.innerText = naText
  twelveMean.innerText = naText
  twelveMedian.innerText = naText
  twelvesMode.innerText = naText
  twentiesMean.innerText = naText
  twentiesMedian.innerText = naText
  twentiesMode.innerText = naText
  sixImage.src = './images/start/d6.png';
  firstDoubleSixImage.src = './images/start/d6.png';
  secondDoubleSixImage.src = './images/start/d6.png';
  twelveImage.src = './images/start/d12.jpeg';
  twentyImage.src = './images/start/d20.jpg';
}
reset.addEventListener('click', resetEverything)

/****************
 * MATH SECTION *
 ****************/

function mean(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

function median(arr){
  const { length } = arr;
  arr.sort((a, b) => a - b);
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  return arr[(length - 1) / 2];
}

function mode(arr){
  const mode = {};
  let max = 0, count = 0;
  for(let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
  return max;
}


