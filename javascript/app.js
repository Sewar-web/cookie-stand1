'use strict';
let total = 0;

function generateRandomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const Seattle = {
  name:'Seattle',
  MIN: 2,
  MAX: 16,
  AVG: 4.6,
  TIME: ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'],
  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.TIME.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.MIN, this.MAX));
      console.log(this.numberOfCustomers);
    }
  },
  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.TIME.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.AVG));
      total = total + this.salesArray[i];
    }
    const parent = document.getElementById('sales');
    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;
    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let d = 0; d < this.TIME.length; d++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.TIME[d]}: ${this.salesArray[d]} cookies.`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${total} cookies.`;
  }
};
Seattle.gitNum();
Seattle.gitCookiesEachHour();

////////////////////////////////////////////////////////////////////

const Tokyo = {
  name:'Tokyo',
  MIN: 2,
  MAX: 16,
  AVG: 4.6,
  TIME: ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'],
  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.TIME.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.MIN, this.MAX));
      console.log(this.numberOfCustomers);
    }
  },
  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.TIME.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.AVG));
      total = total + this.salesArray[i];
    }
    const parent = document.getElementById('sales');
    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;
    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let d = 0; d < this.TIME.length; d++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.TIME[d]}: ${this.salesArray[d]} cookies.`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${total} cookies.`;
  }
};

Tokyo.gitNum();
Tokyo.gitCookiesEachHour();

////////////////////////////////////////////////////////

const Dubai = {
  name:'Dubai',
  MIN: 2,
  MAX: 16,
  AVG: 4.6,
  TIME: ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'],
  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.TIME.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.MIN, this.MAX));
      console.log(this.numberOfCustomers);
    }
  },
  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.TIME.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.AVG));
      total = total + this.salesArray[i];
    }
    const parent = document.getElementById('sales');
    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;
    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let d = 0; d < this.TIME.length; d++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.TIME[d]}: ${this.salesArray[d]} cookies.`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${total} cookies.`;
  }
};
Dubai.gitNum();
Dubai.gitCookiesEachHour();

const Paris = {
  name:'Paris',
  MIN: 2,
  MAX: 16,
  AVG: 4.6,
  TIME: ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'],
  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.TIME.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.MIN, this.MAX));
      console.log(this.numberOfCustomers);
    }
  },
  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.TIME.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.AVG));
      total = total + this.salesArray[i];
    }
    const parent = document.getElementById('sales');
    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;
    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let d = 0; d < this.TIME.length; d++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.TIME[d]}: ${this.salesArray[d]} cookies.`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${total} cookies.`;
  }
};
Paris.gitNum();
Paris.gitCookiesEachHour();

///////////////////////////////////////////////////////////

const Lima = {
  name:'Lima',
  MIN: 2,
  MAX: 16,
  AVG: 4.6,
  TIME: ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'],
  numberOfCustomers: [],
  gitNum: function () {
    for (let j = 0; j < this.TIME.length; j++) {
      this.numberOfCustomers.push(generateRandomNumber(this.MIN, this.MAX));
      console.log(this.numberOfCustomers);
    }
  },
  salesArray: [],
  gitCookiesEachHour: function () {
    for (let i = 0; i < this.TIME.length; i++) {
      this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.AVG));
      total = total + this.salesArray[i];
    }
    const parent = document.getElementById('sales');
    const pElement = document.createElement('p');
    parent.appendChild(pElement);
    pElement.textContent = this.name;
    const ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let d = 0; d < this.TIME.length; d++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.TIME[d]}: ${this.salesArray[d]} cookies.`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${total} cookies.`;
  }
};
Lima.gitNum();
Lima.gitCookiesEachHour();
