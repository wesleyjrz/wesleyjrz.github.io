function theme(mode) {
  /*
  This function loads Dark or Light mode
  0 = Automatic
  1 = Light Theme
  2 = Dark Theme
  */
  document.getElementById('tswitch').addEventListener('click', function() {
    if (mode == 1) {
      theme(2);
    } else {
      theme(1);
    }
  });

  if (mode == 0) {
    // Auto Mode
    autoTheme(true);
  } else if (mode == 1) {
    autoTheme(false);
    changeColour(1);
  } else if (mode == 2) {
    autoTheme(false);
    changeColour(2);
  }
}

function autoTheme(bool) {
  // This function selects the theme based on hours (6 AM - 6 PM = Light) (7 PM - 5 AM = Dark)
  let getdate = new Date();

  if (bool == true) {
    let hours = getdate.getHours();

    if (hours > 18 || hours < 6) {
      theme(2);
    } else {
      theme(1);
    }
  }
}

function changeColour(theme) {
  // Icons, Images and colours to change
  let profileIcon = document.querySelector('img#W');
  let githubIcon = document.querySelector('img#github');
  let mailIcon = document.querySelector('img#email');
  let facebookIcon = document.querySelector('img#facebook');
  let discordIcon = document.querySelector('img#discord');

  if (theme == 1) {
    // Black
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#0a0a0a';
    profileIcon.src = '../img/profile_black.png';
    githubIcon.src = '../img/github_black.png';
    mailIcon.src = '../img/mail_black.png';
    facebookIcon.src = '../img/facebook_black.png';
    discordIcon.src = '../img/discord_black.png';
  } else if (theme == 2) {
    // White
    document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.color = '#ffffff';
    profileIcon.src = '../img/profile_white.png';
    githubIcon.src = '../img/github_white.png';
    mailIcon.src = '../img/mail_white.png';
    facebookIcon.src = '../img/facebook_white.png';
    discordIcon.src = '../img/discord_white.png';
  }
}
