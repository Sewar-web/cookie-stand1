'use strict';

function generateRandomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let Time =['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
function Salmon(name , MIN, MAX , AVG )
{
  this.name=name;
  this.MIN=MIN;
  this.MAX=MAX;
  this.AVG=AVG;
  this.numberOfCustomers=[];
  this.salesArray=[];
  this.total = 0;
}

Salmon.prototype.gitNum = function() {
  for (let j = 0; j < Time.length; j++) {
    this.numberOfCustomers.push(generateRandomNumber(this.MIN, this.MAX));
    console.log(this.numberOfCustomers);
  }
};
Salmon.prototype.gitCookiesEachHour= function () {
  for (let i = 0; i < Time.length; i++) {
    this.salesArray.push(Math.ceil(this.numberOfCustomers[i] * this.AVG));
    this.total = this.total + this.salesArray[i];
  }
};

Salmon.prototype.render=function()
{
  const table=document.getElementsByTagName('table')[0];
  const tr1Element = document.createElement('tr');
  table.appendChild(tr1Element);
  const td3Element = document.createElement('td');
  tr1Element.appendChild(td3Element);
  td3Element.textContent=this.name;
  for(let f=0; f<this.salesArray.length; f++)
  {
    const td1Element = document.createElement('td');
    tr1Element.appendChild(td1Element);
    td1Element.textContent=this.salesArray[f];
  }
  const td1Element = document.createElement('td');
  tr1Element.appendChild(td1Element);
  td1Element.textContent=this.total;
};

function createTebleHeader()
{
  const parent = document.getElementById('sales');
  const tableElement = document.createElement('table');
  parent.appendChild(tableElement);
  const tr1Element = document.createElement('tr');
  tableElement.appendChild(tr1Element);
  const th5Element = document.createElement('th');
  tr1Element.appendChild(th5Element);
  th5Element.textContent='   ';
  for(let k=0 ; k < Time.length ;k++)
  {
    const th1Element = document.createElement('th');
    tr1Element.appendChild(th1Element);
    th1Element.textContent = Time[k];
  }
  const th6Element = document.createElement('th');
  tr1Element.appendChild(th6Element);
  th6Element.textContent='Daily Location Total';
}
function createTableFooter(objects )
{
  const table=document.getElementsByTagName('table')[0];
  const tr1Element = document.createElement('tr');
  table.appendChild(tr1Element);
  let sum=0;
  const th4Element = document.createElement('th');
  tr1Element.appendChild(th4Element);
  th4Element.textContent='total';
  for(let k=0 ; k < Time.length ;k++)
  {
    const th1Element = document.createElement('th');
    tr1Element.appendChild(th1Element);
    let totalOfTotal=0;
    for(let t=0; t < objects.length ; t++)
    {
      totalOfTotal+=objects[t].salesArray[k];
    }
    th1Element.textContent=totalOfTotal;
  }
  for (let s = 0; s < objects.length; s++) {
    sum += objects[s].total;
  }

  const th2Element = document.createElement('th');
  tr1Element.appendChild(th2Element);
  th2Element.textContent=sum;

}

const Seattle = new Salmon('Seattle' , 23 , 65 , 6.3 );
const Tokyo = new Salmon('Tokyo' , 3 , 24 , 1.2 );
const Dubai = new Salmon('Dubai' , 11 , 38 , 7.3 );
const Paris = new Salmon('Paris' , 20 , 38 , 2.3 );
const Lima = new Salmon('Lima' , 2 , 16 , 4.6 );
let objects=[Seattle , Tokyo , Dubai , Paris , Lima ];
createTebleHeader();

const formElement = document.getElementById('addNewCountryForm');

formElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const countryName = event.target.country_name.value;
  const minCustomrs = event.target.min_customrs.value;
  const maxCustomrs = event.target.max_customrs.value;
  const avgCookies = event.target.avg_cookies.value;
  const newCity = new Salmon(countryName , minCustomrs , maxCustomrs , avgCookies);
  objects.push(newCity);
  formElement.reset();
  newCity.gitNum();
  newCity.gitCookiesEachHour();
  document.querySelector( 'table tr:last-child' ).remove();
  newCity.render();
  console.log(Salmon.objects);
  createTableFooter(objects);
});
Seattle.gitNum();
Seattle.gitCookiesEachHour();
console.log(Seattle);
Seattle.render();


Tokyo.gitNum();
Tokyo.gitCookiesEachHour();
console.log(Tokyo);
Tokyo.render();


Dubai.gitNum();
Dubai.gitCookiesEachHour();
console.log(Dubai);
Dubai.render();


Paris.gitNum();
Paris.gitCookiesEachHour();
console.log(Paris);
Paris.render();


Lima.gitNum();
Lima.gitCookiesEachHour();
console.log(Lima);
Lima.render();
createTableFooter(objects);
