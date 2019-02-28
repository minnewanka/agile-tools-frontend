const parse = require('parse')
jest.genMockFromModule('parse')
export default parse

function save() {
  return jest.fn((id) => (new Promise((resolve, reject) => { resolve("Object created") })))
}

function initialize(string) {
  console.log('initialize Mock',string)
}


