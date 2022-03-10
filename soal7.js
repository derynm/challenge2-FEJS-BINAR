const getTotalPenjualan = (array) => {
    total = array.map((value) => (value.totalTerjual)).reduce((previousValue, currentValue) => previousValue + currentValue);
    console.log(total)
}

const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : 'Sepatu Sport',
        totalTerjual : 90
    },
    {
        namaProduct : 'Sepatu Warior Tristan Black Brown High',
        hargaSatuan : 960000,
        kategori : 'Sepatu Sneaker',
        totalTerjual : 37
    },
    {
        namaProduct : 'Sepatu Warior Tristan Maroon High',
        hargaSatuan : 360000,
        kategori : 'Sepatu Sneaker',
        totalTerjual : 90
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan : 120000,
        kategori : 'Sepatu Sneaker',
        totalTerjual : 90
    }
]

getTotalPenjualan(dataPenjualanPakAldi)