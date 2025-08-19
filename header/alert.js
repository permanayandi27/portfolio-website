export function alertMessage(){
  let htmlAlert = '';

  htmlAlert = `
  <div class="alert-icon">
    <img src="alert-icon/1200px-OOjs_UI_icon_alert_destructive.svg.png">
    <div>Sebelum melakukan transaksi, silahkan mengisi Profil dan Verifikasi di ahaschanger.com/account untuk mendapatkan akses penuh dalam transaksi.</div>
  </div>
    <button class="x-btn js-x-btn">x</button>
  `;

  const alert = document.querySelector('.js-alert');
  
  alert.innerHTML = htmlAlert;

  document.querySelector('.js-x-btn').addEventListener('click', ()=>{
    alert.remove();
  })

}
