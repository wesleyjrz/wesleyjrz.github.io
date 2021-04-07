function load() {
    var perfil = document.querySelector('img#W')
    var github = document.querySelector('img#github')
    var email = document.querySelector('img#email')
    var facebook = document.querySelector('img#facebook')
    var date = new Date()
    var hours = date.getHours()

    if (hours > 18 || hours < 6) { // Night Mode
        document.body.style.backgroundColor = '#0a0a0a'
        document.body.style.color = '#ffffff'
        perfil.src = '../img/perfil-white.png'
        github.src = '../img/github-white.png'
        email.src = '../img/envelope-white.png'
        facebook.src = '../img/facebook-white.png'
    } else { // Day Mode
        document.body.style.backgroundColor = '#ffffff'
        document.body.style.color = '#0a0a0a'
        perfil.src = '../img/perfil-black.png'
        github.src = '../img/github-black.png'
        email.src = '../img/envelope-black.png'
        facebook.src = '../img/facebook-black.png'
    }
}