'use strict';
let locationSection = document.getElementById('city-location');

let dailyHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

console.dir(locationSection);

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  customerNumber: [],
  cookieTotals: [],
  total: 0,
  getRandomSales: function () {
    for (let i = 0; i < dailyHours.length; i++) {      
      let hourCustomers = randomSales(this.minCust, this.maxCust);
      this.customerNumber.push(hourCustomers);
    }
  },
  generateCookies: function () {
    for (let i = 0; i < this.customerNumber.length; i++) {      
      let cookieTotal = this.customerNumber[i] * this.avgSales;
      let roundedCookieTotal = Math.round(cookieTotal);
      this.cookieTotals.push(roundedCookieTotal);
      this.total += roundedCookieTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  },
};

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  customerNumber: [],
  cookieTotals: [],
  total: 0,
  getRandomSales: function () {
    for (let i = 0; i < dailyHours.length; i++) {      
      let hourCustomers = randomSales(this.minCust, this.maxCust);
      this.customerNumber.push(hourCustomers);
    }
  },
  generateCookies: function () {
    for (let i = 0; i < this.customerNumber.length; i++) {      
      let cookieTotal = this.customerNumber[i] * this.avgSales;
      let roundedCookieTotal = Math.round(cookieTotal);
      this.cookieTotals.push(roundedCookieTotal);
      this.total += roundedCookieTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);    
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);    
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);    
    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  },
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  customerNumber: [],
  cookieTotals: [],
  total: 0,
  getRandomSales: function () {
    for (let i = 0; i < dailyHours.length; i++) {      
      let hourCustomers = randomSales(this.minCust, this.maxCust);
      this.customerNumber.push(hourCustomers);
    }
  },
  generateCookies: function () {
    for (let i = 0; i < this.customerNumber.length; i++) {      
      let cookieTotal = this.customerNumber[i] * this.avgSales;
      let roundedCookieTotal = Math.round(cookieTotal);
      this.cookieTotals.push(roundedCookieTotal);
      this.total += roundedCookieTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);    
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);    
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);    
    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  },
};let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  customerNumber: [],
  cookieTotals: [],
  total: 0,
  getRandomSales: function () {
    for (let i = 0; i < dailyHours.length; i++) {      
      let hourCustomers = randomSales(this.minCust, this.maxCust);
      this.customerNumber.push(hourCustomers);
    }
  },
  generateCookies: function () {
    for (let i = 0; i < this.customerNumber.length; i++) {      
      let cookieTotal = this.customerNumber[i] * this.avgSales;
      let roundedCookieTotal = Math.round(cookieTotal);
      this.cookieTotals.push(roundedCookieTotal);
      this.total += roundedCookieTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  },
};let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  customerNumber: [],
  cookieTotals: [],
  total: 0,
  getRandomSales: function () {
    for (let i = 0; i < dailyHours.length; i++) {      
      let hourCustomers = randomSales(this.minCust, this.maxCust);
      this.customerNumber.push(hourCustomers);
    }
  },
  generateCookies: function () {
    for (let i = 0; i < this.customerNumber.length; i++) {      
      let cookieTotal = this.customerNumber[i] * this.avgSales;
      let roundedCookieTotal = Math.round(cookieTotal);
      this.cookieTotals.push(roundedCookieTotal);
      this.total += roundedCookieTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);    
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);    
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);    
    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  },
};

seattle.getRandomSales();
seattle.generateCookies();
seattle.render();tokyo.getRandomSales();
tokyo.generateCookies();
tokyo.render();dubai.getRandomSales();
dubai.generateCookies();
dubai.render();paris.getRandomSales();
paris.generateCookies();
paris.render();lima.getRandomSales();
lima.generateCookies();
lima.render();// grabbed from MDN


function randomSales(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}











