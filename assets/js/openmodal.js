var myModal = new bootstrap.Modal(document.getElementById('modal-1'));
                          
window.onload = function(){
   setTimeout(showModal, 1000)//run showModal function after 5000ms - 5 seconds
};

function showModal() { 
   let mc = getCookie("hasModalBeenShown");
   
    if (!mc) {//check to see if the cookie is set if not then show modal and set cookie
     myModal.show();
     setCookie ("hasModalBeenShown", "true", 1);  //the last variable is the number of days the cookie exists -- so in this case the cookie will last for 2 days and after will show the modal again 
    }
    
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}