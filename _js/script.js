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
        perfil.src = "_img/perfil_white.png"
        github.src = "_img/github_white.png"
        twitter.src = "_img/twitter_white.png"
        facebook.src = "_img/facebook_white.png"
    } else {
        document.body.style.backgroundColor = "#ffffff"
        document.body.style.color = "#0a0a0a"
        perfil.src = "_img/perfil_black.png"
        github.src = "_img/github_black.png"
        twitter.src = "_img/twitter_black.png"
        facebook.src = "_img/facebook_black.png"
    }
}