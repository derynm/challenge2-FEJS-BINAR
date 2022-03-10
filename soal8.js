const getInfoPenjualan = (array) => {
    let totalBeli = array.map((value) => (value.hargaBeli*value.totalTerjual)).reduce((previousValue, currentValue) => previousValue + currentValue)
    let totalJual = array.map((value) => (value.hargaJual*value.totalTerjual)).reduce((previousValue, currentValue) => previousValue + currentValue)
    let untung = totalJual-totalBeli
    let untungPersen = (totalBeli/totalJual) * 100

    // console.log(totalBeli)
    // console.log(totalJual)
    // console.log(untung)
    // console.log(untungPersen)

    const arrBukuTerlaris = array.map((value) => {
        return value.totalTerjual
    })
    // console.log(arrBukuTerlaris)

    let bukuTerlaris = Math.max(...arrBukuTerlaris) 
    // console.log(bukuTerlaris)

    let terlaris = array.find((value) => value.totalTerjual==bukuTerlaris)
    
    let infoPenjual = {
        'totalKeuntungan' : `Rp.${untung}`,
        'totalModal' : `Rp.${totalBeli}`,
        'persentaseKeuntungan' : `${untungPersen}%`,
        'produkTerlaris' : terlaris.namaProduk,
        'penulisTerlaris' : terlaris.penulis
    }

    console.log(infoPenjual)
}

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

getInfoPenjualan(dataPenjualanNovel)