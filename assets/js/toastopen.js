var myToast = new bootstrap.Toast(document.getElementById('toast-1'));
                          
window.onload = function(){
   setTimeout(showToast, 2000)//run showModal function after 5000ms - 5 seconds
};

function showToast() { 
   let mc = getCookie("hasToastBeenShown");
   
    if (!mc) {//check to see if the cookie is set if not then show modal and set cookie
     myToast.show();
     setCookie ("hasToastBeenShown", "true", 0);  //the last variable is the number of days the cookie exists -- so in this case the cookie will last for 2 days and after will show the modal again 
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