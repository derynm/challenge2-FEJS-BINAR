let checkTypeNumber = (givenNumber) => {
    if ((typeof givenNumber==="number")) {
        if (givenNumber%2===0) {
            return "GENAP"
        }
        else if (givenNumber%2===1) {
            return "GANJIL"
        }
    }

    else if ((typeof givenNumber === "undefined")) {
        return "Eror: Bro where is the paramater?"
    }

    else {
        return "Eror: invalid data type"
    }

}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())
