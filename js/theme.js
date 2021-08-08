function theme(mode) {
    /*
    This function loads Dark or Light mode
    0 = Auto
    1 = Light Theme
    2 = Dark Theme
    */

    // Icons and Images to change
    let profileIcon = document.querySelector('img#W');
    let githubIcon = document.querySelector('img#github');
    let mailIcon = document.querySelector('img#email');
    let facebookIcon = document.querySelector('img#facebook');
    let discordIcon = document.querySelector('img#discord');

    if (mode == 0) {
        // Auto Mode
        autoTheme(true);
    } else if (mode == 1) {
        // Day Mode
        autoTheme(false);
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#0a0a0a';
        profileIcon.src = '../img/perfil_black.png';
        githubIcon.src = '../img/github_black.png';
        mailIcon.src = '../img/mail_black.png';
        facebookIcon.src = '../img/facebook_black.png';
        discordIcon.src = '../img/discord_black.png';
    } else if (mode == 2) {
        // Night Mode
        autoTheme(false);
        document.body.style.backgroundColor = '#0a0a0a';
        document.body.style.color = '#ffffff';
        profileIcon.src = '../img/perfil_white.png';
        githubIcon.src = '../img/github_white.png';
        mailIcon.src = '../img/mail_white.png';
        facebookIcon.src = '../img/facebook_white.png';
        discordIcon.src = '../img/discord_white.png';
    }
}

// This function turns automatic theme mode on/off
function autoTheme(bool) {
    // Get the date information
    let getdate = new Date();

    // Auto theme selector
    if (bool == true) {
        // Get hours from the user
        let hours = getdate.getHours();

        if (hours > 18 || hours < 6) {
            theme(2);
        } else {
            theme(1);
        }
    }
}
