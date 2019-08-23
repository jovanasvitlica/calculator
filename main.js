let btns = document.querySelectorAll('.js-btn');
let result = document.getElementById('equal');
let display = document.getElementById('display');
let clear = document.getElementById('clear');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", getValue);
}

result.addEventListener('click', performOperation);
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
  display.innerHTML = '';
}

function getValue(e) {
  let char = e.target.innerHTML;

  if (display.innerHTML == "") {
    // testira uslov: ako je char broj(!isNaN) ili znak minus -
    if (!isNaN(char) || char == '-') {
      display.innerHTML += char;
    } else {
      alert('Prvi karakter ne moze da bude znak');
    }
  } else { // ako je nesto uneto
    let currInt = display.innerHTML;
    let lastChar = currInt[currInt.length - 1];
    // testira to sto je uneto : ako char nije broj i ako poslednji char nije broj odnosno ako su dva simbola jedan pored drugog
    if (isNaN(char) && isNaN(lastChar)) {
      currInt = currInt.substring(0, currInt.length - 1);
      display.innerHTML = currInt + char;

    } else {
      display.innerHTML += char;
    }
  }

}


function performOperation() {
  // ako je unet broj pa posle simbol
  let currInt = display.innerHTML;
  let lastChar = currInt[currInt.length - 1];
  let patt = /\/0(?:[^0-9\.])/;
  let result = patt.test(currInt);
console.log(lastChar);
console.log(currInt[currInt.length-2]);

//ako je lastChar broj izbaci broj u display-u
  if (isNaN(lastChar)) {
   
    display.innerHTML = eval(currInt.substring(0, currInt.length - 1));

//ako delimo sa 0
  } else if(result || (lastChar == '0' && currInt[currInt.length-2] == '/')){

    alert('Deljenje sa 0 nije moguce');
    clearDisplay();

   }
  else {
    display.innerHTML = eval(display.innerHTML);

  }

}






