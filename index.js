const compare = require('./compare')
const obj1 = require("./inputs/a.json")
const obj2 = require("./inputs/b.json")



const res = compare.traverse([], obj1, obj2)
console.log(res)