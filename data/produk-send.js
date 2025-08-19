export function matchingIds(produkId){
  let matchingId;
    produksSend.forEach((produk)=>{
      if(produkId === produk.id){
        matchingId = produk
      }
    });

  return matchingId;
}


export const produksSend = [{
  id: "1",
  nama: "BANK BCA IDR",
  gambar: "currency-image/bca.jpg",
  kategori: ["BANK", "IDR"],
  rate: 1
},{
  id: "2",
  nama: "BANK BNI IDR",
  gambar: "currency-image/icon-bni.png",
  kategori: ["BANK", "IDR"],
  rate: 1
},{
  id: "3",
  nama: "BANK BRI IDR",
  gambar: "currency-image/BRI.png",
  kategori: ["BANK", "IDR"],
  rate: 1
},{
  id: "4",
  nama: "BANK MANDIRI IDR",
  gambar: "currency-image/mandiri.png",
  kategori: ["BANK", "IDR"],
  rate: 1
},{
  id: "5",
  nama: "BANK SYARIAH INDONESIA IDR",
  gambar: "currency-image/BSI.jpg",
  kategori: ["BANK", "IDR"],
  rate: 1
},{
  id: "6",
  nama: "BANK PERMATA IDR",
  gambar: "currency-image/PERMATA.png",
  kategori: ["BANK", "IDR"],
  rate : 1
},{
  id: "7",
  nama: "BANK CIMB NIAGA IDR",
  gambar: "currency-image/CIMB-Niaga.png",
  kategori: ["BANK", "IDR"],
  rate: 1
},{
  id: "8",
  nama: "BANK LAINNYA IDR",
  gambar: "currency-image/bank-building-1.png",
  kategori: ["BANK", "IDR"],
  rate: 1
},{
  id: "9",
  nama: "QRIS IDR",
  gambar: "currency-image/qris.png",
  kategori: ["QRIS","IDR"]
  
},{
  id: "10",
  nama: "BTPN / JENIUS IDR",
  gambar: "currency-image/jenius2.png",
  kategori: ["BANK", "IDR"],
  rate: 1
},{
  id: "11",
  nama: "PERFECTMONEY USD",
  gambar: "currency-image/Perfect-Money.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  rate: 16500
},{
  id: "12",
  nama: "ADVCASH USD",
  gambar: "currency-image/Advcash.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  rate: 16000
},{
  id: "13",
  nama: "PAYEER USD",
  gambar: "currency-image/Payeer.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  rate: 16000
},{
  id: "14",
  nama: "DANA IDR",
  gambar: "currency-image/DANA.png",
  kategori: ["DOMPETDIGITAL", "IDR"],
  rate: 1
},{
  id: "15",
  nama: "LINK AJA IDR",
  gambar: "currency-image/link-aja.png",
  kategori: ["DOMPETDIGITAL", "IDR"],
  rate: 1
},{
  id: "16",
  nama: "GOPAY IDR",
  gambar: "currency-image/gopay.jpg",
  kategori: ["DOMPETDIGITAL", "IDR"],
  rate: 1
},{
  id: "17",
  nama: "OVO IDR",
  gambar: "currency-image/ovo.jpg",
  kategori: ["DOMPETDIGITAL", "IDR"],
  rate: 1
},{
  id: "18",
  nama: "IDK INDODAX IDK",
  gambar: "currency-image/IDK.png",
  kategori: ["CRYPTO"],
  rate: 1
},{
  id: "19",
  nama: "BINANCE IDR BIDR",
  gambar: "currency-image/BIDR.png",
  kategori: ["CRYPTO", "IDR"],
  rate: 1
},{
  id: "20",
  nama: "BITCOIN BTC",
  gambar: "currency-image/Bitcoin.png",
  kategori: ["CRYPTO"],
  rate: 200000000
},{
  id: "21",
  nama: "ETHEREUM ETH",
  gambar: "currency-image/ether.png",
  kategori: ["CRYPTO"],
  rate: 50000000
},{
  id: "22",
  nama: "BINANCE USD BUSD",
  gambar: "currency-image/BUSD.png",
  kategori: ["CRYPTO", "USD"],
  rate: 16200
},{
  id: "23",
  nama: "USDT TRC20 USD",
  gambar: "currency-image/USDTTRC.jpg",
  kategori: ["CRYPTO", "USD"],
  rate: 16400

},{
  id: "24",
  nama: "USDT BEP20 USD",
  gambar: "currency-image/USDTBEP20.jpg",
  kategori: ["CRYPTO", "USD"],
  rate: 15900
},{
  id: "25",
  nama: "USDC ERC20 USDC",
  gambar: "currency-image/USDC.png",
  kategori: ["CRYPTO"],
  rate: 16100
},{
  id: "26",
  nama: "TRANSFER TELKOMSEL IDR",
  gambar: "currency-image/telkomsel-1-e1564823588573.png",
  kategori: ["PULSA", "IDR"],
  rate: 1.20
},{
  id: "27",
  nama: "TRANSFER XL AXIS IDR",
  gambar: "currency-image/xl-e1564823618632.png",
  kategori: ["PULSA", "IDR"],
  rate: 1.15
},{
  id: "28",
  nama: "TRANSFER INDOSAT IDR",
  gambar: "currency-image/indosat-e1564823639933.jpg",
  kategori: ["PULSA", "IDR"],
  rate: 1.10
},{
  id: "29",
  nama: "FASAPAY USD",
  gambar: "currency-image/fasapay.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  rate: 16000
},{
  id: "30",
  nama: "EXMO CODE USD",
  gambar: "currency-image/exmo-code-e1564810178299.png",
  kategori: ["USD"],
  rate: 16000
},{
  id: "31",
  nama: "EPAY USD",
  gambar: "currency-image/epay-e1564810561666.png",
  kategori: ["USD", "DOMPETDIGITAL"],
  rate: 16000
}];