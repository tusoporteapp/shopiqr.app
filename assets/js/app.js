function onScanSuccess(decodedText, decodedResult) {
  if (isValidHttpUrl(decodedText) == true) {
    var myModal = new bootstrap.Modal(document.getElementById("myModal"));

    var myModalEl = document.getElementById("myModal");

    myModalEl.addEventListener("show.bs.modal", function (event) {
      var button = myModalEl.querySelector("#visitLink");
      var message = myModalEl.querySelector("#message");
      button.setAttribute("href", decodedText);
      message.innerHTML = "ScanQR ha encontrado este QR: \n <b>" + decodedText + "</b>";
    });

    myModal.show();
  } else {
    var myModal = new bootstrap.Modal(document.getElementById("myModal"));

    var myModalEl = document.getElementById("myModal");

    myModalEl.addEventListener("show.bs.modal", function (event) {
      var button = myModalEl.querySelector("#visitLink");
      var message = myModalEl.querySelector("#message");
      button.remove();
      message.innerHTML = "Este codigo QR no tiene URL";
    });

    myModal.show();
  }
}

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  fps: 20,
  qrbox: 250,
});

html5QrcodeScanner.render(onScanSuccess);
