import { produksSend } from "./data/produk-send.js";
import { produksReceive} from "./data/produks-receive.js";
import { matchingIds } from "./data/produk-send.js";
import { reviewPelanggan } from "./data/testimoni.js";
import { alertMessage } from "./header/alert.js";


alertMessage()


function inputKategori(){
const kategoriProdukSend = ["USD", "CRYPTO", "BANK", "QRIS", "PULSA", "DOMPETDIGITAL", "IDR"];

let htmlKategori = ''
kategoriProdukSend.forEach((kategori)=>{
  htmlKategori += `
   
    <input class="btnc js-btnc js-btnc-${kategori}" type="button" value="${kategori}" data-kategori-produk="${kategori}">
  `;
})

document.querySelector('.js-kategori-send').innerHTML = htmlKategori;

const clickToggle = document.querySelectorAll('.js-btnc');

const cartToggleSend = [];
clickToggle.forEach((input)=>{
  input.addEventListener('click', ()=>{
    const kategoriProduk = input.dataset.kategoriProduk;

    clickToggle.forEach((input)=>{
      if(cartToggleSend[0] === input.value){
        input.classList.toggle('clicked', 0);

        return
      }
    })

    cartToggleSend[0] = kategoriProduk;

   input.classList.toggle('clicked');


  })
})
}



inputKategori();


function selectProduk(produk, cartParam){
  const produkId = produk.dataset.produkId;

  const produkUrutan = produk.dataset.produkList;

  cartParam.push(produkId)
  
  console.log(cartParam)

  const lastIndex = cartParam[cartParam.length - 1];

  const indexLampau = cartParam[cartParam.length - 2];

   console.log(lastIndex) 
   console.log(indexLampau)

   
    const matchingId = matchingIds(produkId);

    let htmlModal = '';
    
    htmlModal = `<div class="currency-lists produk-modal">
        <div class="title-lists">You Send</div>
        <div class="currency">
        <img class="img-currency" src="${matchingId.gambar}">
        <div class="text-currency">
            ${matchingId.nama}
        </div>
     </div>
     <input type="text" placeholder="masukan nominal" class="js-input-nominal">
     <div class=""container-receive>
     <div class="title-lists">You Receive</div>
     <span class="span-container">
     <span class="choose-suggest js-choose-suggest"></span>
     <span class="receive-suggest js-receive-suggest"></span>
     <span class="js-container-tujuan"><input type="text" placeholder="masukan nama rek tujuan" class="input-tujuan js-input-tujuan"></span>
     </span>
     <input class="receive-nominal js-receive-nominal" type="text" disabled>
     <span class="js-select-container"><button class="select-btn js-select-btn">Select</button></span>
     <button class="select-btn2 js-select-btn2">Select</button>
     <span class="js-suggest-container"><div class="suggestions"></div></span>
     </div>
     
     
    </div>
    `;
    
    const produkModal = document.querySelector(`.modal-${lastIndex}`);
    
   

    if(!indexLampau){
       produkModal.innerHTML = htmlModal;

       

      

    inputReceive()

    
   
    }else{

      if(indexLampau === lastIndex){
        produkModal.innerHTML = htmlModal;

       
      

    inputReceive()
      }else{
produkModal.innerHTML = htmlModal;

       

      

    inputReceive()
      document.querySelector(`.modal-${indexLampau}`).innerHTML = '';
      }
      
   
    }

    const btnXmodal = document.querySelector('.js-btn-x-modal');

    btnXmodal.style.setProperty('opacity', 1);
    
    btnXmodal.addEventListener('click',()=>{
      produkModal.innerHTML = '';
      btnXmodal.style.setProperty('opacity', 0);

      document.querySelector('.js-nama-rate').style.top = '0';

      document.querySelector('.js-nama-rate').style.setProperty('opacity', 0)

      cartParam = [];
      console.log(cartParam)
    })

  function inputReceive(){
      const inputNominal = document.querySelector('.js-input-nominal');

    const inputTujuan = document.querySelector('.js-input-tujuan');
    
    inputTujuan.addEventListener('input',()=>{
      
      let cartSuggestions = [];
      let htmlSuggest = '';
      let input = inputTujuan.value;

      const suggestSearch = document.querySelector('.suggestions');

      if(input.length){

        cartSuggestions = produksReceive.filter((produk)=>{
          const produkNama = produk.nama;
          return  produkNama.toLowerCase().includes(input.toLowerCase());
        })
        
      console.log(cartSuggestions)
      
      cartSuggestions.forEach((suggest)=>{
        htmlSuggest += `
          <div class="suggest-receive  js-suggest-receive-${suggest.id}" data-produk-id="${suggest.id}">
        <span class="span-receive-container js-span-receive-container js-span-receive-container-${suggest.id}" data-produk-id="${suggest.id}">
          <img class="img-currency-receive" src="${suggest.gambar}">
        <div class="text-currency-receive">
            ${suggest.nama}
        </div>
        </span>
        </div>
        `;


      })
      
      
      
      suggestSearch.innerHTML = htmlSuggest;

     const chooseSuggest = document.querySelectorAll('.suggest-receive');

     const selectBtn = document.querySelector('.select-btn');

     const selectBtn2 = document.querySelector('.select-btn2')

     let cartProdukSuggest = [];
    chooseSuggest.forEach((choose)=>{
      choose.addEventListener('click', ()=>{
        const produkId = choose.dataset.produkId;

        let matchings;
        cartSuggestions.forEach((suggest)=>{
          if(produkId === suggest.id){
            cartProdukSuggest.push(suggest);
            matchings = suggest;
          }
        })
         
        
         console.log(cartProdukSuggest)
      
       const selectSuggest = document.querySelector('.js-choose-suggest');
       
      
        selectSuggest.innerHTML = document.querySelector(`.js-suggest-receive-${produkId}`).innerHTML;

        document.querySelector('.js-nama-rate').innerHTML = `${matchings.chooseRateNama()}`;

        document.querySelector('.js-nama-rate').style.opacity = '1';

        document.querySelector('.js-nama-rate').style.top = '125vh';



        const inputReceiveNominal = document.querySelector('.js-receive-nominal');

        const btnNamaRate = document.querySelectorAll('.js-btn-nama-rate');

        let namaRate = [];

        btnNamaRate.forEach((btn)=>{
          btn.addEventListener('click', ()=>{
            const produkHarga = btn.dataset.produkHarga;

            const produkNominal = btn.dataset.produkNominal;

            inputReceiveNominal.value = produkNominal;

            const btnToggle = namaRate[0];

            btnToggle.classList.toggle('clicked', 0);

            btn.classList.toggle('clicked');

         
         const produkKategori = matchingId.kategori;

         produkKategori.forEach((kategori)=>{
          if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
            produkKategori.forEach((k)=>{
              if(k === 'CRYPTO'){
                inputNominal.value = produkHarga / matchingId.rate;
              }else{
                inputNominal.value = (produkHarga / matchingId.rate).toFixed(2);
              }
            })
            
          }else if(kategori === 'PULSA' || kategori === 'IDR'){
          inputNominal.value = Math.round(produkHarga * matchingId.rate);
        }else{
            inputNominal.value = produkHarga;
          }
         })

         console.log(produkHarga)
         console.log(matchingId.rate)
         
          

            namaRate[0] = btn;
          })
        })

        

        /*selectSuggest.setAttribute('data-produk-id', `${produkId}`);
        */
        
         
         document.querySelector('.js-suggest-container').innerHTML = '';

         selectSuggest.style.setProperty('opacity', 1);

         document.querySelector('.js-container-tujuan').innerHTML = '';

        selectBtn.style.setProperty('opacity', 1);

        document.querySelector('.js-select-container').innerHTML = ''

        selectBtn2.style.setProperty('opacity', 1);

       
       
       inputReceiveNominal.style.opacity = '1';

        document.querySelector('.produk-modal').style.height = '300px';

    let cartProdukSuggest2 = [];
    let receiveKategori = [];
    let receiveKategori2 = [];
    let receiveKategori3 = [];
    
    let count = 0;
    let count2 = 0;

    let isKlik = false;

    /*let receive = cartProdukSuggest2[0] ? cartProdukSuggest2[0] : cartProdukSuggest[0];
    */
/*    
    const receiveEvent = document.querySelectorAll('.js-span-receive-container');
*/    

    selectSuggest.addEventListener('click',()=>{
/*
      const produkId = rEvent.dataset.produkId;

      console.log(produkId);
 */     
        if(cartProdukSuggest2[0]){
       const item2 = cartProdukSuggest2[0];

    

      const produkId2 = item2.id;
/*
      const receive2Event = document.querySelector('.js-span-receive-container2');

      receive2Event.addEventListener('click', ()=>{

*/
        produksReceive.forEach((produk)=>{
        const produkKategori = produk.kategori;
        

        const itemKategori2 = item2.kategori;

        produkKategori.forEach((kategori)=>{
           if(itemKategori2[0] === kategori ){
            receiveKategori.push(produk)
            }else if(itemKategori2[1] === kategori){
              receiveKategori2.push(produk)
            }

              
          
        })

      })

      
      receiveKategori.forEach((rKategori)=>{
        receiveKategori2.forEach((rKategori2)=>{
          if(rKategori2.id === rKategori.id && count2 < receiveKategori.length && receiveKategori2.length){
            count2++
            receiveKategori3.push(rKategori)
            
          }
          
        
        })
      })
      let htmlReceiveModals = '';
      let lists = 0;
      
      
        receiveKategori3.forEach((produk)=>{
        if(produk.id === produkId2){
          return
        }
        lists++;
        htmlReceiveModals += `
          <div class="suggest-receive3 suggest-receive3-${lists}     js-suggest-receive3-${produk.id} js-suggest-receive3" data-produk-id="${produk.id}">
        
        <span class="span-receive-container js-span-receive-container">  
          <img class="img-currency-receive3" src="${produk.gambar}">
          
        <div class="text-currency-receive3-${lists}">
            ${produk.nama}
        </div>
        </span>
      
          </div>
        `
      });

      
      
      /*else{
        receiveKategori.forEach((produk)=>{
        if(produk.id === produkId2){
          return
        }
        lists++;
        htmlReceiveModals += `
          <div class="suggest-receive3 suggest-receive3-${lists}     js-suggest-receive3-${produk.id} js-suggest-receive3" data-produk-id="${produk.id}">
          
          <img class="img-currency-receive3" src="${produk.gambar}">
          
        <div class="text-currency-receive3-${lists}">
            ${produk.nama}
        </div>
      
          </div>
        `
      });

      
      
      }
      */

      document.querySelector('.js-receive-suggest').innerHTML = htmlReceiveModals;
      
      selectSuggest.style.backgroundColor = 'gray';

      console.log(receiveKategori)
      console.log(receiveKategori2)
      console.log(receiveKategori3)

      const suggestReceive2 = document.querySelectorAll('.js-suggest-receive3');

      

      suggestReceive2.forEach((pilih)=>{
        pilih.addEventListener('click', ()=>{
          const produkId = pilih.dataset.produkId;

          let matchingPilih2;
            receiveKategori3.forEach((produk)=>{
            if(produkId === produk.id){
              cartProdukSuggest2[0] = produk;
              matchingPilih2 = produk;
            }
          })
          /*else{
            receiveKategori.forEach((produk)=>{
            if(produkId === produk.id){
              cartProdukSuggest2[0] = produk;
            }
          })
          }
          */

          selectSuggest.innerHTML = document.querySelector(`.js-suggest-receive3-${produkId}`).innerHTML;

          document.querySelector('.js-nama-rate').innerHTML = matchingPilih2.chooseRateNama();

      const btnRatePilih2 = document.querySelectorAll('.js-btn-nama-rate');

      let namaRatePilih2 = []

      btnRatePilih2.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
          const produkHarga = btn.dataset.produkHarga;

            const produkNominal = btn.dataset.produkNominal;

            inputReceiveNominal.value = produkNominal;

            

            const btnTogglePilih2 = namaRatePilih2[0];

            btnTogglePilih2.classList.toggle('clicked', 0);

            
        
              btn.classList.toggle('clicked');
         
         const produkKategori = matchingId.kategori;

         console.log(produkKategori);

         produkKategori.forEach((kategori)=>{
          if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
            produkKategori.forEach((k)=>{
              if(k === 'CRYPTO'){
                inputNominal.value = produkHarga / matchingId.rate;
              }else{
                inputNominal.value = (produkHarga / matchingId.rate).toFixed(2);
              }
            })
            
          }else if(kategori === 'PULSA' || kategori === 'IDR'){
          inputNominal.value = Math.round(produkHarga * matchingId.rate);
        }else{
            inputNominal.value = produkHarga;
          }
         })

         
         
          

            namaRatePilih2[0] = btn;
        })
      })

          document.querySelector('.js-receive-suggest').innerHTML = '';

           selectSuggest.style.backgroundColor = 'white';
        
        const item = cartProdukSuggest2[0];

        inputValue();

        if(typeof matchingPilih2.rate === 'string'){
         const hargaTerdekat = rateObjek(inputValue, matchingPilih2);

         btnRatePilih2.forEach((btn)=>{
          if(btn.innerHTML === hargaTerdekat.nama){
            namaRatePilih2[0] = btn;
            btn.classList.toggle('clicked');
          }
         })
        }else{
          exchangeCurrency(item);
          inputNominal.removeAttribute('disabled');
        }

        
        

        receiveKategori = [];
        receiveKategori2 = [];
        receiveKategori3 = [];
        count2 = 0;
       
       console.log(receiveKategori);
       console.log(receiveKategori2);
       console.log(receiveKategori3); 
       console.log(cartProdukSuggest2)  

        })
      })
      
/*
      })
*/

      
   
      
      }else{
        const item = cartProdukSuggest[0];

      const produkId = item.id;
/*
      const receiveEvent = document.querySelector(`.js-span-receive-container-${produkId}`);

      receiveEvent.addEventListener('click', ()=>{
 */       
         produksReceive.forEach((produk)=>{
        const produkKategori = produk.kategori;
        

        const itemKategori = item.kategori;

        produkKategori.forEach((kategori)=>{
           if(itemKategori[0] === kategori ){
            receiveKategori.push(produk)
            }else if(itemKategori[1] === kategori){
              receiveKategori2.push(produk)
            }

              
          
        })

      })

      
      receiveKategori.forEach((rKategori)=>{
        receiveKategori2.forEach((rKategori2)=>{
          if(rKategori2.id === rKategori.id && count < receiveKategori.length && receiveKategori2.length){
            count++
            receiveKategori3.push(rKategori)
            
          }
          
        
        })
      })
      let htmlReceiveModal = '';
      let list = 0;
      receiveKategori3.forEach((produk)=>{
        if(produk.id === produkId){
          return
        }
        list++;
        htmlReceiveModal += `
          <div class="suggest-receive2 suggest-receive2-${list}     js-suggest-receive2-${produk.id} js-suggest-receive2" data-produk-id="${produk.id}">
        
        <span class="span-receive-container2 js-span-receive-container2 js-span-receive-container2-${produk.id}">
          <img class="img-currency-receive2" src="${produk.gambar}">
          
        <div class="text-currency-receive2-${list}">
            ${produk.nama}
        </div>
        </span>
          </div>
        `
      })
      document.querySelector('.js-receive-suggest').innerHTML = htmlReceiveModal;
      
      selectSuggest.style.backgroundColor = 'gray';

      const suggestReceive = document.querySelectorAll('.js-suggest-receive2');

      

      suggestReceive.forEach((pilih)=>{
        pilih.addEventListener('click', ()=>{
          const produkId = pilih.dataset.produkId;

          let matchingPilih;
          receiveKategori3.forEach((produk)=>{
            if(produkId === produk.id){
              cartProdukSuggest2[0] = produk;
              matchingPilih = produk;
            }
          })

          selectSuggest.innerHTML = document.querySelector(`.js-suggest-receive2-${produkId}`).innerHTML;

          document.querySelector('.js-nama-rate').innerHTML = `${matchingPilih.chooseRateNama()}`;

          const btnRatePilih = document.querySelectorAll('.js-btn-nama-rate');
        
        let namaRatePilih = [];

          btnRatePilih.forEach((btn)=>{
            btn.addEventListener('click', ()=>{
              const produkHarga = btn.dataset.produkHarga;

            const produkNominal = btn.dataset.produkNominal;

            inputReceiveNominal.value = produkNominal;

            

            const btnTogglePilih = namaRatePilih[0];

            btnTogglePilih.classList.toggle('clicked', 0);

            
        
              btn.classList.toggle('clicked');
         
         const produkKategori = matchingId.kategori;

         console.log(produkKategori);

         produkKategori.forEach((kategori)=>{
          if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
            produkKategori.forEach((k)=>{
              if(k === 'CRYPTO'){
                inputNominal.value = produkHarga / matchingId.rate;
              }else{
                inputNominal.value = (produkHarga / matchingId.rate).toFixed(2);
              }
            })
            
          }else if(kategori === 'PULSA' || kategori === 'IDR'){
          inputNominal.value = Math.round(produkHarga * matchingId.rate);
        }else{
            inputNominal.value = produkHarga;
          }
         })

         
         
          

            namaRatePilih[0] = btn;
            
            })
          })

        



          document.querySelector('.js-receive-suggest').innerHTML = '';

           selectSuggest.style.backgroundColor = 'white';

       const item = cartProdukSuggest2[0];
       
          inputValue();

          console.log(inputValue())
          if(typeof matchingPilih.rate === 'string'){
           const hargaTerdekat = rateObjek(inputValue, matchingPilih);
            
            btnRatePilih.forEach((btn)=>{
              if(btn.innerHTML === hargaTerdekat.nama){
                namaRatePilih[0] = btn;
                btn.classList.toggle('clicked');
              }
            })

          }else{
            exchangeCurrency(item);
            inputNominal.removeAttribute('disabled');
          }

        
        

        receiveKategori = [];
        receiveKategori2 = [];
        receiveKategori3 = [];
        
       
       console.log(receiveKategori);
       console.log(receiveKategori2);
       console.log(receiveKategori3); 
       console.log(cartProdukSuggest2)  

        })
      })
/*     
      })
*/    


      }

        
      
      
      

      
    
    });
  
  
    
  
    
    

      
       /* let matching;
      produksReceive.forEach((produk)=>{
        if(produkId === produk.id){
          matching = produk
        }
      })
      */

      let matching = cartProdukSuggest[0];

      const produkKategori = matchingId.kategori;

      function inputValue(){
        
      /*const produkKategori = matchingId.kategori;
      */
      let valueSend = 0;
      produkKategori.forEach((kategori)=>{
        if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
          valueSend = Number(inputNominal.value) * matchingId.rate;
        }else{
          valueSend = Number(inputNominal.value);
        }
      })
      return valueSend
      }
  
  
        
  if(typeof matching.rate === 'string'){
      const hargaTerdekat = rateObjek(inputValue, matching);

      console.log(hargaTerdekat)

       btnNamaRate.forEach((btn)=>{
        if(btn.innerHTML === hargaTerdekat.nama){
          namaRate[0] = btn;
          btn.classList.toggle('clicked');
        }
      })
     
        
      }else{
        exchangeCurrency(matching);
        
      }
      
       
    function rateObjek(inputValue, matching){
       const hargaTerdekat = matching.rateValue(inputValue);

      inputReceiveNominal.value = hargaTerdekat.nominal;

      
     

      produkKategori.forEach((kategori)=>{
        if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
          produkKategori.forEach((k)=>{
            if(k === 'CRYPTO'){
              inputNominal.value = hargaTerdekat.harga / matchingId.rate;
            }else{
              inputNominal.value = (hargaTerdekat.harga / matchingId.rate).toFixed(2);
            }
          })
          
        }else if(kategori === 'PULSA' || kategori === 'IDR'){
          inputNominal.value = Math.round(hargaTerdekat.harga * matchingId.rate);
        }else{
          inputNominal.value = hargaTerdekat.harga;
        }
      })

      
      inputNominal.setAttribute('disabled', 'disabled');
      

      return hargaTerdekat
    }  
    
      function exchangeCurrency(matching){
        let a = matchingId.rate;

      let b = matching.rate;

      let c = matchingId.rate;

      a = b;

      b = c;

      

      const matchingKeyword = matching.kategori;



      matchingKeyword.forEach((key)=>{
        if(key === 'CRYPTO' || key === 'DOMPETDIGITAL' || key === 'USD'  ){

          matchingKeyword.forEach((k)=>{
            if(k === 'CRYPTO'){
              inputReceiveNominal.value = (Number(inputNominal.value)/a)* b ;
            }else{
              inputReceiveNominal.value = ((Number(inputNominal.value)/ a) * b + 1/100 ).toFixed(2);
            }
          })
          
          

          
 
        }else if(key === 'PULSA' || key === 'IDR'){
          a = matchingId.rate;
          b = matching.rate;
          inputReceiveNominal.value = Math.round((Number(inputNominal.value)* a ) * b);
        }else {
          
            inputReceiveNominal.value = Math.floor((Number(inputNominal.value)/ a) * b);
          
        } 
      });

     
      const keywordSend = matchingId.kategori;

      keywordSend.forEach((keys)=>{
        if(keys === 'PULSA'){
          a = matchingId.rate;
          b = matching.rate;

          const kategori = matching.kategori;

          console.log(kategori)
          kategori.forEach((key)=>{
          if(key === 'USD' || key === 'DOMPETDIGITAL' || key === 'CRYPTO'){
              kategori.forEach((k)=>{
                if(k === 'CRYPTO'){
                  inputReceiveNominal.value = (Number(inputNominal.value)/ a ) / b;
                }else{
                  inputReceiveNominal.value = ((Number(inputNominal.value)/ a ) / b).toFixed(2);
                }
              })
            
          }else if(key === 'PULSA' || key === 'IDR'){
            inputReceiveNominal.value = Math.round((Number(inputNominal.value)/ a ) * b)
          }else{
            inputReceiveNominal.value = Math.round((Number(inputNominal.value)/ a ) / b)
          }
        })
          
        
          
        }

    });
      
     
      

      inputNominal.addEventListener('input', ()=>{
         matchingKeyword.forEach((key)=>{
        if(key === 'USD' || key === 'DOMPETDIGITAL' || key === 'CRYPTO'){
        
         matchingKeyword.forEach((k)=>{
            if(k === 'CRYPTO'){
              inputReceiveNominal.value = (Number(inputNominal.value)/a)* b ;
            }else{
              inputReceiveNominal.value = ((Number(inputNominal.value)/ a) * b + 1/100 ).toFixed(2);
            }
          })
          
        }else if(key === 'PULSA' || key === 'IDR'){
          a = matchingId.rate;
          b = matching.rate;
          inputReceiveNominal.value = Math.round((Number(inputNominal.value)* a ) * b);
        }else{
          inputReceiveNominal.value = (Number(inputNominal.value)/ a) * b;
        }
      });

       keywordSend.forEach((keys)=>{
        if(keys === 'PULSA'){
          a = matchingId.rate;
          b = matching.rate;

          const kategori = matching.kategori;

        kategori.forEach((key)=>{
            if(key === 'USD' || key === 'DOMPETDIGITAL' || key === 'CRYPTO'){
              kategori.forEach((k)=>{
                if(k === 'CRYPTO'){
                  inputReceiveNominal.value = (Number(inputNominal.value)/ a ) / b;
                }else{
                  inputReceiveNominal.value = ((Number(inputNominal.value)/ a ) / b).toFixed(2);
                }
              })
            }else if(key === 'PULSA' || key === 'IDR'){
            inputReceiveNominal.value = Math.round((Number(inputNominal.value)/ a ) * b)
          }else{
              inputReceiveNominal.value = Math.round((Number(inputNominal.value)/ a ) / b);
            }
        })
          
        

        }

      })

        
      })
      }
      

      const buttonSelect = document.querySelector('.js-select-btn2');

    let htmlExchange = '';
    buttonSelect.addEventListener('click', ()=>{
      
      produkModal.innerHTML = '';

      btnXmodal.style.setProperty('opacity', 0);

      const namaRate = document.querySelector('.js-nama-rate');

      namaRate.style.top = '0';
      namaRate.style.opacity = '0';

      
      const currencyExchange = document.querySelector('.js-currency-exchange');

      matching = cartProdukSuggest2[0] ? cartProdukSuggest2[0] : cartProdukSuggest[0];

      htmlExchange = `
        <div class="order-container">
        <div class="title-you-send">You Send</div>
      <div class="rekening-container">
        <img src="${matchingId.gambar}">
        <div class="nama-rekening">
            ${matchingId.nama}
        </div>
     </div>
     
     <input type="text" placeholder="masukan nominal" class="input-nominal js-input-nominal-order" value="${inputNominal.value}">
     
     <div class="title-you-receive">You Receive</div>
     <div class="rekening-container">
        <img src="${matching.gambar}">
        <div class="nama-rekening">
            ${matching.nama}
        </div>
      </div>
      
     <input type="text" disabled class="nominal-receive js-nominal-receive-order" value="${inputReceiveNominal.value}">
     <input class="input-nama" type="text" placeholder="masukan atas nama rekening tujuan">
     <input class="input-nomor" type="text" placeholder="masukan nomor rekening tujuan">
     <button class="order-btn js-order-btn">Order</button>
     </div>
     
     `;

      currencyExchange.innerHTML = htmlExchange;

    window.scrollTo({
      top:540
    })

    const inputNominalOrder = document.querySelector('.js-input-nominal-order');

  const inputReceiveNominalOrder = document.querySelector('.js-nominal-receive-order');

  let a = matchingId.rate;

      let b = matching.rate;

      let c = matchingId.rate;

      a = b;

      b = c;
  
    const matchingKeyword = matching.kategori;

   inputNominalOrder.addEventListener('input', ()=>{

    
         matchingKeyword.forEach((key)=>{
        if(key === 'USD' || key === 'DOMPETDIGITAL' || key === 'CRYPTO'){
        
          inputReceiveNominalOrder.value = ((Number(inputNominalOrder.value)/ a) * b + 1/100 ).toFixed(2);
        }else{
          inputReceiveNominalOrder.value = (Number(inputNominalOrder.value)/ a) * b;
        }
      });

       keywordSend.forEach((keys)=>{
        if(keys === 'PULSA'){
          a = matchingId.rate;
          b = matching.rate;
          inputReceiveNominalOrder.value = Math.round((Number(inputNominalOrder.value)/ a ) * b);
        

        }

      })


        
      })

      
    })
      
      })

      
    })

    

    

      
      suggestSearch.style.setProperty('opacity', 1);

      
      
    }else{
      suggestSearch.style.setProperty('opacity', 0);
    }

  
    

    

  })

 
  const minTopAbsolute = -100;

    const maxTopAbsolute = -1840;

    const produkList = 31 - 1;

    const topAbsoluteRatio = (maxTopAbsolute - minTopAbsolute)/ produkList;

    let produkTopAbsolute = minTopAbsolute + ((Number(produkUrutan) - 1) * topAbsoluteRatio);

    console.log(produkTopAbsolute);

    document.querySelector('.produk-modal').style.top = `${produkTopAbsolute}px`;

    
      window.scrollTo({
        top:399
      })
  
    }
    
};

function eventChooseProduk(){
const currency = document.querySelectorAll('.js-send-currency');


let cartId = [];
currency.forEach((produk)=>{
  produk.addEventListener('click',() =>{
    

    
    selectProduk(produk, cartId)
    /*const produkId = e.currentTarget.getAttribute('data-produk-id');
    */
  })
})
};

function youSend(){

const produkLists = document.querySelector('.js-produks');

const inputsKategori = document.querySelectorAll('.js-btnc');

let cartKategori = [];

  inputsKategori.forEach((input)=>{
    input.addEventListener('click',()=>{
      let htmlInput = '';
      const kategoriProduk = input.dataset.kategoriProduk;

      const inputKategori = document.querySelector(`.js-btnc-${kategoriProduk}`);

     
      produksSend.forEach((produk)=>{
        const produkKategori = produk.kategori;

        produkKategori.forEach((kategori)=>{
          if(inputKategori.value === kategori){
            
            cartKategori.push(produk);
            
          } 
      })
    })

    
      youSend();

      
      let countList = 0;
      cartKategori.forEach((produk)=>{
        
        const produkId = produk.id;

        countList++;

        htmlInput += `
        <div class="produk-container" >
        <div class="currency js-send-currency-category" data-produk-id="${produkId}" data-produk-list="${countList}">
        <img class="img-currency js-img-currency-${produk.id}" src="${produk.gambar}">
        <div class="text-currency">
            ${produk.nama}
        </div>
     </div>
        <span class="modal modal-${produkId}"></span>

     </div>
      `;

     
      })

      

      produkLists.innerHTML = htmlInput;

      const kategoriSend = document.querySelectorAll('.js-send-currency-category');

      let cartIdKategori = [];
      kategoriSend.forEach((produk)=>{
        produk.addEventListener('click', ()=>{
          selectProduk(produk, cartIdKategori);


          
        })


      })
      
      

      

    })
  })


function produkSendHTML(){
  let htmlProduk = '';
  let produkSendList = 0;
  produksSend.forEach((produk)=>{
  const produkId = produk.id;
  
  produkSendList++;

  htmlProduk += `
  <div class="produk-container">
    
  <div class="currency js-send-currency" data-produk-id="${produkId}" data-produk-list="${produkSendList}">
        <img class="img-currency js-img-currency-${produkId}" src="${produk.gambar}">
        <div class="text-currency">
            ${produk.nama}
        </div>
     </div>
  <span class="modal modal-${produkId}"></span>

  

  </div>
  `;

  
  
    
});

produkLists.innerHTML = htmlProduk;



eventChooseProduk();







}
produkSendHTML();
}

youSend();


function inputKategoriReceive(){
  let inputHtmlReceive = '';

  const kategoriProdukReceive = ["DOMPETDIGITAL", "USD", "CRYPTO", "BANK", "PULSA", "GAME", "KUOTA", "IDR"];

  kategoriProdukReceive.forEach((kategori)=>{

    inputHtmlReceive += `
  <input class="btnc-receive js-btnc-receive js-btnc-receive-${kategori}" type="button" value="${kategori}" data-produk-kategori="${kategori}">
  `;
  });

  document.querySelector('.js-kategori-receive').innerHTML = inputHtmlReceive;

  const toggleReceive = document.querySelectorAll('.js-btnc-receive');

  const cartToggle = [];

  toggleReceive.forEach((input)=>{
    input.addEventListener('click',()=>{
      const produkKategori = input.dataset.produkKategori;

      
     toggleReceive.forEach((input)=>{
        if(cartToggle[0] === input.value){
          input.classList.toggle('clicked', 0);
          return
        }
     })
     

      cartToggle[0] = produkKategori;

      input.classList.toggle('clicked');
    })
  })


  

}




inputKategoriReceive()

function youReceive(){
const inputButton = document.querySelectorAll('.js-btnc-receive');

let htmlReceiveClick = '';

const produkHtmlReceive = document.querySelector('.js-produk-receive');

const cartReceive = [];

inputButton.forEach((input)=>{
  input.addEventListener('click', ()=>{
    document.querySelector('.js-btn-rate').style.setProperty('opacity', 0);

    document.querySelector('.js-btn-rate').style.position = 'absolute';

    document.querySelector('.js-btn-rate').style.bottom = '-5050px';

    document.querySelector('.js-btn-reserve').style.setProperty('opacity', 0);

    document.querySelector('.js-btn-reserve').style.position = 'absolute';

    document.querySelector('.js-btn-reserve').style.bottom = '-5050px';

    document.querySelector('.js-btn-reserve2').style.setProperty('opacity', 0);



    document.querySelector('.js-btn-reserve2').style.bottom = '-5050px'

    document.querySelector('.js-btn-rate-kategori').style.setProperty('opacity', 1);

    document.querySelector('.js-btn-reserve-kategori').style.setProperty('opacity', 1);

    document.querySelector('.js-btn-reserve-kategori2').style.setProperty('opacity', 0);

    document.querySelector('.js-btn-rate-kategori').classList.toggle('clicked', 0);
    
    const produkKategori = input.dataset.produkKategori;

    const buttonValue = document.querySelector(`.js-btnc-receive-${produkKategori}`);

    produksReceive.forEach((produk)=>{
      const produkKategori = produk.kategori;

      produkKategori.forEach((kategori)=>{
        if(buttonValue.value === kategori){
          cartReceive.push(produk);
        }
      })
    });

    youReceive();
    
    let countKategori = 0;
    cartReceive.forEach((produk)=>{
      const produkSaldo = produk.usdSaldo();

      countKategori++;
      htmlReceiveClick += `
      <div class="container-kategori js-container-kategori">
      <div class="currency2 js-currency2-kategori" data-produk-id="${produk.id}"
      data-produk-urutan="${countKategori}">
        <img class="img-currency2" src="${produk.gambar}">
        <div class="text-currency2">
            ${produk.nama}
        </div>
        <div class="nominal"><span class="produk-saldo">${produkSaldo}</span></div>
     </div>
     <span class="modal-kategori js-modal-kategori js-modal-kategori-${produk.id}"></span>
     </div>
      `;
    })
    produkHtmlReceive.innerHTML = htmlReceiveClick;

    const currencyKategori = document.querySelectorAll('.js-currency2-kategori');
    
    let countCurrency = 0;
    currencyKategori.forEach((currency)=>{
      countCurrency++;
      currency.addEventListener('click', ()=>{
    const produkId = currency.dataset.produkId;

    const classModal = 'produk-modal-kategori';

    const produkModalKategori = document.querySelector(`.js-modal-kategori-${produkId}`);

    const minTopModal = -100;
    const maxTopModal = minTopModal + (countCurrency - 1) * -57.955555555555556;

    console.log(countCurrency);

    selectCurrencyReceive(currency, countKategori, classModal, produkModalKategori,  minTopModal, maxTopModal);

      })
    })
    

    rateReservedKategori();

    function rateReservedKategori(){
    let htmlRateKategori = '';
    const btnRateKategori = document.querySelector('.js-btn-rate-kategori');
    
    let countRkategori = 0;
    btnRateKategori.addEventListener('click', ()=>{

      
    cartReceive.forEach((produk)=>{
      if(produk.rate === 1){
        return
      }

      countRkategori++;
        htmlRateKategori += `
      <div class="container-rate-kategori">
    <div class="currency2 rate-kategori js-rate-kategori" data-produk-id="${produk.id}" data-produk-urutan="${countRkategori}">
        <img class="img-currency2" src="${produk.gambar}">
        <div class="text-currency2">
            ${produk.nama}
        </div>
        <div class="nominal js-nominal"></div>
        
     </div>
     <span class="produk-rate-kategori">${produk.rate}</span>

      <span class="modal-rate-kategori js-modal-rate-kategori js-modal-rate-kategori-${produk.id}"></span>

    </div>
  `;
      })
      document.querySelector('.js-produk-receive').innerHTML = htmlRateKategori;

      const rateKategori = document.querySelectorAll('.js-rate-kategori');

  let countKategori = 0;
  rateKategori.forEach((rCurrency)=>{
    countKategori++;
    rCurrency.addEventListener('click', ()=>{
      const produkId = rCurrency.dataset.produkId;

      const classModal = 'produk-modal-rate-kategori';

      const modalRkategori = document.querySelector(`.js-modal-rate-kategori-${produkId}`);

      const minTopModal = -100;
      const maxTopModal = minTopModal + (countKategori - 1) * -57.955555555555556;

          selectCurrencyReceive(rCurrency,countRkategori, classModal, modalRkategori, minTopModal, maxTopModal)
        })
      })

      lihatRate();
      rateReservedKategori();
      

    })

    const btnReserveKategori = document.querySelector('.js-btn-reserve-kategori2');

    let htmlReserveKategori = '';

    let countReserve = 0;
    btnReserveKategori.addEventListener('click', ()=>{
      

    cartReceive.forEach((produk)=>{
      
      const produkSaldo = produk.usdSaldo();
      countReserve++;
        htmlReserveKategori += `
    <div class="container-reserve-kategori">
    <div class="currency2 reserve-kategori js-reserve-kategori" data-produk-id="${produk.id}" data-produk-urutan="${countReserve}">
        <img class="img-currency2" src="${produk.gambar}">
        <div class="text-currency2">
            ${produk.nama}
        </div>
        <div class="nominal js-nominal"><span class="produk-saldo">${produkSaldo}</span></div>
        
     </div>
     <span class="modal-reserve-kategori js-modal-reserve-kategori js-modal-reserve-kategori-${produk.id}"></span>
  </div>
  `;
      })
      document.querySelector('.js-produk-receive').innerHTML = htmlReserveKategori;

    const reserveKategori = document.querySelectorAll('.js-reserve-kategori');

    let countReserv = 0;
    reserveKategori.forEach((rPk)=>{
      countReserv++;
      rPk.addEventListener('click', ()=>{
        const produkId = rPk.dataset.produkId;

      const classModal = 'produk-modal-reserve-kategori';

      const modalReserve = document.querySelector(`.js-modal-reserve-kategori-${produkId}`);

      const minTopModal = -100;
      const maxTopModal = minTopModal + (countReserv - 1) * -57.955555555555556;

      selectCurrencyReceive(rPk,countReserve, classModal, modalReserve, minTopModal, maxTopModal);

      })
    })


    })

  }

  rateReservedKategoriToggle();
  function rateReservedKategoriToggle(){
    const btnRateKategoriToggle = document.querySelector('.js-btn-rate-kategori-toggle');

    btnRateKategoriToggle.addEventListener('click', ()=>{
      document.querySelector('.js-btn-reserve-kategori-toggle').style.setProperty('opacity', 0);

      document.querySelector('.js-btn-reserve-kategori2-toggle').style.setProperty('opacity', 1);

      document.querySelector('.js-btn-reserve-kategori2').classList.toggle('clicked', 0);

      btnRateKategoriToggle.classList.toggle('clicked');
    })

    const btnReserveKategoriToggle = document.querySelector('.js-btn-reserve-kategori2-toggle');

    btnReserveKategoriToggle.addEventListener('click', ()=>{
      btnRateKategoriToggle.classList.toggle('clicked', 0);
      btnReserveKategoriToggle.classList.toggle('clicked');
    })
  }
    /*rateReserved();
    */
    /*lihatRate();
    */
  })
})


function produkReceive(){
let htmlReceive = '';

let countList = 0;

produksReceive.forEach((produk)=>{

  countList++;

  const produkSaldo = produk.usdSaldo();
  htmlReceive += `
  <div class="container-receive js-container-receive">
    <div class="currency2 js-currency2" data-produk-id="${produk.id}"
    data-produk-urutan="${countList}">
        <img class="img-currency2" src="${produk.gambar}">
        <div class="text-currency2">
            ${produk.nama}
        </div>
        <div class="nominal js-nominal"><span class="produk-saldo">${produkSaldo}</span></div>
        
     </div>
     <span class="contaier-modal-receive js-modal-receive js-modal-receive-${produk.id}"></span>
  </div>
  `;
})
produkHtmlReceive.innerHTML = htmlReceive;



const currencyReceive = document.querySelectorAll('.js-currency2');

currencyReceive.forEach((cR)=>{
  cR.addEventListener('click', ()=>{
    const produkId = cR.dataset.produkId;
    const classModal = 'produk-modal-receive';

    const produkModalReceive = document.querySelector(`.js-modal-receive-${produkId}`);

    const minTopModal = -108;
    const maxTopModal = -2716;

    selectCurrencyReceive(cR, countList, classModal, produkModalReceive,  minTopModal, maxTopModal);

    
    
  });
});



};

function selectCurrencyReceive(cR,countList, classModal, produkModalReceive, minTopModal, maxTopModal){
  const produkId = cR.dataset.produkId;
    const produkUrutan = cR.dataset.produkUrutan;



    let matchingReceive;
    produksReceive.forEach((produk)=>{
      if(produkId === produk.id){
        matchingReceive = produk
      }
    })

    console.log(matchingReceive)

    let htmlModalReceive = '';

    htmlModalReceive = `
      <div class="currency-lists ${classModal} js-${classModal}">
        <div class="title-lists">You Receive</div>
        <div class="currency currency-modal-receive">
        <img class="img-currency" src="${matchingReceive.gambar}">
        <div class="text-currency">
            ${matchingReceive.nama}
        </div>
     </div>
     <input type="text" placeholder="masukan nominal" class="input-nominal-receive js-input-nominal-receive">
     <div class=""container-receive>
     <div class="title-lists">You Send</div>
     <span class="span-container">
     <span class="choose-suggest js-choose-suggest"></span>
     <span class="send-suggest js-send-suggest"></span>
     <span class="container-asal js-container-asal"><input type="text" placeholder="masukan nama rek asal" class="input-asal js-input-asal">
     
     <div class="suggestions-send js-suggestions-send"></div>
     
     </span>
     </span>
     <input class="send-nominal js-send-nominal" type="text" disabled>
     <span class="js-select-container"><button class="select-btn js-select-btn">Select</button></span>
     <button class="select-btn2 js-select-btn2">Select</button>
     
     </div>
     
     
    </div>
    `;

  
  
  produkModalReceive.innerHTML = htmlModalReceive;

   const inputAsal = document.querySelector('.js-input-asal');

    const suggestSearchSend = document.querySelector('.js-suggestions-send');

    const inputSendNominal = document.querySelector('.js-send-nominal');

    const currencySend = document.querySelector('.js-choose-suggest');

    const inputReceiveNominal = document.querySelector('.js-input-nominal-receive');

  function valueReceive(){
    let value = inputReceiveNominal.value;

    return value;
  }
  
  


   if(typeof matchingReceive.rate === 'string'){

    const hargaTerdekat = matchingReceive.rateValue(valueReceive);


    /*inputReceiveNominal.setAttribute('disabled', 'disabled')
    

    inputSendNominal.value = hargaTerdekat.harga;

    inputReceiveNominal.value = hargaTerdekat.nominal;
    */

    document.querySelector('.js-nama-rate-send').innerHTML = matchingReceive.chooseRateNama();

const btnNamaRate = document.querySelectorAll('.js-btn-nama-rate');

let namaRate = [];

    btnNamaRate.forEach((btn)=>{

  if(hargaTerdekat.nama === btn.innerHTML){
    /*btn.classList.toggle('clicked');
    */
    
    namaRate[0] = btn;
  }
  
    btn.addEventListener('click', ()=>{
      const produkNominal = btn.dataset.produkNominal;
      const produkHarga = btn.dataset.produkHarga;

      /*inputSendNominal.value = produkHarga;
      */

      
      inputReceiveNominal.value = produkNominal;
      

      const btnToggle = namaRate[0];

      btnToggle.classList.toggle('clicked', 0);
      btn.classList.toggle('clicked');

      namaRate[0] = btn;


    })
  })
  

    console.log(hargaTerdekat.nama)

  };

  

  const btnXmodal = document.querySelector('.js-btn-x-modal');

    btnXmodal.style.setProperty('opacity', 1);
    
    btnXmodal.addEventListener('click',()=>{
      produkModalReceive.innerHTML = '';
      btnXmodal.style.setProperty('opacity', 0);

      document.querySelector('.js-nama-rate-send').innerHTML = '';

      /*document.querySelector('.js-nama-rate').style.top = '0';

      document.querySelector('.js-nama-rate').style.setProperty('opacity', 0)

      cartParam = [];
      console.log(cartParam)
      */

      
    });

  

  
  const produkListReceive = countList - 1;
  
    
   const topAbsoluteRatioReceive = (maxTopModal - minTopModal)/ produkListReceive;

   console.log(topAbsoluteRatioReceive)

    let produkTopModal = minTopModal + ((Number(produkUrutan) - 1) * topAbsoluteRatioReceive);

    console.log(produkTopModal);

    document.querySelector(`.js-${classModal}`).style.top = `${produkTopModal}px`;

    
      window.scrollTo({
        top:399
      });
    
    
  
   


inputAsal.addEventListener('input', ()=>{
        let cartSuggestAsal = [];

        
        if(inputAsal.value.length){
        
          cartSuggestAsal = produksSend.filter((produk)=>{
          const produkNama = produk.nama;

          return produkNama.toLowerCase().includes((inputAsal.value).toLowerCase());
        })
        let htmlSendSuggest = '';
        cartSuggestAsal.forEach((produk)=>{
          htmlSendSuggest += `
        <div class="suggest-send js-suggest-send js-suggest-send-${produk.id}" data-produk-id="${produk.id}">
        
        <img class="img-currency2" src="${produk.gambar}">
        <div class="text-currency2">
            ${produk.nama}
        </div>
        
        </div>
          `;
        });

        suggestSearchSend.innerHTML = htmlSendSuggest;

        suggestSearchSend.style.opacity = '1';

        }else{
          suggestSearchSend.innerHTML = '';
          suggestSearchSend.style.opacity = '0';
        };

    const suggestSends = document.querySelectorAll('.js-suggest-send');

    suggestSends.forEach((currency)=>{
      currency.addEventListener('click', ()=>{
        const produkId = currency.dataset.produkId;

        currencySend.innerHTML = document.querySelector(`.js-suggest-send-${produkId}`).innerHTML;

        suggestSearchSend.innerHTML = '';

        suggestSearchSend.style.opacity = '0';

        inputAsal.style.setProperty('opacity', 0);

        inputSendNominal.style.opacity = '1';

        let matchingIdSend;
        produksSend.forEach((produk)=>{
          if(produkId === produk.id){
            matchingIdSend = produk;
          }
        });

        let a = matchingReceive.rate;
        let b = matchingIdSend.rate;
        let c = matchingReceive.rate;

        a = b;
        b = c;

        const currencyKategori = matchingIdSend.kategori;

        currencyKategori.forEach((kategori)=>{
          if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO' || kategori === 'IDR'){
            currencyKategori.forEach((k)=>{
              if(k === 'CRYPTO'){
                inputSendNominal.value = (Number(inputReceiveNominal.value) / a) * b;
              }else if(k === 'IDR'){
                inputSendNominal.value = Math.round((Number(inputReceiveNominal.value) * a) * b);
              }else{
                inputSendNominal.value = ((Number(inputReceiveNominal.value) / a) * b).toFixed(2);
              }
            })
          }else if(kategori === 'IDR' || kategori === 'PULSA'){
            a = matchingReceive.rate;
            b = matchingIdSend.rate;
            

            inputSendNominal.value = (Number(inputReceiveNominal.value)/ a) * b;
          }else{
            inputSendNominal.value = Math.round((Number(inputReceiveNominal.value) * a) * b);
          }
        });

      const kategoriReceive = matchingReceive.kategori;

  kategoriReceive.forEach((kategori)=>{
    if(kategori === 'PULSA'){
      currencyKategori.forEach((kategori)=>{
        if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
          currencyKategori.forEach((k)=>{
            if(k === 'CRYPTO'){
              inputSendNominal.value = (Number(inputReceiveNominal.value)/ a) / b;
            }else{
              inputSendNominal.value = ((Number(inputReceiveNominal.value)/ a) / b).toFixed(2);
            }
          })
          
        }else if(kategori === 'PULSA' || kategori === 'IDR'){

          a = matchingReceive.rate;
            b = matchingIdSend.rate;
          inputSendNominal.value = Math.round((Number(inputReceiveNominal.value)/ a) * b);
        }else{
          inputSendNominal.value = Math.round((Number(inputReceiveNominal.value)/ a) / b);
        }
      })
      
    }
  });

  inputReceiveNominal.addEventListener('input', ()=>{
    currencyKategori.forEach((kategori)=>{
          if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO' || kategori === 'IDR'){
            currencyKategori.forEach((k)=>{
              if(k === 'CRYPTO'){
                inputSendNominal.value = (Number(inputReceiveNominal.value) / a) * b;
              }else if(k === 'IDR'){
                inputSendNominal.value = Math.round((Number(inputReceiveNominal.value) * a) * b);
              }else{
                inputSendNominal.value = ((Number(inputReceiveNominal.value) / a) * b).toFixed(2);
              }
            })
          }else if(kategori === 'IDR' || kategori === 'PULSA'){
            a = matchingReceive.rate;
            b = matchingIdSend.rate;

            inputSendNominal.value = (Number(inputReceiveNominal.value)/ a) * b;
          }else{
            inputSendNominal.value = Math.round((Number(inputReceiveNominal.value) * a) * b);
          }
        });

  kategoriReceive.forEach((kategori)=>{
    if(kategori === 'PULSA'){
      currencyKategori.forEach((kategori)=>{
        if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
          currencyKategori.forEach((k)=>{
            if(k === 'CRYPTO'){
              inputSendNominal.value = (Number(inputReceiveNominal.value)/ a) / b;
            }else{
              inputSendNominal.value = ((Number(inputReceiveNominal.value)/ a) / b).toFixed(2);
            }
          })
          
        }else if(kategori === 'PULSA' || kategori === 'IDR'){
          a = matchingReceive.rate;
          b = matchingIdSend.rate;
          inputSendNominal.value = Math.round((Number(inputReceiveNominal.value)/ a) * b);
        }else{
          inputSendNominal.value = Math.round((Number(inputReceiveNominal.value)/ a) / b);
        }
      })
      
    }
  });

  });

  if(typeof matchingReceive.rate === 'string'){
    

    const hargaTerdekat = matchingReceive.rateValueReceive(valueReceive);


    inputReceiveNominal.setAttribute('disabled', 'disabled')
    
    const produkKategori = matchingIdSend.kategori;

    produkKategori.forEach((kategori)=>{
      if(kategori === 'USD' || kategori === 'DOMPETDIGITAL'){
            inputSendNominal.value = (hargaTerdekat.harga / matchingIdSend.rate).toFixed(2);
          
      }else if(kategori === 'CRYPTO'){
        inputSendNominal.value = hargaTerdekat.harga / matchingIdSend.rate;
      }else if(kategori === 'PULSA' || kategori === 'IDR'){
        inputSendNominal.value = Math.floor(hargaTerdekat.harga * matchingIdSend.rate);
      }else{
        inputSendNominal.value = hargaTerdekat.harga;
      }
    })
    

    inputReceiveNominal.value = hargaTerdekat.nominal;
    

    document.querySelector('.js-nama-rate-send').innerHTML = matchingReceive.chooseRateNama();

const btnNamaRate = document.querySelectorAll('.js-btn-nama-rate');

let namaRate = [];

    btnNamaRate.forEach((btn)=>{

  if(hargaTerdekat.nama === btn.innerHTML){
    btn.classList.toggle('clicked');
    
    
    namaRate[0] = btn;
  }
  
    btn.addEventListener('click', ()=>{
      const produkNominal = btn.dataset.produkNominal;
      const produkHarga = btn.dataset.produkHarga;

      const produkKategori = matchingIdSend.kategori;

    produkKategori.forEach((kategori)=>{
      if(kategori === 'USD' || kategori === 'DOMPETDIGITAL'){
            inputSendNominal.value = (produkHarga / matchingIdSend.rate).toFixed(2);
          
      }else if(kategori === 'CRYPTO'){
        inputSendNominal.value = produkHarga / matchingIdSend.rate;
      }else if(kategori === 'PULSA' || kategori === 'IDR'){
        inputSendNominal.value = Math.floor(produkHarga * matchingIdSend.rate);
      }else{
        inputSendNominal.value = produkHarga;
      }
    })
      

      
      inputReceiveNominal.value = produkNominal;
      

      const btnToggle = namaRate[0];

      btnToggle.classList.toggle('clicked', 0);
      btn.classList.toggle('clicked');

      namaRate[0] = btn;


    })
  })
  

    console.log(hargaTerdekat.nama)

  };
  
  
      });

    });
        

        
      });   
}



produkReceive();
rateReserved();


function lihatRate(){
  const buttonPilih = document.querySelectorAll('.js-button-rate');

let isLihat = false;

let cartIdLihat = [];

buttonPilih.forEach((pilih)=>{

  pilih.addEventListener('click', ()=>{
    const produkId = pilih.dataset.produkId;

    
    cartIdLihat.push(produkId);

    const lastIndex = cartIdLihat[cartIdLihat.length - 1];

    const indexLampau = cartIdLihat[cartIdLihat.length - 2];

    console.log(lastIndex);
    console.log(indexLampau);
    let matchingId;
    produksReceive.forEach((produk)=>{
      if(produk.id === lastIndex){
        matchingId = produk;
      }
    });

    if(!isLihat && !indexLampau){
      document.querySelector(`.js-display-rate-${lastIndex}`).innerHTML = matchingId.displayRate();

    isLihat = true;
    pilih.innerHTML = 'Ok';
    }else if(isLihat && indexLampau){
      if(lastIndex !== indexLampau){
        document.querySelector(`.js-display-rate-${indexLampau}`).innerHTML = '';

      document.querySelector(`.js-button-rate-${indexLampau}`).innerHTML = 'Lihat';
      
     document.querySelector(`.js-display-rate-${lastIndex}`).innerHTML = matchingId.displayRate();

      
    
    isLihat = true;
    pilih.innerHTML = 'Ok';
      }else{
        document.querySelector(`.js-display-rate-${lastIndex}`).innerHTML = '';

      
    
    isLihat = false;
    pilih.innerHTML = 'Lihat';

    cartIdLihat = [];
      }
    }
    
    
  })
  
})
  
}


lihatRate();



}

youReceive();

function lihatRate(){
  const buttonPilih = document.querySelectorAll('.js-button-rate');

let isLihat = false;

let cartIdLihat = [];

buttonPilih.forEach((pilih)=>{

  pilih.addEventListener('click', ()=>{
    const produkId = pilih.dataset.produkId;

    
    cartIdLihat.push(produkId);

    const lastIndex = cartIdLihat[cartIdLihat.length - 1];

    const indexLampau = cartIdLihat[cartIdLihat.length - 2];

    console.log(lastIndex);
    console.log(indexLampau);
    let matchingId;
    produksReceive.forEach((produk)=>{
      if(produk.id === lastIndex){
        matchingId = produk;
      }
    });

    if(!isLihat && !indexLampau){
      document.querySelector(`.js-display-rate-${lastIndex}`).innerHTML = matchingId.displayRate();

    isLihat = true;
    pilih.innerHTML = 'Ok';
    }else if(isLihat && indexLampau){
      if(lastIndex !== indexLampau){
        document.querySelector(`.js-display-rate-${indexLampau}`).innerHTML = '';

      document.querySelector(`.js-button-rate-${indexLampau}`).innerHTML = 'Lihat';
      
     document.querySelector(`.js-display-rate-${lastIndex}`).innerHTML = matchingId.displayRate();

      
    
    isLihat = true;
    pilih.innerHTML = 'Ok';
      }else{
        document.querySelector(`.js-display-rate-${lastIndex}`).innerHTML = '';

      
    
    isLihat = false;
    pilih.innerHTML = 'Lihat';

    cartIdLihat = [];
      }
    }
    
    
    
  })
  
})
  
}



function rateReserved(){


const btnRate = document.querySelector('.js-btn-rate');

const btnReserve = document.querySelector('.js-btn-reserve');

const btnReserve2 = document.querySelector('.js-btn-reserve2');

/*const produkRate = document.querySelectorAll('.produk-rate');

const produkReserve = document.querySelectorAll('.produk-saldo');
*/

let htmlRate = '';

let countList = 0;
btnRate.addEventListener('click', ()=>{
  
 produksReceive.forEach((produk)=>{
    if(produk.rate === 1){
      return
    }
   
    countList++;

    htmlRate += `
    <div class="container-rate js-container-rate">
    <div class="currency2 js-produk-rate" data-produk-id="${produk.id}" data-produk-urutan="${countList}">
        <img class="img-currency2" src="${produk.gambar}">
        <div class="text-currency2">
            ${produk.nama}
        </div>
        <div class="nominal js-nominal"></div>
        
     </div>
     <span class="produk-rate">${produk.rate}</span>
     <span class="modal-rate js-modal-rate js-modal-rate-${produk.id}"></span>
  </div>
  `;
  })
  document.querySelector('.js-produk-receive').innerHTML = htmlRate;

  const produkRate = document.querySelectorAll('.js-produk-rate');

  produkRate.forEach((produk)=>{
    produk.addEventListener('click', ()=>{
  const produkId = produk.dataset.produkId;
  const minTopModal = -107;
  const maxTopModal = -1846;
  const classModal = 'produk-modal-rate';
  const produkModalRate = document.querySelector(`.js-modal-rate-${produkId}`);

      selectProdukReceive(produk, countList, classModal, produkModalRate, minTopModal, maxTopModal);
    })
  })

   

  
  

  /*produkRate.forEach((rate)=>{
    rate.style.setProperty('opacity', 1);
  })
  
produkReserve.forEach((saldo)=>{
    saldo.style.setProperty('opacity', 0);
    
   
  })
*/

  lihatRate();
  rateReserved();
  
  
});

let htmlReserved = '';
let countReserve = 0;
btnReserve2.addEventListener('click', ()=>{
  btnRate.classList.toggle('clicked', 0);
  btnReserve2.style.setProperty('opacity', 0);
  btnReserve.style.opacity = '1';

  produksReceive.forEach((produk)=>{

    countReserve++;
    const produkSaldo = produk.usdSaldo();
    htmlReserved += `
    <div class="container-reserve js-container-reserve">
    <div class="currency2 currency-reserve js-currency-reserve " data-produk-id="${produk.id}" data-produk-urutan="${countReserve}">
        <img class="img-currency2" src="${produk.gambar}">
        <div class="text-currency2">
            ${produk.nama}
        </div>
        <div class="nominal js-nominal"><span class="produk-saldo">${produkSaldo}</span></div>
        
     </div>
     <span class="container-modal-reserve js-modal-reserve js-modal-reserve-${produk.id}"></span>
    </div>
  `;
  })
  document.querySelector('.js-produk-receive').innerHTML = htmlReserved; 
  
  const currencyReserve = document.querySelectorAll('.js-currency-reserve');

  currencyReserve.forEach((currency)=>{
    currency.addEventListener('click', ()=>{
  const produkId = currency.dataset.produkId;
   const minTopModal = -107;
   const maxTopModal = -2716;
   const classModal = 'produk-modal-reserve';
   const produkModalReserve = document.querySelector(`.js-modal-reserve-${produkId}`);
  
    selectProdukReceive(currency, countReserve, classModal, produkModalReserve, minTopModal, maxTopModal);

    })
  })
  

  /*produkReserve.forEach((saldo)=>{
    saldo.style.setProperty('opacity', 1);
  
  });
  */


})



};

function selectProdukReceive(produk, countList, classModal, produkModalRate, minTopModal, maxTopModal){

  const produkId = produk.dataset.produkId;
    const produkUrutan = produk.dataset.produkUrutan;



    let matchingReceive;
    produksReceive.forEach((produk)=>{
      if(produkId === produk.id){
        matchingReceive = produk
      }
    })

    console.log(matchingReceive)

    let htmlModalReceive = '';

    htmlModalReceive = `
      <div class="currency-lists ${classModal} js-${classModal}">
      
        <div class="title-lists">You Receive</div>
        <div class="currency">
        <img class="img-currency" src="${matchingReceive.gambar}">
        <div class="text-currency">
            ${matchingReceive.nama}
        </div>
     </div>
     <input type="text" placeholder="masukan nominal" class="input-nominal-receive js-input-nominal-receive">
     <div class=""container-receive>
     <div class="title-lists">You Send</div>
     <span class="span-container">
     <span class="choose-suggest js-choose-suggest"></span>
     <span class="send-suggest js-send-suggest"></span>
     <span class="container-asal js-container-asal"><input type="text" placeholder="masukan nama rek asal" class="input-asal js-input-asal">
     
     <div class="suggestions-send js-suggestions-send"></div>
     
     </span>
     </span>
     <input class="send-nominal js-send-nominal" type="text" disabled>
     <span class="js-select-container"><button class="select-btn js-select-btn">Select</button></span>
     <button class="select-btn2 js-select-btn2">Select</button>
     
     </div>
     
    
    </div>
    `;

  
  
  produkModalRate.innerHTML = htmlModalReceive;

   const inputAsal = document.querySelector('.js-input-asal');

    const suggestSearchSend = document.querySelector('.js-suggestions-send');

    const inputSendNominal = document.querySelector('.js-send-nominal');

    const currencySend = document.querySelector('.js-choose-suggest');

    const inputReceiveNominal = document.querySelector('.js-input-nominal-receive');

  function valueReceive(){
    let value = inputReceiveNominal.value;

    return value;
  }
  
  


   if(typeof matchingReceive.rate === 'string'){

    const hargaTerdekat = matchingReceive.rateValue(valueReceive);


    /*inputReceiveNominal.setAttribute('disabled', 'disabled')
    

    inputSendNominal.value = hargaTerdekat.harga;

    inputReceiveNominal.value = hargaTerdekat.nominal;
    */

    document.querySelector('.js-nama-rate-send').innerHTML = matchingReceive.chooseRateNama();

const btnNamaRate = document.querySelectorAll('.js-btn-nama-rate');

let namaRate = [];

    btnNamaRate.forEach((btn)=>{

  if(hargaTerdekat.nama === btn.innerHTML){
    /*btn.classList.toggle('clicked');
    */
    
    namaRate[0] = btn;
  }
  
    btn.addEventListener('click', ()=>{
      const produkNominal = btn.dataset.produkNominal;
      const produkHarga = btn.dataset.produkHarga;

      /*inputSendNominal.value = produkHarga;
      */

      
      inputReceiveNominal.value = produkNominal;
      

      const btnToggle = namaRate[0];

      btnToggle.classList.toggle('clicked', 0);
      btn.classList.toggle('clicked');

      namaRate[0] = btn;


    })
  })
  

    console.log(hargaTerdekat.nama)

  };

  

  const btnXmodal = document.querySelector('.js-btn-x-modal');

    btnXmodal.style.setProperty('opacity', 1);
    
    btnXmodal.addEventListener('click',()=>{
      produkModalRate.innerHTML = '';
      btnXmodal.style.setProperty('opacity', 0);

      document.querySelector('.js-nama-rate-send').innerHTML = '';

      /*document.querySelector('.js-nama-rate').style.top = '0';

      document.querySelector('.js-nama-rate').style.setProperty('opacity', 0)

      cartParam = [];
      console.log(cartParam)
      */

      
    });

  

  
  const produkListReceive = countList - 1;

    const topAbsoluteRatioReceive = (maxTopModal - minTopModal)/ produkListReceive;

    console.log(topAbsoluteRatioReceive);

    let produkTopModal = minTopModal + ((Number(produkUrutan) - 1) * topAbsoluteRatioReceive);

    console.log(produkTopModal);

    document.querySelector(`.js-${classModal}`).style.top = `${produkTopModal}px`;

    
      window.scrollTo({
        top:399
      })
  
   


inputAsal.addEventListener('input', ()=>{
        let cartSuggestAsal = [];

        
        if(inputAsal.value.length){
        
          cartSuggestAsal = produksSend.filter((produk)=>{
          const produkNama = produk.nama;

          return produkNama.toLowerCase().includes((inputAsal.value).toLowerCase());
        })
        let htmlSendSuggest = '';
        cartSuggestAsal.forEach((produk)=>{
          htmlSendSuggest += `
        <div class="suggest-send js-suggest-send js-suggest-send-${produk.id}" data-produk-id="${produk.id}">
        
        <img class="img-currency2" src="${produk.gambar}">
        <div class="text-currency2">
            ${produk.nama}
        </div>
        
        </div>
          `;
        });

        suggestSearchSend.innerHTML = htmlSendSuggest;

        suggestSearchSend.style.opacity = '1';

        }else{
          suggestSearchSend.innerHTML = '';
          suggestSearchSend.style.opacity = '0';
        };

    const suggestSends = document.querySelectorAll('.js-suggest-send');

    suggestSends.forEach((currency)=>{
      currency.addEventListener('click', ()=>{
        const produkId = currency.dataset.produkId;

        currencySend.innerHTML = document.querySelector(`.js-suggest-send-${produkId}`).innerHTML;

        suggestSearchSend.innerHTML = '';

        suggestSearchSend.style.opacity = '0';

        inputAsal.style.setProperty('opacity', 0);

        inputSendNominal.style.opacity = '1';

        let matchingIdSend;
        produksSend.forEach((produk)=>{
          if(produkId === produk.id){
            matchingIdSend = produk;
          }
        });

        let a = matchingReceive.rate;
        let b = matchingIdSend.rate;
        let c = matchingReceive.rate;

        a = b;
        b = c;

        const currencyKategori = matchingIdSend.kategori;

        currencyKategori.forEach((kategori)=>{
          if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO' || kategori === 'IDR'){
            currencyKategori.forEach((k)=>{
              if(k === 'CRYPTO'){
                inputSendNominal.value = (Number(inputReceiveNominal.value) / a) * b;
              }else if(k === 'IDR'){
                inputSendNominal.value = Math.round((Number(inputReceiveNominal.value) * a) * b);
              }else{
                inputSendNominal.value = ((Number(inputReceiveNominal.value) / a) * b).toFixed(2);
              }
            })
          }else if(kategori === 'IDR' || kategori === 'PULSA'){
            a = matchingReceive.rate;
            b = matchingIdSend.rate;
            

            inputSendNominal.value = (Number(inputReceiveNominal.value)/ a) * b;
          }else{
            inputSendNominal.value = Math.round((Number(inputReceiveNominal.value) * a) * b);
          }
        });

      const kategoriReceive = matchingReceive.kategori;

  kategoriReceive.forEach((kategori)=>{
    if(kategori === 'PULSA'){
      currencyKategori.forEach((kategori)=>{
        if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
          currencyKategori.forEach((k)=>{
            if(k === 'CRYPTO'){
              inputSendNominal.value = (Number(inputReceiveNominal.value)/ a) / b;
            }else{
              inputSendNominal.value = ((Number(inputReceiveNominal.value)/ a) / b).toFixed(2);
            }
          })
          
        }else if(kategori === 'PULSA' || kategori === 'IDR'){
          a = matchingReceive.rate;
          b = matchingIdSend.rate;
          inputSendNominal.value = Math.round((Number(inputReceiveNominal.value)/ a) * b);
        }else if(kategori === 'BANK' || kategori === 'IDR'){
          inputSendNominal.value = Math.round((Number(inputReceiveNominal.value)/ a) / b);
        }
      })
      
    }
  });

  inputReceiveNominal.addEventListener('input', ()=>{
    currencyKategori.forEach((kategori)=>{
          if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO' || kategori === 'IDR'){
            currencyKategori.forEach((k)=>{
              if(k === 'CRYPTO'){
                inputSendNominal.value = (Number(inputReceiveNominal.value) / a) * b;
              }else if(k === 'IDR'){
                inputSendNominal.value = Math.round((Number(inputReceiveNominal.value) * a) * b);
              }else{
                inputSendNominal.value = ((Number(inputReceiveNominal.value) / a) * b).toFixed(2);
              }
            })
          }else if(kategori === 'IDR' || kategori === 'PULSA'){
            a = matchingReceive.rate;
            b = matchingIdSend.rate;

            inputSendNominal.value = (Number(inputReceiveNominal.value)/ a) * b;
          }else{
            inputSendNominal.value = Math.round((Number(inputReceiveNominal.value) * a) * b);
          }
        });

  kategoriReceive.forEach((kategori)=>{
    if(kategori === 'PULSA'){
      currencyKategori.forEach((kategori)=>{
        if(kategori === 'USD' || kategori === 'DOMPETDIGITAL' || kategori === 'CRYPTO'){
          currencyKategori.forEach((k)=>{
            if(k === 'CRYPTO'){
              inputSendNominal.value = (Number(inputReceiveNominal.value)/ a) / b;
            }else{
              inputSendNominal.value = ((Number(inputReceiveNominal.value)/ a) / b).toFixed(2);
            }
          })
          
        }else if(kategori === 'PULSA' || kategori === 'IDR'){
          a = matchingReceive.rate;
          b = matchingIdSend.rate;
          inputSendNominal.value = Math.round((Number(inputReceiveNominal.value)/ a) * b);
        }else{
          inputSendNominal.value = Math.round((Number(inputReceiveNominal.value)/ a) / b);
        }
      })
      
    }
  });

  });

  if(typeof matchingReceive.rate === 'string'){
    

    const hargaTerdekat = matchingReceive.rateValueReceive(valueReceive);


    inputReceiveNominal.setAttribute('disabled', 'disabled')
    
    const produkKategori = matchingIdSend.kategori;

    produkKategori.forEach((kategori)=>{
      if(kategori === 'USD' || kategori === 'DOMPETDIGITAL'){
            inputSendNominal.value = (hargaTerdekat.harga / matchingIdSend.rate).toFixed(2);
          
      }else if(kategori === 'CRYPTO'){
        inputSendNominal.value = hargaTerdekat.harga / matchingIdSend.rate;
      }else if(kategori === 'PULSA' || kategori === 'IDR'){
        inputSendNominal.value = Math.floor(hargaTerdekat.harga * matchingIdSend.rate);
      }else{
        inputSendNominal.value = hargaTerdekat.harga;
      }
    })
    

    inputReceiveNominal.value = hargaTerdekat.nominal;
    

    document.querySelector('.js-nama-rate-send').innerHTML = matchingReceive.chooseRateNama();

const btnNamaRate = document.querySelectorAll('.js-btn-nama-rate');

let namaRate = [];

    btnNamaRate.forEach((btn)=>{

  if(hargaTerdekat.nama === btn.innerHTML){
    btn.classList.toggle('clicked');
    
    
    namaRate[0] = btn;
  }
  
    btn.addEventListener('click', ()=>{
      const produkNominal = btn.dataset.produkNominal;
      const produkHarga = btn.dataset.produkHarga;

      const produkKategori = matchingIdSend.kategori;

    produkKategori.forEach((kategori)=>{
      if(kategori === 'USD' || kategori === 'DOMPETDIGITAL'){
            inputSendNominal.value = (produkHarga / matchingIdSend.rate).toFixed(2);
          
      }else if(kategori === 'CRYPTO'){
        inputSendNominal.value = produkHarga / matchingIdSend.rate;
      }else if(kategori === 'PULSA' || kategori === 'IDR'){
        inputSendNominal.value = Math.floor(produkHarga * matchingIdSend.rate);
      }else{
        inputSendNominal.value = produkHarga;
      }
    })
      

      
      inputReceiveNominal.value = produkNominal;
      

      const btnToggle = namaRate[0];

      btnToggle.classList.toggle('clicked', 0);
      btn.classList.toggle('clicked');

      namaRate[0] = btn;


    })
  })
  

    console.log(hargaTerdekat.nama)

  };
  
  
      });

    });
        
});
    
}

function rateReservedToggle(){
  const btnRateToggle = document.querySelector('.js-btn-rate-toggle');
  
  btnRateToggle.addEventListener('click', ()=>{

  document.querySelector('.js-btn-reserve2-toggle').style.setProperty('opacity', 1);

  document.querySelector('.js-btn-reserve-toggle').style.setProperty('opacity', 0);

btnRateToggle.classList.toggle('clicked');


  })

}

rateReservedToggle();

function testi(){
  let htmlReviewsOne = '';
  let htmlReviewsTwo = '';
  let htmlReviewsThree = '';

  let hitung = 0;
  reviewPelanggan.forEach((review)=>{
    hitung++;

    if(hitung <= 3){
      htmlReviewsOne+= `
      <div class="testimoni-column testimoni-column-${hitung}">
        <div class="testimoni-title">${review.nama}, ${review.tanggal}, ${review.waktu}</div>
        <div class="testimoni-content">${review.komentar}</div>
    </div>
    `;
      
    }

     
    if(hitung > 3){
     
      htmlReviewsTwo+= `
      <div class="testimoni-column">
        <div class="testimoni-title">${review.nama}, ${review.tanggal}, ${review.waktu}</div>
        <div class="testimoni-content">${review.komentar}</div>
    </div>
    `;
    }

    
    
  })
  const testimoniReview = document.querySelector('.js-testimoni-container');

  let countTesti = 0;
  setInterval(()=>{
    countTesti += 3;
      
    if(countTesti <= 3){
      testimoniReview.innerHTML = htmlReviewsOne;
      
    }else if(countTesti > 3){
      testimoniReview.innerHTML = htmlReviewsTwo;
      
    }

    if(countTesti > reviewPelanggan.length){
      countTesti = 0;
    }
  },7000)
  
}

testi();



/*window.addEventListener('scroll', ()=>{
  const scrollHeight = window.pageYOffset;

  console.log(scrollHeight);
})
*/






const boxData = [{
  number: 1
},{
  number: 2
},{
  number: 3
}]

let htmlBox = '';
boxData.forEach((number)=>{
  htmlBox += `
    <div class="box box-${number.number}" data-box-id="${number.number}"></div>
  `;
});

document.querySelector('.box-container').innerHTML = htmlBox;

const boxElement = document.querySelector('.box');



  boxElement.addEventListener('click', (e)=>{
    const box = boxData[0];

    console.log(box)
})





setInterval(()=>{
})


  const produkss = [{
    nama: 'Agus'
    }]

  console.log(typeof produkss );

 
  const arrayB = [{
    nama: 'Abun',
    tgl: '5'
  },{
    nama: 'Udun',
    tgl: '7'
  },{
    nama: 'Miun',
    tgl: '9'
  }];

  let count = 2;

  let harga;

  arrayB.forEach((array, index)=>{
    count++
    if(count < 2){
      harga = array
    }else{
      harga = arrayB[index -index + 0]
    }
  })

  console.log(harga);




