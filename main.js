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

// Set months array
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


// Set months
const dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

for(i=0; i < dayArray.length; i++) {
    if(i === dynamicDay) {
        dayName = dayArray[i - 1]
    }
}



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


  // is the time am or pm

  const amPmDom = document.querySelector('.am-or-pm')

  const localHourAmPm = fullDinamicDate.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
   });
   
   let amOrPm
   
   if(localHourAmPm.length > 4) {
      amOrPm = localHourAmPm.slice(3, 5) 
   } else {
      amOrPm = localHourAmPm.slice(2, 4)
   }


   // Dynamic Hour

   const localHour = localHourAmPm.slice(0, 2).padStart(3, '0')



// Giving Dynamic Data into DOM
dateElm.textContent = mainDate
monthElm.textContent = monthName
yearElm.textContent = dynamicYear
dayElm.textContent = dayName
hourElm.textContent = localHour
minutesElm.textContent = mainMinutes
amPmDom.textContent = amOrPm




const d = new Date();

