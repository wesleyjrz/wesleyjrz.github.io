function theme(mode) {
  /*
  This function loads Dark or Light mode
  0 = Automatic
  1 = Light Theme
  2 = Dark Theme
  */

  /* Theme Switcher Listener
  document.getElementById("tswitch").addEventListener("click", function () {
    if (mode == 1) {
      theme(2);
    } else {
      theme(1);
    }
  });
  */

  if (mode == 0) {
    // Auto Mode
    autoTheme(true);
  } else if (mode == 1) {
    autoTheme(false);
    changeElements(1);
  } else if (mode == 2) {
    autoTheme(false);
    changeElements(2);
  }
}

function autoTheme(bool) {
  // This function selects the theme based on hours (6 AM - 6 PM = Light) (7 PM - 5 AM = Dark)
  let getdate = new Date();

  if (bool == true) {
    let hours = getdate.getHours();

    if (hours > 18 || hours < 6) {
      changeElements(2);
    } else {
      changeElements(1);
    }
  }
}

function changeElements(theme) {
  // Icons, Images and colours to change
  let profile = document.querySelector("img#W");
  let textTheme = document.querySelector("p#textTheme");
  let icons = document.querySelectorAll(".black-svg");

  if (theme == 1) {
    // Black
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#0a0a0a";
    profile.src = "../img/profile_black.png";
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.remove("filter-white");
    }

    /* Theme Switcher Text
    if (document.documentElement.lang === "pt-BR") {
      textTheme.innerText = "Modo escuro";
    } else {
      textTheme.innerText = "Dark mode";
    }
    */
  } else if (theme == 2) {
    // White
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#ffffff";
    profile.src = "../img/profile_white.png";
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.add("filter-white");
    }

    /* Theme Switcher Text
    if (document.documentElement.lang === "pt-BR") {
      textTheme.innerText = "Modo claro";
    } else {
      textTheme.innerText = "Light mode";
    }
    */
  }
}
