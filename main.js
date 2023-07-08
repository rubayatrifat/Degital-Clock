// Catch the date Element from DOM
const dateElm = document.querySelector('.date')

// Catch the month Element from DOM
const monthElm = document.querySelector('.month')

// Catch the year Element from DOM
const yearElm = document.querySelector('.year')

// Catch the day Element from DOM
const dayElm = document.querySelector('.day')

// Catch the day Element from DOM
const hourElm = document.querySelector('.hour')



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

// Dynamic Year
const dynamicYear = fullDinamicDate.getFullYear()

// Dynamic Hour
const dynamicHour = fullDinamicDate.getHours()

// Dynamic Day
let dayName
const dynamicDay = fullDinamicDate.getDay()
sayDayName()

function sayDayName() {
    if(dynamicDay === 1) {
        dayName = "Monday"
    }

    if(dynamicDay === 2) {
        dayName = "Tuesday"
    }

    if(dynamicDay === 3) {
        dayName = "Wednesday"
    }

    if(dynamicDay === 4) {
        dayName = "Thursday"
    }

    if(dynamicDay === 5) {
        dayName = "Friday"
    }

    if(dynamicDay === 6) {
        dayName = "Saturday"
    }

    if(dynamicDay === 7) {
        dayName = "Sunday"
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
yearElm.textContent = dynamicYear
dayElm.textContent = dayName
hourElm.textContent = dynamicHour