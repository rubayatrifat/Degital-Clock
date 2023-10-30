// Catch the date Element from DOM
const dateElm = document.querySelector('.date')

// Catch the month Element from DOM        
const monthElm = document.querySelector('.month')

// Catch the year Element from DOM
const yearElm = document.querySelector('.year')

// Catch the day Element from DOM
const dayElm = document.querySelector('.day')

// Catch the Hour Element from DOM
const hourElm = document.querySelector('.hour')

// Catch the Minutes Element from DOM
const minutesElm = document.querySelector('.minutes')

// Catch the Scounds Element from DOM
const scoundElm = document.querySelector('.scounds')



// Date Mathod for giving Dinamic Date into DOM
const fullDinamicDate = new Date()

//Dynamic Date
const dynamicDate = fullDinamicDate.getDate()

//Chek the Date number Single or Double and add a 0
let mainDate
const dateLenght = dynamicDate.toString().length
if(dateLenght <= 2) {
   mainDate = dynamicDate.toString().padStart(2, '0')
}

// Dynamic Month
let monthName
const dynamicMonth = fullDinamicDate.getMonth()

// Set months
const monthArray = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

// Set Month Name
for(i=0; i < monthArray.length; i++) {
    if(i === dynamicMonth) {
        monthName = monthArray[i]
    }
}


// Dynamic Year
const dynamicYear = fullDinamicDate.getFullYear()


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

// Dynamic Hour
const dynamicHour = fullDinamicDate.getHours()

// Dynamic Minutes 
let mainMinutes;
const dynamicMinutes = fullDinamicDate.getMinutes();
const dynamicScound = fullDinamicDate.getSeconds();
const minuteLength = dynamicMinutes.toString().length;

if (minuteLength <= 2) {
  mainMinutes = dynamicMinutes.toString().padStart(2, '0');
}

// Increase the scound
function incrementScound() {
    const scoundElm = document.querySelector('.scounds');
    const minuteElm = document.querySelector('.minutes');
  
    let currentScound = parseInt(scoundElm.textContent);
    let currentMinutes = parseInt(minuteElm.textContent);
  
    currentScound = (currentScound + 1) % 60;
  
    if (currentScound === 0) {
      currentMinutes++;
      minuteElm.textContent = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
    }
  
    scoundElm.textContent = currentScound < 10 ? '0' + currentScound : currentScound;
}
  
function startCounter() {
    const scoundElm = document.querySelector('.scounds');
    const minuteElm = document.querySelector('.minutes');
    scoundElm.textContent = dynamicScound < 10 ? '0' + dynamicScound : dynamicScound;
    minuteElm.textContent = mainMinutes;
  
    setInterval(incrementScound, 997);
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    startCounter();
  });


// Giving Dynamic Data into DOM
dateElm.textContent = mainDate
monthElm.textContent = monthName
yearElm.textContent = dynamicYear
dayElm.textContent = dayName
hourElm.textContent = dynamicHour
minutesElm.textContent = mainMinutes

