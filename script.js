function setCookie(name, nvalue, day) {
  let date = new Date();
  date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
  let exp = "expires=" + date.toUTCString();
  document.cookie = name + "=" + nvalue + ";" + exp + ";path=/";
}

function getCookie(cname) {
  // username = mahin; name = mahin Howlader

  let name = cname + "=";
  let cr = document.cookie.split(";");
  for (i = 0; i < cr.length; i++) {
    let ca = cr[i];

    while (ca.charAt(0) === " ") {
      ca = ca.substring(1);
    }

    if (ca.indexOf(name) === 0) {
      return ca.substring(name.length);
    }
  }
  return ""
}

// function getCookie(cname) {
//   // username = mahin; name = mahin Howlader

//   let name = cname + "=";
//   let cr = document.cookie.split(";");


//   for (i = 0; i < cr.length; i++) {
//     let ca = cr[i];

//     while (ca.charAt(0) === " ") {
//       ca = ca.substring(1);
//     };



//     if (ca.indexOf(name) === 0) {
//       return ca.substring(name.length);
//     }
//   }
//   return ""
// }



function checkCookie(cname2,exdays) {
  let cnam = getCookie(cname2);
  if (cnam != "") {
    alert("Welcome again " + cnam)
  }
  
  else {
    name = prompt("Please enter your name:", "");

    if (name != "" && name != null) {
      setCookie("cname2", name, exdays);
    }
  }
}