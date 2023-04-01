

const _ = require("lodash")

const intersectingDiffPaths = []

function printLeaf(path) {
    intersectingDiffPaths.push(path)
}

function traverse(path, obj1, obj2) {
    let objArr1
    let objArr2
    let newPath

    // obj1 is array: capture index
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        objArr1 = obj1
        objArr2 = obj2

        for (let itr in objArr2) {
            newPath = [...path, parseInt(itr)]
            if (typeof objArr1[itr] === "object") {
                traverse(newPath, objArr1[itr], objArr2[itr])
            } else {
                if (objArr1[itr] !== objArr2[itr]) {
                    printLeaf([...newPath, objArr2[itr]])
                }
            }
        }
    }

    // obj1 is json: capture key
    else if ((typeof obj1 === "object") && (typeof obj2 === "object")) {
        objArr1 = Object.keys(obj1)
        objArr2 = Object.keys(obj2)

        for (let elem of objArr2) {
            newPath = [...path, elem]
            if (typeof obj1[elem] === "object") {
                traverse(newPath, obj1[elem], obj2[elem])
            } else {
                if (obj1[elem] !== obj2[elem]) {
                    printLeaf([...newPath, obj2[elem]])
                }
            }
        }
    }

    // obj1 is primitive: print leaf
    else {
        if (obj1 !== obj2) {
            printLeaf([...path, obj1])
        }
    }

    return intersectingDiffPaths
}

module.exports = {
    traverse: traverse
}

