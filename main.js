// Catch the date Element from DOM
const dateElm = document.querySelector('.date')

// Catch the month Element from DOM
const monthElm = document.querySelector('.month')




// Date Mathod for giving Dinamic Date into DOM
const fullDinamicDate = new Date()

//Dynamic Date
const DynamicDate = fullDinamicDate.getDate()

// Dynamic Month
let monthName
const dynamicMonth = fullDinamicDate.getMonth()
sayMonthName()

function sayMonthName() {
    if(dynamicMonth === 0) {
        monthName = "Jan"
    }

    if(dynamicMonth === 1) {
        monthName = "Feb"
    }

    if(dynamicMonth === 2) {
        monthName = "March"
    }

    if(dynamicMonth === 3) {
        monthName = "April"
    }

    if(dynamicMonth === 4) {
        monthName = "May"
    }

    if(dynamicMonth === 5) {
        monthName = "June"
    }

    if(dynamicMonth === 6) {
        monthName = "July"
    }

    if(dynamicMonth === 7) {
        monthName = "Aug"
    }

    if(dynamicMonth === 8) {
        monthName = "Sep"
    }

    if(dynamicMonth === 9) {
        monthName = "Oct"
    }

    if(dynamicMonth === 10) {
        monthName = "Nov"
    }

    if(dynamicMonth === 11) {
        monthName = "Dec"
    }
}



//Chek the Date number Single or Double and add a 0
let mainDate
const dateLenght = DynamicDate.toString().length
if(dateLenght < 2) {
   mainDate = DynamicDate.toString().padStart(2, '0')
}

// Giving Dynamic Data into DOM
dateElm.textContent = mainDate
monthElm.textContent = monthName
