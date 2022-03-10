let getAngkaTerbesarKedua = (dataAngka) => {
    if (Array.isArray(dataAngka)) {
        dataAngka.sort((a,b) => b-a)
        console.log(dataAngka[1])
    }
    else {
        console.log("eror")
    }

}

const dataAngka = [9,4,7,7,4,3,2,2,8]

getAngkaTerbesarKedua(dataAngka)
