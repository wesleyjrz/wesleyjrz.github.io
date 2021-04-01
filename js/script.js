function load() {
    var perfil = document.querySelector('img#W')
    var github = document.querySelector('img#github')
    var twitter = document.querySelector('img#twitter')
    var facebook = document.querySelector('img#facebook')
    var date = new Date()
    var hours = date.getHours()

    // Auto Dark Mode System.
    if (hours > 18 || hours < 6) {
        document.body.style.backgroundColor = "#0a0a0a"
        document.body.style.color = "#ffffff"
        perfil.src = "/img/perfil_white.png"
        github.src = "/img/github_white.png"
        twitter.src = "/img/twitter_white.png"
        facebook.src = "/img/facebook_white.png"
    } else {
        document.body.style.backgroundColor = "#ffffff"
        document.body.style.color = "#0a0a0a"
        perfil.src = "/img/perfil_black.png"
        github.src = "/img/github_black.png"
        twitter.src = "/img/twitter_black.png"
        facebook.src = "/img/facebook_black.png"
    }
}