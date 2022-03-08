let isValidPassword = (password) => {
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (password.match(regexPass)) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword("Meong2021"))
console.log(isValidPassword("meong2021"))
console.log(isValidPassword("@eong"))
console.log(isValidPassword("Meong2"))
console.log(isValidPassword(0))
console.log(isValidPassword())