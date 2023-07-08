// Catch the date Element from DOM
const dateElm = document.querySelector('.date')

// Date Mathod for giving Dinamic Date into DOM
const fullDinamicDate = new Date()

//Dynamic Date
const DynamicDate = fullDinamicDate.getDate()

//Chek the number Single or Double and add a 0
let mainDate
const dateLenght = DynamicDate.toString().length
if(dateLenght < 2) {
   mainDate = DynamicDate.toString().padStart(2, '0')
}

// Giving Dynamic Data into DOM
dateElm.textContent = mainDate