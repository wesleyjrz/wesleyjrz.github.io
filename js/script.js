function load() {
    var perfil = document.querySelector('img#W')
    var github = document.querySelector('img#github')
    var twitter = document.querySelector('img#twitter')
    var facebook = document.querySelector('img#facebook')
    var presentation_box = document.querySelector('article#about-me')
    var date = new Date()
    var hours = date.getHours()

    if (hours > 18 || hours < 6) { // Night Mode.
        document.body.style.backgroundColor = '#0a0a0a'
        document.body.style.color = '#ffffff'
        perfil.src = '/img/perfil_white.png'
        github.src = '/img/github_white.png'
        twitter.src = '/img/twitter_white.png'
        facebook.src = '/img/facebook_white.png'
    } else { // Day Mode.
        document.body.style.backgroundColor = '#ffffff'
        document.body.style.color = '#0a0a0a'
        presentation_box.style.color = '#ffffff'
        perfil.src = '/img/perfil_black.png'
        github.src = '/img/github_black.png'
        twitter.src = '/img/twitter_black.png'
        facebook.src = '/img/facebook_black.png'
    }
}