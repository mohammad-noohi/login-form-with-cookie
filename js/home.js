const $ = document;

window.addEventListener('load', e =>{
  if(!document.cookie){
    location.href = 'http://127.0.0.1:5500/login.html'
  }
})