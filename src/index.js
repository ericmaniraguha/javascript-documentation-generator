// @ts-check

const { caltotal } = require('./petcounter');

/**
 *
 * @file index.js is the homepage for this application
 * @Author Mr. Eric
 * @see <a href="http://erictch.com">Programming is life</a>
 */

/**
 * Pet Name
 * @type{string}
 */

const petName = 'Kaika';

/**
 *
 * number
 * @type{number}
 */

const number = 1000;

/**
 *
 * My Array
 * @type {Array<number>}
 *
 */
const myArray = [10, 45.12, 132, 100];
// const myArray=[10,45.12,132,100,'Hi',true]

/**
 * Pet object
 * @type{{id:number, name:string,age:number, address:string,gender:string}}
 */
const pet = {
  id: 1,
  name: 'DogO',
  age: 2,
  address: 'Kigali',
  gender: 'Male',
};

/**
 * person object
 * @type{{name:string, age:number,job:string,address:string,earn:number| string}}
 */

const person = {
  name: 'Carla',
  job: 'Developer',
  address: 'Kigali',
  age: 25,
  earn: '452',
};
/**
 * Calculate pet Age
 * @param {number} currentYear current year
 * @param {number} yearOfBorn  year of birth
 * @returns {string}
 */

const CalculateAge = (currentYear, yearOfBorn) => {
  return `${currentYear - yearOfBorn}`;
};

console.log(CalculateAge(2022, 2002));

///////////////////////////////////////

/**
 *
 * @typedef{Object} city
 * @property{number} id
 * @property{string} name
 * @property{number | string} population
 * @property{boolean } [isOverPopulation] numberOfPopulation{optional}
 */

const city = {
  id: 1,
  country: 'Rwanda',
  population: 1450000,
  // isOverPopulation: true,
};

/**
 * class to crreate  a new pet  owner
 *
 */
class Owner {
  /**
   * @param {object} ownerDetails
   */
  constructor(ownerDetails) {
    /**
     *
     * @property {string} name pet owner name
     */

    this.name = ownerDetails.name;
    /**
     *
     * @property {number} age pet owner age
     */
    this.age = ownerDetails.age;
  }
  /**
   *
   * @property {function} printOwner print out owner information
   * @returns {void}
   */
  printOwner() {
    console.log(`Owner's name is ${this.name} and her age is ${this.age}`);
  }
}

const ownerOne = new Owner({ name: 'Parker', age: 12 });
ownerOne.printOwner();

// call our petcount imported

console.log(caltotal(19, 5));
