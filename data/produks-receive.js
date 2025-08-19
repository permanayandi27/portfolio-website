class ProdukReceive {

  id;
  nama;
  gambar;
  kategori;
  saldo;
  rate;

  constructor(produkDetails){
    this.id = produkDetails.id;
    this.nama = produkDetails.nama;
    this.gambar = produkDetails.gambar;
    this.kategori = produkDetails.kategori;
    this.saldo = produkDetails.saldo;
    this.rate = produkDetails.rate;
  }

chooseRateNama(){
  return '';
}

usdSaldo(){
  let produkSaldo = this.saldo;

  const kategoriProduk = this.kategori;

  kategoriProduk.forEach((kategori)=>{
    if(kategori === 'USD'){
      produkSaldo = `$${this.saldo}`;
    }
  })
  return produkSaldo
}
  
}

class ObjekRate extends ProdukReceive {
 rate;
  dataRate;

  

  constructor(produkDetails){
    super(produkDetails);
    this.dataRate = produkDetails.rate; 
    this.rate = `<div class="lihat-container"><button class="button-rate js-button-rate js-button-rate-${produkDetails.id}" data-produk-id="${produkDetails.id}">Lihat</button>
    <span class="display-rate js-display-rate-${produkDetails.id}"></span></div>`
  }

displayRate(){
  let htmlRate = '';
  this.dataRate.forEach((rate)=>{
    htmlRate += `
      <div>${rate.nama} : ${rate.harga} IDR</div>
      
    `;
  })
  return htmlRate;
}



chooseRateNama(){
  let htmlRateNama = '';

  this.dataRate.forEach((rate)=>{
    htmlRateNama += `
    <button class="btn-nama-rate js-btn-nama-rate" data-produk-harga="${rate.harga}" data-produk-nominal="${rate.nominal}">${rate.nama}</button>
    `;
  });

  return htmlRateNama
}

rateValue(valueSend){
  const hargaTerdekats = [];
  
  let hargaTerdekat;
  this.dataRate.forEach((rate, index)=>{
  
    if(Number(valueSend()) < this.dataRate[index-index+0].harga){
      hargaTerdekats.push(this.dataRate[index-index+0])
    }else if(rate.harga < Number(valueSend())){
      hargaTerdekats.push(rate)
    }else if(rate.harga === Number(valueSend())){
      hargaTerdekats.push(rate)
    }
  
    
  })

  hargaTerdekats.forEach((harga)=>{
    hargaTerdekat = harga;
  })
 

  return hargaTerdekat
}

rateValueReceive(valueSend){
  const hargaTerdekats = [];
  
  let hargaTerdekat;
  this.dataRate.forEach((rate, index)=>{
  
    if(Number(valueSend()) < this.dataRate[index-index+0].nominal){
      hargaTerdekats.push(this.dataRate[index-index+0])
    }else if(rate.nominal < Number(valueSend())){
      hargaTerdekats.push(rate)
    }else if(rate.nominal === Number(valueSend())){
      hargaTerdekats.push(rate)
    }
  
    
  })

  hargaTerdekats.forEach((harga)=>{
    hargaTerdekat = harga;
  })
 
console.log(hargaTerdekat)
  return hargaTerdekat
}
 


}



export const produksReceive = [{
  id: "1",
  nama: "BANK BCA IDR",
  gambar: "currency-image/bca.jpg",
  kategori: ["BANK", "IDR"],
  saldo: 10000000,
  rate: 1
},{
  id: "2",
  nama: "BANK BNI IDR",
  gambar: "currency-image/icon-bni.png",
  kategori: ["BANK", "IDR"],
  saldo: 10500000,
  rate: 1
},{
  id: "3",
  nama: "BANK BRI IDR",
  gambar: "currency-image/BRI.png",
  kategori: ["BANK", "IDR"],
  saldo: 11000000,
  rate: 1
},{
  id: "4",
  nama: "BANK MANDIRI IDR",
  gambar: "currency-image/mandiri.png",
  kategori: ["BANK", "IDR"],
  saldo: 10100000,
  rate: 1
},{
  id: "5",
  nama: "BANK SYARIAH INDONESIA IDR",
  gambar: "currency-image/BSI.jpg",
  kategori: ["BANK", "IDR"],
  saldo: 50000000,
  rate: 1
},{
  id: "6",
  nama: "BANK PERMATA IDR",
  gambar: "currency-image/PERMATA.png",
  kategori: ["BANK", "IDR"],
  saldo: 5000000,
  rate: 1
},{
  id: "7",
  nama: "BANK CIMB NIAGA IDR",
  gambar: "currency-image/CIMB-Niaga.png",
  kategori: ["BANK", "IDR"],
  saldo: 35005000,
  rate: 1
},{
  id: "8",
  nama: "BANK LAINNYA IDR",
  gambar: "currency-image/bank-building-1.png",
  kategori: ["BANK", "IDR"],
  saldo: 102000000,
  rate: 1
},{
  id: "10",
  nama: "BTPN / JENIUS IDR",
  gambar: "currency-image/jenius2.png",
  kategori: ["BANK", "IDR"],
  saldo: 10000000,
  rate: 1
},{
  id: "11",
  nama: "PERFECTMONEY USD",
  gambar: "currency-image/Perfect-Money.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  saldo: 2654,
  rate: 17500
},{
  id: "12",
  nama: "ADVCASH USD",
  gambar: "currency-image/Advcash.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  saldo: 1584,
  rate: 17000
},{
  id: "13",
  nama: "PAYEER USD",
  gambar: "currency-image/Payeer.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  saldo: 567,
  rate: 18000
},{
  id: "14",
  nama: "DANA IDR",
  gambar: "currency-image/DANA.png",
  kategori: ["DOMPETDIGITAL", "IDR"],
  saldo: 7000000,
  rate: 1
},{
  id: "15",
  nama: "LINK AJA IDR",
  gambar: "currency-image/link-aja.png",
  kategori: ["DOMPETDIGITAL", "IDR"],
  saldo: 10000000,
  rate: 1
},{
  id: "16",
  nama: "GOPAY IDR",
  gambar: "currency-image/gopay.jpg",
  kategori: ["DOMPETDIGITAL", "IDR"],
  saldo: 50000000,
  rate: 1
},{
  id: "17",
  nama: "OVO IDR",
  gambar: "currency-image/ovo.jpg",
  kategori: ["DOMPETDIGITAL", "IDR"],
  saldo: 16000000,
  rate: 1
},{
  id: "18",
  nama: "IDK INDODAX IDK",
  gambar: "currency-image/IDK.png",
  kategori: ["CRYPTO", "IDR"],
  saldo: 10000000000,
  rate: 1
},{
  id: "19",
  nama: "BINANCE IDR BIDR",
  gambar: "currency-image/BIDR.png",
  kategori: ["CRYPTO", "IDR"],
  saldo: 20000000,
  rate: 1
},{
  id: "20",
  nama: "BITCOIN BTC",
  gambar: "currency-image/Bitcoin.png",
  kategori: ["CRYPTO"],
  saldo: 100,
  rate: 205000000
},{
  id: "21",
  nama: "ETHEREUM ETH",
  gambar: "currency-image/ether.png",
  kategori: ["CRYPTO"],
  saldo: 1000,
  rate: 51000000
},{
  id: "22",
  nama: "BINANCE USD BUSD",
  gambar: "currency-image/BUSD.png",
  kategori: ["CRYPTO", "USD"],
  saldo: 3000,
  rate: 17200
},{
  id: "23",
  nama: "USDT TRC20 USD",
  gambar: "currency-image/USDTTRC.jpg",
  kategori: ["CRYPTO", "USD"],
  saldo: 10000,
  rate: 17800
},{
  id: "24",
  nama: "USDT BEP20 USD",
  gambar: "currency-image/USDTBEP20.jpg",
  kategori: ["CRYPTO", "USD"],
  saldo: 1000,
  rate: 17000
},{
  id: "25",
  nama: "USDC ERC20 USDC",
  gambar: "currency-image/USDC.png",
  kategori: ["CRYPTO"],
  saldo: 2000,
  rate: 17200
},{
  id: "26",
  nama: "TRANSFER TELKOMSEL IDR",
  gambar: "currency-image/telkomsel-1-e1564823588573.png",
  kategori: ["PULSA", "IDR"],
  saldo: 10000000,
  rate: 1.05
},{
  id: "27",
  nama: "TRANSFER XL AXIS IDR",
  gambar: "currency-image/xl-e1564823618632.png",
  kategori: ["PULSA", "IDR"],
  saldo: 10000000,
  rate: 1.10
},{
  id: "28",
  nama: "TRANSFER INDOSAT IDR",
  gambar: "currency-image/indosat-e1564823639933.jpg",
  kategori: ["PULSA", "IDR"],
  saldo: 10000000,
  rate: 1.05
},{
  id: "29",
  nama: "FASAPAY USD",
  gambar: "currency-image/fasapay.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  saldo: 200,
  rate: 17000
},{
  id: "30",
  nama: "EXMO CODE USD",
  gambar: "currency-image/exmo-code-e1564810178299.png",
  kategori: ["USD"],
  saldo: 1000,
  rate: 16900
},{
  id: "31",
  nama: "EPAY USD",
  gambar: "currency-image/epay-e1564810561666.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  saldo: 150,
  rate: 16800
},{
  id: "32",
  nama: "PULSA REGULER (ID) IDR",
  gambar: "currency-image/Phone-Prepaid.png",
  kategori: ["PULSA", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '5k',
    nominal: 5000,
    harga: 7000
  },{
    nama: '10k',
    nominal: 10000,
    harga: 11500
  },{
    nama: '15k',
    nominal: 15000,
    harga: 16000
  },{
    nama: '25k',
    nominal: 25000,
    harga: 25500
  },{
    nama: '50k',
    nominal: 50000,
    harga: 51000
  },{
    nama: '100k',
    nominal: 100000,
    harga: 101000
  }]
},{
  id: "33",
  nama: "PLN TOKEN LISTRIK IDR",
  gambar: "currency-image/PLN-PREPAID.png",
  kategori: ["PULSA", "IDR"],
  saldo: 10000000,
  rate: 110
},{
  id: "34",
  nama: "INTERNET TELKOMSEL IDR",
  gambar: "currency-image/telkomsel-1-e1564823588573.png",
  kategori: ["KUOTA", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '3GB',
    nominal: 3,
    harga: 25000
  },{
    nama: '5GB',
    nominal: 5,
    harga: 35000
  },{
    nama: '10GB',
    nominal: 10,
    harga: 50000
  }]
},{
  id: "35",
  nama: "INTERNET XL IDR",
  gambar: "currency-image/xl-e1564823618632.png",
  kategori: ["KUOTA", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '3GB',
    nominal: 3,
    harga: 24000
  },{
    nama: '5GB',
    nominal: 5,
    harga: 34000
  },{
    nama: '10GB',
    nominal: 10,
    harga: 45000
  }]
},{
  id: "36",
  nama: "INTERNET AXIS IDR",
  gambar: "currency-image/Axis.png",
  kategori: ["KUOTA", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '3GB',
    nominal: 3,
    harga: 27000
  },{
    nama: '5GB',
    nominal: 5,
    harga: 34000
  },{
    nama: '10GB',
    nominal: 10,
    harga: 53000
  }]
},{
  id: "37",
  nama: "INTERNET INDOSAT IDR",
  gambar: "currency-image/indosat-e1564823639933.jpg",
  kategori: ["KUOTA", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '3GB',
    nominal: 3,
    harga: 23000
  },{
    nama: '5GB',
    nominal: 5,
    harga: 32000
  },{
    nama: '10GB',
    nominal: 10,
    harga: 47000
  }]
},{
  id: "38",
  nama: "INTERNET SMARTFREEN IDR",
  gambar: "currency-image/SMARTFREEN.jpg",
  kategori: ["KUOTA", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '3GB',
    nominal: 3,
    harga: 20000
  },{
    nama: '5GB',
    nominal: 5,
    harga: 31000
  },{
    nama: '10GB',
    nominal: 10,
    harga: 43000
  }]
},{
  id: "39",
  nama: "INTERNET TRI (3) IDR",
  gambar: "currency-image/TRI.jpg",
  kategori: ["KUOTA", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '3GB',
    nominal: 3,
    harga: 25000
  },{
    nama: '5GB',
    nominal: 5,
    harga: 35000
  },{
    nama: '10GB',
    nominal: 10,
    harga: 50000
  }]
},{
  id: "40",
  nama: "VOUCHER GOOGLE PLAY IDR",
  gambar: "currency-image/google-play-e1584775194161.jpeg",
  kategori: ["GAME", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '10K',
    nominal: 10000,
    harga: 12000
  },{
    nama: '20K',
    nominal: 20000,
    harga: 21000
  },{
    nama: '50K',
    nominal: 50000,
    harga: 49000
  },{
    nama: '100K',
    nominal: 100000,
    harga: 97000
  }]
},{
  id: "41",
  nama: "VOUCHER GARENA IDR",
  gambar: "currency-image/garena.png",
  kategori: ["GAME", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '10K',
    nominal: 10000,
    harga: 12000
  },{
    nama: '20K',
    nominal: 20000,
    harga: 23000
  },{
    nama: '50K',
    nominal: 50000,
    harga: 52000
  },{
    nama: '100K',
    nominal: 100000,
    harga: 102000
  }]
},{
  id: "42",
  nama: "VOUCHER STEAM IDR",
  gambar: "currency-image/steam-logo.jpg",
  kategori: ["GAME", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: '100K',
    nominal: 100000,
    harga: 110000
  },{
    nama: '250K',
    nominal: 250000,
    harga: 270000
  },{
    nama: '500K',
    nominal: 500000,
    harga: 510000
  },{
    nama: '1000K',
    nominal: 1000000,
    harga: 1015000
  }]
},{
  id: "43",
  nama: "TOPUP MOBILE LEGENDS IDR",
  gambar: "currency-image/ML-Logo.png",
  kategori: ["GAME", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: 'D10',
    nominal: 10,
    harga: 12000
  },{
    nama: 'D20',
    nominal: 20,
    harga: 23000
  },{
    nama: 'D50',
    nominal: 50,
    harga: 67000
  },{
    nama: 'D100',
    nominal: 100,
    harga: 110000
  }]
},{
  id: "44",
  nama: "TOPUP FREE FIRE IDR",
  gambar: "currency-image/free-fire.jpg",
  kategori: ["GAME", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: 'D10',
    nominal: 10,
    harga: 11000
  },{
    nama: 'D20',
    nominal: 20,
    harga: 21000
  },{
    nama: 'D50',
    nominal: 50,
    harga: 53000
  },{
    nama: 'D100',
    nominal: 100,
    harga: 105000
  }]
},{
  id: "45",
  nama: "TOPUP CALL OF DUTY M IDR",
  gambar: "currency-image/codm.jpeg",
  kategori: ["GAME", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: 'D10',
    nominal: 10,
    harga: 11000
  },{
    nama: 'D20',
    nominal: 20,
    harga: 21000
  },{
    nama: 'D50',
    nominal: 50,
    harga: 53000
  },{
    nama: 'D100',
    nominal: 100,
    harga: 105000
  }]
},{
  id: "46",
  nama: "TOPUP PUBG M (ID) IDR",
  gambar: "currency-image/PUBG-MOBILE.jpg",
  kategori: ["GAME", "IDR"],
  saldo: 10000000,
  rate: [{
    nama: 'D10',
    nominal: 10,
    harga: 11500
  },{
    nama: 'D20',
    nominal: 20,
    harga: 22000
  },{
    nama: 'D50',
    nominal: 50,
    harga: 53500
  },{
    nama: 'D100',
    nominal: 100,
    harga: 107000
  }]
},{
  id: "47",
  nama: "PAYPAL (ID) USD",
  gambar: "currency-image/paypal.jpg",
  kategori: ["USD", "DOMPETDIGITAL"],
  saldo: 500,
  rate: 18000
}].map((produkDetails)=>{
  if(typeof produkDetails.rate === 'object'){
    return new ObjekRate(produkDetails);
  }
  return new ProdukReceive(produkDetails);
});

console.log(produksReceive);

