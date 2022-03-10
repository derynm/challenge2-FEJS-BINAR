// let nama = "dery nugroho marjuki"

// const test = nama.split(" ")

// console.log(test.length)

let getSplitName = (personName) => {
    if (typeof personName === "string") {
        const name = personName.split(" ")

        if (name.length == 3) {
            const checkName = {
                'firstName' : name[0],
                'middleName' : name[1],
                'lastName' : name[2]
            }
            return checkName
        }
        else if (name.length == 2) {
            const checkName = {
                'firstName' : name[0],
                'middleName' : null,
                'lastName' : name[1]
            }
            return checkName
        }
        else if (name.length == 1) {
            const checkName = {
                'firstName' : name[0],
                'middleName' : null,
                'lastName' : null
            }
            return checkName
        }
        else {
            const checkName = {
                'Error' : "This Function is only for 3 characters name",
            }
            return checkName
        }
    }
    else {
        console.log("parameter must string")
    }
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))