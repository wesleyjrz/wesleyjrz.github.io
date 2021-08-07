// Get the date information
var getdate = new Date();

function loadTheme(theme) {
    /*
    1 = Load Day Theme
    2 = Load Night Theme
    */

    // Icons and Images to invert colours
    let profileIcon = document.querySelector('img#W');
    let githubIcon = document.querySelector('img#github');
    let mailIcon = document.querySelector('img#email');
    let facebookIcon = document.querySelector('img#facebook');
    let discordIcon = document.querySelector('img#discord');

    if (theme == 1) {
        // Day Mode
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#0a0a0a';
        profileIcon.src = '../img/perfil_black.png';
        githubIcon.src = '../img/github_black.png';
        mailIcon.src = '../img/mail_black.png';
        facebookIcon.src = '../img/facebook_black.png';
        discordIcon.querySelector('img#discord').src = '../img/discord_black.png';
    } else {
        // Night Mode
        document.body.style.backgroundColor = '#0a0a0a';
        document.body.style.color = '#ffffff';
        profileIcon.src = '../img/perfil_white.png';
        githubIcon.src = '../img/github_white.png';
        mailIcon.src = '../img/mail_white.png';
        facebookIcon.src = '../img/facebook_white.png';
        discordIcon.src = '../img/discord_white.png';
    }
}

function theme(mode) {
    /*
    0 = Auto Day-Night Mode (Default)
    1 = Day Mode
    2 = Night Mode
    */

    if (mode == 0) {
        // Get hours from the user
        let hours = getdate.getHours();

        if (hours > 18 || hours < 6) {
            loadTheme(2);
        } else {
            loadTheme(1);
        }
    } else if (mode == 1) {
        loadTheme(1);
    } else {
        loadTheme(2);
    }
}

// function autoQuoteLoad() {
//     // Get day from the user
//     // let day = getdate.getDay();
//     let day = 0;
//     let quote = document.querySelector('div#quote');
//
//     // Auto change quote system
//     switch (day) {
//         case 0:
//           quote.innerText = 'Test';
//           break;
//         default:
//           alert('Error: Quote can\'t load!');
//
//     }
// }
