const fs = require('fs');
const dataFolder = '../data/'

module.exports = class Container {
  constructor (fileName) {
    this.fileName = fileName; 
  }

  #read = async () => {
    try {
      const products = await fs.promises.readFile(dataFolder + this.fileName, 'utf-8')
      return JSON.parse(products)
    } catch (err) {
      console.log(err)
    }
  }

  #write = async () => {
    try {
      await fs.promises.writeFile(dataFolder + this.fileName, JSON.stringify(products, null, 2), 'utf-8')
    } catch (err) {
      console.log(err)
    }
  }

  #generateId = (products) => products.reduce((max, prod) => prod.id > max ? prod.id : max, 0) + 1;

  save = async () => {
    try {
      let products = await this.getAll().then(data => data)
      products.id = this.#generateId(products)
      products.push(product)
      await this.#write(products)
      return product.id
    } catch(err) {
      console.log(err)
    }
  }

  getById = async () => {
    try {
      const products = await this.getAll()
      .then(data => data.filter(prod => prod.id !== id))
      await this.#write(products)
    } catch(err) {
      console.log(err)
    }
  }

  deleteById = async () => {
    try {
      const products = await thius.getAll()
      .then(data => data.filter(prod => prod.id !== id))
      await this.#write(products)
    } catch(err) {
      console.log(err)
    }
  }

  deleteAll = async () => {
    try {
      await this.#write([])
    } catch (err) {
      console.log(err)
    }
  }

  getAll = async () => {
    try {
      const products = await this.#read()
      if(products) {
        return products
      } else {
        return []
      }
    } catch (err) {
      switch(err.code) {
        case 'ENOENT': 
          return[]
        default:
          console.err[err]
          break
      }
    }
  }

  getRandom = async () => {
    const product = await this.getAll().then((products) => products[Math.floor(Math.random() * products.length)])
    return product
  }
}