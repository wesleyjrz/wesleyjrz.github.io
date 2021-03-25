function load() {
    var perfil = document.querySelector('img#w')
    var clock = document.querySelector('p#clock')
    var date = new Date()
    var hours = date.getHours()
    clock.innerHTML = hours
}