const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

// Buton
const baslatButonu = document.querySelector("#baslat");

let dur = false;

baslatButonu.addEventListener("click", () => {
  dakika.textContent = 05;
  baslatButonu.remove();
});

baslatButonu.addEventListener("click", startTimer);

function stopTimer() {
    dur = true;
}

function startTimer() {
  let dk = dakika.textContent;
  let sn = saniye.textContent;

  const interval = setInterval(() => {
    sn--;
    sn = sn < 10 ? "0" + sn : sn;
    if (sn == "0-1") {
      dk--;
      sn = 59;
    }
    if ((dk == 00 && sn == 00) || (dk == 0 && sn == 0)) {
      clearInterval(interval);
      window.alert("Süre doldu");
    }
    if (dur) {
      clearInterval(interval);
      return;
    }

    dakika.textContent = dk;
    saniye.textContent = sn;
  }, 1000);
}
