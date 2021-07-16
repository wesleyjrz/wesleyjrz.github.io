var getdate = new Date();

function load() {
    let hours = getdate.getHours();

    if (hours > 18 || hours < 6) { // Night Mode
        document.body.style.backgroundColor = '#0a0a0a';
        document.body.style.color = '#ffffff';
        document.querySelector('img#W').src = '../img/perfil-white.png';
        document.querySelector('img#github').src = '../img/github-white.png';
        document.querySelector('img#email').src = '../img/envelope-white.png';
        document.querySelector('img#facebook').src = '../img/facebook-white.png';
    } else { // Day Mode
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#0a0a0a';
        document.querySelector('img#W').src = '../img/perfil-black.png';
        document.querySelector('img#github').src = '../img/github-black.png';
        document.querySelector('img#email').src = '../img/envelope-black.png';
        document.querySelector('img#facebook').src = '../img/facebook-black.png';
        document.querySelector('article#about-me').style.color = '#ffffff';
    }
}