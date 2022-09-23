'use strict';

let myForm = document.getElementById('storeForm');

let locationSection = document.getElementById('city-location');

let storeArr = [];


let dailyHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


function CookieStore(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customerNumber = [];
  this.cookieTotals = [];
  this.total = 0;

  storeArr.push(this);
}

CookieStore.prototype.getSales = function () {
  for (let i = 0; i < dailyHours.length; i++) {

    let hourCustomers = randomSales(this.minCust, this.maxCust);
    this.customerNumber.push(hourCustomers);
  }

  for (let i = 0; i < this.customerNumber.length; i++) {

    let cookieTotal = this.customerNumber[i] * this.avgSales;
    let roundedCookieTotal = Math.round(cookieTotal);
    this.cookieTotals.push(roundedCookieTotal);
    this.total += roundedCookieTotal;

  }
};

CookieStore.prototype.render = function () {
  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let location = document.createElement('td');
  location.textContent = this.name;
  row2.appendChild(location);

  for (let i = 0; i < dailyHours.length; i++) {
    let storeElem = document.createElement('td');
    storeElem.textContent = `${this.cookieTotals[i]}`;
    row2.appendChild(storeElem);
  }

  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.total;
  row2.appendChild(dailyTotal);
};

  let articleElem = document.createElement('article');
  locationSection.appendChild(articleElem);

  let tableElem = document.createElement('Table');
  articleElem.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let emptySpace = document.createElement('td');
  emptySpace.textContent = ('');
  row1.appendChild(emptySpace);

  for (let i = 0; i < dailyHours.length; i++) {
    let hourElem = document.createElement('th');
    hourElem.textContent = `${dailyHours[i]}`;
    row1.appendChild(hourElem);
  }
  
  let wordTotal = document.createElement('th');
  wordTotal.textContent = ('Daily Location Total');
  row1.appendChild(wordTotal);

  // let tfoot 
  // let row3 = document.createElement('tfoot');
  // tableElem.appendChild(row3);

  // let wordHTotal = document.createElement('th');
  // wordHTotal.textContent = ('Hourly Location Totals');
  // row3.appendChild(wordHTotal);

  

// (name, minCust, maxCust, avgSales)
new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

function renderAll() {
  for (let i = 0; i < storeArr.length; i++) {
    storeArr[i].getSales();
    storeArr[i].render();
  }
}

renderAll();

console.log(storeArr);

// grabbed from MDN
function randomSales(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeTotalsRow() {

  let tableFoot = document.createElement('tfoot');
  document.querySelector('table').appendChild(tableFoot);
  let row3 = document.createElement('tr');
  let tableFooter = document.createElement('th');
  tableFoot.textContent = ('Hourly Location Totals');
  row3.appendChild(tableFooter);

  let grandtotalDay = 0;
  for (let i = 0; i <dailyHours.length; i++) {
  let hourlyTotal = 0;
  for (let j = 0; j < storeArr.length; j++){
    hourlyTotal += storeArr [j].cookieTotals[i];
    console.log(storeArr[j].cookieTotals[i]);
  }

  let hTotal = document.createElement('td');
  hTotal.innerText = hourlyTotal;
  row3.appendChild(hTotal);

  console.log(hTotal);
  console.log(hourlyTotal);

}

  let tableFoo = document.createElement ('td');
  tableFoo.innerText = grandtotalDay;
  row3.appendChild(tableFoo);
  tableFoot.appendChild(row3);
  console.log(grandtotalDay);
}

// Define Callback
function handleSubmit(event){

//Stop Default Behavior
  event.preventDefault();

//Gathering Info 
  let name = storeForm.name.value;
  let minCust = parseInt(storeForm.minCust.value);
  let maxCust =  parseInt(storeForm.maxCust.value);
  let avgSales =  parseInt(storeForm.avgSales.value);


//Object Constructor
  let newLocation = new CookieStore(name, minCust, maxCust, avgSales);


//Render Location
  newLocation.getSales();
  newLocation.render();
  makeTotalsRow();


//Form Reset
  myForm.reset();

}

document.querySelector('table').deleteTFoot();


// renderFooter();

// function renderFooter() {
//   let headerrow = document.createElement('tr');
//   tableBody.appendChild(headerrow);
//   var tdElement = document.createElement('td');

//   tdElement.textContent = 'Daily Total';
//   headerrow.appendChild(tdElement);

//   var runningTotal;

//   for (var i = 0; i < hours.length; i++) {
//     var tdElement = document.createElement('td');
//     var total = 0;
//     for (var j = 0; j < city.length; j++) {
//       total += city[i].custPerHourArray[j];
//       runningTotal += city[i].custPerHourArray[j];
//     }
//     tdElement.textContent = total;
//     headerrow.appendChild(tdElement);

//   }

// Attach Event Listener

myForm.addEventListener('submit', handleSubmit);

