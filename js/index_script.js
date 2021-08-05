var getdate = new Date();

function load() {
    // let hours = getdate.getHours();
    let hours = 19

    if (hours > 18 || hours < 6) { // Night Mode
        document.body.style.backgroundColor = '#0a0a0a';
        document.body.style.color = '#ffffff';
        document.querySelector('img#W').src = '../img/perfil_white.png';
        document.querySelector('img#github').src = '../img/github_white.png';
        document.querySelector('img#email').src = '../img/mail_white.png';
        document.querySelector('img#facebook').src = '../img/facebook_white.png';
        document.querySelector('img#discord').src = '../img/discord_white.png';
    } else { // Day Mode
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#0a0a0a';
        document.querySelector('img#W').src = '../img/perfil_black.png';
        document.querySelector('img#github').src = '../img/github_black.png';
        document.querySelector('img#email').src = '../img/mail_black.png';
        document.querySelector('img#facebook').src = '../img/facebook_black.png';
        document.querySelector('img#discord').src = '../img/discord_black.png';
        document.querySelector('article#about-me').style.color = '#ffffff';
    }
}
