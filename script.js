function load() {
    var perfil = document.querySelector('img#w')
    var date = new Date()
    var hours = date.getHours()
    // Auto Dark Mode System.
    if (hours > 18 && hours > 6) {
        document.body.style.backgroundColor = "#0a0a0a"
        document.body.style.color = "#ffffff"
        perfil.src = "perfil_dark.png"
    } else {
        document.body.style.backgroundColor = "#ffffff"
        document.body.style.color = "#0a0a0a"
        perfil.src = "perfil_white.png"
    }
}