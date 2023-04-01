const compare = require('./compare/compare')
const obj1 = require("./compare/inputs/a.json")
const obj2 = require("./compare/inputs/b.json")

const res = compare.traverse([], obj1, obj2)
console.log(res)